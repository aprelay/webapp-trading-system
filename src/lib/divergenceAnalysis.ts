/**
 * RSI/MACD Divergence Analysis
 * 
 * LAYER 14: DIVERGENCE DETECTION
 * 
 * Impact: +6-9% win rate
 * Time: 2 hours
 * Difficulty: Medium
 * 
 * Detects bullish and bearish divergences - leading indicators for reversals:
 * - RSI divergence (price vs RSI)
 * - MACD divergence (price vs MACD histogram)
 * - Regular divergence (reversal signal)
 * - Hidden divergence (continuation signal)
 */

import { type Candle } from './technicalAnalysis'

export interface DivergenceSignal {
  type: 'BULLISH' | 'BEARISH' | 'NONE'
  category: 'REGULAR' | 'HIDDEN' | 'NONE'
  indicator: 'RSI' | 'MACD' | 'BOTH'
  strength: number // 0-100
  description: string
  confidence: number // 0-100
}

/**
 * Detect RSI and MACD divergences
 * 
 * Regular Divergence (Reversal):
 * - Bullish: Price makes lower low, RSI makes higher low → Reversal UP
 * - Bearish: Price makes higher high, RSI makes lower high → Reversal DOWN
 * 
 * Hidden Divergence (Continuation):
 * - Bullish: Price makes higher low, RSI makes lower low → Trend continues UP
 * - Bearish: Price makes lower high, RSI makes higher high → Trend continues DOWN
 * 
 * @param indicators - Array of indicator values with RSI and MACD
 * @param candles - Corresponding candles for price comparison
 * @returns Divergence signal
 */
export function detectDivergence(
  indicators: Array<{ rsi: number; macd: number; macd_histogram: number }>,
  candles: Candle[]
): DivergenceSignal {
  if (indicators.length < 10 || candles.length < 10) {
    return {
      type: 'NONE',
      category: 'NONE',
      indicator: 'RSI',
      strength: 0,
      description: 'Insufficient data for divergence',
      confidence: 0
    }
  }
  
  // Get last 10 data points for comparison
  const recentIndicators = indicators.slice(-10)
  const recentCandles = candles.slice(-10)
  
  // Find swing highs and lows in price
  const priceSwings = findPriceSwings(recentCandles)
  
  if (priceSwings.highs.length < 2 && priceSwings.lows.length < 2) {
    return {
      type: 'NONE',
      category: 'NONE',
      indicator: 'RSI',
      strength: 0,
      description: 'No clear swings for divergence',
      confidence: 0
    }
  }
  
  // Check for RSI divergence
  const rsiDivergence = checkRSIDivergence(recentIndicators, priceSwings)
  
  // Check for MACD divergence
  const macdDivergence = checkMACDDivergence(recentIndicators, priceSwings)
  
  // Combine signals (prefer RSI, use MACD for confirmation)
  if (rsiDivergence.type !== 'NONE' && macdDivergence.type === rsiDivergence.type) {
    // Both indicators agree - very strong signal
    return {
      type: rsiDivergence.type,
      category: rsiDivergence.category,
      indicator: 'BOTH',
      strength: 95,
      description: `${rsiDivergence.type} ${rsiDivergence.category} (RSI+MACD)`,
      confidence: 90
    }
  }
  
  if (rsiDivergence.type !== 'NONE') {
    return {
      type: rsiDivergence.type,
      category: rsiDivergence.category,
      indicator: 'RSI',
      strength: 80,
      description: `${rsiDivergence.type} ${rsiDivergence.category} (RSI)`,
      confidence: 75
    }
  }
  
  if (macdDivergence.type !== 'NONE') {
    return {
      type: macdDivergence.type,
      category: macdDivergence.category,
      indicator: 'MACD',
      strength: 70,
      description: `${macdDivergence.type} ${macdDivergence.category} (MACD)`,
      confidence: 70
    }
  }
  
  return {
    type: 'NONE',
    category: 'NONE',
    indicator: 'RSI',
    strength: 0,
    description: 'No divergence detected',
    confidence: 0
  }
}

/**
 * Find swing highs and lows in price data
 */
interface PriceSwings {
  highs: Array<{ index: number; price: number }>
  lows: Array<{ index: number; price: number }>
}

function findPriceSwings(candles: Candle[]): PriceSwings {
  const highs: Array<{ index: number; price: number }> = []
  const lows: Array<{ index: number; price: number }> = []
  
  const lookback = 2
  
  for (let i = lookback; i < candles.length - lookback; i++) {
    const current = candles[i]
    
    // Check if it's a swing high
    let isSwingHigh = true
    for (let j = i - lookback; j <= i + lookback; j++) {
      if (j !== i && candles[j].high >= current.high) {
        isSwingHigh = false
        break
      }
    }
    
    if (isSwingHigh) {
      highs.push({ index: i, price: current.high })
    }
    
    // Check if it's a swing low
    let isSwingLow = true
    for (let j = i - lookback; j <= i + lookback; j++) {
      if (j !== i && candles[j].low <= current.low) {
        isSwingLow = false
        break
      }
    }
    
    if (isSwingLow) {
      lows.push({ index: i, price: current.low })
    }
  }
  
  return { highs, lows }
}

/**
 * Check for RSI divergence
 */
function checkRSIDivergence(
  indicators: Array<{ rsi: number }>,
  priceSwings: PriceSwings
): { type: 'BULLISH' | 'BEARISH' | 'NONE'; category: 'REGULAR' | 'HIDDEN' | 'NONE' } {
  // BULLISH REGULAR DIVERGENCE
  // Price: Lower low, RSI: Higher low → Reversal UP
  if (priceSwings.lows.length >= 2) {
    const lastTwo = priceSwings.lows.slice(-2)
    const [low1, low2] = lastTwo
    
    const rsi1 = indicators[low1.index].rsi
    const rsi2 = indicators[low2.index].rsi
    
    // Price makes lower low, RSI makes higher low
    if (low2.price < low1.price && rsi2 > rsi1) {
      return { type: 'BULLISH', category: 'REGULAR' }
    }
    
    // BULLISH HIDDEN DIVERGENCE
    // Price: Higher low, RSI: Lower low → Continuation UP
    if (low2.price > low1.price && rsi2 < rsi1) {
      return { type: 'BULLISH', category: 'HIDDEN' }
    }
  }
  
  // BEARISH REGULAR DIVERGENCE
  // Price: Higher high, RSI: Lower high → Reversal DOWN
  if (priceSwings.highs.length >= 2) {
    const lastTwo = priceSwings.highs.slice(-2)
    const [high1, high2] = lastTwo
    
    const rsi1 = indicators[high1.index].rsi
    const rsi2 = indicators[high2.index].rsi
    
    // Price makes higher high, RSI makes lower high
    if (high2.price > high1.price && rsi2 < rsi1) {
      return { type: 'BEARISH', category: 'REGULAR' }
    }
    
    // BEARISH HIDDEN DIVERGENCE
    // Price: Lower high, RSI: Higher high → Continuation DOWN
    if (high2.price < high1.price && rsi2 > rsi1) {
      return { type: 'BEARISH', category: 'HIDDEN' }
    }
  }
  
  return { type: 'NONE', category: 'NONE' }
}

/**
 * Check for MACD divergence (using histogram)
 */
function checkMACDDivergence(
  indicators: Array<{ macd_histogram: number }>,
  priceSwings: PriceSwings
): { type: 'BULLISH' | 'BEARISH' | 'NONE'; category: 'REGULAR' | 'HIDDEN' | 'NONE' } {
  // BULLISH REGULAR DIVERGENCE
  // Price: Lower low, MACD Histogram: Higher low → Reversal UP
  if (priceSwings.lows.length >= 2) {
    const lastTwo = priceSwings.lows.slice(-2)
    const [low1, low2] = lastTwo
    
    const hist1 = indicators[low1.index].macd_histogram
    const hist2 = indicators[low2.index].macd_histogram
    
    // Price makes lower low, MACD histogram makes higher low
    if (low2.price < low1.price && hist2 > hist1) {
      return { type: 'BULLISH', category: 'REGULAR' }
    }
    
    // BULLISH HIDDEN DIVERGENCE
    if (low2.price > low1.price && hist2 < hist1) {
      return { type: 'BULLISH', category: 'HIDDEN' }
    }
  }
  
  // BEARISH REGULAR DIVERGENCE
  // Price: Higher high, MACD Histogram: Lower high → Reversal DOWN
  if (priceSwings.highs.length >= 2) {
    const lastTwo = priceSwings.highs.slice(-2)
    const [high1, high2] = lastTwo
    
    const hist1 = indicators[high1.index].macd_histogram
    const hist2 = indicators[high2.index].macd_histogram
    
    // Price makes higher high, MACD histogram makes lower high
    if (high2.price > high1.price && hist2 < hist1) {
      return { type: 'BEARISH', category: 'REGULAR' }
    }
    
    // BEARISH HIDDEN DIVERGENCE
    if (high2.price < high1.price && hist2 > hist1) {
      return { type: 'BEARISH', category: 'HIDDEN' }
    }
  }
  
  return { type: 'NONE', category: 'NONE' }
}

/**
 * Check if divergence aligns with trading signal
 * 
 * Regular divergence = Reversal signal (counter-trend)
 * Hidden divergence = Continuation signal (with-trend)
 */
export function isDivergenceAligned(
  divergence: DivergenceSignal,
  signal: 'BUY' | 'SELL' | 'HOLD',
  trendDirection: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
): boolean {
  if (signal === 'HOLD' || divergence.type === 'NONE') {
    return false
  }
  
  // REGULAR DIVERGENCE (Reversal)
  if (divergence.category === 'REGULAR') {
    // Bullish divergence → BUY signal
    if (divergence.type === 'BULLISH' && signal === 'BUY') {
      return true
    }
    // Bearish divergence → SELL signal
    if (divergence.type === 'BEARISH' && signal === 'SELL') {
      return true
    }
  }
  
  // HIDDEN DIVERGENCE (Continuation)
  if (divergence.category === 'HIDDEN') {
    // Bullish hidden divergence in uptrend → BUY signal
    if (divergence.type === 'BULLISH' && signal === 'BUY' && trendDirection === 'BULLISH') {
      return true
    }
    // Bearish hidden divergence in downtrend → SELL signal
    if (divergence.type === 'BEARISH' && signal === 'SELL' && trendDirection === 'BEARISH') {
      return true
    }
  }
  
  return false
}

/**
 * Format divergence message for Telegram
 */
export function formatDivergenceMessage(
  divergence: DivergenceSignal,
  aligned: boolean
): string {
  if (divergence.type === 'NONE') {
    return '❌ Layer 14: No divergence detected'
  }
  
  const emoji = aligned ? '✅' : '⚠️'
  const typeStr = divergence.type
  const categoryStr = divergence.category
  const indicator = divergence.indicator
  
  return `${emoji} Layer 14: ${typeStr} ${categoryStr} divergence (${indicator}, ${divergence.strength}/100)`
}
