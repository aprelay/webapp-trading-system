/**
 * Flip Detection Signals Endpoint
 * 
 * Dedicated endpoint for detecting market flips and trend reversals
 * Returns detailed flip analysis with entry zones
 */

import { Hono } from 'hono'
import { calculateIndicators, type Candle } from '../lib/technicalAnalysis'
import { detectMarketFlip, getFlipDescription } from '../lib/flipDetection'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /detect
 * 
 * Detect market flips using latest data
 * This is the main flip detection endpoint
 */
app.post('/detect', async (c) => {
  const { DB } = c.env
  
  try {
    console.log('[FLIP] Starting flip detection')
    
    // ============================================================
    // STEP 1: GET LATEST CANDLES
    // ============================================================
    
    const candlesResult = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 100
    `).all()
    
    if (!candlesResult.results || candlesResult.results.length < 20) {
      return c.json({
        success: false,
        error: 'Not enough data for flip detection. Need at least 20 candles. Please click "Fetch Market Data" first.'
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
    
    console.log('[FLIP] Analyzing', candles.length, 'candles, current price:', currentPrice)
    
    // ============================================================
    // STEP 2: CALCULATE INDICATORS
    // ============================================================
    
    const indicators = calculateIndicators(candles)
    
    if (!indicators) {
      return c.json({
        success: false,
        error: 'Unable to calculate indicators'
      }, 400)
    }
    
    console.log('[FLIP] Indicators calculated:', {
      rsi: indicators.rsi_14?.toFixed(1),
      macd: indicators.macd?.toFixed(2),
      adx: indicators.adx?.toFixed(1)
    })
    
    // ============================================================
    // STEP 3: DETECT MARKET FLIP
    // ============================================================
    
    const flipSignal = detectMarketFlip(currentPrice, indicators, candles)
    
    console.log('[FLIP] Flip detection result:', {
      is_flip: flipSignal.is_flip,
      flip_type: flipSignal.flip_type,
      confidence: flipSignal.flip_confidence
    })
    
    // ============================================================
    // STEP 4: SEND TO TELEGRAM IF STRONG FLIP
    // ============================================================
    
    let telegramSent = false
    
    // Only send Telegram for strong flips (65%+ confidence)
    if (flipSignal.is_flip && flipSignal.flip_confidence >= 65) {
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
          const emoji = flipSignal.flip_type === 'BULLISH_FLIP' ? '🟢' : '🔴'
          const direction = flipSignal.flip_type === 'BULLISH_FLIP' ? 'BULLISH' : 'BEARISH'
          const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
          
          let message = `${emoji} <b>🔥 MARKET FLIP DETECTED! 🔥</b> ${emoji}\n\n`
          message += `<b>${flipSignal.flip_strength} ${direction} FLIP</b>\n`
          message += `Confidence: <b>${flipSignal.flip_confidence.toFixed(0)}%</b>\n\n`
          
          message += `📊 <b>Flip Reasons:</b>\n`
          flipSignal.flip_reasons.forEach((reason, i) => {
            message += `${i + 1}. ${reason}\n`
          })
          message += `\n`
          
          message += `🎯 <b>Entry Strategy:</b>\n`
          message += `• <b>Current Price:</b> $${currentPrice.toFixed(2)}\n`
          message += `• <b>Optimal Entry:</b> $${flipSignal.entry_zone.optimal_entry.toFixed(2)}\n`
          message += `• <b>Stop Loss:</b> $${flipSignal.entry_zone.stop_loss.toFixed(2)}\n\n`
          
          message += `🎯 <b>Take Profits:</b>\n`
          message += `   TP1: $${flipSignal.entry_zone.targets[0].toFixed(2)}\n`
          message += `   TP2: $${flipSignal.entry_zone.targets[1].toFixed(2)}\n`
          message += `   TP3: $${flipSignal.entry_zone.targets[2].toFixed(2)}\n\n`
          
          if (flipSignal.timeframe_alignment.aligned) {
            message += `✅ <b>Multi-Timeframe Aligned:</b> All timeframes showing ${flipSignal.timeframe_alignment.one_hour} bias\n\n`
          }
          
          if (flipSignal.structure_break.break_confirmed) {
            message += `🔥 <b>Structure Break:</b> Key level at $${flipSignal.structure_break.key_level.toFixed(2)} broken with volume!\n\n`
          }
          
          if (flipSignal.smart_money.liquidity_grab || flipSignal.smart_money.stop_hunt || flipSignal.smart_money.institutional_volume) {
            message += `💰 <b>Smart Money Activity Detected:</b>\n`
            if (flipSignal.smart_money.liquidity_grab) message += `• Liquidity grab\n`
            if (flipSignal.smart_money.stop_hunt) message += `• Stop hunt pattern\n`
            if (flipSignal.smart_money.institutional_volume) message += `• Institutional volume spike\n`
            message += `\n`
          }
          
          message += `⏰ ${timestamp}`
          
          telegramSent = await sendTelegramMessage(
            { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
            message
          )
          
          console.log('[FLIP] Telegram sent:', telegramSent)
        }
      } catch (e: any) {
        console.error('[FLIP] Telegram error:', e.message)
      }
    }
    
    // ============================================================
    // STEP 5: RETURN FLIP SIGNAL
    // ============================================================
    
    return c.json({
      success: true,
      timestamp: new Date().toISOString(),
      current_price: currentPrice,
      telegram_sent: telegramSent,
      
      flip_signal: {
        is_flip: flipSignal.is_flip,
        flip_type: flipSignal.flip_type,
        flip_confidence: flipSignal.flip_confidence,
        flip_strength: flipSignal.flip_strength,
        flip_reasons: flipSignal.flip_reasons,
        
        entry_zone: flipSignal.entry_zone,
        
        timeframe_alignment: flipSignal.timeframe_alignment,
        momentum_shift: flipSignal.momentum_shift,
        structure_break: flipSignal.structure_break,
        smart_money: flipSignal.smart_money,
        
        description: getFlipDescription(flipSignal)
      }
    })
    
  } catch (error: any) {
    console.error('[FLIP] Error:', error.message, error.stack)
    return c.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, 500)
  }
})

export default app
