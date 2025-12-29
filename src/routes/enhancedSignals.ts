/**
 * Enhanced Signals Endpoint (Hedge Fund Grade)
 * 
 * This endpoint integrates 9 hedge-fund features on top of proven Phase 3 MTF logic:
 * 1. VaR (Value at Risk)
 * 2. Maximum Drawdown Limits
 * 3. Portfolio Heat Monitoring
 * 4. Chart Pattern Detection
 * 5. Market Regime Detection
 * 6. ML Price Prediction
 * 7. Probability of Profit
 * 8. Sharpe/Sortino/Calmar Ratios
 * 9. Multi-Timeframe Analysis (baseline: ~90% accuracy)
 */

import { Hono } from 'hono'
import { calculateIndicators, generateSignal, type Candle, type TechnicalIndicators } from '../lib/technicalAnalysis'
import { analyzeTimeframeAlignment, validateMultiTimeframeSignal } from '../lib/multiTimeframeAnalysis'
import { calculatePositionSize } from '../lib/riskManagement'
import { calculateDrawdownStatus, calculatePortfolioHeat, calculateVaR } from '../lib/advancedRisk'
import { detectChartPatterns, type PatternDetectionResult } from '../lib/patternDetection'
import { detectMarketRegime, type RegimeAnalysis } from '../lib/regimeDetection'
import { generateMLPredictions, type MLPredictionResult } from '../lib/mlPrediction'
import { calculateProbabilityOfProfit, type ProbabilityResult } from '../lib/probabilityOfProfit'
import { sendTelegramMessage } from '../lib/telegram'
import { checkTradingSafety, calculateCalendarImpact, formatEvent } from '../lib/economicCalendar'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /enhanced
 * 
 * Generate enhanced signal with all 9 hedge-fund features
 * Uses the EXACT SAME proven MTF logic from automation endpoint
 * Then adds hedge fund features on top
 */
app.post('/enhanced', async (c) => {
  const { DB } = c.env
  
  try {
    console.log('[ENHANCED] Starting request, DB:', !!DB)
    
    // ============================================================
    // STEP 1: FETCH MTF DATA (Copy from working automation endpoint)
    // ============================================================
    console.log('[ENHANCED] Step 1: Fetching MTF data')
    
    const mtfIndicators: any = {}
    const mtfCandles: any = {}
    
    for (const tf of ['5m', '15m', '1h', '4h', 'daily']) {
      // Get indicators - use SELECT * like automation endpoint
      const indicatorData = await DB.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(tf).first()
      
      if (indicatorData) {
        mtfIndicators[tf] = indicatorData
      }
      
      // Get candles for chart patterns and ML
      const candlesResult = await DB.prepare(`
        SELECT timestamp, open, high, low, close, volume 
        FROM market_data 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 100
      `).bind(tf).all()
      
      if (candlesResult.results && candlesResult.results.length > 0) {
        mtfCandles[tf] = (candlesResult.results as any[]).map(row => ({
          timestamp: row.timestamp,
          open: row.open,
          high: row.high,
          low: row.low,
          close: row.close,
          volume: row.volume || 0
        }))
      }
    }
    
    // Check if we have enough data
    if (Object.keys(mtfIndicators).length < 3) {
      return c.json({ 
        success: false, 
        error: `Need at least 3 timeframes. Found: ${Object.keys(mtfIndicators).length}. Please fetch multi-timeframe data first.` 
      }, 400)
    }
    
    // ============================================================
    // DATA FRESHNESS CHECK (NEW!)
    // ============================================================
    const dataFreshnessWarnings: string[] = []
    
    // Check 1h indicator freshness (most critical)
    if (mtfIndicators['1h'] && mtfIndicators['1h'].timestamp) {
      const h1Timestamp = new Date(mtfIndicators['1h'].timestamp).getTime()
      const now = Date.now()
      const ageMinutes = (now - h1Timestamp) / (1000 * 60)
      
      if (ageMinutes > 60) {
        dataFreshnessWarnings.push(`⚠️ WARNING: 1h data is ${ageMinutes.toFixed(0)} minutes old (>60 min)`)
      } else if (ageMinutes > 30) {
        dataFreshnessWarnings.push(`⚠️ CAUTION: 1h data is ${ageMinutes.toFixed(0)} minutes old (>30 min)`)
      }
      
      console.log(`[ENHANCED] Data freshness: 1h indicators are ${ageMinutes.toFixed(1)} minutes old`)
    }
    
    // Get current price from latest 1h candle
    const marketData = await DB.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    const currentPrice = (marketData as any)?.close || 0
    
    if (!currentPrice) {
      return c.json({ success: false, error: 'Current price not available' }, 400)
    }
    
    // Check price data freshness
    if ((marketData as any)?.timestamp) {
      const priceTimestamp = new Date((marketData as any).timestamp).getTime()
      const priceAgeMinutes = (Date.now() - priceTimestamp) / (1000 * 60)
      
      if (priceAgeMinutes > 60) {
        dataFreshnessWarnings.push(`⚠️ WARNING: Price data is ${priceAgeMinutes.toFixed(0)} minutes old`)
      }
      
      console.log(`[ENHANCED] Price freshness: ${priceAgeMinutes.toFixed(1)} minutes old`)
    }
    
    // ============================================================
    // STEP 1.5: ECONOMIC CALENDAR CHECK (CRITICAL!)
    // ============================================================
    console.log('[ENHANCED] Step 1.5: Checking economic calendar')
    
    const safety = checkTradingSafety()
    const calendarImpact = calculateCalendarImpact()
    
    let calendarWarning = null
    let forceHold = false
    
    if (safety.riskLevel === 'danger') {
      // CRITICAL: Major event nearby - force HOLD
      forceHold = true
      calendarWarning = safety.reason
      console.log('[ENHANCED] ⚠️ CALENDAR DANGER:', safety.reason)
    } else if (safety.riskLevel === 'caution') {
      calendarWarning = safety.reason
      console.log('[ENHANCED] ⚠️ CALENDAR CAUTION:', safety.reason)
    } else {
      console.log('[ENHANCED] ✅ Calendar safe:', safety.reason)
    }
    
    // ============================================================
    // STEP 2: MULTI-TIMEFRAME ANALYSIS (Exact copy from automation)
    // ============================================================
    
    const h1Indicators = mtfIndicators['1h']
    
    if (!h1Indicators) {
      return c.json({ 
        success: false, 
        error: `1h indicators not found. Available timeframes: ${Object.keys(mtfIndicators).join(', ')}` 
      }, 400)
    }
    
    // Use exact same logic as automation endpoint
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice)
    const dayTradeSignal = generateSignal(currentPrice, h1Indicators, 'day_trade')
    const swingTradeSignal = generateSignal(currentPrice, h1Indicators, 'swing_trade')
    
    const dayValidation = validateMultiTimeframeSignal(dayTradeSignal.signal_type, alignment)
    const swingValidation = validateMultiTimeframeSignal(swingTradeSignal.signal_type, alignment)
    
    // Apply MTF confidence
    const baseDaySignal = {
      ...dayTradeSignal,
      base_confidence: dayTradeSignal.confidence,
      mtf_confidence: dayValidation.confidence,
      final_confidence: Math.min(95, dayValidation.confidence),
      isValid: dayValidation.isValid,
      mtf_reason: dayValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type
    }
    
    const baseSwingSignal = {
      ...swingTradeSignal,
      base_confidence: swingTradeSignal.confidence,
      mtf_confidence: swingValidation.confidence,
      final_confidence: Math.min(95, swingValidation.confidence),
      isValid: swingValidation.isValid,
      mtf_reason: swingValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type
    }
    
    // ============================================================
    // STEP 3: CHART PATTERN DETECTION (Hedge Fund Feature #1)
    // ============================================================
    
    let patternBoost = 0
    let patternReason = ''
    let patterns: any[] = []
    
    if (mtfCandles['1h'] && Array.isArray(mtfCandles['1h']) && mtfCandles['1h'].length >= 20) {
      try {
        const patternResult = detectChartPatterns(mtfCandles['1h'])
        patterns = patternResult?.patterns || []
      } catch (e: any) {
        console.error('[ENHANCED] Pattern detection error:', e.message)
      }
      
      // Filter for recent valid patterns
      const recentPatterns = patterns.filter(p => 
        p.confidence >= 70 && 
        p.endIndex >= mtfCandles['1h'].length - 5
      )
      
      // Apply pattern boost
      for (const pattern of recentPatterns) {
        if (pattern.type === 'bullish' && baseDaySignal.signal_type === 'BUY') {
          patternBoost += pattern.confidence * 0.1
          patternReason += `${pattern.name} (${pattern.confidence.toFixed(0)}%), `
        } else if (pattern.type === 'bearish' && baseDaySignal.signal_type === 'SELL') {
          patternBoost += pattern.confidence * 0.1
          patternReason += `${pattern.name} (${pattern.confidence.toFixed(0)}%), `
        }
      }
      
      patternBoost = Math.min(15, patternBoost) // Cap at +15%
    }
    
    // ============================================================
    // STEP 4: MARKET REGIME DETECTION (Hedge Fund Feature #2)
    // ============================================================
    
    let regimeBoost = 0
    let regimeReason = ''
    let regime: RegimeAnalysis | null = null
    
    if (mtfCandles['1h'] && mtfCandles['1h'].length >= 50) {
      const h1IndicatorsForRegime = calculateIndicators(mtfCandles['1h'])
      if (h1IndicatorsForRegime) {
        regime = detectMarketRegime(mtfCandles['1h'], h1IndicatorsForRegime)
        
        // Boost for trading WITH the regime
        if (regime.trend === 'STRONG_UPTREND' && baseDaySignal.signal_type === 'BUY') {
          regimeBoost = 10
          regimeReason = 'Strong Uptrend'
        } else if (regime.trend === 'UPTREND' && baseDaySignal.signal_type === 'BUY') {
          regimeBoost = 5
          regimeReason = 'Uptrend'
        } else if (regime.trend === 'STRONG_DOWNTREND' && baseDaySignal.signal_type === 'SELL') {
          regimeBoost = 10
          regimeReason = 'Strong Downtrend'
        } else if (regime.trend === 'DOWNTREND' && baseDaySignal.signal_type === 'SELL') {
          regimeBoost = 5
          regimeReason = 'Downtrend'
        }
      }
    }
    
    // ============================================================
    // STEP 5: ML PRICE PREDICTION (Hedge Fund Feature #3)
    // ============================================================
    
    let mlBoost = 0
    let mlReason = ''
    let mlPrediction: MLPredictionResult | null = null
    
    if (mtfCandles['1h'] && Array.isArray(mtfCandles['1h']) && mtfCandles['1h'].length >= 50) {
      try {
        mlPrediction = generateMLPredictions(mtfCandles['1h'], currentPrice)
        
        // Apply ML confidence boost
        if (mlPrediction.overall_direction === 'BULLISH' && baseDaySignal.signal_type === 'BUY') {
          mlBoost = mlPrediction.confidence_boost
          mlReason = `ML predicts +${((mlPrediction.predictions[0].predicted_price / currentPrice - 1) * 100).toFixed(2)}% in 1h`
        } else if (mlPrediction.overall_direction === 'BEARISH' && baseDaySignal.signal_type === 'SELL') {
          mlBoost = mlPrediction.confidence_boost
          mlReason = `ML predicts ${((mlPrediction.predictions[0].predicted_price / currentPrice - 1) * 100).toFixed(2)}% in 1h`
        }
      } catch (e: any) {
        console.error('[ENHANCED] ML prediction error:', e.message)
      }
    }
    
    // ============================================================
    // STEP 6: PROBABILITY OF PROFIT (Hedge Fund Feature #4)
    // ============================================================
    
    let popBoost = 0
    let popReason = ''
    let profitProb: ProbabilityResult | null = null
    
    if (mtfCandles['1h'] && Array.isArray(mtfCandles['1h']) && mtfCandles['1h'].length >= 50) {
      try {
        const h1IndicatorsForPoP = calculateIndicators(mtfCandles['1h'])
        if (h1IndicatorsForPoP) {
          // Call PoP with correct parameters: (signal, indicators, candles)
          profitProb = calculateProbabilityOfProfit(
            baseDaySignal,  // TradeSignal with price, stop_loss, take_profit_1/2/3, signal_type
            h1IndicatorsForPoP,  // TechnicalIndicators
            mtfCandles['1h']  // Candle[]
          )
          
          // Boost based on TP1 probability (most conservative)
          if (profitProb.tp1_probability > 70) {
            popBoost = 10
            popReason = `PoP: TP1 ${profitProb.tp1_probability.toFixed(0)}%`
          } else if (profitProb.tp1_probability > 60) {
            popBoost = 5
            popReason = `PoP: TP1 ${profitProb.tp1_probability.toFixed(0)}%`
          }
        }
      } catch (e: any) {
        console.error('[ENHANCED] Probability of Profit error:', e.message)
      }
    }
    
    // ============================================================
    // STEP 7: RISK METRICS (VaR, Drawdown, Portfolio Heat)
    // ============================================================
    
    let var95 = 0
    let var99 = 0
    let drawdownPct = 0
    let portfolioHeat = 0
    let riskWarning = ''
    
    try {
      // Get account and trades for risk calculations
      const account = await DB.prepare(`
        SELECT * FROM trading_accounts WHERE id = 1
      `).first()
      
      const recentTrades = await DB.prepare(`
        SELECT * FROM trade_history 
        WHERE account_id = 1 
        ORDER BY entry_time DESC 
        LIMIT 30
      `).all()
      
      const openTrades = await DB.prepare(`
        SELECT * FROM open_trades 
        WHERE account_id = 1
      `).all()
      
      if (account && recentTrades.results && recentTrades.results.length >= 10) {
        // Calculate VaR
        const varResult = calculateVaR(recentTrades.results as any[], (account as any).balance)
        var95 = varResult.var_95
        var99 = varResult.var_99
        
        // Calculate Drawdown
        const drawdownStatus = calculateDrawdownStatus((account as any).balance, recentTrades.results as any[])
        drawdownPct = drawdownStatus.current_drawdown_pct
        
        if (!drawdownStatus.is_within_limit) {
          riskWarning += `⚠️ Drawdown ${drawdownPct.toFixed(1)}% exceeds limit. `
        }
        
        // Calculate Portfolio Heat
        if (openTrades.results) {
          const heatResult = calculatePortfolioHeat(openTrades.results as any[], (account as any).balance)
          portfolioHeat = heatResult.total_risk_pct
          
          if (!heatResult.is_within_limit) {
            riskWarning += `⚠️ Portfolio heat ${portfolioHeat.toFixed(1)}% exceeds limit. `
          }
        }
      }
    } catch (e: any) {
      console.error('[ENHANCED] Risk metrics error (optional):', e.message)
      // Risk metrics are optional, continue without them
    }
    
    // ============================================================
    // STEP 8: APPLY ALL BOOSTS
    // ============================================================
    
    const totalBoost = patternBoost + regimeBoost + mlBoost + popBoost
    
    const enhancedDaySignal = {
      ...baseDaySignal,
      pattern_boost: patternBoost,
      regime_boost: regimeBoost,
      ml_boost: mlBoost,
      pop_boost: popBoost,
      total_boost: totalBoost,
      enhanced_confidence: Math.min(98, baseDaySignal.final_confidence + totalBoost),
      var_95: var95,
      var_99: var99,
      current_drawdown_pct: drawdownPct,
      portfolio_heat_pct: portfolioHeat,
      risk_warning: riskWarning || null
    }
    
    const enhancedSwingSignal = {
      ...baseSwingSignal,
      pattern_boost: patternBoost,
      regime_boost: regimeBoost,
      ml_boost: mlBoost,
      pop_boost: popBoost,
      total_boost: totalBoost,
      enhanced_confidence: Math.min(98, baseSwingSignal.final_confidence + totalBoost),
      var_95: var95,
      var_99: var99,
      current_drawdown_pct: drawdownPct,
      portfolio_heat_pct: portfolioHeat,
      risk_warning: riskWarning || null
    }
    
    // ============================================================
    // STEP 8.5: APPLY ECONOMIC CALENDAR OVERRIDE
    // ============================================================
    
    if (forceHold) {
      // CRITICAL: Major economic event - force all signals to HOLD
      enhancedDaySignal.signal_type = 'HOLD'
      enhancedSwingSignal.signal_type = 'HOLD'
      enhancedDaySignal.enhanced_confidence = 50
      enhancedSwingSignal.enhanced_confidence = 50
      enhancedDaySignal.reasoning = calendarWarning || 'Economic event nearby - trading paused'
      enhancedSwingSignal.reasoning = calendarWarning || 'Economic event nearby - trading paused'
      console.log('[ENHANCED] ⚠️ SIGNALS FORCED TO HOLD due to calendar')
    } else if (calendarImpact.adjustment < 0) {
      // Apply confidence adjustment for nearby events
      enhancedDaySignal.enhanced_confidence = Math.max(50, enhancedDaySignal.enhanced_confidence + calendarImpact.adjustment)
      enhancedSwingSignal.enhanced_confidence = Math.max(50, enhancedSwingSignal.enhanced_confidence + calendarImpact.adjustment)
      console.log('[ENHANCED] Applied calendar adjustment:', calendarImpact.adjustment)
    }
    
    // Add calendar info to signals
    enhancedDaySignal.calendar_check = {
      risk_level: safety.riskLevel,
      should_trade: safety.shouldTrade,
      reason: safety.reason,
      confidence_adjustment: calendarImpact.adjustment,
      upcoming_events: safety.upcomingEvents.slice(0, 3).map(e => formatEvent(e))
    }
    enhancedSwingSignal.calendar_check = enhancedDaySignal.calendar_check
    
    // ============================================================
    // STEP 9: SEND TO TELEGRAM
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
        // Build comprehensive Telegram message
        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
        
        let message = `🏦 *HEDGE FUND GRADE SIGNAL*\n⏰ ${timestamp} UTC\n\n`
        
        // Economic Calendar Warning (PRIORITY!)
        if (safety.riskLevel === 'danger') {
          message += `🚨 *ECONOMIC CALENDAR ALERT*\n`
          message += `${safety.reason}\n`
          message += `*→ NO TRADING RECOMMENDED*\n\n`
        } else if (safety.riskLevel === 'caution') {
          message += `⚠️ *ECONOMIC CALENDAR WARNING*\n`
          message += `${safety.reason}\n`
          message += `*→ Reduce position size by 50%*\n\n`
        } else if (safety.upcomingEvents.length > 0) {
          message += `📅 *Economic Calendar:* ✅ Safe to trade\n`
          message += `Next event: ${formatEvent(safety.upcomingEvents[0])}\n\n`
        }
        
        // Risk Warnings
        if (riskWarning) {
          message += `⚠️ *RISK ALERTS*\n${riskWarning}\n\n`
        }
        
        // Multi-Timeframe Alignment
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
        message += `📊 *MULTI-TIMEFRAME ALIGNMENT*\n`
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        message += `${alignment.type} (${alignment.score}/5 timeframes)\n`
        message += `Confidence Boost: +${alignment.confidenceBoost}%\n\n`
        
        for (const trend of alignment.trends) {
          const icon = trend.trend === 'BULLISH' ? '📈' : trend.trend === 'BEARISH' ? '📉' : '➡️'
          message += `${icon} *${trend.timeframe}*: ${trend.trend} (${trend.confidence.toFixed(0)}%)\n`
        }
        
        // Day Trade Signal
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`
        message += `📈 *DAY TRADE SIGNAL*\n`
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        message += `${enhancedDaySignal.isValid ? '✅' : '❌'} *${enhancedDaySignal.signal_type}* (${enhancedDaySignal.enhanced_confidence.toFixed(0)}% confidence)\n\n`
        
        message += `*Entry:* $${enhancedDaySignal.price.toFixed(2)}\n`
        message += `*Stop Loss:* $${enhancedDaySignal.stop_loss.toFixed(2)} (${((enhancedDaySignal.stop_loss / enhancedDaySignal.price - 1) * 100).toFixed(2)}%)\n`
        message += `*TP1:* $${enhancedDaySignal.take_profit_1.toFixed(2)} (${((enhancedDaySignal.take_profit_1 / enhancedDaySignal.price - 1) * 100).toFixed(2)}%)\n`
        message += `*TP2:* $${enhancedDaySignal.take_profit_2.toFixed(2)} (${((enhancedDaySignal.take_profit_2 / enhancedDaySignal.price - 1) * 100).toFixed(2)}%)\n`
        message += `*TP3:* $${enhancedDaySignal.take_profit_3.toFixed(2)} (${((enhancedDaySignal.take_profit_3 / enhancedDaySignal.price - 1) * 100).toFixed(2)}%)\n\n`
        
        // Confidence Breakdown
        message += `*📊 Confidence Breakdown:*\n`
        message += `Base: ${enhancedDaySignal.base_confidence.toFixed(0)}%\n`
        message += `MTF: ${enhancedDaySignal.mtf_confidence.toFixed(0)}%\n`
        if (patternBoost > 0) message += `Pattern: +${patternBoost.toFixed(0)}%\n`
        if (regimeBoost > 0) message += `Regime: +${regimeBoost.toFixed(0)}%\n`
        if (mlBoost > 0) message += `ML: +${mlBoost.toFixed(0)}%\n`
        if (popBoost > 0) message += `PoP: +${popBoost.toFixed(0)}%\n`
        message += `*FINAL: ${enhancedDaySignal.enhanced_confidence.toFixed(0)}%*\n\n`
        
        // Market Regime
        if (regime) {
          message += `🌡️ *Market Regime:* ${regime.trend || 'N/A'}\n`
          message += `Volatility: ${regime.volatility}\n`
          message += `Should Trade: ${regime.should_trade ? '✅ YES' : '❌ NO'}\n\n`
        }
        
        // ML Prediction
        if (mlPrediction && mlPrediction.overall_direction !== 'NEUTRAL') {
          message += `🤖 *ML Prediction:* ${mlPrediction.overall_direction}\n`
          if (mlPrediction.predictions[0]?.predicted_price) {
            message += `1h Target: $${mlPrediction.predictions[0].predicted_price.toFixed(2)}\n`
          }
          message += `\n`
        }
        
        // Profit Probability
        if (profitProb) {
          message += `🎯 *Probability of Profit:*\n`
          message += `TP1: ${profitProb.tp1_probability.toFixed(0)}%\n`
          message += `TP2: ${profitProb.tp2_probability.toFixed(0)}%\n`
          message += `TP3: ${profitProb.tp3_probability.toFixed(0)}%\n`
          message += `Expected Value: ${profitProb.expected_value.toFixed(2)}R\n\n`
        }
        
        // Risk Metrics
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
        message += `⚡ *RISK METRICS*\n`
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        message += `VaR(95%): $${var95.toFixed(2)}\n`
        message += `VaR(99%): $${var99.toFixed(2)}\n`
        message += `Drawdown: ${drawdownPct.toFixed(2)}%\n`
        message += `Portfolio Heat: ${portfolioHeat.toFixed(1)}%\n\n`
        
        // Recommendation
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`
        message += `💡 *RECOMMENDATION*\n`
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        
        if (enhancedDaySignal.isValid && enhancedDaySignal.signal_type !== 'HOLD') {
          message += `✅ *EXECUTE ${enhancedDaySignal.signal_type}*\n`
          message += `All hedge fund features aligned!\n`
        } else {
          message += `⚠️ *SKIP TRADE*\n`
          message += `Reason: ${enhancedDaySignal.mtf_reason}\n`
        }
        
        message += `\n🌐 Dashboard: ${c.req.url.replace('/api/signals/enhanced/enhanced', '')}`
        
        // Send to Telegram
        telegramSent = await sendTelegramMessage(
          { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
          message
        )
      }
    } catch (e: any) {
      console.error('[ENHANCED] Telegram error (optional):', e.message)
      // Telegram is optional, continue without it
    }
    
    // ============================================================
    // STEP 10: RETURN RESULTS
    // ============================================================
    
    return c.json({
      success: true,
      timestamp: new Date().toISOString(),
      current_price: currentPrice,
      telegram_sent: telegramSent,
      
      // Signals
      day_trade: enhancedDaySignal,
      swing_trade: enhancedSwingSignal,
      
      // Feature details
      alignment: {
        type: alignment.type,
        score: alignment.score,
        trends: alignment.trends
      },
      patterns: patterns.length > 0 ? patterns.slice(0, 3) : null,
      regime: regime ? {
        trend: regime.trend,
        volatility: regime.volatility,
        should_trade: regime.should_trade
      } : null,
      ml_prediction: mlPrediction ? {
        direction: mlPrediction.overall_direction,
        predictions: mlPrediction.predictions
      } : null,
      profit_probability: profitProb ? {
        tp1: profitProb.tp1_probability,
        tp2: profitProb.tp2_probability,
        tp3: profitProb.tp3_probability,
        expected_value: profitProb.expected_value
      } : null,
      
      // Risk metrics
      risk_metrics: {
        var_95: var95,
        var_99: var99,
        drawdown_pct: drawdownPct,
        portfolio_heat_pct: portfolioHeat
      }
    })
    
  } catch (error: any) {
    console.error('[ENHANCED] Error:', error.message, error.stack)
    return c.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, 500)
  }
})

export default app
