/**
 * INTELLIGENT MARKET FLIP DETECTION SYSTEM
 * 
 * This system detects trend reversals and market direction changes using:
 * 1. Multi-Timeframe Analysis (5m, 15m, 1h alignment)
 * 2. Momentum Shift Detection (RSI, MACD divergence)
 * 3. Structure Break Analysis (Support/Resistance breaks)
 * 4. Volume Confirmation (Institutional activity)
 * 5. Smart Money Detection (Price action patterns)
 * 
 * Accuracy Target: 75-85% for flip detection
 */

import type { Candle, TechnicalIndicators } from './technicalAnalysis'

export interface FlipSignal {
  is_flip: boolean              // Is this a market flip?
  flip_type: 'BULLISH_FLIP' | 'BEARISH_FLIP' | 'NO_FLIP'
  flip_confidence: number       // 0-100%
  flip_strength: 'WEAK' | 'MODERATE' | 'STRONG' | 'VERY_STRONG'
  flip_reasons: string[]        // Why we detected a flip
  entry_zone: {
    optimal_entry: number       // Best entry price
    stop_loss: number           // Invalidation point
    targets: number[]           // TP levels
  }
  timeframe_alignment: {
    five_min: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
    fifteen_min: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
    one_hour: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
    aligned: boolean            // All timeframes agree?
  }
  momentum_shift: {
    rsi_divergence: boolean     // RSI showing divergence?
    macd_crossover: boolean     // MACD crossed?
    momentum_score: number      // 0-100
  }
  structure_break: {
    support_broken: boolean     // Support level broken?
    resistance_broken: boolean  // Resistance level broken?
    key_level: number           // The level that broke
    break_confirmed: boolean    // Volume confirmed?
  }
  smart_money: {
    liquidity_grab: boolean     // Did price grab liquidity?
    stop_hunt: boolean          // Stop hunt detected?
    institutional_volume: boolean // Large volume spike?
  }
}

/**
 * MAIN FLIP DETECTION FUNCTION
 * Analyzes market data and detects trend flips
 */
export function detectMarketFlip(
  currentPrice: number,
  indicators: TechnicalIndicators,
  candles: Candle[],
  mtfData?: {
    fiveMin: TechnicalIndicators
    fifteenMin: TechnicalIndicators
    oneHour: TechnicalIndicators
  }
): FlipSignal {
  
  const reasons: string[] = []
  let flipConfidence = 0
  let flipType: 'BULLISH_FLIP' | 'BEARISH_FLIP' | 'NO_FLIP' = 'NO_FLIP'
  
  // ========================================================================
  // LAYER 1: MULTI-TIMEFRAME ALIGNMENT (30 points)
  // ========================================================================
  
  const timeframeAlignment = analyzeTimeframeAlignment(currentPrice, indicators, mtfData)
  
  if (timeframeAlignment.aligned) {
    flipConfidence += 30
    reasons.push(`Multi-timeframe alignment: All timeframes showing ${timeframeAlignment.one_hour} bias`)
    
    if (timeframeAlignment.one_hour === 'BULLISH' && timeframeAlignment.fifteen_min === 'BULLISH') {
      flipType = 'BULLISH_FLIP'
    } else if (timeframeAlignment.one_hour === 'BEARISH' && timeframeAlignment.fifteen_min === 'BEARISH') {
      flipType = 'BEARISH_FLIP'
    }
  }
  
  // ========================================================================
  // LAYER 2: MOMENTUM SHIFT DETECTION (25 points)
  // ========================================================================
  
  const momentumShift = detectMomentumShift(currentPrice, indicators, candles)
  
  if (momentumShift.rsi_divergence) {
    flipConfidence += 15
    reasons.push('RSI divergence detected - momentum shifting')
  }
  
  if (momentumShift.macd_crossover) {
    flipConfidence += 10
    reasons.push('MACD crossover confirmed - trend change imminent')
  }
  
  // Update flip type based on momentum
  if (momentumShift.momentum_score > 70) {
    if (indicators.rsi_14 < 50 && indicators.macd > indicators.macd_signal) {
      flipType = 'BULLISH_FLIP'
    } else if (indicators.rsi_14 > 50 && indicators.macd < indicators.macd_signal) {
      flipType = 'BEARISH_FLIP'
    }
  }
  
  // ========================================================================
  // LAYER 3: STRUCTURE BREAK ANALYSIS (25 points)
  // ========================================================================
  
  const structureBreak = detectStructureBreak(currentPrice, candles)
  
  if (structureBreak.resistance_broken && structureBreak.break_confirmed) {
    flipConfidence += 25
    reasons.push(`Resistance broken at $${structureBreak.key_level.toFixed(2)} with volume confirmation`)
    flipType = 'BULLISH_FLIP'
  } else if (structureBreak.support_broken && structureBreak.break_confirmed) {
    flipConfidence += 25
    reasons.push(`Support broken at $${structureBreak.key_level.toFixed(2)} with volume confirmation`)
    flipType = 'BEARISH_FLIP'
  } else if (structureBreak.resistance_broken || structureBreak.support_broken) {
    flipConfidence += 10
    reasons.push('Key level broken but awaiting volume confirmation')
  }
  
  // ========================================================================
  // LAYER 4: SMART MONEY DETECTION (20 points)
  // ========================================================================
  
  const smartMoney = detectSmartMoney(currentPrice, candles, indicators)
  
  if (smartMoney.liquidity_grab) {
    flipConfidence += 10
    reasons.push('Liquidity grab detected - smart money accumulating')
  }
  
  if (smartMoney.stop_hunt) {
    flipConfidence += 5
    reasons.push('Stop hunt pattern - reversal likely')
  }
  
  if (smartMoney.institutional_volume) {
    flipConfidence += 5
    reasons.push('Institutional volume spike - big players entering')
  }
  
  // ========================================================================
  // LAYER 5: ADVANCED FLIP CONFIRMATION
  // ========================================================================
  
  // ADX trend strength check
  if (indicators.adx > 25 && indicators.adx < 40) {
    // Good range for flip detection (not too weak, not too strong)
    flipConfidence += 5
    reasons.push('ADX optimal for trend change detection')
  }
  
  // Stochastic flip confirmation
  if (indicators.stochastic_k < 20 && indicators.stochastic_k > indicators.stochastic_d) {
    flipConfidence += 5
    reasons.push('Stochastic oversold crossover - bullish flip signal')
    if (flipType === 'NO_FLIP') flipType = 'BULLISH_FLIP'
  } else if (indicators.stochastic_k > 80 && indicators.stochastic_k < indicators.stochastic_d) {
    flipConfidence += 5
    reasons.push('Stochastic overbought crossover - bearish flip signal')
    if (flipType === 'NO_FLIP') flipType = 'BEARISH_FLIP'
  }
  
  // Ichimoku cloud flip
  const priceAboveCloud = currentPrice > Math.max(indicators.ichimoku_senkou_a, indicators.ichimoku_senkou_b)
  const priceBelowCloud = currentPrice < Math.min(indicators.ichimoku_senkou_a, indicators.ichimoku_senkou_b)
  
  if (priceAboveCloud && indicators.ichimoku_tenkan > indicators.ichimoku_kijun) {
    flipConfidence += 5
    reasons.push('Ichimoku bullish flip - price above cloud with TK cross')
    if (flipType === 'NO_FLIP') flipType = 'BULLISH_FLIP'
  } else if (priceBelowCloud && indicators.ichimoku_tenkan < indicators.ichimoku_kijun) {
    flipConfidence += 5
    reasons.push('Ichimoku bearish flip - price below cloud with TK cross')
    if (flipType === 'NO_FLIP') flipType = 'BEARISH_FLIP'
  }
  
  // ========================================================================
  // CALCULATE FLIP STRENGTH
  // ========================================================================
  
  let flipStrength: 'WEAK' | 'MODERATE' | 'STRONG' | 'VERY_STRONG' = 'WEAK'
  
  if (flipConfidence >= 80) {
    flipStrength = 'VERY_STRONG'
  } else if (flipConfidence >= 65) {
    flipStrength = 'STRONG'
  } else if (flipConfidence >= 50) {
    flipStrength = 'MODERATE'
  }
  
  // ========================================================================
  // CALCULATE ENTRY ZONES
  // ========================================================================
  
  const entryZone = calculateEntryZone(currentPrice, indicators, flipType)
  
  // ========================================================================
  // RETURN FLIP SIGNAL
  // ========================================================================
  
  const isFlip = flipConfidence >= 50 && flipType !== 'NO_FLIP'
  
  return {
    is_flip: isFlip,
    flip_type: flipType,
    flip_confidence: Math.min(flipConfidence, 100),
    flip_strength: flipStrength,
    flip_reasons: reasons,
    entry_zone: entryZone,
    timeframe_alignment: timeframeAlignment,
    momentum_shift: momentumShift,
    structure_break: structureBreak,
    smart_money: smartMoney
  }
}

/**
 * ANALYZE TIMEFRAME ALIGNMENT
 * Check if multiple timeframes agree on direction
 */
function analyzeTimeframeAlignment(
  currentPrice: number,
  indicators: TechnicalIndicators,
  mtfData?: {
    fiveMin: TechnicalIndicators
    fifteenMin: TechnicalIndicators
    oneHour: TechnicalIndicators
  }
) {
  const determineBias = (ind: TechnicalIndicators): 'BULLISH' | 'BEARISH' | 'NEUTRAL' => {
    let bullishCount = 0
    let bearishCount = 0
    
    // MACD
    if (ind.macd > ind.macd_signal) bullishCount++
    else bearishCount++
    
    // RSI
    if (ind.rsi_14 > 50) bullishCount++
    else bearishCount++
    
    // Moving averages
    if (ind.ema_12 > ind.ema_26) bullishCount++
    else bearishCount++
    
    if (bullishCount > bearishCount) return 'BULLISH'
    if (bearishCount > bullishCount) return 'BEARISH'
    return 'NEUTRAL'
  }
  
  const fiveMinBias = mtfData ? determineBias(mtfData.fiveMin) : determineBias(indicators)
  const fifteenMinBias = mtfData ? determineBias(mtfData.fifteenMin) : determineBias(indicators)
  const oneHourBias = mtfData ? determineBias(mtfData.oneHour) : determineBias(indicators)
  
  const aligned = (fiveMinBias === fifteenMinBias && fifteenMinBias === oneHourBias && oneHourBias !== 'NEUTRAL')
  
  return {
    five_min: fiveMinBias,
    fifteen_min: fifteenMinBias,
    one_hour: oneHourBias,
    aligned: aligned
  }
}

/**
 * DETECT MOMENTUM SHIFT
 * Look for divergences and momentum changes
 */
function detectMomentumShift(
  currentPrice: number,
  indicators: TechnicalIndicators,
  candles: Candle[]
): FlipSignal['momentum_shift'] {
  
  let momentumScore = 0
  
  // RSI Divergence Detection (simplified - check last 10 candles)
  let rsiDivergence = false
  if (candles.length >= 10) {
    const recentCandles = candles.slice(-10)
    const prices = recentCandles.map(c => c.close)
    
    const priceHighs = Math.max(...prices)
    const priceLows = Math.min(...prices)
    
    // Bullish divergence: Price making lower lows but RSI making higher lows
    if (currentPrice < priceLows * 1.01 && indicators.rsi_14 > 35) {
      rsiDivergence = true
      momentumScore += 40
    }
    
    // Bearish divergence: Price making higher highs but RSI making lower highs
    if (currentPrice > priceHighs * 0.99 && indicators.rsi_14 < 65) {
      rsiDivergence = true
      momentumScore += 40
    }
  }
  
  // MACD Crossover
  const macdCrossover = Math.abs(indicators.macd - indicators.macd_signal) < indicators.atr_14 * 0.1
  if (macdCrossover) {
    momentumScore += 30
  }
  
  // Momentum from histogram
  if (indicators.macd_histogram > 0 && indicators.macd > indicators.macd_signal) {
    momentumScore += 15
  } else if (indicators.macd_histogram < 0 && indicators.macd < indicators.macd_signal) {
    momentumScore += 15
  }
  
  // ADX momentum
  if (indicators.adx > 25 && indicators.adx < 45) {
    momentumScore += 15
  }
  
  return {
    rsi_divergence: rsiDivergence,
    macd_crossover: macdCrossover,
    momentum_score: Math.min(momentumScore, 100)
  }
}

/**
 * DETECT STRUCTURE BREAK
 * Identify key support/resistance breaks
 */
function detectStructureBreak(
  currentPrice: number,
  candles: Candle[]
): FlipSignal['structure_break'] {
  
  if (candles.length < 20) {
    return {
      support_broken: false,
      resistance_broken: false,
      key_level: currentPrice,
      break_confirmed: false
    }
  }
  
  const recentCandles = candles.slice(-20)
  const closes = recentCandles.map(c => c.close)
  const highs = recentCandles.map(c => c.high)
  const lows = recentCandles.map(c => c.low)
  const volumes = recentCandles.map(c => c.volume || 0)
  
  // Find recent swing high and low
  const swingHigh = Math.max(...highs.slice(0, -2))
  const swingLow = Math.min(...lows.slice(0, -2))
  
  const avgVolume = volumes.reduce((a, b) => a + b, 0) / volumes.length
  const currentVolume = volumes[volumes.length - 1]
  
  const volumeConfirmation = currentVolume > avgVolume * 1.3
  
  // Check for resistance break
  const resistanceBroken = currentPrice > swingHigh * 1.001
  
  // Check for support break
  const supportBroken = currentPrice < swingLow * 0.999
  
  const keyLevel = resistanceBroken ? swingHigh : swingLow
  const breakConfirmed = (resistanceBroken || supportBroken) && volumeConfirmation
  
  return {
    support_broken: supportBroken,
    resistance_broken: resistanceBroken,
    key_level: keyLevel,
    break_confirmed: breakConfirmed
  }
}

/**
 * DETECT SMART MONEY ACTIVITY
 * Look for institutional patterns
 */
function detectSmartMoney(
  currentPrice: number,
  candles: Candle[],
  indicators: TechnicalIndicators
): FlipSignal['smart_money'] {
  
  if (candles.length < 10) {
    return {
      liquidity_grab: false,
      stop_hunt: false,
      institutional_volume: false
    }
  }
  
  const recentCandles = candles.slice(-10)
  const volumes = recentCandles.map(c => c.volume || 0)
  const closes = recentCandles.map(c => c.close)
  const lows = recentCandles.map(c => c.low)
  const highs = recentCandles.map(c => c.high)
  
  const avgVolume = volumes.reduce((a, b) => a + b, 0) / volumes.length
  const currentVolume = volumes[volumes.length - 1]
  
  // Institutional volume (2x average)
  const institutionalVolume = currentVolume > avgVolume * 2.0
  
  // Liquidity grab: Price quickly moved below recent low then reversed
  const recentLow = Math.min(...lows.slice(0, -1))
  const liquidityGrab = currentPrice > recentLow * 1.002 && 
                        lows[lows.length - 1] < recentLow * 0.999
  
  // Stop hunt: Long wick on candle (price spiked then reversed)
  const lastCandle = recentCandles[recentCandles.length - 1]
  const wickSize = Math.max(
    lastCandle.high - Math.max(lastCandle.open, lastCandle.close),
    Math.min(lastCandle.open, lastCandle.close) - lastCandle.low
  )
  const bodySize = Math.abs(lastCandle.close - lastCandle.open)
  const stopHunt = wickSize > bodySize * 2 && institutionalVolume
  
  return {
    liquidity_grab: liquidityGrab,
    stop_hunt: stopHunt,
    institutional_volume: institutionalVolume
  }
}

/**
 * CALCULATE ENTRY ZONE
 * Determine optimal entry, stop loss, and targets
 */
function calculateEntryZone(
  currentPrice: number,
  indicators: TechnicalIndicators,
  flipType: 'BULLISH_FLIP' | 'BEARISH_FLIP' | 'NO_FLIP'
) {
  const atr = indicators.atr_14
  
  if (flipType === 'BULLISH_FLIP') {
    // For bullish flip, enter on pullback
    const optimalEntry = currentPrice - (atr * 0.3) // Small pullback entry
    const stopLoss = currentPrice - (atr * 1.5)
    const targets = [
      currentPrice + (atr * 2.0),  // TP1: 2R
      currentPrice + (atr * 3.5),  // TP2: 3.5R
      currentPrice + (atr * 5.0)   // TP3: 5R
    ]
    
    return {
      optimal_entry: optimalEntry,
      stop_loss: stopLoss,
      targets: targets
    }
    
  } else if (flipType === 'BEARISH_FLIP') {
    // For bearish flip, enter on bounce
    const optimalEntry = currentPrice + (atr * 0.3) // Small bounce entry
    const stopLoss = currentPrice + (atr * 1.5)
    const targets = [
      currentPrice - (atr * 2.0),  // TP1: 2R
      currentPrice - (atr * 3.5),  // TP2: 3.5R
      currentPrice - (atr * 5.0)   // TP3: 5R
    ]
    
    return {
      optimal_entry: optimalEntry,
      stop_loss: stopLoss,
      targets: targets
    }
    
  } else {
    // No flip detected
    return {
      optimal_entry: currentPrice,
      stop_loss: currentPrice,
      targets: [currentPrice, currentPrice, currentPrice]
    }
  }
}

/**
 * GENERATE FLIP SIGNAL DESCRIPTION
 * Human-readable explanation of the flip
 */
export function getFlipDescription(flip: FlipSignal): string {
  if (!flip.is_flip) {
    return 'No market flip detected. Current trend continuing.'
  }
  
  const direction = flip.flip_type === 'BULLISH_FLIP' ? 'BULLISH' : 'BEARISH'
  const emoji = flip.flip_type === 'BULLISH_FLIP' ? '🟢' : '🔴'
  
  let description = `${emoji} ${flip.flip_strength} ${direction} FLIP DETECTED!\n\n`
  description += `Confidence: ${flip.flip_confidence.toFixed(0)}%\n`
  description += `Strength: ${flip.flip_strength}\n\n`
  
  description += `📊 Flip Reasons:\n`
  flip.flip_reasons.forEach((reason, i) => {
    description += `${i + 1}. ${reason}\n`
  })
  
  description += `\n🎯 Entry Strategy:\n`
  description += `• Optimal Entry: $${flip.entry_zone.optimal_entry.toFixed(2)}\n`
  description += `• Stop Loss: $${flip.entry_zone.stop_loss.toFixed(2)}\n`
  description += `• TP1: $${flip.entry_zone.targets[0].toFixed(2)}\n`
  description += `• TP2: $${flip.entry_zone.targets[1].toFixed(2)}\n`
  description += `• TP3: $${flip.entry_zone.targets[2].toFixed(2)}\n`
  
  if (flip.timeframe_alignment.aligned) {
    description += `\n✅ Multi-Timeframe Aligned: All timeframes showing ${flip.timeframe_alignment.one_hour} bias\n`
  }
  
  if (flip.structure_break.break_confirmed) {
    description += `\n🔥 Structure Break: Key level at $${flip.structure_break.key_level.toFixed(2)} broken with volume!\n`
  }
  
  if (flip.smart_money.liquidity_grab || flip.smart_money.stop_hunt) {
    description += `\n💰 Smart Money Activity: Institutional players detected\n`
  }
  
  return description
}
