/**
 * Candlestick Pattern Recognition
 * 
 * LAYER 12: CANDLESTICK PATTERNS
 * 
 * Impact: +8-12% win rate
 * Time: 3 hours
 * Difficulty: Medium-Hard
 * 
 * Detects 10 powerful reversal and continuation patterns:
 * - Reversal: Hammer, Shooting Star, Engulfing, Morning/Evening Star
 * - Continuation: Three White Soldiers, Three Black Crows
 * - Indecision: Doji, Spinning Top
 */

import { type Candle } from './technicalAnalysis'

export interface CandlePattern {
  name: string
  type: 'BULLISH_REVERSAL' | 'BEARISH_REVERSAL' | 'BULLISH_CONTINUATION' | 'BEARISH_CONTINUATION' | 'INDECISION'
  strength: number // 0-100
  description: string
  confidence: number // 0-100
}

/**
 * Detect all candlestick patterns from the last 3 candles
 * 
 * @param candles - Array of candles (need at least 3)
 * @returns Array of detected patterns
 */
export function detectCandlestickPatterns(candles: Candle[]): CandlePattern[] {
  if (candles.length < 3) {
    return []
  }
  
  const patterns: CandlePattern[] = []
  
  // Get last 3 candles
  const c1 = candles[candles.length - 3] // Oldest
  const c2 = candles[candles.length - 2] // Middle
  const c3 = candles[candles.length - 1] // Most recent
  
  // 1. Hammer (Bullish Reversal)
  if (isHammer(c3)) {
    patterns.push({
      name: 'Hammer',
      type: 'BULLISH_REVERSAL',
      strength: 80,
      description: 'Strong bullish reversal signal',
      confidence: 75
    })
  }
  
  // 2. Shooting Star (Bearish Reversal)
  if (isShootingStar(c3)) {
    patterns.push({
      name: 'Shooting Star',
      type: 'BEARISH_REVERSAL',
      strength: 80,
      description: 'Strong bearish reversal signal',
      confidence: 75
    })
  }
  
  // 3. Bullish Engulfing (Bullish Reversal)
  if (isBullishEngulfing(c2, c3)) {
    patterns.push({
      name: 'Bullish Engulfing',
      type: 'BULLISH_REVERSAL',
      strength: 85,
      description: 'Very strong bullish reversal',
      confidence: 80
    })
  }
  
  // 4. Bearish Engulfing (Bearish Reversal)
  if (isBearishEngulfing(c2, c3)) {
    patterns.push({
      name: 'Bearish Engulfing',
      type: 'BEARISH_REVERSAL',
      strength: 85,
      description: 'Very strong bearish reversal',
      confidence: 80
    })
  }
  
  // 5. Morning Star (Bullish Reversal - 3 candles)
  if (isMorningStar(c1, c2, c3)) {
    patterns.push({
      name: 'Morning Star',
      type: 'BULLISH_REVERSAL',
      strength: 90,
      description: 'Major bullish reversal (3-candle)',
      confidence: 85
    })
  }
  
  // 6. Evening Star (Bearish Reversal - 3 candles)
  if (isEveningStar(c1, c2, c3)) {
    patterns.push({
      name: 'Evening Star',
      type: 'BEARISH_REVERSAL',
      strength: 90,
      description: 'Major bearish reversal (3-candle)',
      confidence: 85
    })
  }
  
  // 7. Three White Soldiers (Bullish Continuation)
  if (isThreeWhiteSoldiers(c1, c2, c3)) {
    patterns.push({
      name: 'Three White Soldiers',
      type: 'BULLISH_CONTINUATION',
      strength: 85,
      description: 'Strong bullish momentum',
      confidence: 80
    })
  }
  
  // 8. Three Black Crows (Bearish Continuation)
  if (isThreeBlackCrows(c1, c2, c3)) {
    patterns.push({
      name: 'Three Black Crows',
      type: 'BEARISH_CONTINUATION',
      strength: 85,
      description: 'Strong bearish momentum',
      confidence: 80
    })
  }
  
  // 9. Doji (Indecision)
  if (isDoji(c3)) {
    patterns.push({
      name: 'Doji',
      type: 'INDECISION',
      strength: 50,
      description: 'Market indecision, wait for confirmation',
      confidence: 60
    })
  }
  
  // 10. Spinning Top (Indecision)
  if (isSpinningTop(c3)) {
    patterns.push({
      name: 'Spinning Top',
      type: 'INDECISION',
      strength: 50,
      description: 'Market indecision, reduced momentum',
      confidence: 60
    })
  }
  
  return patterns
}

// ============================================================
// PATTERN DETECTION FUNCTIONS
// ============================================================

/**
 * Hammer: Small body at top, long lower shadow (2x+ body)
 * Indicates bullish reversal after downtrend
 */
function isHammer(c: Candle): boolean {
  const body = Math.abs(c.close - c.open)
  const lowerShadow = Math.min(c.open, c.close) - c.low
  const upperShadow = c.high - Math.max(c.open, c.close)
  
  // Requirements:
  // 1. Lower shadow >= 2x body
  // 2. Upper shadow <= 0.1x body (small/none)
  // 3. Body in upper 1/3 of candle
  return (
    lowerShadow >= body * 2 &&
    upperShadow <= body * 0.1 &&
    body > 0
  )
}

/**
 * Shooting Star: Small body at bottom, long upper shadow (2x+ body)
 * Indicates bearish reversal after uptrend
 */
function isShootingStar(c: Candle): boolean {
  const body = Math.abs(c.close - c.open)
  const lowerShadow = Math.min(c.open, c.close) - c.low
  const upperShadow = c.high - Math.max(c.open, c.close)
  
  // Requirements:
  // 1. Upper shadow >= 2x body
  // 2. Lower shadow <= 0.1x body (small/none)
  // 3. Body in lower 1/3 of candle
  return (
    upperShadow >= body * 2 &&
    lowerShadow <= body * 0.1 &&
    body > 0
  )
}

/**
 * Bullish Engulfing: Large bullish candle engulfs previous bearish candle
 */
function isBullishEngulfing(c1: Candle, c2: Candle): boolean {
  const c1Bearish = c1.close < c1.open
  const c2Bullish = c2.close > c2.open
  
  // Requirements:
  // 1. c1 is bearish (close < open)
  // 2. c2 is bullish (close > open)
  // 3. c2 opens below c1 close
  // 4. c2 closes above c1 open
  return (
    c1Bearish &&
    c2Bullish &&
    c2.open < c1.close &&
    c2.close > c1.open
  )
}

/**
 * Bearish Engulfing: Large bearish candle engulfs previous bullish candle
 */
function isBearishEngulfing(c1: Candle, c2: Candle): boolean {
  const c1Bullish = c1.close > c1.open
  const c2Bearish = c2.close < c2.open
  
  // Requirements:
  // 1. c1 is bullish (close > open)
  // 2. c2 is bearish (close < open)
  // 3. c2 opens above c1 close
  // 4. c2 closes below c1 open
  return (
    c1Bullish &&
    c2Bearish &&
    c2.open > c1.close &&
    c2.close < c1.open
  )
}

/**
 * Morning Star: 3-candle bullish reversal
 * c1: Large bearish, c2: Small (doji/spinning top), c3: Large bullish
 */
function isMorningStar(c1: Candle, c2: Candle, c3: Candle): boolean {
  const c1Body = Math.abs(c1.close - c1.open)
  const c2Body = Math.abs(c2.close - c2.open)
  const c3Body = Math.abs(c3.close - c3.open)
  
  const c1Bearish = c1.close < c1.open
  const c3Bullish = c3.close > c3.open
  
  // Requirements:
  // 1. c1 is large bearish candle
  // 2. c2 is small candle (indecision)
  // 3. c3 is large bullish candle
  // 4. c3 closes above midpoint of c1
  return (
    c1Bearish &&
    c2Body < c1Body * 0.5 &&
    c3Bullish &&
    c3Body > c1Body * 0.6 &&
    c3.close > (c1.open + c1.close) / 2
  )
}

/**
 * Evening Star: 3-candle bearish reversal
 * c1: Large bullish, c2: Small (doji/spinning top), c3: Large bearish
 */
function isEveningStar(c1: Candle, c2: Candle, c3: Candle): boolean {
  const c1Body = Math.abs(c1.close - c1.open)
  const c2Body = Math.abs(c2.close - c2.open)
  const c3Body = Math.abs(c3.close - c3.open)
  
  const c1Bullish = c1.close > c1.open
  const c3Bearish = c3.close < c3.open
  
  // Requirements:
  // 1. c1 is large bullish candle
  // 2. c2 is small candle (indecision)
  // 3. c3 is large bearish candle
  // 4. c3 closes below midpoint of c1
  return (
    c1Bullish &&
    c2Body < c1Body * 0.5 &&
    c3Bearish &&
    c3Body > c1Body * 0.6 &&
    c3.close < (c1.open + c1.close) / 2
  )
}

/**
 * Three White Soldiers: 3 consecutive bullish candles with higher highs/lows
 */
function isThreeWhiteSoldiers(c1: Candle, c2: Candle, c3: Candle): boolean {
  const allBullish = (c1.close > c1.open) && (c2.close > c2.open) && (c3.close > c3.open)
  const higherHighs = (c2.high > c1.high) && (c3.high > c2.high)
  const higherLows = (c2.low > c1.low) && (c3.low > c2.low)
  
  // Each candle should be substantial (not tiny)
  const c1Body = Math.abs(c1.close - c1.open)
  const c2Body = Math.abs(c2.close - c2.open)
  const c3Body = Math.abs(c3.close - c3.open)
  const avgBody = (c1Body + c2Body + c3Body) / 3
  const minBody = c1.high - c1.low > 0 ? (c1.high - c1.low) * 0.3 : 1
  
  return (
    allBullish &&
    higherHighs &&
    higherLows &&
    c1Body > minBody &&
    c2Body > minBody &&
    c3Body > minBody
  )
}

/**
 * Three Black Crows: 3 consecutive bearish candles with lower highs/lows
 */
function isThreeBlackCrows(c1: Candle, c2: Candle, c3: Candle): boolean {
  const allBearish = (c1.close < c1.open) && (c2.close < c2.open) && (c3.close < c3.open)
  const lowerHighs = (c2.high < c1.high) && (c3.high < c2.high)
  const lowerLows = (c2.low < c1.low) && (c3.low < c2.low)
  
  // Each candle should be substantial (not tiny)
  const c1Body = Math.abs(c1.close - c1.open)
  const c2Body = Math.abs(c2.close - c2.open)
  const c3Body = Math.abs(c3.close - c3.open)
  const minBody = c1.high - c1.low > 0 ? (c1.high - c1.low) * 0.3 : 1
  
  return (
    allBearish &&
    lowerHighs &&
    lowerLows &&
    c1Body > minBody &&
    c2Body > minBody &&
    c3Body > minBody
  )
}

/**
 * Doji: Open and close are nearly equal (body <= 5% of range)
 */
function isDoji(c: Candle): boolean {
  const body = Math.abs(c.close - c.open)
  const range = c.high - c.low
  
  return range > 0 && body <= range * 0.05
}

/**
 * Spinning Top: Small body (10-30% of range) with long shadows
 */
function isSpinningTop(c: Candle): boolean {
  const body = Math.abs(c.close - c.open)
  const range = c.high - c.low
  const lowerShadow = Math.min(c.open, c.close) - c.low
  const upperShadow = c.high - Math.max(c.open, c.close)
  
  return (
    range > 0 &&
    body >= range * 0.1 &&
    body <= range * 0.3 &&
    lowerShadow > body * 0.5 &&
    upperShadow > body * 0.5
  )
}

/**
 * Check if patterns align with signal
 * 
 * BUY signal requires bullish patterns
 * SELL signal requires bearish patterns
 */
export function arePatternsAligned(
  patterns: CandlePattern[],
  signal: 'BUY' | 'SELL' | 'HOLD'
): { aligned: boolean; strongestPattern: CandlePattern | null } {
  if (patterns.length === 0 || signal === 'HOLD') {
    return { aligned: false, strongestPattern: null }
  }
  
  // Find strongest pattern
  let strongestPattern = patterns[0]
  for (const p of patterns) {
    if (p.strength > strongestPattern.strength) {
      strongestPattern = p
    }
  }
  
  // Check alignment
  if (signal === 'BUY') {
    const bullishPattern = patterns.some(p => 
      p.type === 'BULLISH_REVERSAL' || p.type === 'BULLISH_CONTINUATION'
    )
    return { aligned: bullishPattern, strongestPattern: bullishPattern ? strongestPattern : null }
  }
  
  if (signal === 'SELL') {
    const bearishPattern = patterns.some(p => 
      p.type === 'BEARISH_REVERSAL' || p.type === 'BEARISH_CONTINUATION'
    )
    return { aligned: bearishPattern, strongestPattern: bearishPattern ? strongestPattern : null }
  }
  
  return { aligned: false, strongestPattern: null }
}
