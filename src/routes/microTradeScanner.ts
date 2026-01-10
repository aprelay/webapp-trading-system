/**
 * Micro Trade Scanner Route
 * 
 * High-frequency 5-minute trading signals
 * Target: 30-35 signals per day
 * Min Confidence: 60%
 * Runs every 5 minutes via cron
 */

import { Hono } from 'hono'
import type { D1Database } from '@cloudflare/workers-types'
import { calculateIndicators, generateSignalWithLiquidity, type Candle } from '../lib/technicalAnalysis'
import { generateMicroTradeSignal, type MicroTradeSetup } from '../lib/microTradeAnalysis'
import { calculateLiquidityScore } from '../lib/liquidityAnalysis'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * Check daily limits to avoid overtrading
 */
async function checkDailyLimits(DB: D1Database): Promise<{
  allowed: boolean
  reason?: string
  signals_sent_today: number
  max_signals: number
}> {
  const today = new Date().toISOString().split('T')[0]
  
  // Get or create today's limits
  let limits = await DB.prepare(`
    SELECT * FROM micro_trade_limits WHERE date = ?
  `).bind(today).first() as any
  
  if (!limits) {
    await DB.prepare(`
      INSERT INTO micro_trade_limits (date, signals_sent_today, consecutive_losses, daily_pnl_pips)
      VALUES (?, 0, 0, 0)
    `).bind(today).run()
    
    limits = { signals_sent_today: 0, consecutive_losses: 0, daily_pnl_pips: 0, paused_until: null }
  }
  
  const maxSignalsPerDay = 35
  
  // Check if paused
  if (limits.paused_until) {
    const pausedUntil = new Date(limits.paused_until)
    if (pausedUntil > new Date()) {
      return {
        allowed: false,
        reason: `System paused until ${pausedUntil.toISOString()} - ${limits.pause_reason}`,
        signals_sent_today: limits.signals_sent_today,
        max_signals: maxSignalsPerDay
      }
    }
  }
  
  // Check max signals limit
  if (limits.signals_sent_today >= maxSignalsPerDay) {
    return {
      allowed: false,
      reason: `Daily limit reached (${maxSignalsPerDay} signals)`,
      signals_sent_today: limits.signals_sent_today,
      max_signals: maxSignalsPerDay
    }
  }
  
  // Check consecutive losses (pause after 5)
  if (limits.consecutive_losses >= 5) {
    const pauseUntil = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
    await DB.prepare(`
      UPDATE micro_trade_limits 
      SET paused_until = ?, pause_reason = ?, updated_at = datetime('now')
      WHERE date = ?
    `).bind(pauseUntil.toISOString(), '5 consecutive losses', today).run()
    
    return {
      allowed: false,
      reason: '5 consecutive losses - paused for 1 hour',
      signals_sent_today: limits.signals_sent_today,
      max_signals: maxSignalsPerDay
    }
  }
  
  // Check daily loss limit (-80 pips)
  if (limits.daily_pnl_pips <= -80) {
    const pauseUntil = new Date()
    pauseUntil.setUTCHours(23, 59, 59, 999) // Pause until end of day
    
    await DB.prepare(`
      UPDATE micro_trade_limits 
      SET paused_until = ?, pause_reason = ?, updated_at = datetime('now')
      WHERE date = ?
    `).bind(pauseUntil.toISOString(), 'Daily loss limit (-80 pips)', today).run()
    
    return {
      allowed: false,
      reason: 'Daily loss limit reached (-80 pips)',
      signals_sent_today: limits.signals_sent_today,
      max_signals: maxSignalsPerDay
    }
  }
  
  return {
    allowed: true,
    signals_sent_today: limits.signals_sent_today,
    max_signals: maxSignalsPerDay
  }
}

/**
 * Calculate position sizing based on liquidity, confidence, and setup type
 */
function calculateMicroPositionSize(
  signal: MicroTradeSetup,
  liquidityScore: number,
  optimalForTrading: boolean
): {
  multiplier: number
  lots: number
  value: number
  risk_amount: number
  risk_percent: number
} {
  const basePosition = 1000 // $1,000 per trade
  
  // Liquidity multiplier
  const liquidityMultiplier =
    liquidityScore >= 80 ? 1.0 :
    liquidityScore >= 70 ? 0.9 :
    liquidityScore >= 60 ? 0.7 : 0.5
  
  // Confidence multiplier
  const confidenceMultiplier =
    signal.confidence >= 75 ? 1.0 :
    signal.confidence >= 70 ? 0.9 :
    signal.confidence >= 65 ? 0.8 : 0.7
  
  // Setup type multiplier
  const setupMultipliers: Record<string, number> = {
    'BREAKOUT': 1.0,
    'CONTINUATION': 0.95,
    'PATTERN': 0.90,
    'REVERSAL': 0.80,
    'BOUNCE': 0.75
  }
  const setupMultiplier = setupMultipliers[signal.setup_type] || 0.7
  
  // Final multiplier
  const totalMultiplier = liquidityMultiplier * confidenceMultiplier * setupMultiplier
  
  // Calculate position
  const positionValue = basePosition * totalMultiplier
  const lots = (positionValue / 1000) * 0.1 // Rough conversion to lots
  
  // Calculate risk
  const pipValue = 0.01 // $0.01 per pip for 0.01 lots on XAU/USD
  const stopLossPips = Math.abs(signal.price - signal.stop_loss) / signal.price * 10000
  const riskAmount = stopLossPips * pipValue * lots * 100
  const riskPercent = (riskAmount / 10000) * 100 // Assuming $10,000 account
  
  return {
    multiplier: totalMultiplier,
    lots: Number(lots.toFixed(2)),
    value: Number(positionValue.toFixed(0)),
    risk_amount: Number(riskAmount.toFixed(2)),
    risk_percent: Number(riskPercent.toFixed(2))
  }
}

/**
 * Format compact Telegram alert for micro trades
 */
function formatMicroTradeAlert(
  signal: MicroTradeSetup,
  liquidityScore: number,
  session: string,
  volumeTrend: string,
  volumePercentile: number,
  estimatedSpread: number,
  positionSize: ReturnType<typeof calculateMicroPositionSize>,
  signalNumber: number
): string {
  const emoji = signal.signal_type === 'BUY' ? '🟢' : '🔴'
  const setupEmoji = {
    'BREAKOUT': '📈',
    'CONTINUATION': '➡️',
    'REVERSAL': '🔄',
    'BOUNCE': '⚡',
    'PATTERN': '📊'
  }[signal.setup_type] || '📍'
  
  const liquidityEmoji = liquidityScore >= 75 ? '🟢' : liquidityScore >= 60 ? '🟡' : '🔴'
  const confidenceEmoji = signal.confidence >= 75 ? '⭐⭐⭐' : signal.confidence >= 70 ? '⭐⭐' : signal.confidence >= 65 ? '⭐' : ''
  
  const stopPips = Math.abs(signal.price - signal.stop_loss) / signal.price * 10000
  const tp1Pips = Math.abs(signal.take_profit_1 - signal.price) / signal.price * 10000
  const rrRatio = tp1Pips / stopPips
  
  const now = new Date()
  const timeStr = `${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')} UTC`
  
  let message = `${emoji} <b>MICRO TRADE #${signalNumber}</b> ${setupEmoji}\n\n`
  message += `<b>${signal.signal_type}</b> XAU/USD | ${signal.confidence.toFixed(0)}% ${confidenceEmoji}\n`
  message += `Setup: ${signal.setup_type} ${signal.trend_5m === 'BULLISH' ? '📈' : signal.trend_5m === 'BEARISH' ? '📉' : '➡️'}\n\n`
  
  message += `💰 <b>Entry:</b> $${signal.price.toFixed(2)} (NOW!)\n`
  message += `🛡️ <b>Stop:</b> $${signal.stop_loss.toFixed(2)} (-${stopPips.toFixed(0)} pips)\n`
  message += `🎯 <b>TP1:</b> $${signal.take_profit_1.toFixed(2)} (+${tp1Pips.toFixed(0)} pips) - Take 50%\n`
  message += `🎯 <b>TP2:</b> $${signal.take_profit_2.toFixed(2)} - Take 30%\n`
  message += `🎯 <b>TP3:</b> $${signal.take_profit_3.toFixed(2)} - Trail rest\n\n`
  
  message += `💧 Liquidity: ${liquidityEmoji} ${liquidityScore}/100 | ${session}\n`
  message += `📊 Volume: ${volumeTrend} (${volumePercentile}%ile)\n`
  message += `💰 Spread: ~${estimatedSpread} pips | R:R 1:${rrRatio.toFixed(1)}\n\n`
  
  const posEmoji = positionSize.multiplier >= 0.9 ? '🟢' : positionSize.multiplier >= 0.7 ? '🟡' : '🔴'
  message += `${posEmoji} <b>Position:</b> ${positionSize.lots} lots ($${positionSize.value})\n`
  message += `⚠️ <b>Risk:</b> $${positionSize.risk_amount} (${positionSize.risk_percent}%)\n\n`
  
  message += `⏱️ <b>Valid:</b> 15 minutes\n`
  message += `⚡ <b>Execute immediately!</b>\n\n`
  
  message += `━━━━━━━━━━━━━━━━━━━━\n`
  message += `${signal.reason}\n\n`
  message += `Signal #${signalNumber} | ${timeStr}`
  
  return message
}

/**
 * Main Micro Trade Scanner - runs every 5 minutes
 */
app.get('/scan', async (c) => {
  const { DB } = c.env
  const results: any = { success: false, message: '', data: {} }
  
  try {
    console.log('[MICRO] Starting 5-minute scan...')
    
    // Step 1: Check daily limits
    const limitsCheck = await checkDailyLimits(DB)
    if (!limitsCheck.allowed) {
      console.log('[MICRO] Daily limit check failed:', limitsCheck.reason)
      results.message = limitsCheck.reason
      results.data = {
        signals_sent_today: limitsCheck.signals_sent_today,
        max_signals: limitsCheck.max_signals
      }
      return c.json(results)
    }
    
    console.log(`[MICRO] Daily limit check passed: ${limitsCheck.signals_sent_today}/${limitsCheck.max_signals} signals sent`)
    
    // Step 2: Fetch 5-minute candles (last 50)
    const candles5m = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all()
    
    if (!candles5m.results || candles5m.results.length < 20) {
      results.message = 'Insufficient 5m candle data'
      return c.json(results)
    }
    
    const formatted5m: Candle[] = (candles5m.results as any[]).map(c => ({
      timestamp: c.timestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume || 1
    })).reverse()
    
    // Step 3: Fetch 15-minute candles for confirmation (need at least 50 for indicators)
    const candles15m = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 60
    `).all()
    
    if (!candles15m.results || candles15m.results.length < 50) {
      results.message = `Insufficient 15m candle data (have ${candles15m.results?.length || 0}, need 50)`
      return c.json(results)
    }
    
    const formatted15m: Candle[] = (candles15m.results as any[]).map(c => ({
      timestamp: c.timestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume || 1
    })).reverse()
    
    // Step 4: Calculate indicators
    const indicators5m = calculateIndicators(formatted5m)
    const indicators15m = calculateIndicators(formatted15m)
    
    if (!indicators5m) {
      console.error('[MICRO] Failed to calculate 5m indicators - data length:', formatted5m.length)
      results.message = 'Failed to calculate 5m indicators'
      results.data = { candles5m_count: formatted5m.length, first_candle: formatted5m[0], last_candle: formatted5m[formatted5m.length - 1] }
      return c.json(results)
    }
    
    if (!indicators15m) {
      console.error('[MICRO] Failed to calculate 15m indicators - data length:', formatted15m.length)
      results.message = 'Failed to calculate 15m indicators'
      results.data = { candles15m_count: formatted15m.length }
      return c.json(results)
    }
    
    const currentPrice = formatted5m[formatted5m.length - 1].close
    
    // Step 5: Generate micro trade signal
    const microSignal = generateMicroTradeSignal(
      formatted5m,
      indicators5m,
      formatted15m,
      indicators15m
    )
    
    if (!microSignal) {
      console.log('[MICRO] No valid setup detected')
      results.success = true
      results.message = 'No signal - waiting for setup'
      results.data = { currentPrice }
      return c.json(results)
    }
    
    console.log(`[MICRO] Signal detected: ${microSignal.signal_type} ${microSignal.setup_type} (${microSignal.confidence}%)`)
    
    // Step 6: Check confidence threshold (60%)
    if (microSignal.confidence < 60) {
      console.log(`[MICRO] Confidence too low: ${microSignal.confidence}%`)
      results.success = true
      results.message = `Signal below threshold (${microSignal.confidence}% < 60%)`
      results.data = { signal: microSignal }
      return c.json(results)
    }
    
    // Step 7: Calculate liquidity score
    const liquidityMetrics = calculateLiquidityScore(formatted5m)
    
    // Step 8: Filter by minimum liquidity (60)
    if (liquidityMetrics.liquidity_score < 60) {
      console.log(`[MICRO] Liquidity too low: ${liquidityMetrics.liquidity_score}`)
      results.success = true
      results.message = `Low liquidity (${liquidityMetrics.liquidity_score} < 60)`
      results.data = { signal: microSignal, liquidity: liquidityMetrics }
      return c.json(results)
    }
    
    // Step 9: Calculate position sizing
    const positionSize = calculateMicroPositionSize(
      microSignal,
      liquidityMetrics.liquidity_score,
      liquidityMetrics.optimal_for_trading
    )
    
    // Step 10: Calculate signal expiration (15 minutes from now)
    const validUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString()
    
    // Step 11: Get today's signal count for numbering
    const today = new Date().toISOString().split('T')[0]
    const todayCount = await DB.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = ?
    `).bind(today).first() as any
    
    const signalNumber = (todayCount?.count || 0) + 1
    
    // Step 12: Save to database
    await DB.prepare(`
      INSERT INTO micro_trade_signals (
        timestamp, signal_type, price, stop_loss,
        take_profit_1, take_profit_2, take_profit_3, confidence,
        setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, macd_histogram_5m, adx_5m,
        stochastic_k_5m, stochastic_d_5m, ema_20_5m, volume_5m,
        liquidity_score, session, time_zone, volume_trend, volume_percentile,
        estimated_spread_pips, price_impact_bps, market_depth_score, optimal_for_trading,
        position_size_multiplier, recommended_position_lots, risk_amount, risk_percent,
        status, telegram_sent, valid_until, reason
      ) VALUES (
        datetime('now'), ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        'active', 0, ?, ?
      )
    `).bind(
      microSignal.signal_type, microSignal.price, microSignal.stop_loss,
      microSignal.take_profit_1, microSignal.take_profit_2, microSignal.take_profit_3, microSignal.confidence,
      microSignal.setup_type, microSignal.trend_5m, microSignal.trend_15m,
      microSignal.indicators_5m.rsi, microSignal.indicators_5m.macd, microSignal.indicators_5m.macd_signal, 
      microSignal.indicators_5m.macd_histogram, microSignal.indicators_5m.adx,
      microSignal.indicators_5m.stochastic_k, microSignal.indicators_5m.stochastic_d,
      microSignal.indicators_5m.ema_20, microSignal.indicators_5m.volume,
      liquidityMetrics.liquidity_score, liquidityMetrics.session, liquidityMetrics.time_zone,
      liquidityMetrics.volume_trend, liquidityMetrics.volume_percentile,
      liquidityMetrics.estimated_spread_pips, liquidityMetrics.price_impact_bps,
      liquidityMetrics.market_depth_score, liquidityMetrics.optimal_for_trading ? 1 : 0,
      positionSize.multiplier, positionSize.lots, positionSize.risk_amount, positionSize.risk_percent,
      validUntil, microSignal.reason
    ).run()
    
    console.log('[MICRO] Signal saved to database')
    
    // Step 13: Send to Telegram
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all()
    
    const config: any = {}
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value
    }
    
    let telegramSent = false
    if (config.telegram_bot_token && config.telegram_chat_id) {
      const message = formatMicroTradeAlert(
        microSignal,
        liquidityMetrics.liquidity_score,
        liquidityMetrics.session,
        liquidityMetrics.volume_trend,
        liquidityMetrics.volume_percentile,
        liquidityMetrics.estimated_spread_pips,
        positionSize,
        signalNumber
      )
      
      telegramSent = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        message
      )
      
      if (telegramSent) {
        // Update telegram_sent flag
        await DB.prepare(`
          UPDATE micro_trade_signals 
          SET telegram_sent = 1 
          WHERE id = (SELECT MAX(id) FROM micro_trade_signals)
        `).run()
        
        // Update daily limits
        await DB.prepare(`
          UPDATE micro_trade_limits 
          SET signals_sent_today = signals_sent_today + 1,
              last_signal_time = datetime('now'),
              updated_at = datetime('now')
          WHERE date = ?
        `).bind(today).run()
        
        // Update daily stats
        await DB.prepare(`
          INSERT INTO micro_trade_daily_stats (
            date, total_signals, signals_sent,
            signals_buy, signals_sell, avg_confidence, avg_liquidity_score,
            session_asia, session_london, session_ny, session_overlap,
            setup_breakout, setup_continuation, setup_reversal, setup_bounce, setup_pattern
          ) VALUES (?, 1, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(date) DO UPDATE SET
            total_signals = total_signals + 1,
            signals_sent = signals_sent + 1,
            signals_buy = signals_buy + excluded.signals_buy,
            signals_sell = signals_sell + excluded.signals_sell,
            avg_confidence = ((avg_confidence * total_signals) + excluded.avg_confidence) / (total_signals + 1),
            avg_liquidity_score = ((avg_liquidity_score * total_signals) + excluded.avg_liquidity_score) / (total_signals + 1),
            session_asia = session_asia + excluded.session_asia,
            session_london = session_london + excluded.session_london,
            session_ny = session_ny + excluded.session_ny,
            session_overlap = session_overlap + excluded.session_overlap,
            setup_breakout = setup_breakout + excluded.setup_breakout,
            setup_continuation = setup_continuation + excluded.setup_continuation,
            setup_reversal = setup_reversal + excluded.setup_reversal,
            setup_bounce = setup_bounce + excluded.setup_bounce,
            setup_pattern = setup_pattern + excluded.setup_pattern,
            updated_at = datetime('now')
        `).bind(
          today,
          microSignal.signal_type === 'BUY' ? 1 : 0,
          microSignal.signal_type === 'SELL' ? 1 : 0,
          microSignal.confidence,
          liquidityMetrics.liquidity_score,
          liquidityMetrics.session === 'ASIA' ? 1 : 0,
          liquidityMetrics.session === 'LONDON' ? 1 : 0,
          liquidityMetrics.session === 'NEW_YORK' ? 1 : 0,
          liquidityMetrics.session === 'OVERLAP' ? 1 : 0,
          microSignal.setup_type === 'BREAKOUT' ? 1 : 0,
          microSignal.setup_type === 'CONTINUATION' ? 1 : 0,
          microSignal.setup_type === 'REVERSAL' ? 1 : 0,
          microSignal.setup_type === 'BOUNCE' ? 1 : 0,
          microSignal.setup_type === 'PATTERN' ? 1 : 0
        ).run()
        
        console.log('[MICRO] Telegram alert sent successfully')
      }
    }
    
    results.success = true
    results.message = telegramSent ? 'Signal generated and sent to Telegram' : 'Signal generated (Telegram not configured)'
    results.data = {
      signal: microSignal,
      liquidity: liquidityMetrics,
      position: positionSize,
      signalNumber,
      limitsCheck,
      telegramSent
    }
    
    return c.json(results)
    
  } catch (error: any) {
    console.error('[MICRO] Error:', error)
    results.message = error.message || 'Unknown error'
    return c.json(results, 500)
  }
})

/**
 * Get recent micro trade signals
 */
app.get('/signals/recent', async (c) => {
  const { DB } = c.env
  const limit = parseInt(c.req.query('limit') || '20')
  
  try {
    const signals = await DB.prepare(`
      SELECT * FROM micro_trade_signals 
      ORDER BY created_at DESC 
      LIMIT ?
    `).bind(limit).all()
    
    return c.json({
      success: true,
      signals: signals.results
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

/**
 * Get daily statistics
 */
app.get('/stats/daily', async (c) => {
  const { DB } = c.env
  const date = c.req.query('date') || new Date().toISOString().split('T')[0]
  
  try {
    const stats = await DB.prepare(`
      SELECT * FROM micro_trade_daily_stats WHERE date = ?
    `).bind(date).first()
    
    const limits = await DB.prepare(`
      SELECT * FROM micro_trade_limits WHERE date = ?
    `).bind(date).first()
    
    return c.json({
      success: true,
      date,
      stats: stats || null,
      limits: limits || null
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

/**
 * Debug endpoint - check what data is available
 */
app.get('/debug/data-check', async (c) => {
  const { DB } = c.env
  
  try {
    // Check 5m data
    const count5m = await DB.prepare(`
      SELECT COUNT(*) as count FROM market_data WHERE timeframe = '5m'
    `).first() as any
    
    const latest5m = await DB.prepare(`
      SELECT timestamp, close FROM market_data WHERE timeframe = '5m' ORDER BY timestamp DESC LIMIT 1
    `).first() as any
    
    // Check 15m data
    const count15m = await DB.prepare(`
      SELECT COUNT(*) as count FROM market_data WHERE timeframe = '15m'
    `).first() as any
    
    const latest15m = await DB.prepare(`
      SELECT timestamp, close FROM market_data WHERE timeframe = '15m' ORDER BY timestamp DESC LIMIT 1
    `).first() as any
    
    // Check all timeframes
    const allTimeframes = await DB.prepare(`
      SELECT timeframe, COUNT(*) as count, MAX(timestamp) as latest 
      FROM market_data 
      GROUP BY timeframe
      ORDER BY timeframe
    `).all()
    
    return c.json({
      success: true,
      data: {
        candles_5m: {
          count: count5m?.count || 0,
          latest: latest5m?.timestamp || null,
          price: latest5m?.close || null
        },
        candles_15m: {
          count: count15m?.count || 0,
          latest: latest15m?.timestamp || null,
          price: latest15m?.close || null
        },
        all_timeframes: allTimeframes.results || []
      }
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

/**
 * TEST Endpoint - Send sample micro trade alert to Telegram
 */
app.get('/test-alert', async (c) => {
  const { DB } = c.env
  
  try {
    // Get Telegram config
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all()
    
    const config: any = {}
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value
    }
    
    if (!config.telegram_bot_token || !config.telegram_chat_id) {
      return c.json({
        success: false,
        message: 'Telegram not configured',
        config: {
          hasToken: !!config.telegram_bot_token,
          hasChat: !!config.telegram_chat_id
        }
      }, 400)
    }
    
    // Create sample micro trade signal
    const sampleSignal: MicroTradeSetup = {
      signal_type: 'BUY',
      price: 4509.88,
      stop_loss: 4501.88,  // 8 pips
      take_profit_1: 4519.88,  // 10 pips
      take_profit_2: 4527.88,  // 18 pips
      take_profit_3: 4534.88,  // 25 pips
      confidence: 78.5,
      setup_type: 'BREAKOUT',
      trend_5m: 'BULLISH',
      trend_15m: 'BULLISH',
      indicators_5m: {
        rsi: 68.5,
        macd: 2.15,
        macd_signal: 1.85,
        macd_histogram: 0.30,
        adx: 32.8,
        stochastic_k: 75.2,
        stochastic_d: 72.8,
        ema_20: 4505.50,
        volume: 1250
      },
      reason: '📈 BREAKOUT Setup: Price broke above 15m resistance at $4508.50 with strong volume. 5m trend: BULLISH ✅, 15m trend: BULLISH ✅. RSI showing momentum (68.5), MACD bullish divergence, ADX confirming trend strength (32.8)'
    }
    
    const liquidityMetrics = {
      liquidity_score: 85,
      session: 'NEW_YORK',
      time_zone: 'HIGH',
      volume_trend: 'INCREASING',
      volume_percentile: 95,
      estimated_spread_pips: 25,
      price_impact_bps: 8,
      market_depth_score: 80,
      optimal_for_trading: true
    }
    
    const positionSize = {
      multiplier: 0.95,
      lots: 0.19,
      value: 950,
      risk_amount: 7.60,
      risk_percent: 0.08
    }
    
    // Format the alert
    const message = formatMicroTradeAlert(
      sampleSignal,
      liquidityMetrics.liquidity_score,
      liquidityMetrics.session,
      liquidityMetrics.volume_trend,
      liquidityMetrics.volume_percentile,
      liquidityMetrics.estimated_spread_pips,
      positionSize,
      999  // Test signal number
    )
    
    // Add TEST marker (using HTML format)
    const testMessage = `⚠️ <b>TEST ALERT - MARKET CLOSED (WEEKEND)</b> ⚠️\n\n${message}\n\n✅ This is a test alert to show you what micro-trade signals will look like.\n\n📅 Real signals will start appearing when market opens Monday.`
    
    // Send to Telegram
    const sent = await sendTelegramMessage(
      { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
      testMessage
    )
    
    if (sent) {
      return c.json({
        success: true,
        message: 'Test alert sent to Telegram successfully!',
        preview: testMessage,
        telegram_config: {
          hasToken: true,
          hasChat: true,
          chatId: config.telegram_chat_id
        }
      })
    } else {
      return c.json({
        success: false,
        message: 'Failed to send test alert to Telegram',
        preview: testMessage
      }, 500)
    }
    
  } catch (error: any) {
    console.error('[MICRO TEST] Error:', error)
    return c.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, 500)
  }
})

export default app
