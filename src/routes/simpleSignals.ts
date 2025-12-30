/**
 * Simple Signals Endpoint
 * 
 * This endpoint generates BASIC trading signals without hedge fund features.
 * Used by "Generate Signal NOW" button for quick, simple analysis.
 * 
 * Features:
 * - Fetches current market data (1h timeframe)
 * - Calculates basic technical indicators
 * - Generates simple BUY/SELL/HOLD signal
 * - Returns clean format (no MTF, no ML, no liquidity, etc.)
 * - Sends to Telegram in simple format
 */

import { Hono } from 'hono'
import { calculateIndicators, generateSignal, type Candle } from '../lib/technicalAnalysis'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /simple
 * 
 * Generate simple signal with current market data
 * This is what "Generate Signal NOW" button calls
 */
app.post('/simple', async (c) => {
  const { DB } = c.env
  
  try {
    console.log('[SIMPLE] Starting simple signal generation')
    
    // ============================================================
    // STEP 1: GET LATEST 1H INDICATORS FROM DATABASE
    // ============================================================
    
    // Get the most recent 1h indicators (already calculated by fetch-mtf)
    const indicatorsResult = await DB.prepare(`
      SELECT * FROM multi_timeframe_indicators 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    if (!indicatorsResult) {
      return c.json({
        success: false,
        error: 'No data available. Please click "Fetch Market Data" first to fetch all timeframes.'
      }, 400)
    }
    
    // Get latest candles for signal generation
    const candlesResult = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()
    
    if (!candlesResult.results || candlesResult.results.length < 50) {
      return c.json({
        success: false,
        error: 'Not enough candle data. Please click "Fetch Market Data" to fetch fresh data.'
      }, 400)
    }
    
    const candles = (candlesResult.results as any[]).map(row => ({
      timestamp: row.timestamp,
      open: Number(row.open),
      high: Number(row.high),
      low: Number(row.low),
      close: Number(row.close),
      volume: Number(row.volume) || 0
    })).reverse() as Candle[]
    
    const currentPrice = candles[candles.length - 1].close
    
    console.log('[SIMPLE] Got', candles.length, 'candles, current price:', currentPrice)
    
    // ============================================================
    // STEP 2: USE PRE-CALCULATED INDICATORS FROM DATABASE
    // ============================================================
    
    // Convert database indicators to TechnicalIndicators format
    // Parse as float and provide fallbacks for missing/invalid values
    const parseNum = (val: any, fallback: number) => {
      const parsed = parseFloat(String(val))
      return isNaN(parsed) ? fallback : parsed
    }
    
    const indicators: any = {
      rsi_14: parseNum(indicatorsResult.rsi_14, 50),
      macd: parseNum(indicatorsResult.macd, 0),
      macd_signal: parseNum(indicatorsResult.macd_signal, 0),
      macd_histogram: parseNum(indicatorsResult.macd_histogram, 0),
      sma_20: parseNum(indicatorsResult.sma_20, currentPrice),
      sma_50: parseNum(indicatorsResult.sma_50, currentPrice),
      sma_200: parseNum(indicatorsResult.sma_200, currentPrice),
      ema_12: parseNum(indicatorsResult.ema_12, currentPrice),
      ema_26: parseNum(indicatorsResult.ema_26, currentPrice),
      bb_upper: parseNum(indicatorsResult.bb_upper, currentPrice * 1.02),
      bb_middle: parseNum(indicatorsResult.bb_middle, currentPrice),
      bb_lower: parseNum(indicatorsResult.bb_lower, currentPrice * 0.98),
      atr_14: parseNum(indicatorsResult.atr_14, currentPrice * 0.01),
      stochastic_k: parseNum(indicatorsResult.stochastic_k, 50),
      stochastic_d: parseNum(indicatorsResult.stochastic_d, 50),
      adx: parseNum(indicatorsResult.adx, 25),
      plus_di: parseNum(indicatorsResult.plus_di, 25),
      minus_di: parseNum(indicatorsResult.minus_di, 25),
      ichimoku_tenkan: parseNum(indicatorsResult.ichimoku_tenkan, currentPrice),
      ichimoku_kijun: parseNum(indicatorsResult.ichimoku_kijun, currentPrice),
      ichimoku_senkou_a: parseNum(indicatorsResult.ichimoku_senkou_a, currentPrice),
      ichimoku_senkou_b: parseNum(indicatorsResult.ichimoku_senkou_b, currentPrice),
      parabolic_sar: parseNum(indicatorsResult.parabolic_sar, currentPrice),
      vwap: parseNum(indicatorsResult.vwap, currentPrice),
      fib_382: parseNum(indicatorsResult.fib_382, 0) || undefined,
      fib_500: parseNum(indicatorsResult.fib_500, 0) || undefined,
      fib_618: parseNum(indicatorsResult.fib_618, 0) || undefined
    }
    
    console.log('[SIMPLE] Using pre-calculated indicators:', {
      rsi: indicators.rsi_14?.toFixed(1),
      macd: indicators.macd?.toFixed(2),
      adx: indicators.adx?.toFixed(1)
    })
    
    // ============================================================
    // STEP 3: GENERATE SIGNALS
    // ============================================================
    
    const daySignal = generateSignal(indicators, candles, 'day_trade')
    const swingSignal = generateSignal(indicators, candles, 'swing_trade')
    
    console.log('[SIMPLE] Generated signals:', {
      day: daySignal.signal_type,
      swing: swingSignal.signal_type
    })
    
    // ============================================================
    // STEP 4: SEND TO TELEGRAM (SIMPLE FORMAT)
    // ============================================================
    
    let telegramSent = false
    
    try {
      // Get Telegram settings
      const settings = await DB.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all()
      
      const config: any = {}
      for (const row of settings.results || []) {
        config[(row as any).setting_key] = (row as any).setting_value
      }
      
      if (config.telegram_bot_token && config.telegram_chat_id) {
        // Build SIMPLE Telegram message (matching your format)
        const emoji = daySignal.signal_type === 'BUY' ? '🟢' : daySignal.signal_type === 'SELL' ? '🔴' : '⚪'
        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
        
        let message = `${emoji} <b>GOLD/USD ${daySignal.signal_type} SIGNAL</b> ${emoji}\n\n`
        message += `📊 Day Trade\n`
        message += `💰 <b>Price:</b> $${Number(currentPrice).toFixed(2)}\n`
        message += `📊 <b>Confidence:</b> ${Number(daySignal.confidence).toFixed(1)}%\n\n`
        
        message += `🎯 <b>Take Profits:</b>\n`
        message += `   TP1: $${Number(daySignal.take_profit_1).toFixed(2)}\n`
        message += `   TP2: $${Number(daySignal.take_profit_2).toFixed(2)}\n`
        message += `   TP3: $${Number(daySignal.take_profit_3).toFixed(2)}\n\n`
        
        message += `🛡️ <b>Stop Loss:</b> $${Number(daySignal.stop_loss).toFixed(2)}\n\n`
        
        message += `📝 <b>Reason:</b>\n`
        message += String(daySignal.reason) + `\n\n`
        
        message += `⏰ ${timestamp}`
        
        // Send to Telegram
        telegramSent = await sendTelegramMessage(
          { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
          message
        )
        
        console.log('[SIMPLE] Telegram sent:', telegramSent)
      } else {
        console.log('[SIMPLE] Telegram not configured')
      }
    } catch (e: any) {
      console.error('[SIMPLE] Telegram error:', e.message)
      // Telegram is optional, continue without it
    }
    
    // ============================================================
    // STEP 5: RETURN SIMPLE FORMAT
    // ============================================================
    
    return c.json({
      success: true,
      timestamp: new Date().toISOString(),
      current_price: currentPrice,
      telegram_sent: telegramSent,
      
      // Simple signal format (no hedge fund features)
      day_trade: {
        signal_type: daySignal.signal_type,
        confidence: Number(daySignal.confidence),
        price: Number(currentPrice),
        stop_loss: Number(daySignal.stop_loss),
        take_profit_1: Number(daySignal.take_profit_1),
        take_profit_2: Number(daySignal.take_profit_2),
        take_profit_3: Number(daySignal.take_profit_3),
        reason: String(daySignal.reason),
        trading_style: 'day_trade'
      },
      
      swing_trade: {
        signal_type: swingSignal.signal_type,
        confidence: Number(swingSignal.confidence),
        price: Number(currentPrice),
        stop_loss: Number(swingSignal.stop_loss),
        take_profit_1: Number(swingSignal.take_profit_1),
        take_profit_2: Number(swingSignal.take_profit_2),
        take_profit_3: Number(swingSignal.take_profit_3),
        reason: String(swingSignal.reason),
        trading_style: 'swing_trade'
      }
    })
    
  } catch (error: any) {
    console.error('[SIMPLE] Error:', error.message, error.stack)
    return c.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, 500)
  }
})

export default app
