/**
 * Micro Trade Analysis Module
 * 
 * High-frequency 5-minute trading signal generation
 * Targets: 30-35 signals per day
 * Min Confidence: 60%
 * Take Profits: 10/18/25 pips
 * Stop Loss: 8-12 pips
 */

import type { Candle, TechnicalIndicators } from './technicalAnalysis'

export type SetupType = 'BREAKOUT' | 'CONTINUATION' | 'REVERSAL' | 'BOUNCE' | 'PATTERN'
export type Trend = 'BULLISH' | 'BEARISH' | 'NEUTRAL'

export interface MicroTradeSetup {
  signal_type: 'BUY' | 'SELL' | 'HOLD'
  setup_type: SetupType
  price: number
  stop_loss: number
  take_profit_1: number
  take_profit_2: number
  take_profit_3: number
  confidence: number
  trend_5m: Trend
  trend_15m: Trend
  reason: string
  indicators_5m: {
    rsi: number
    macd: number
    macd_signal: number
    macd_histogram: number
    adx: number
    stochastic_k: number
    stochastic_d: number
    ema_20: number
    volume: number
  }
}

/**
 * Determine market trend from indicators
 */
function determineTrend(indicators: TechnicalIndicators): Trend {
  let bullishCount = 0
  let bearishCount = 0
  
  // RSI
  if (indicators.rsi_14 > 55) bullishCount++
  if (indicators.rsi_14 < 45) bearishCount++
  
  // MACD
  if (indicators.macd > indicators.macd_signal) bullishCount++
  if (indicators.macd < indicators.macd_signal) bearishCount++
  
  // Price vs EMAs
  if (indicators.ema_12 > indicators.ema_26) bullishCount++
  if (indicators.ema_12 < indicators.ema_26) bearishCount++
  
  // SMAs
  if (indicators.sma_20 > indicators.sma_50) bullishCount++
  if (indicators.sma_20 < indicators.sma_50) bearishCount++
  
  if (bullishCount > bearishCount + 1) return 'BULLISH'
  if (bearishCount > bullishCount + 1) return 'BEARISH'
  return 'NEUTRAL'
}

/**
 * Setup 1: BREAKOUT
 * Price breaks resistance/support with volume spike
 */
function detectBreakout(
  currentPrice: number,
  candles: Candle[],
  indicators: TechnicalIndicators,
  trend: Trend
): MicroTradeSetup | null {
  if (candles.length < 20) return null
  
  // Calculate recent high/low (resistance/support)
  const recentCandles = candles.slice(-20)
  const recentHighs = recentCandles.map(c => c.high)
  const recentLows = recentCandles.map(c => c.low)
  const resistance = Math.max(...recentHighs)
  const support = Math.min(...recentLows)
  
  // Calculate average volume
  const avgVolume = recentCandles.reduce((sum, c) => sum + (c.volume || 1), 0) / recentCandles.length
  const currentVolume = candles[candles.length - 1].volume || 1
  const volumeSpike = currentVolume > avgVolume * 1.3
  
  // Bullish breakout
  if (
    currentPrice > resistance &&
    volumeSpike &&
    indicators.rsi_14 > 50 &&
    indicators.macd > 0 &&
    indicators.adx > 25 &&
    trend === 'BULLISH'
  ) {
    const stopLoss = Math.max(support, currentPrice - (currentPrice * 0.0027)) // ~12 pips
    const tp1 = currentPrice + (currentPrice * 0.0022) // ~10 pips
    const tp2 = currentPrice + (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice + (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 65
    if (indicators.adx > 35) confidence += 5
    if (indicators.rsi_14 > 60 && indicators.rsi_14 < 75) confidence += 5
    if (currentVolume > avgVolume * 1.5) confidence += 5
    
    return {
      signal_type: 'BUY',
      setup_type: 'BREAKOUT',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 85),
      trend_5m: trend,
      trend_15m: trend,
      reason: `Bullish breakout above $${resistance.toFixed(2)} with ${volumeSpike ? 'strong' : 'moderate'} volume`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: currentVolume
      }
    }
  }
  
  // Bearish breakout
  if (
    currentPrice < support &&
    volumeSpike &&
    indicators.rsi_14 < 50 &&
    indicators.macd < 0 &&
    indicators.adx > 25 &&
    trend === 'BEARISH'
  ) {
    const stopLoss = Math.min(resistance, currentPrice + (currentPrice * 0.0027)) // ~12 pips
    const tp1 = currentPrice - (currentPrice * 0.0022) // ~10 pips
    const tp2 = currentPrice - (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice - (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 65
    if (indicators.adx > 35) confidence += 5
    if (indicators.rsi_14 < 40 && indicators.rsi_14 > 25) confidence += 5
    if (currentVolume > avgVolume * 1.5) confidence += 5
    
    return {
      signal_type: 'SELL',
      setup_type: 'BREAKOUT',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 85),
      trend_5m: trend,
      trend_15m: trend,
      reason: `Bearish breakdown below $${support.toFixed(2)} with ${volumeSpike ? 'strong' : 'moderate'} volume`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: currentVolume
      }
    }
  }
  
  return null
}

/**
 * Setup 2: CONTINUATION
 * Strong trend on 5m with pullback entry
 */
function detectContinuation(
  currentPrice: number,
  indicators: TechnicalIndicators,
  trend_5m: Trend,
  trend_15m: Trend
): MicroTradeSetup | null {
  // Both timeframes must agree
  if (trend_5m !== trend_15m) return null
  
  // Bullish continuation
  if (
    trend_5m === 'BULLISH' &&
    indicators.adx > 28 &&
    currentPrice > indicators.ema_12 &&
    indicators.rsi_14 >= 45 && indicators.rsi_14 <= 70 &&
    indicators.macd > indicators.macd_signal
  ) {
    const stopLoss = currentPrice - (currentPrice * 0.0020) // ~9 pips
    const tp1 = currentPrice + (currentPrice * 0.0027) // ~12 pips
    const tp2 = currentPrice + (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice + (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 62
    if (indicators.adx > 35) confidence += 6
    if (indicators.rsi_14 > 50 && indicators.rsi_14 < 65) confidence += 5
    if (indicators.plus_di > indicators.minus_di) confidence += 4
    
    return {
      signal_type: 'BUY',
      setup_type: 'CONTINUATION',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 80),
      trend_5m,
      trend_15m,
      reason: `Bullish continuation - pullback in strong uptrend (ADX ${indicators.adx.toFixed(0)})`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  // Bearish continuation
  if (
    trend_5m === 'BEARISH' &&
    indicators.adx > 28 &&
    currentPrice < indicators.ema_12 &&
    indicators.rsi_14 >= 30 && indicators.rsi_14 <= 55 &&
    indicators.macd < indicators.macd_signal
  ) {
    const stopLoss = currentPrice + (currentPrice * 0.0020) // ~9 pips
    const tp1 = currentPrice - (currentPrice * 0.0027) // ~12 pips
    const tp2 = currentPrice - (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice - (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 62
    if (indicators.adx > 35) confidence += 6
    if (indicators.rsi_14 < 50 && indicators.rsi_14 > 35) confidence += 5
    if (indicators.minus_di > indicators.plus_di) confidence += 4
    
    return {
      signal_type: 'SELL',
      setup_type: 'CONTINUATION',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 80),
      trend_5m,
      trend_15m,
      reason: `Bearish continuation - pullback in strong downtrend (ADX ${indicators.adx.toFixed(0)})`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  return null
}

/**
 * Setup 3: REVERSAL
 * Oversold/Overbought bounce
 */
function detectReversal(
  currentPrice: number,
  candles: Candle[],
  indicators: TechnicalIndicators
): MicroTradeSetup | null {
  if (candles.length < 10) return null
  
  const recentCandles = candles.slice(-10)
  const support = Math.min(...recentCandles.map(c => c.low))
  const resistance = Math.max(...recentCandles.map(c => c.high))
  
  // Bullish reversal (oversold bounce)
  if (
    indicators.rsi_14 < 30 &&
    indicators.stochastic_k < 25 &&
    currentPrice < support * 1.001 && // Near support
    indicators.macd_histogram > -0.5 // Momentum slowing
  ) {
    const stopLoss = currentPrice - (currentPrice * 0.0020) // ~9 pips
    const tp1 = currentPrice + (currentPrice * 0.0022) // ~10 pips
    const tp2 = currentPrice + (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice + (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 60
    if (indicators.rsi_14 < 25) confidence += 5
    if (indicators.stochastic_k < 20) confidence += 5
    
    return {
      signal_type: 'BUY',
      setup_type: 'REVERSAL',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 75),
      trend_5m: 'NEUTRAL',
      trend_15m: 'NEUTRAL',
      reason: `Bullish reversal - oversold bounce (RSI ${indicators.rsi_14.toFixed(0)}, Stoch ${indicators.stochastic_k.toFixed(0)})`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  // Bearish reversal (overbought rejection)
  if (
    indicators.rsi_14 > 70 &&
    indicators.stochastic_k > 75 &&
    currentPrice > resistance * 0.999 && // Near resistance
    indicators.macd_histogram < 0.5 // Momentum slowing
  ) {
    const stopLoss = currentPrice + (currentPrice * 0.0020) // ~9 pips
    const tp1 = currentPrice - (currentPrice * 0.0022) // ~10 pips
    const tp2 = currentPrice - (currentPrice * 0.0040) // ~18 pips
    const tp3 = currentPrice - (currentPrice * 0.0055) // ~25 pips
    
    let confidence = 60
    if (indicators.rsi_14 > 75) confidence += 5
    if (indicators.stochastic_k > 80) confidence += 5
    
    return {
      signal_type: 'SELL',
      setup_type: 'REVERSAL',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 75),
      trend_5m: 'NEUTRAL',
      trend_15m: 'NEUTRAL',
      reason: `Bearish reversal - overbought rejection (RSI ${indicators.rsi_14.toFixed(0)}, Stoch ${indicators.stochastic_k.toFixed(0)})`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  return null
}

/**
 * Setup 4: BOUNCE
 * Range-bound support/resistance bounce
 */
function detectBounce(
  currentPrice: number,
  candles: Candle[],
  indicators: TechnicalIndicators
): MicroTradeSetup | null {
  if (candles.length < 20 || indicators.adx > 25) return null // Skip in trending markets
  
  const recentCandles = candles.slice(-20)
  const highs = recentCandles.map(c => c.high)
  const lows = recentCandles.map(c => c.low)
  const resistance = Math.max(...highs)
  const support = Math.min(...lows)
  const range = resistance - support
  const middle = support + (range / 2)
  
  // Range too small
  if (range < currentPrice * 0.002) return null // Less than ~9 pips
  
  // Bullish bounce from support
  if (
    currentPrice < support * 1.002 && // Within 0.2% of support
    indicators.rsi_14 < 40 &&
    indicators.stochastic_k < 35
  ) {
    const stopLoss = support - (currentPrice * 0.0018) // ~8 pips below support
    const tp1 = middle // Target middle of range
    const tp2 = middle + (range * 0.3)
    const tp3 = resistance * 0.998
    
    let confidence = 60
    if (indicators.rsi_14 < 30) confidence += 5
    if (indicators.stochastic_k < 25 && indicators.stochastic_d < 25) confidence += 3
    
    return {
      signal_type: 'BUY',
      setup_type: 'BOUNCE',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 72),
      trend_5m: 'NEUTRAL',
      trend_15m: 'NEUTRAL',
      reason: `Support bounce in range $${support.toFixed(2)}-$${resistance.toFixed(2)}`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  // Bearish bounce from resistance
  if (
    currentPrice > resistance * 0.998 && // Within 0.2% of resistance
    indicators.rsi_14 > 60 &&
    indicators.stochastic_k > 65
  ) {
    const stopLoss = resistance + (currentPrice * 0.0018) // ~8 pips above resistance
    const tp1 = middle // Target middle of range
    const tp2 = middle - (range * 0.3)
    const tp3 = support * 1.002
    
    let confidence = 60
    if (indicators.rsi_14 > 70) confidence += 5
    if (indicators.stochastic_k > 75 && indicators.stochastic_d > 75) confidence += 3
    
    return {
      signal_type: 'SELL',
      setup_type: 'BOUNCE',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: Math.min(confidence, 72),
      trend_5m: 'NEUTRAL',
      trend_15m: 'NEUTRAL',
      reason: `Resistance rejection in range $${support.toFixed(2)}-$${resistance.toFixed(2)}`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  return null
}

/**
 * Setup 5: PATTERN
 * Simple pattern recognition (flags, wedges)
 */
function detectPattern(
  currentPrice: number,
  candles: Candle[],
  indicators: TechnicalIndicators,
  trend: Trend
): MicroTradeSetup | null {
  if (candles.length < 15) return null
  
  const recentCandles = candles.slice(-10)
  const highs = recentCandles.map(c => c.high)
  const lows = recentCandles.map(c => c.low)
  
  // Simple bull flag detection
  if (
    trend === 'BULLISH' &&
    indicators.adx > 30 &&
    Math.max(...highs) - Math.min(...lows) < currentPrice * 0.002 && // Tight consolidation
    currentPrice > indicators.ema_12 &&
    indicators.rsi_14 > 45 && indicators.rsi_14 < 65
  ) {
    const stopLoss = Math.min(...lows) - (currentPrice * 0.0018)
    const tp1 = currentPrice + (currentPrice * 0.0027)
    const tp2 = currentPrice + (currentPrice * 0.0040)
    const tp3 = currentPrice + (currentPrice * 0.0055)
    
    return {
      signal_type: 'BUY',
      setup_type: 'PATTERN',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: 68,
      trend_5m: trend,
      trend_15m: trend,
      reason: `Bull flag pattern - tight consolidation in uptrend`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  // Simple bear flag detection
  if (
    trend === 'BEARISH' &&
    indicators.adx > 30 &&
    Math.max(...highs) - Math.min(...lows) < currentPrice * 0.002 && // Tight consolidation
    currentPrice < indicators.ema_12 &&
    indicators.rsi_14 > 35 && indicators.rsi_14 < 55
  ) {
    const stopLoss = Math.max(...highs) + (currentPrice * 0.0018)
    const tp1 = currentPrice - (currentPrice * 0.0027)
    const tp2 = currentPrice - (currentPrice * 0.0040)
    const tp3 = currentPrice - (currentPrice * 0.0055)
    
    return {
      signal_type: 'SELL',
      setup_type: 'PATTERN',
      price: currentPrice,
      stop_loss: stopLoss,
      take_profit_1: tp1,
      take_profit_2: tp2,
      take_profit_3: tp3,
      confidence: 68,
      trend_5m: trend,
      trend_15m: trend,
      reason: `Bear flag pattern - tight consolidation in downtrend`,
      indicators_5m: {
        rsi: indicators.rsi_14,
        macd: indicators.macd,
        macd_signal: indicators.macd_signal,
        macd_histogram: indicators.macd_histogram,
        adx: indicators.adx,
        stochastic_k: indicators.stochastic_k,
        stochastic_d: indicators.stochastic_d,
        ema_20: indicators.sma_20,
        volume: 0
      }
    }
  }
  
  return null
}

/**
 * Main function: Analyze 5-minute candles and generate micro trade signal
 */
export function generateMicroTradeSignal(
  candles_5m: Candle[],
  indicators_5m: TechnicalIndicators,
  candles_15m: Candle[],
  indicators_15m: TechnicalIndicators
): MicroTradeSetup | null {
  if (candles_5m.length < 20) return null
  
  const currentPrice = candles_5m[candles_5m.length - 1].close
  const trend_5m = determineTrend(indicators_5m)
  const trend_15m = determineTrend(indicators_15m)
  
  // Try each setup type in priority order
  const setups = [
    detectBreakout(currentPrice, candles_5m, indicators_5m, trend_5m),
    detectContinuation(currentPrice, indicators_5m, trend_5m, trend_15m),
    detectPattern(currentPrice, candles_5m, indicators_5m, trend_5m),
    detectReversal(currentPrice, candles_5m, indicators_5m),
    detectBounce(currentPrice, candles_5m, indicators_5m)
  ]
  
  // Return first valid setup (highest priority)
  for (const setup of setups) {
    if (setup && setup.confidence >= 60) {
      return setup
    }
  }
  
  return null
}
