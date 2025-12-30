/**
 * 5-Minute Assassin Auto-Scanner
 * 
 * Automatically scans 5m candles every 5 minutes for A-grade setups
 * Features:
 * - 7-layer confirmation system
 * - A/B/C grade scoring
 * - Telegram alerts for A-grade setups
 * - Performance tracking
 * - Session-based filtering
 */

import { Hono } from 'hono'
import { calculateIndicators, generateSignal, type Candle } from '../lib/technicalAnalysis'
import { sendTelegramMessage } from '../lib/telegram'
import { calculateLiquidityScore, type LiquidityMetrics } from '../lib/liquidityAnalysis'
import { checkTradingSafety, formatEvent } from '../lib/economicCalendar'
import { 
  checkIntradayTimingBoost, 
  getDayOfWeekBias, 
  checkATRExpansion,
  type IntradayBoost,
  type DayBias 
} from '../lib/timeAnalysis'
import { 
  calculateVolumePressure, 
  isPressureAligned,
  getVolumePressureMessage 
} from '../lib/volumeAnalysis'
import {
  detectCandlestickPatterns,
  arePatternsAligned
} from '../lib/candlePatterns'
import {
  analyzePriceZones,
  isZoneAligned
} from '../lib/priceActionZones'
import {
  detectDivergence,
  isDivergenceAligned,
  formatDivergenceMessage
} from '../lib/divergenceAnalysis'
import {
  analyzeMultiTimeframe,
  isMTFAligned,
  formatMTFMessage
} from '../lib/multiTimeframeConfirmation'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /scan
 * 
 * Main auto-scanner endpoint
 * Called every 5 minutes by PM2 cron
 */
app.post('/scan', async (c) => {
  const { DB } = c.env
  
  try {
    console.log('[5M-SCANNER] Step 1: Creating Date object')
    const scanStartTime = new Date()
    console.log('[5M-SCANNER] Step 2: Date object created:', typeof scanStartTime)
    console.log('[5M-SCANNER] Step 3: Converting to ISO string')
    const isoString = scanStartTime.toISOString()
    console.log('[5M-SCANNER] Starting scan at', isoString)
    
    console.log('[5M-SCANNER] Step 4: Creating table')
    // Create scanner_history table if not exists
    await DB.prepare(`
      CREATE TABLE IF NOT EXISTS scanner_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        timeframe TEXT NOT NULL,
        signal_type TEXT NOT NULL,
        grade TEXT NOT NULL,
        score INTEGER NOT NULL,
        entry_price REAL NOT NULL,
        stop_loss REAL NOT NULL,
        take_profit_1 REAL NOT NULL,
        take_profit_2 REAL NOT NULL,
        take_profit_3 REAL NOT NULL,
        confidence INTEGER NOT NULL,
        layers_passed INTEGER NOT NULL,
        liquidity_score INTEGER,
        session TEXT,
        telegram_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()
    
    console.log('[5M-SCANNER] Step 5: Table created, fetching data')
    
    // ============================================================
    // LAYER 1: FETCH MULTI-TIMEFRAME DATA
    // ============================================================
    
    // Get 5m indicators
    const indicators5m = await DB.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    // Get 15m indicators
    const indicators15m = await DB.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '15m'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    // Get 1h indicators
    const indicators1h = await DB.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    console.log('[5M-SCANNER] Step 6: Indicators fetched, checking data')
    
    if (!indicators5m || !indicators15m || !indicators1h) {
      console.log('[5M-SCANNER] Missing data, skipping scan')
      return c.json({
        success: false,
        message: 'Insufficient data for scan'
      })
    }
    
    // Get latest 5m candles for volume analysis
    const candles5mResult = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '5m'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()
    
    const candles5m = (candles5mResult.results as any[]).map(row => ({
      timestamp: row.timestamp,
      open: Number(row.open),
      high: Number(row.high),
      low: Number(row.low),
      close: Number(row.close),
      volume: Number(row.volume) || 0
    })).reverse() as Candle[]
    
    const currentPrice = candles5m[candles5m.length - 1].close
    
    console.log('[5M-SCANNER] Step 7: Starting 7-layer analysis')
    
    // ============================================================
    // LAYER 2: 7-LAYER ANALYSIS
    // ============================================================
    
    const analysis = await analyze7Layers(
      DB,
      indicators5m,
      indicators15m,
      indicators1h,
      candles5m,
      currentPrice
    )
    
    console.log('[5M-SCANNER] Step 8: Analysis complete:', {
      grade: analysis.grade,
      score: analysis.score,
      signal: analysis.signal
    })
    
    console.log('[5M-SCANNER] Step 9: Saving to database')
    
    // ============================================================
    // LAYER 3: SAVE TO DATABASE
    // ============================================================
    
    const currentTimestamp = new Date().toISOString()
    console.log('[5M-SCANNER] Step 10: Timestamp created:', currentTimestamp)
    
    await DB.prepare(`
      INSERT INTO scanner_history 
      (timestamp, timeframe, signal_type, grade, score, 
       entry_price, stop_loss, take_profit_1, take_profit_2, take_profit_3,
       confidence, layers_passed, liquidity_score, session, telegram_sent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      currentTimestamp,
      '5m',
      analysis.signal,
      analysis.grade,
      analysis.score,
      currentPrice,
      analysis.stopLoss,
      analysis.tp1,
      analysis.tp2,
      analysis.tp3,
      analysis.confidence,
      analysis.layersPassed,
      analysis.liquidityScore,
      analysis.session,
      0
    ).run()
    
    // ============================================================
    // LAYER 4: TELEGRAM ALERT (A-GRADE ONLY)
    // ============================================================
    
    let telegramSent = false
    
    if (analysis.grade === 'A' || analysis.grade === 'A+') {
      try {
        const settings = await DB.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all()
        
        const config: any = {}
        for (const row of settings.results || []) {
          config[(row as any).setting_key] = (row as any).setting_value
        }
        
        if (config.telegram_bot_token && config.telegram_chat_id) {
          const message = formatTelegramAlert(analysis, currentPrice)
          
          telegramSent = await sendTelegramMessage(
            { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
            message
          )
          
          // Update telegram_sent status
          await DB.prepare(`
            UPDATE scanner_history 
            SET telegram_sent = ?
            WHERE timestamp = (SELECT MAX(timestamp) FROM scanner_history)
          `).bind(telegramSent ? 1 : 0).run()
          
          console.log('[5M-SCANNER] Telegram alert sent:', telegramSent)
        }
      } catch (e: any) {
        console.error('[5M-SCANNER] Telegram error:', e.message)
      }
    }
    
    // ============================================================
    // LAYER 5: RETURN RESULTS
    // ============================================================
    
    const responseTimestamp = new Date()
    console.log('[5M-SCANNER] Scan complete, returning results')
    
    return c.json({
      success: true,
      timestamp: responseTimestamp.toISOString(),
      scan_result: {
        grade: analysis.grade,
        score: analysis.score,
        signal: analysis.signal,
        confidence: analysis.confidence,
        entry: currentPrice,
        stop_loss: analysis.stopLoss,
        targets: [analysis.tp1, analysis.tp2, analysis.tp3],
        layers_passed: analysis.layersPassed,
        telegram_sent: telegramSent
      }
    })
    
  } catch (error: any) {
    console.error('[5M-SCANNER] Error caught:', error)
    const errorMessage = error?.message || String(error)
    console.error('[5M-SCANNER] Error message:', errorMessage)
    return c.json({
      success: false,
      error: errorMessage
    }, 500)
  }
})

/**
 * GET /stats
 * 
 * Get scanner performance statistics
 */
app.get('/stats', async (c) => {
  const { DB } = c.env
  
  try {
    // Total scans
    const totalScans = await DB.prepare(`
      SELECT COUNT(*) as count FROM scanner_history
    `).first()
    
    // Grade distribution (last 24 hours)
    const gradeDistribution = await DB.prepare(`
      SELECT grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY grade
      ORDER BY grade
    `).all()
    
    // Signals by session (last 24 hours)
    const sessionStats = await DB.prepare(`
      SELECT session, grade, COUNT(*) as count
      FROM scanner_history
      WHERE timestamp >= datetime('now', '-1 day')
      GROUP BY session, grade
      ORDER BY session, grade
    `).all()
    
    // Best hours (A-grade setups)
    const bestHours = await DB.prepare(`
      SELECT 
        CAST(strftime('%H', timestamp) AS INTEGER) as hour,
        COUNT(*) as count
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
        AND timestamp >= datetime('now', '-7 days')
      GROUP BY hour
      ORDER BY count DESC
      LIMIT 5
    `).all()
    
    // Recent A-grade setups (last 10)
    const recentAGrade = await DB.prepare(`
      SELECT *
      FROM scanner_history
      WHERE grade IN ('A', 'A+')
      ORDER BY timestamp DESC
      LIMIT 10
    `).all()
    
    return c.json({
      success: true,
      stats: {
        total_scans: (totalScans as any)?.count || 0,
        grade_distribution: gradeDistribution.results,
        session_stats: sessionStats.results,
        best_hours: bestHours.results,
        recent_a_grade: recentAGrade.results
      }
    })
    
  } catch (error: any) {
    console.error('[5M-SCANNER] Stats error:', error.message)
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /history
 * 
 * Get scanner history (last 100 scans)
 */
app.get('/history', async (c) => {
  const { DB } = c.env
  
  try {
    const history = await DB.prepare(`
      SELECT *
      FROM scanner_history
      ORDER BY timestamp DESC
      LIMIT 100
    `).all()
    
    return c.json({
      success: true,
      history: history.results
    })
    
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /test-alert
 * 
 * Send a test A-grade Telegram alert
 */
app.post('/test-alert', async (c) => {
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
        error: 'Telegram not configured. Please set Bot Token and Chat ID in settings.'
      })
    }
    
    // Create test analysis data
    const currentPrice = 4386.50
    const stopDistance = 15.0 // $15 stop distance for test
    
    const testAnalysis = {
      grade: 'A',
      signal: 'BUY',
      confidence: 87,
      session: 'LONDON',
      layersPassed: 6,
      layers: [
        '✅ Layer 1: Trend Aligned (BULLISH)',
        '✅ Layer 2: RSI 54, MACD bullish crossover',
        '✅ Layer 3: Volume spike 1.9x average',
        '✅ Layer 4: Broke above resistance',
        '✅ Layer 5: Liquidity 89/100 (LONDON session)',
        '✅ Layer 6: No major news',
        '❌ Layer 7: ADX 72.3 (extreme, reversal risk)'
      ],
      // BUY signal: Stop BELOW entry, Targets ABOVE entry
      stopLoss: currentPrice - stopDistance,     // 4371.50 (BELOW entry)
      tp1: currentPrice + (stopDistance * 2),    // 4416.50 (2R - ABOVE entry)
      tp2: currentPrice + (stopDistance * 3),    // 4431.50 (3R - ABOVE entry)
      tp3: currentPrice + (stopDistance * 4),    // 4446.50 (4R - ABOVE entry)
      liquidityScore: 89,
      adx: 72.3,
      rsi: 54.2,
      volumeRatio: 1.9
    }
    
    // Format message
    const message = formatTelegramAlert(testAnalysis, currentPrice)
    
    // Send to Telegram
    const sent = await sendTelegramMessage(
      { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
      message
    )
    
    return c.json({
      success: sent,
      message: sent ? 'Test A-grade alert sent to Telegram!' : 'Failed to send alert. Check your Telegram settings.'
    })
    
  } catch (error: any) {
    console.error('[TEST-ALERT] Error:', error)
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

// ============================================================
// HELPER FUNCTIONS
// ============================================================

async function analyze7Layers(
  DB: D1Database,
  indicators5m: any,
  indicators15m: any,
  indicators1h: any,
  candles5m: Candle[],
  currentPrice: number
) {
  console.log('[ANALYZE] Starting analysis')
  let score = 0
  let layersPassed = 0
  const layers: string[] = []
  
  const parseNum = (val: any, fallback: number) => {
    const parsed = parseFloat(String(val))
    return isNaN(parsed) ? fallback : parsed
  }
  
  console.log('[ANALYZE] parseNum defined')
  
  // Parse indicators
  const i5m = {
    ema20: parseNum(indicators5m.ema_12, currentPrice),
    rsi: parseNum(indicators5m.rsi_14, 50),
    macd: parseNum(indicators5m.macd, 0),
    macd_signal: parseNum(indicators5m.macd_signal, 0),
    macd_histogram: parseNum(indicators5m.macd_histogram, 0),
    adx: parseNum(indicators5m.adx, 25)
  }
  
  const i15m = {
    ema50: parseNum(indicators15m.ema_26, currentPrice)
  }
  
  const i1h = {
    sma200: parseNum(indicators1h.sma_200, currentPrice)
  }
  
  // Determine trend direction
  const isBullish = currentPrice > i5m.ema20 && currentPrice > i15m.ema50 && currentPrice > i1h.sma200
  const isBearish = currentPrice < i5m.ema20 && currentPrice < i15m.ema50 && currentPrice < i1h.sma200
  
  // Layer 1: Trend Alignment (3 timeframes)
  if (isBullish || isBearish) {
    score += 20
    layersPassed++
    layers.push(`✅ Layer 1: Trend Aligned (${isBullish ? 'BULLISH' : 'BEARISH'})`)
  } else {
    layers.push('❌ Layer 1: Trend NOT aligned (conflicting)')
  }
  
  // Layer 2: Momentum (RSI + MACD)
  const rsiOk = i5m.rsi >= 40 && i5m.rsi <= 60
  const macdBullish = i5m.macd > i5m.macd_signal && i5m.macd_histogram > 0
  const macdBearish = i5m.macd < i5m.macd_signal && i5m.macd_histogram < 0
  
  if (rsiOk && (isBullish ? macdBullish : macdBearish)) {
    score += 15
    layersPassed++
    layers.push(`✅ Layer 2: RSI ${i5m.rsi.toFixed(0)}, MACD ${isBullish ? 'bullish' : 'bearish'} crossover`)
  } else {
    layers.push(`❌ Layer 2: RSI ${i5m.rsi.toFixed(0)}, MACD ${!rsiOk ? 'extreme' : 'no crossover'}`)
  }
  
  // Layer 3: Volume Spike
  const avgVolume = candles5m.slice(-20).reduce((sum, c) => sum + c.volume, 0) / 20
  const currentVolume = candles5m[candles5m.length - 1].volume
  const volumeSpike = currentVolume > avgVolume * 1.5
  
  if (volumeSpike) {
    score += 15
    layersPassed++
    layers.push(`✅ Layer 3: Volume spike ${(currentVolume / avgVolume).toFixed(1)}x average`)
  } else {
    layers.push(`❌ Layer 3: Volume ${(currentVolume / avgVolume).toFixed(1)}x (need 1.5x+)`)
  }
  
  // Layer 4: Support/Resistance Breakout
  const recentHigh = Math.max(...candles5m.slice(-20).map(c => c.high))
  const recentLow = Math.min(...candles5m.slice(-20).map(c => c.low))
  const breakoutHigh = currentPrice > recentHigh * 0.999
  const breakoutLow = currentPrice < recentLow * 1.001
  
  if ((isBullish && breakoutHigh) || (isBearish && breakoutLow)) {
    score += 15
    layersPassed++
    layers.push(`✅ Layer 4: ${isBullish ? 'Broke above resistance' : 'Broke below support'}`)
  } else {
    layers.push(`❌ Layer 4: No clear breakout`)
  }
  
  // Layer 5: Liquidity Analysis
  console.log('[ANALYZE] Layer 5: Calculating liquidity')
  let liquidityMetrics: LiquidityMetrics | null = null
  try {
    liquidityMetrics = await calculateLiquidityScore(candles5m)
    console.log('[ANALYZE] Liquidity calculated successfully')
  } catch (e) {
    console.log('[5M-SCANNER] Liquidity calc failed:', e)
  }
  
  const liquidityScore = liquidityMetrics?.liquidity_score || 50
  const session = liquidityMetrics?.session || 'UNKNOWN'
  const goodLiquidity = liquidityScore >= 70
  
  if (goodLiquidity) {
    score += 15
    layersPassed++
    layers.push(`✅ Layer 5: Liquidity ${liquidityScore}/100 (${session} session)`)
  } else {
    layers.push(`❌ Layer 5: Liquidity ${liquidityScore}/100 (too low)`)
  }
  
  // Layer 6: Economic Calendar
  console.log('[ANALYZE] Layer 6: Checking economic calendar')
  const safety = checkTradingSafety() // No arguments needed, uses current time by default
  console.log('[ANALYZE] Calendar check complete')
  const calendarOk = safety.riskLevel === 'safe'
  
  if (calendarOk) {
    score += 10
    layersPassed++
    layers.push(`✅ Layer 6: No major news`)
  } else {
    layers.push(`❌ Layer 6: ${safety.reason}`)
  }
  
  // Layer 7: ADX Trend Strength
  const adxStrong = i5m.adx > 25
  const adxExtreme = i5m.adx > 70
  
  if (adxStrong && !adxExtreme) {
    score += 10
    layersPassed++
    layers.push(`✅ Layer 7: ADX ${i5m.adx.toFixed(1)} (strong trend)`)
  } else if (adxExtreme) {
    layers.push(`⚠️ Layer 7: ADX ${i5m.adx.toFixed(1)} (extreme, reversal risk)`)
  } else {
    layers.push(`❌ Layer 7: ADX ${i5m.adx.toFixed(1)} (weak trend)`)
  }
  
  // Determine signal early for Phase 1 layers
  let signal: 'BUY' | 'SELL' | 'HOLD' = 'HOLD'
  if ((isBullish || isBearish) && layersPassed >= 5) {
    signal = isBullish ? 'BUY' : 'SELL'
  }
  
  // ============================================================
  // PHASE 1 NEW LAYERS (8-11)
  // ============================================================
  
  // Layer 8: Intraday Time Patterns (London/NY Opens)
  const now = new Date()
  const timingBoost = checkIntradayTimingBoost(now)
  
  if (timingBoost.hasBoost) {
    score += 8
    layersPassed++
    layers.push(`✅ Layer 8: ${timingBoost.reason} (+${timingBoost.boost}% win)`)
  } else {
    layers.push(`ℹ️ Layer 8: ${timingBoost.reason}`)
  }
  
  // Layer 9: Day-of-Week Bias (Tue-Thu boost)
  const dayBias = getDayOfWeekBias(now)
  
  if (dayBias.hasBoost) {
    score += 5
    layersPassed++
    layers.push(`✅ Layer 9: ${dayBias.reason} (+${dayBias.boost}% win)`)
  } else {
    layers.push(`ℹ️ Layer 9: ${dayBias.reason}`)
  }
  
  // Layer 10: ATR Expansion Filter
  const atr = parseNum(indicators5m.atr_14, currentPrice * 0.01)
  const avgATR = candles5m.slice(-20).reduce((sum, c) => {
    const candleRange = c.high - c.low
    return sum + candleRange
  }, 0) / 20
  
  const isExpanding = checkATRExpansion(atr, avgATR)
  
  if (isExpanding) {
    score += 7
    layersPassed++
    const expansion = ((atr / avgATR - 1) * 100).toFixed(1)
    layers.push(`✅ Layer 10: ATR expanding ${expansion}% (high volatility)`)
  } else {
    const compression = ((1 - atr / avgATR) * 100).toFixed(1)
    layers.push(`❌ Layer 10: ATR compressed ${compression}% (skip low volatility)`)
  }
  
  // Layer 11: Tick Volume Pressure
  const pressure = calculateVolumePressure(candles5m.slice(-20))
  const pressureAligned = isPressureAligned(pressure, signal)
  
  if (pressureAligned && pressure.strength >= 60) {
    score += 10
    layersPassed++
  }
  
  layers.push(getVolumePressureMessage(pressure, signal))
  
  // ============================================================
  // PHASE 2 NEW LAYERS (12-15)
  // ============================================================
  
  // Layer 12: Candlestick Patterns
  const patterns = detectCandlestickPatterns(candles5m.slice(-3))
  const { aligned: patternAligned, strongestPattern } = arePatternsAligned(patterns, signal)
  
  if (patternAligned && strongestPattern) {
    score += 12
    layersPassed++
    layers.push(`✅ Layer 12: ${strongestPattern.name} (${strongestPattern.strength}/100)`)
  } else if (patterns.length > 0 && patterns[0].type === 'INDECISION') {
    layers.push(`⚠️ Layer 12: ${patterns[0].name} (indecision, wait)`)
  } else {
    layers.push(`❌ Layer 12: No clear candlestick pattern`)
  }
  
  // Layer 13: Price Action Zones
  const zoneAnalysis = analyzePriceZones(candles5m, currentPrice)
  const zoneAligned = isZoneAligned(zoneAnalysis, signal)
  
  if (zoneAligned && zoneAnalysis.nearZone) {
    score += 8
    layersPassed++
    layers.push(`✅ Layer 13: ${zoneAnalysis.description}`)
  } else if (zoneAnalysis.nearZone) {
    layers.push(`⚠️ Layer 13: ${zoneAnalysis.description} (not aligned)`)
  } else {
    layers.push(`ℹ️ Layer 13: No key zones nearby`)
  }
  
  // Layer 14: RSI/MACD Divergence
  // Need to fetch recent indicators for divergence analysis
  const recentIndicators5m = await DB.prepare(`
    SELECT rsi_14 as rsi, macd, macd_histogram
    FROM multi_timeframe_indicators
    WHERE timeframe = '5m'
    ORDER BY timestamp DESC
    LIMIT 10
  `).all()
  
  const indicatorData = (recentIndicators5m.results as any[]).map(row => ({
    rsi: parseFloat(String(row.rsi)) || 50,
    macd: parseFloat(String(row.macd)) || 0,
    macd_histogram: parseFloat(String(row.macd_histogram)) || 0
  })).reverse()
  
  const divergence = detectDivergence(indicatorData, candles5m.slice(-10))
  const trendDirection = isBullish ? 'BULLISH' : isBearish ? 'BEARISH' : 'NEUTRAL'
  const divAligned = isDivergenceAligned(divergence, signal, trendDirection as any)
  
  if (divAligned && divergence.strength >= 70) {
    score += 9
    layersPassed++
  }
  
  layers.push(formatDivergenceMessage(divergence, divAligned))
  
  // Layer 15: Multi-Timeframe Confirmation
  const mtf = analyzeMultiTimeframe(indicators5m, indicators15m, indicators1h, currentPrice)
  const mtfAligned = isMTFAligned(mtf, signal)
  
  if (mtfAligned && (mtf.allAligned || mtf.twoAligned)) {
    score += 6
    layersPassed++
  }
  
  layers.push(formatMTFMessage(mtf, mtfAligned))
  
  // Calculate grade
  let grade = 'C'
  if (score >= 90) grade = 'A+'
  else if (score >= 80) grade = 'A'
  else if (score >= 70) grade = 'B'
  
  // Re-evaluate signal with all layers (including Phase 1)
  if ((isBullish || isBearish) && layersPassed >= 7) {
    signal = isBullish ? 'BUY' : 'SELL'
  }
  
  // Calculate stops and targets (atr already calculated in Layer 10)
  const stopDistance = Math.max(atr * 1.5, currentPrice * 0.003) // Min 0.3%
  
  const stopLoss = signal === 'BUY' 
    ? currentPrice - stopDistance 
    : currentPrice + stopDistance
  
  const tp1 = signal === 'BUY'
    ? currentPrice + (stopDistance * 2) // 2R
    : currentPrice - (stopDistance * 2)
  
  const tp2 = signal === 'BUY'
    ? currentPrice + (stopDistance * 3) // 3R
    : currentPrice - (stopDistance * 3)
  
  const tp3 = signal === 'BUY'
    ? currentPrice + (stopDistance * 4) // 4R
    : currentPrice - (stopDistance * 4)
  
  return {
    grade,
    score,
    signal,
    confidence: score,
    layersPassed,
    layers,
    stopLoss,
    tp1,
    tp2,
    tp3,
    liquidityScore,
    session,
    adx: i5m.adx,
    rsi: i5m.rsi,
    volumeRatio: currentVolume / avgVolume
  }
}

function formatTelegramAlert(analysis: any, currentPrice: number): string {
  const emoji = analysis.signal === 'BUY' ? '🟢' : '🔴'
  const gradeEmoji = analysis.grade === 'A+' ? '💎' : analysis.grade === 'A' ? '⭐' : '📊'
  
  const now = new Date()
  const timeStr = `${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}`
  
  let message = `🚨 <b>${analysis.grade}-GRADE 5M SETUP DETECTED!</b> 🚨\n\n`
  message += `${emoji} <b>${analysis.signal} XAU/USD</b>\n`
  message += `${gradeEmoji} <b>Grade: ${analysis.grade}</b> (${analysis.confidence}% confidence)\n`
  message += `⏰ ${timeStr} UTC - ${analysis.session}\n\n`
  
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  message += `📊 <b>7-LAYER ANALYSIS</b>\n`
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  
  for (const layer of analysis.layers) {
    message += `${layer}\n`
  }
  
  message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  message += `🎯 <b>TRADE SETUP</b>\n`
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  
  message += `💰 <b>Entry:</b> $${currentPrice.toFixed(2)} (NOW!)\n`
  message += `🛡️ <b>Stop:</b> $${analysis.stopLoss.toFixed(2)}\n\n`
  
  message += `🎯 <b>Targets:</b>\n`
  message += `   TP1: $${analysis.tp1.toFixed(2)} (2R) - Take 50%\n`
  message += `   TP2: $${analysis.tp2.toFixed(2)} (3R) - Take 30%\n`
  message += `   TP3: $${analysis.tp3.toFixed(2)} (4R) - Trail rest\n\n`
  
  const risk = Math.abs(currentPrice - analysis.stopLoss)
  const reward = Math.abs(currentPrice - analysis.tp1)
  const rr = reward / risk
  
  message += `📊 <b>Risk/Reward:</b> 1:${rr.toFixed(1)}\n`
  message += `⏱️ <b>Valid for:</b> 5 minutes\n`
  message += `⚡ <b>Execute NOW for best entry!</b>\n\n`
  
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  message += `📈 <b>SESSION INFO</b>\n`
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  
  const sessionStars = analysis.liquidityScore >= 80 ? '⭐⭐⭐' : analysis.liquidityScore >= 70 ? '⭐⭐' : '⭐'
  message += `🌍 <b>Session:</b> ${analysis.session} ${sessionStars}\n`
  message += `🌊 <b>Liquidity:</b> ${analysis.liquidityScore}/100\n`
  message += `📊 <b>ADX:</b> ${analysis.adx.toFixed(1)} (trend strength)\n`
  message += `📈 <b>Volume:</b> ${analysis.volumeRatio.toFixed(1)}x average\n\n`
  
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  message += `🤖 <b>5M-Assassin Scanner</b>\n`
  message += `Next scan in 5 minutes...`
  
  return message
}

export default app
