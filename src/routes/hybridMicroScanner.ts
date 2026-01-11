/**
 * Hybrid Micro Trade Scanner
 * 
 * Integrates 10-filter grading system with micro trade scanner
 * Generates A+, A, and B grade signals with appropriate position sizing
 */

import { Hono } from 'hono'
import type { D1Database } from '@cloudflare/workers-types'
import { calculateIndicators, type Candle } from '../lib/technicalAnalysis'
import { generateMicroTradeSignal, type MicroTradeSetup } from '../lib/microTradeAnalysis'
import { gradeSignal, type HybridGradeResult } from '../lib/hybridFilters'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * Format Telegram alert with grade badge
 */
function formatHybridMicroAlert(
  signal: MicroTradeSetup,
  grade: HybridGradeResult,
  signalNumber: number,
  liquidityScore: number,
  session: string
): string {
  const emoji = signal.signal_type === 'BUY' ? '🟢' : '🔴'
  const gradeEmoji = {
    'A+': '💎',
    'A': '⭐',
    'B': '📊'
  }[grade.grade] || '📍'
  
  const setupEmoji = {
    'BREAKOUT': '📈',
    'CONTINUATION': '➡️',
    'REVERSAL': '🔄',
    'BOUNCE': '⚡',
    'PATTERN': '📊'
  }[signal.setup_type] || '📍'
  
  const stopPips = Math.abs(signal.price - signal.stop_loss) / signal.price * 10000
  const tp1Pips = Math.abs(signal.take_profit_1 - signal.price) / signal.price * 10000
  const rrRatio = tp1Pips / stopPips
  
  const now = new Date()
  const timeStr = `${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')} UTC`
  
  // Grade-specific header
  let header = ''
  if (grade.grade === 'A+') {
    header = `${gradeEmoji} <b>PREMIUM SIGNAL #${signalNumber}</b> ${gradeEmoji}\n<b>GRADE: A+ (TOP 10%)</b>\n\n`
  } else if (grade.grade === 'A') {
    header = `${gradeEmoji} <b>HIGH-QUALITY SIGNAL #${signalNumber}</b> ${gradeEmoji}\n<b>GRADE: A</b>\n\n`
  } else {
    header = `${gradeEmoji} <b>MICRO TRADE #${signalNumber}</b> ${setupEmoji}\n<b>GRADE: B</b>\n\n`
  }
  
  let message = header
  message += `${emoji} <b>${signal.signal_type}</b> XAU/USD | ${grade.confidence.toFixed(0)}%\n`
  message += `Setup: ${signal.setup_type} ${signal.trend_5m === 'BULLISH' ? '📈' : signal.trend_5m === 'BEARISH' ? '📉' : '➡️'}\n\n`
  
  message += `💰 <b>Entry:</b> $${signal.price.toFixed(2)} (NOW!)\n`
  message += `🛡️ <b>Stop:</b> $${signal.stop_loss.toFixed(2)} (-${stopPips.toFixed(0)} pips)\n`
  message += `🎯 <b>TP1:</b> $${signal.take_profit_1.toFixed(2)} (+${tp1Pips.toFixed(0)} pips) - Take 50%\n`
  message += `🎯 <b>TP2:</b> $${signal.take_profit_2.toFixed(2)} - Take 30%\n`
  message += `🎯 <b>TP3:</b> $${signal.take_profit_3.toFixed(2)} - Trail rest\n\n`
  
  // Position sizing with multiplier
  const basePosition = 1000
  const positionValue = basePosition * grade.positionMultiplier
  const lots = (positionValue / 1000) * 0.1
  const riskAmount = stopPips * 0.01 * lots * 100
  const riskPercent = (riskAmount / 10000) * 100
  
  const posEmoji = grade.positionMultiplier >= 1.5 ? '🟢🟢' : grade.positionMultiplier >= 0.9 ? '🟢' : '🟡'
  message += `${posEmoji} <b>Position:</b> ${lots.toFixed(2)} lots ($${positionValue}) [${grade.positionMultiplier}x]\n`
  message += `⚠️ <b>Risk:</b> $${riskAmount.toFixed(2)} (${riskPercent.toFixed(2)}%)\n\n`
  
  // Quality metrics
  message += `📊 <b>Quality Metrics:</b>\n`
  message += `   Filters Passed: ${grade.filtersPassed}/10\n`
  message += `   Liquidity: ${liquidityScore}/100 | ${session}\n`
  message += `   R:R Ratio: 1:${rrRatio.toFixed(1)}\n\n`
  
  message += `⏱️ <b>Valid:</b> 15 minutes\n`
  message += `⚡ <b>Execute immediately!</b>\n\n`
  
  message += `━━━━━━━━━━━━━━━━━━━━\n`
  message += `${signal.reason}\n\n`
  message += `Signal #${signalNumber} | ${timeStr}`
  
  return message
}

/**
 * Test Alert Endpoint - Send a sample Grade A hybrid signal
 */
app.get('/test-alert', async (c) => {
  const { DB } = c.env
  
  try {
    // Get current price from latest candle
    const latestCandle = await DB.prepare(`
      SELECT close FROM market_data 
      WHERE timeframe = '5m' 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first() as any
    
    const currentPrice = latestCandle?.close || 4509.82
    
    // Create sample Grade A signal
    const sampleSignal: MicroTradeSetup = {
      signal_type: 'BUY',
      price: currentPrice,
      stop_loss: currentPrice - 8.0,
      take_profit_1: currentPrice + 10.0,
      take_profit_2: currentPrice + 18.0,
      take_profit_3: currentPrice + 25.0,
      confidence: 78.5,
      setup_type: 'BREAKOUT',
      trend_5m: 'BULLISH',
      trend_15m: 'BULLISH',
      indicators_5m: {
        rsi: 68.5,
        macd: 2.15,
        macd_signal: 1.85,
        stochastic_k: 75.2,
        adx: 32.8
      },
      reason: 'TEST ALERT - Strong bullish breakout with Grade A quality (7/10 filters passed)'
    }
    
    // Sample Grade A results
    const gradeResult = {
      grade: 'A' as const,
      filtersPassed: 7,
      totalFilters: 10,
      positionMultiplier: 1.0,
      confidence: 78.5,
      filterResults: {}
    }
    
    // Get signal number
    const todaySignals = await DB.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = DATE('now')
    `).first() as any
    
    const signalNumber = (todaySignals?.count || 0) + 1
    
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
        error: 'Telegram not configured'
      })
    }
    
    // Send Telegram alert
    const message = formatHybridMicroAlert(
      sampleSignal,
      gradeResult,
      signalNumber,
      85, // liquidityScore
      'NEW_YORK' // session
    )
    
    const telegramSent = await sendTelegramMessage(
      {
        botToken: config.telegram_bot_token,
        chatId: config.telegram_chat_id
      },
      message
    )
    
    // Store in database
    await DB.prepare(`
      INSERT INTO micro_trade_signals (
        signal_type, price, stop_loss, 
        take_profit_1, take_profit_2, take_profit_3,
        confidence, setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, adx_5m, stochastic_k_5m,
        reason, grade, filters_passed, position_multiplier,
        telegram_sent, timestamp, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(
      sampleSignal.signal_type,
      sampleSignal.price,
      sampleSignal.stop_loss,
      sampleSignal.take_profit_1,
      sampleSignal.take_profit_2,
      sampleSignal.take_profit_3,
      gradeResult.confidence,
      sampleSignal.setup_type,
      sampleSignal.trend_5m,
      sampleSignal.trend_15m,
      sampleSignal.indicators_5m.rsi,
      sampleSignal.indicators_5m.macd,
      sampleSignal.indicators_5m.macd_signal,
      sampleSignal.indicators_5m.adx,
      sampleSignal.indicators_5m.stochastic_k,
      sampleSignal.reason,
      gradeResult.grade,
      gradeResult.filtersPassed,
      gradeResult.positionMultiplier,
      telegramSent ? 1 : 0
    ).run()
    
    return c.json({
      success: true,
      message: 'Test Grade A hybrid alert sent to Telegram and stored in database!',
      signal: {
        grade: gradeResult.grade,
        filters_passed: gradeResult.filtersPassed,
        confidence: gradeResult.confidence,
        position_multiplier: gradeResult.positionMultiplier,
        signal_type: sampleSignal.signal_type,
        entry: sampleSignal.price,
        stop_loss: sampleSignal.stop_loss,
        telegram_sent: telegramSent,
        signal_number: signalNumber
      }
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    })
  }
})

/**
 * Main Hybrid Micro Scanner Endpoint
 */
app.get('/scan', async (c) => {
  return handleScan(c);
});

// POST support for Cloudflare Cron Triggers
app.post('/scan', async (c) => {
  return handleScan(c);
});

// Shared handler function for both GET and POST
async function handleScan(c: any) {
  const { DB } = c.env
  const startTime = Date.now()
  
  try {
    console.log('[HYBRID-MICRO] Starting hybrid scan...')
    
    // Step 1: Fetch multi-timeframe data
    const mtfData: any = {}
    
    for (const tf of ['5m', '15m', '1h', '4h']) {
      const candles = await DB.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(tf).all()
      
      if (candles.results && candles.results.length >= 20) {
        const formatted: Candle[] = (candles.results as any[]).map(c => ({
          timestamp: c.timestamp,
          open: c.open,
          high: c.high,
          low: c.low,
          close: c.close,
          volume: c.volume || 1
        })).reverse()
        
        // Calculate indicators
        const indicators = await calculateIndicators(formatted)
        
        // Skip if indicators calculation failed
        if (!indicators) {
          console.log(`[HYBRID-MICRO] Skipping ${tf} - insufficient data for indicators`)
          continue
        }
        
        mtfData[tf] = {
          candles: formatted,
          indicators,
          trend: indicators.ema_20 > indicators.ema_50 ? 'BULLISH' : 'BEARISH'
        }
      }
    }
    
    if (!mtfData['5m'] || !mtfData['15m']) {
      return c.json({
        success: false,
        error: 'Insufficient data for hybrid analysis'
      })
    }
    
    // Step 2: Generate base micro signal
    const baseSignal = await generateMicroTradeSignal(
      mtfData['5m'].candles,
      mtfData['5m'].indicators,
      mtfData['15m'].candles,
      mtfData['15m'].indicators
    )
    
    if (!baseSignal) {
      return c.json({
        success: false,
        message: 'No micro trade setup detected'
      })
    }
    
    // Step 3: Grade the signal using hybrid filters
    const currentPrice = mtfData['5m'].candles[mtfData['5m'].candles.length - 1].close
    const indicators = mtfData['5m'].indicators
    
    // Validate indicators exist
    if (!indicators || !indicators.rsi_14) {
      return c.json({
        success: false,
        error: 'Technical indicators not available',
        debug: {
          hasIndicators: !!indicators,
          indicatorKeys: indicators ? Object.keys(indicators).slice(0, 5) : []
        }
      })
    }
    
    // Get ATR history for volatility filter
    const atrHistory = mtfData['5m'].candles.slice(-100).map((c: Candle, i: number, arr: Candle[]) => {
      if (i < 14) return 0
      const slice = arr.slice(Math.max(0, i - 14), i)
      const tr = slice.map((candle, idx) => {
        if (idx === 0) return candle.high - candle.low
        const prevClose = slice[idx - 1].close
        return Math.max(
          candle.high - candle.low,
          Math.abs(candle.high - prevClose),
          Math.abs(candle.low - prevClose)
        )
      })
      return tr.reduce((sum, val) => sum + val, 0) / tr.length
    }).filter(atr => atr > 0)
    
    const gradeResult = await gradeSignal(
      baseSignal.signal_type,
      currentPrice,
      mtfData['5m'].candles,
      indicators,
      mtfData,
      { atrHistory }
    )
    
    console.log(`[HYBRID-MICRO] Signal graded: ${gradeResult.grade} (${gradeResult.filtersPassed}/10 filters)`)
    
    // Step 4: Reject if grade is REJECT
    if (gradeResult.grade === 'REJECT') {
      return c.json({
        success: false,
        message: `Signal rejected (only ${gradeResult.filtersPassed}/10 filters passed)`,
        grade: gradeResult.grade,
        filters_passed: gradeResult.filtersPassed
      })
    }
    
    // Step 5: Get signal number
    const todaySignals = await DB.prepare(`
      SELECT COUNT(*) as count FROM micro_trade_signals 
      WHERE DATE(created_at) = DATE('now')
    `).first() as any
    
    const signalNumber = (todaySignals?.count || 0) + 1
    
    // Step 6: Store signal in database
    const signal: MicroTradeSetup = {
      ...baseSignal,
      confidence: gradeResult.confidence
    }
    
    await DB.prepare(`
      INSERT INTO micro_trade_signals (
        signal_type, price, stop_loss, 
        take_profit_1, take_profit_2, take_profit_3,
        confidence, setup_type, trend_5m, trend_15m,
        rsi_5m, macd_5m, macd_signal_5m, adx_5m, stochastic_k_5m,
        reason, grade, filters_passed, position_multiplier,
        telegram_sent, timestamp, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, datetime('now'), datetime('now'))
    `).bind(
      signal.signal_type,
      signal.price,
      signal.stop_loss,
      signal.take_profit_1,
      signal.take_profit_2,
      signal.take_profit_3,
      gradeResult.confidence,
      signal.setup_type,
      signal.trend_5m,
      signal.trend_15m,
      signal.indicators_5m?.rsi || 50,
      signal.indicators_5m?.macd || 0,
      signal.indicators_5m?.macd_signal || 0,
      signal.indicators_5m?.adx || 0,
      signal.indicators_5m?.stochastic_k || 50,
      signal.reason,
      gradeResult.grade,
      gradeResult.filtersPassed,
      gradeResult.positionMultiplier
    ).run()
    
    // Step 7: Send Telegram alert
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
      const message = formatHybridMicroAlert(
        signal,
        gradeResult,
        signalNumber,
        85,  // Simplified liquidity score
        'NEW_YORK'  // Simplified session
      )
      
      telegramSent = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        message
      )
      
      if (telegramSent) {
        await DB.prepare(`
          UPDATE micro_trade_signals 
          SET telegram_sent = 1
          WHERE id = (SELECT MAX(id) FROM micro_trade_signals)
        `).run()
      }
    }
    
    return c.json({
      success: true,
      message: `${gradeResult.grade}-grade signal generated and ${telegramSent ? 'sent' : 'saved'}`,
      signal: {
        ...signal,
        grade: gradeResult.grade,
        filters_passed: gradeResult.filtersPassed,
        position_multiplier: gradeResult.positionMultiplier
      },
      telegram_sent: telegramSent,
      execution_time_ms: Date.now() - startTime
    })
    
  } catch (error: any) {
    console.error('[HYBRID-MICRO] Error:', error)
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
}

/**
 * Get recent hybrid signals for dashboard
 */
app.get('/signals/recent', async (c) => {
  const { DB } = c.env
  const limit = parseInt(c.req.query('limit') || '10')
  
  try {
    const signals = await DB.prepare(`
      SELECT 
        id,
        signal_type,
        price,
        stop_loss,
        take_profit_1,
        take_profit_2,
        take_profit_3,
        confidence,
        setup_type,
        trend_5m,
        trend_15m,
        grade,
        filters_passed,
        position_multiplier,
        telegram_sent,
        timestamp,
        created_at
      FROM micro_trade_signals 
      WHERE grade IS NOT NULL
      ORDER BY created_at DESC 
      LIMIT ?
    `).bind(limit).all()
    
    return c.json({
      success: true,
      signals: signals.results || [],
      count: signals.results?.length || 0
    })
    
  } catch (error: any) {
    console.error('[HYBRID-MICRO] Error fetching signals:', error)
    return c.json({
      success: false,
      error: error.message,
      signals: []
    }, 500)
  }
})

/**
 * Get today's signal count for dashboard stats
 */
app.get('/signals/today', async (c) => {
  const { DB } = c.env
  const date = c.req.query('date') || new Date().toISOString().split('T')[0]
  
  try {
    // Count total signals for today
    const totalResult = await DB.prepare(`
      SELECT COUNT(*) as total
      FROM micro_trade_signals
      WHERE DATE(created_at) = ?
    `).bind(date).first()
    
    // Count signals sent to Telegram
    const sentResult = await DB.prepare(`
      SELECT COUNT(*) as sent
      FROM micro_trade_signals
      WHERE DATE(created_at) = ?
      AND telegram_sent = 1
    `).bind(date).first()
    
    return c.json({
      success: true,
      date,
      total: (totalResult as any)?.total || 0,
      telegram_sent: (sentResult as any)?.sent || 0
    })
  } catch (error: any) {
    console.error('[HYBRID-MICRO] Error fetching today stats:', error)
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * Test hybrid system
 */
app.get('/test', async (c) => {
  const { DB } = c.env
  
  try {
    // Get recent data
    const candles5m = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all()
    
    if (!candles5m.results || candles5m.results.length < 20) {
      return c.json({
        success: false,
        error: 'Insufficient data for testing'
      })
    }
    
    const formatted: Candle[] = (candles5m.results as any[]).map(c => ({
      timestamp: c.timestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume || 1
    })).reverse()
    
    const indicators = await calculateIndicators(formatted)
    const currentPrice = formatted[formatted.length - 1].close
    
    // Test grading for BUY signal
    const testGrade = await gradeSignal(
      'BUY',
      currentPrice,
      formatted,
      indicators,
      { '5m': { trend: 'BULLISH', indicators } }
    )
    
    return c.json({
      success: true,
      test_results: {
        grade: testGrade.grade,
        filters_passed: testGrade.filtersPassed,
        confidence: testGrade.confidence,
        position_multiplier: testGrade.positionMultiplier,
        filter_details: testGrade.filterResults
      },
      current_price: currentPrice,
      indicators: {
        rsi: indicators.rsi,
        macd: indicators.macd,
        adx: indicators.adx
      }
    })
    
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

export default app
