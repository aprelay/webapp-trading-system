/**
 * AI Market Analysis Endpoint
 * 
 * Generates comprehensive market analysis including:
 * - Current market status
 * - Multi-timeframe alignment
 * - Support/resistance levels
 * - 3 market scenarios with probabilities
 * - Trading recommendations
 */

import { Hono } from 'hono'
import { calculateIndicators, generateSignal, type Candle } from '../lib/technicalAnalysis'
import { analyzeTimeframeAlignment } from '../lib/multiTimeframeAnalysis'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /market-analysis
 * 
 * Generate AI-powered market analysis
 */
app.post('/market-analysis', async (c) => {
  return await runAIAnalysis(c)
})

/**
 * GET /auto-ai-scan
 * 
 * Automatic AI scanning endpoint (for cron jobs)
 * Runs AI analysis and sends Telegram alerts if confidence ≥65%
 */
app.get('/auto-ai-scan', async (c) => {
  return await runAIAnalysis(c)
})

/**
 * Core AI Analysis Function
 * Used by both manual and automatic scanning
 */
async function runAIAnalysis(c: any) {
  const { DB } = c.env
  
  try {
    console.log('[AI-ANALYSIS] Starting comprehensive market analysis')
    
    // ============================================================
    // STEP 1: FETCH FRESH MARKET DATA
    // ============================================================
    
    // Get API key
    const settingsResult = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key = 'twelve_data_api_key'
    `).all()
    
    let apiKey = ''
    for (const row of settingsResult.results || []) {
      if ((row as any).setting_key === 'twelve_data_api_key') {
        apiKey = (row as any).setting_value
      }
    }
    
    let candles: Candle[] = []
    
    // Fetch fresh 1h data
    if (apiKey && apiKey !== 'your_api_key_here') {
      try {
        const url = `https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.values && data.values.length >= 50) {
          candles = data.values.reverse().map((item: any) => ({
            timestamp: item.datetime,
            open: parseFloat(item.open),
            high: parseFloat(item.high),
            low: parseFloat(item.low),
            close: parseFloat(item.close),
            volume: parseFloat(item.volume) || 0
          }))
          console.log('[AI-ANALYSIS] Fresh data fetched:', candles.length, 'candles')
        }
      } catch (error) {
        console.error('[AI-ANALYSIS] API fetch failed, falling back to database')
      }
    }
    
    // Fallback to database
    if (candles.length === 0) {
      const marketData = await DB.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 100
      `).all()
      
      if (!marketData.results || marketData.results.length < 50) {
        return c.json({ success: false, error: 'Not enough market data available' }, 400)
      }
      
      candles = (marketData.results as any[]).reverse().map(row => ({
        timestamp: row.timestamp,
        open: row.open,
        high: row.high,
        low: row.low,
        close: row.close,
        volume: row.volume || 0
      }))
    }
    
    // ============================================================
    // STEP 2: CALCULATE INDICATORS
    // ============================================================
    
    const indicators = calculateIndicators(candles)
    if (!indicators) {
      return c.json({ success: false, error: 'Failed to calculate indicators' }, 400)
    }
    
    const currentPrice = candles[candles.length - 1].close
    const signal = generateSignal(currentPrice, indicators, 'day_trade')
    
    console.log('[AI-ANALYSIS] Current price:', currentPrice, 'Signal:', signal.signal_type, 'Confidence:', signal.confidence)
    
    // ============================================================
    // STEP 3: GET MTF ALIGNMENT
    // ============================================================
    
    const mtfIndicators: any = {}
    
    for (const tf of ['5m', '15m', '1h', '4h', 'daily']) {
      const indicatorData = await DB.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(tf).first()
      
      if (indicatorData) {
        mtfIndicators[tf] = indicatorData
      }
    }
    
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice)
    
    // ============================================================
    // STEP 4: CALCULATE KEY LEVELS (Support/Resistance)
    // ============================================================
    
    // Calculate support/resistance from recent price action
    const recentCandles = candles.slice(-50)
    const highs = recentCandles.map(c => c.high).sort((a, b) => b - a)
    const lows = recentCandles.map(c => c.low).sort((a, b) => a - b)
    
    const resistance = [
      Math.max(...highs.slice(0, 10)) // Recent high
    ]
    
    const support = [
      Math.min(...lows.slice(0, 10)) // Recent low
    ]
    
    // Add moving average levels as support/resistance
    if (currentPrice > indicators.sma_20) {
      support.push(indicators.sma_20)
    } else {
      resistance.push(indicators.sma_20)
    }
    
    if (currentPrice > indicators.sma_50) {
      support.push(indicators.sma_50)
    } else {
      resistance.push(indicators.sma_50)
    }
    
    // Add VWAP
    if (currentPrice > indicators.vwap) {
      support.push(indicators.vwap)
    } else {
      resistance.push(indicators.vwap)
    }
    
    // Add round numbers
    const roundLevel = Math.round(currentPrice / 10) * 10
    if (roundLevel > currentPrice) {
      resistance.push(roundLevel)
    } else {
      support.push(roundLevel)
    }
    
    // Sort and deduplicate
    const resistanceLevels = [...new Set(resistance)].sort((a, b) => a - b).filter(r => r > currentPrice).slice(0, 3)
    const supportLevels = [...new Set(support)].sort((a, b) => b - a).filter(s => s < currentPrice).slice(0, 3)
    
    console.log('[AI-ANALYSIS] Key levels - Support:', supportLevels, 'Resistance:', resistanceLevels)
    
    // ============================================================
    // STEP 5: DETERMINE VOLATILITY
    // ============================================================
    
    const atrPercent = (indicators.atr_14 / currentPrice) * 100
    let volatility = 'NORMAL'
    
    if (atrPercent > 3.0) {
      volatility = 'EXTREME'
    } else if (atrPercent > 1.5) {
      volatility = 'HIGH'
    } else if (atrPercent < 0.5) {
      volatility = 'LOW'
    }
    
    // ============================================================
    // STEP 6: GENERATE 3 SCENARIOS
    // ============================================================
    
    const scenarios = []
    
    // Determine probabilities based on MTF alignment and trend strength
    let bullishProb = 30
    let bearishProb = 30
    let rangingProb = 40
    
    if (alignment.type === 'ALL_BULLISH') {
      bullishProb = 60
      bearishProb = 20
      rangingProb = 20
    } else if (alignment.type === 'ALL_BEARISH') {
      bullishProb = 20
      bearishProb = 60
      rangingProb = 20
    } else if (alignment.score >= 4) {
      // 4/5 aligned
      if (alignment.trends.filter(t => t.trend === 'BULLISH').length >= 4) {
        bullishProb = 50
        bearishProb = 25
        rangingProb = 25
      } else {
        bullishProb = 25
        bearishProb = 50
        rangingProb = 25
      }
    }
    
    // Scenario 1: Bullish
    if (resistanceLevels.length > 0) {
      scenarios.push({
        name: '📈 BULLISH CONTINUATION',
        probability: bullishProb,
        description: `Price breaks above $${resistanceLevels[0].toFixed(2)} and rallies toward $${(resistanceLevels[resistanceLevels.length - 1] || currentPrice * 1.02).toFixed(2)}`,
        trigger: `Breakout above $${resistanceLevels[0].toFixed(2)} with volume`,
        target: resistanceLevels[resistanceLevels.length - 1] || currentPrice * 1.02
      })
    }
    
    // Scenario 2: Bearish
    if (supportLevels.length > 0) {
      scenarios.push({
        name: '📉 BEARISH CORRECTION',
        probability: bearishProb,
        description: `Price breaks below $${supportLevels[0].toFixed(2)} and drops toward $${(supportLevels[supportLevels.length - 1] || currentPrice * 0.98).toFixed(2)}`,
        trigger: `Breakdown below $${supportLevels[0].toFixed(2)} with volume`,
        target: supportLevels[supportLevels.length - 1] || currentPrice * 0.98
      })
    }
    
    // Scenario 3: Ranging
    scenarios.push({
      name: '↔️ CONTINUED RANGING',
      probability: rangingProb,
      description: `Price oscillates between $${(supportLevels[0] || currentPrice * 0.99).toFixed(2)} and $${(resistanceLevels[0] || currentPrice * 1.01).toFixed(2)} with choppy action`,
      trigger: volatility === 'EXTREME' ? 'High volatility continues' : 'No clear breakout/breakdown',
      target: null
    })
    
    // Sort by probability
    scenarios.sort((a, b) => b.probability - a.probability)
    
    // ============================================================
    // STEP 7: GENERATE RECOMMENDATION
    // ============================================================
    
    let recommendation: any = {
      action: 'WAIT',
      reason: 'Market conditions unclear - wait for better setup',
      entry_range: null,
      stop_loss: null
    }
    
    // IMPORTANT: Send Telegram alerts for ≥65% confidence (both BUY and SELL)
    if (signal.confidence >= 65) {
      if (signal.signal_type === 'BUY') {
        recommendation = {
          action: 'BUY',
          reason: `Strong ${signal.signal_type} signal with ${signal.confidence}% confidence. ${alignment.type} MTF alignment.`,
          entry_range: `${(currentPrice - 5).toFixed(2)}-${currentPrice.toFixed(2)}`,
          stop_loss: signal.stop_loss.toFixed(2)
        }
      } else if (signal.signal_type === 'SELL') {
        recommendation = {
          action: 'SELL',
          reason: `Strong ${signal.signal_type} signal with ${signal.confidence}% confidence. ${alignment.type} MTF alignment.`,
          entry_range: `${currentPrice.toFixed(2)}-${(currentPrice + 5).toFixed(2)}`,
          stop_loss: signal.stop_loss.toFixed(2)
        }
      }
    } else if (volatility === 'EXTREME') {
      recommendation.reason = `⚠️ EXTREME volatility (ADX ${indicators.adx.toFixed(1)}) - Too risky to trade. Wait for market to calm down.`
    } else if (alignment.type === 'MIXED' || alignment.type === 'CONFLICTING') {
      recommendation.reason = `⏰ Timeframes conflicting (${alignment.score}/5 aligned). Wait for ${resistanceLevels[0] ? `breakout above $${resistanceLevels[0].toFixed(2)}` : supportLevels[0] ? `breakdown below $${supportLevels[0].toFixed(2)}` : 'clearer direction'}.`
    }
    
    // ============================================================
    // STEP 8: SEND TO TELEGRAM (for signals ≥65%)
    // ============================================================
    
    let telegramSent = false
    
    // Send alert for all signals (HOLD/BUY/SELL) when confidence ≥65%
    if (signal.confidence >= 65) {
      try {
        const settings = await DB.prepare(`
          SELECT setting_key, setting_value FROM user_settings
          WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
        `).all()
        
        const config: any = {}
        for (const row of settings.results || []) {
          config[(row as any).setting_key] = (row as any).setting_value
        }
        
        if (config.telegram_bot_token && config.telegram_chat_id && 
            config.telegram_bot_token !== 'your_bot_token_here') {
          
          const emoji = signal.signal_type === 'BUY' ? '🟢' : (signal.signal_type === 'SELL' ? '🔴' : '⚪')
          
          let message = `${emoji} *AI MARKET ANALYSIS* ${emoji}\n`
          message += `⏰ ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC\n\n`
          
          message += `📊 *Signal:* ${signal.signal_type} (${signal.confidence.toFixed(1)}%)\n`
          message += `💰 *Price:* $${currentPrice.toFixed(2)}\n`
          message += `⚡ *Volatility:* ${volatility}\n`
          message += `🎯 *MTF Alignment:* ${alignment.type} (${alignment.score}/5)\n\n`
          
          message += `🔴 *Resistance:* ${resistanceLevels.length > 0 ? resistanceLevels.map(r => `$${r.toFixed(2)}`).join(', ') : 'N/A'}\n`
          message += `🟢 *Support:* ${supportLevels.length > 0 ? supportLevels.map(s => `$${s.toFixed(2)}`).join(', ') : 'N/A'}\n\n`
          
          message += `*Top Scenario:* ${scenarios[0].name} (${scenarios[0].probability}%)\n`
          message += `${scenarios[0].description}\n\n`
          
          message += `💡 *Recommendation:* ${recommendation.action === 'WAIT' ? '⏰' : recommendation.action === 'BUY' ? '📈' : '📉'} ${recommendation.action}\n`
          message += `${recommendation.reason}\n\n`
          
          if (recommendation.entry_range) {
            message += `🎯 *Entry Range:* $${recommendation.entry_range}\n`
            message += `🛡️ *Stop Loss:* $${recommendation.stop_loss}`
          }
          
          telegramSent = await sendTelegramMessage(
            { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
            message
          )
          
          console.log('[AI-ANALYSIS] Telegram alert sent:', telegramSent, 'for', signal.signal_type, signal.confidence + '%')
        }
      } catch (error: any) {
        console.error('[AI-ANALYSIS] Telegram error:', error.message)
      }
    } else {
      console.log('[AI-ANALYSIS] No Telegram alert - Confidence:', signal.confidence, 'Signal:', signal.signal_type)
    }
    
    // ============================================================
    // STEP 9: RETURN ANALYSIS
    // ============================================================
    
    return c.json({
      success: true,
      analysis: {
        timestamp: new Date().toISOString(),
        current_price: currentPrice,
        signal: signal.signal_type,
        confidence: signal.confidence,
        volatility,
        mtf_alignment: {
          type: alignment.type,
          score: alignment.score,
          trends: alignment.trends
        },
        key_levels: {
          resistance: resistanceLevels,
          support: supportLevels
        },
        scenarios,
        recommendation,
        telegram_sent: telegramSent
      }
    })
    
  } catch (error: any) {
    console.error('[AI-ANALYSIS] Error:', error.message)
    return c.json({ 
      success: false, 
      error: error.message 
    }, 500)
  }
}

export default app
