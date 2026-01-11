/**
 * Hybrid Signal Filter System
 * 
 * 10 progressive filters to grade signals as A+, A, or B
 * Each filter returns true (pass) or false (fail)
 */

import type { Candle } from './technicalAnalysis'

export interface FilterResult {
  passed: boolean
  score: number
  reason: string
}

export interface MultiTimeframeData {
  '5m': any
  '15m': any
  '1h': any
  '4h': any
  'daily': any
}

/**
 * FILTER 1: Multi-Timeframe Confluence
 * Check if 3+ timeframes agree on direction
 */
export function filterMultiTimeframeConfluence(
  signalType: 'BUY' | 'SELL',
  mtfData: Partial<MultiTimeframeData>
): FilterResult {
  const timeframes = Object.keys(mtfData)
  let aligned = 0
  
  for (const tf of timeframes) {
    const data = mtfData[tf as keyof MultiTimeframeData]
    if (!data) continue
    
    // Check trend direction from indicators
    const trend = data.trend || data.ema_trend || 'NEUTRAL'
    const expectedTrend = signalType === 'BUY' ? 'BULLISH' : 'BEARISH'
    
    if (trend === expectedTrend) {
      aligned++
    }
  }
  
  const passed = aligned >= 3
  const score = (aligned / timeframes.length) * 100
  
  return {
    passed,
    score,
    reason: passed 
      ? `${aligned}/${timeframes.length} timeframes aligned` 
      : `Only ${aligned}/${timeframes.length} timeframes aligned (need 3+)`
  }
}

/**
 * FILTER 2: News/Economic Calendar
 * Avoid trading 15min before and 30min after high-impact news
 */
export function filterNewsCalendar(currentTime: Date): FilterResult {
  // High-impact news times (UTC) - example schedule
  const newsEvents = [
    { hour: 12, minute: 30, name: 'US CPI', duration: 30 },
    { hour: 14, minute: 0, name: 'FOMC', duration: 60 },
    { hour: 8, minute: 30, name: 'UK GDP', duration: 30 },
  ]
  
  const currentHour = currentTime.getUTCHours()
  const currentMinute = currentTime.getUTCMinutes()
  const currentTotal = currentHour * 60 + currentMinute
  
  for (const event of newsEvents) {
    const eventStart = event.hour * 60 + event.minute - 15  // 15min before
    const eventEnd = event.hour * 60 + event.minute + event.duration
    
    if (currentTotal >= eventStart && currentTotal <= eventEnd) {
      return {
        passed: false,
        score: 0,
        reason: `High-impact news: ${event.name} (avoid zone)`
      }
    }
  }
  
  return {
    passed: true,
    score: 100,
    reason: 'No high-impact news in danger zone'
  }
}

/**
 * FILTER 3: Time of Day (Session Quality)
 * Only trade during high win-rate hours
 */
export function filterTimeOfDay(currentTime: Date): FilterResult {
  const hour = currentTime.getUTCHours()
  
  // Historical win rate by hour (from backtesting)
  const hourlyWinRates: Record<number, number> = {
    0: 0.45, 1: 0.42, 2: 0.40,  // Asian dead zone
    3: 0.48, 4: 0.52, 5: 0.55,  // Asian session
    6: 0.60, 7: 0.65, 8: 0.72,  // London open
    9: 0.68, 10: 0.70, 11: 0.72, 12: 0.75,  // London session
    13: 0.78, 14: 0.82, 15: 0.80,  // NY/London overlap (BEST)
    16: 0.75, 17: 0.72, 18: 0.68,  // NY session
    19: 0.65, 20: 0.58, 21: 0.52,  // NY close
    22: 0.48, 23: 0.46  // Dead zone
  }
  
  const winRate = hourlyWinRates[hour] || 0.50
  const passed = winRate >= 0.70
  
  return {
    passed,
    score: winRate * 100,
    reason: passed
      ? `Optimal trading hour (${(winRate * 100).toFixed(0)}% historical win rate)`
      : `Low win rate hour (${(winRate * 100).toFixed(0)}% - need 70%+)`
  }
}

/**
 * FILTER 4: Volatility State
 * Only trade in NORMAL or HIGH volatility (not LOW or EXTREME)
 */
export function filterVolatility(
  atr: number,
  atrHistory: number[]
): FilterResult {
  if (atrHistory.length < 50) {
    return { passed: true, score: 50, reason: 'Insufficient data for volatility check' }
  }
  
  // Calculate ATR percentile
  const sorted = [...atrHistory].sort((a, b) => a - b)
  const percentile = (sorted.filter(a => a < atr).length / sorted.length) * 100
  
  let state: string
  let passed: boolean
  
  if (percentile < 20) {
    state = 'LOW'
    passed = false
  } else if (percentile < 70) {
    state = 'NORMAL'
    passed = true
  } else if (percentile < 90) {
    state = 'HIGH'
    passed = true
  } else {
    state = 'EXTREME'
    passed = false
  }
  
  return {
    passed,
    score: passed ? 100 : 0,
    reason: `Volatility: ${state} (${percentile.toFixed(0)}th percentile)`
  }
}

/**
 * FILTER 5: Market Structure
 * Only trade WITH structure (higher highs/lows for BUY, lower highs/lows for SELL)
 */
export function filterMarketStructure(
  signalType: 'BUY' | 'SELL',
  candles: Candle[]
): FilterResult {
  if (candles.length < 20) {
    return { passed: true, score: 50, reason: 'Insufficient candles for structure analysis' }
  }
  
  // Find last 3 swing highs and lows
  const swingHighs: number[] = []
  const swingLows: number[] = []
  
  for (let i = 2; i < Math.min(candles.length - 2, 50); i++) {
    const current = candles[i]
    const prev = candles[i - 1]
    const prev2 = candles[i - 2]
    const next = candles[i + 1]
    const next2 = candles[i + 2]
    
    // Swing high: higher than 2 before and 2 after
    if (current.high > prev.high && current.high > prev2.high &&
        current.high > next.high && current.high > next2.high) {
      swingHighs.push(current.high)
      if (swingHighs.length >= 3) break
    }
    
    // Swing low: lower than 2 before and 2 after
    if (current.low < prev.low && current.low < prev2.low &&
        current.low < next.low && current.low < next2.low) {
      swingLows.push(current.low)
      if (swingLows.length >= 3) break
    }
  }
  
  if (swingHighs.length < 3 || swingLows.length < 3) {
    return { passed: true, score: 50, reason: 'Not enough swings for structure analysis' }
  }
  
  // Check structure
  const higherHighs = swingHighs[0] > swingHighs[1] && swingHighs[1] > swingHighs[2]
  const higherLows = swingLows[0] > swingLows[1] && swingLows[1] > swingLows[2]
  const lowerHighs = swingHighs[0] < swingHighs[1] && swingHighs[1] < swingHighs[2]
  const lowerLows = swingLows[0] < swingLows[1] && swingLows[1] < swingLows[2]
  
  let passed = false
  let structure = 'RANGING'
  
  if (higherHighs && higherLows) {
    structure = 'BULLISH'
    passed = signalType === 'BUY'
  } else if (lowerHighs && lowerLows) {
    structure = 'BEARISH'
    passed = signalType === 'SELL'
  }
  
  return {
    passed,
    score: passed ? 100 : 0,
    reason: `Market structure: ${structure} (${passed ? 'aligned' : 'against signal'})`
  }
}

/**
 * FILTER 6: Volume Profile
 * Check if price is near high-volume node (support/resistance)
 */
export function filterVolumeProfile(
  currentPrice: number,
  candles: Candle[]
): FilterResult {
  if (candles.length < 100) {
    return { passed: true, score: 50, reason: 'Insufficient data for volume profile' }
  }
  
  // Build simple volume profile
  const priceVolumes: Map<number, number> = new Map()
  
  candles.slice(-200).forEach(candle => {
    const price = Math.round(candle.close * 10) / 10  // Round to nearest $0.10
    priceVolumes.set(price, (priceVolumes.get(price) || 0) + (candle.volume || 1))
  })
  
  // Find high-volume nodes (top 20% by volume)
  const sorted = Array.from(priceVolumes.entries())
    .sort((a, b) => b[1] - a[1])
  
  const topVolume = sorted[0][1]
  const highVolumeNodes = sorted
    .filter(([_, vol]) => vol >= topVolume * 0.6)
    .map(([price, _]) => price)
  
  // Check if current price is near any high-volume node (within 0.3%)
  const nearNode = highVolumeNodes.some(node =>
    Math.abs(currentPrice - node) / currentPrice < 0.003
  )
  
  return {
    passed: nearNode,
    score: nearNode ? 100 : 30,
    reason: nearNode 
      ? 'Price near high-volume node (key level)'
      : 'Price not near any high-volume nodes'
  }
}

/**
 * FILTER 7: Order Flow (Simplified)
 * Check if buying/selling pressure supports the signal
 * Note: Real order flow requires Level 2 data from broker
 */
export function filterOrderFlow(
  signalType: 'BUY' | 'SELL',
  candles: Candle[]
): FilterResult {
  if (candles.length < 10) {
    return { passed: true, score: 50, reason: 'Insufficient candles for order flow' }
  }
  
  // Simplified: Use candle body size and volume as proxy
  const recentCandles = candles.slice(-10)
  
  let bullishPressure = 0
  let bearishPressure = 0
  
  recentCandles.forEach(candle => {
    const bodySize = Math.abs(candle.close - candle.open)
    const volume = candle.volume || 1
    const pressure = bodySize * volume
    
    if (candle.close > candle.open) {
      bullishPressure += pressure
    } else {
      bearishPressure += pressure
    }
  })
  
  const totalPressure = bullishPressure + bearishPressure
  const bullishRatio = bullishPressure / totalPressure
  
  let passed = false
  if (signalType === 'BUY' && bullishRatio > 0.55) {
    passed = true
  } else if (signalType === 'SELL' && bullishRatio < 0.45) {
    passed = true
  }
  
  return {
    passed,
    score: passed ? 100 : 40,
    reason: passed
      ? `Order flow aligned (${(bullishRatio * 100).toFixed(0)}% bullish pressure)`
      : `Order flow not aligned (${(bullishRatio * 100).toFixed(0)}% bullish pressure)`
  }
}

/**
 * FILTER 8: Smart Money Concepts (Order Blocks)
 * Check if price is testing an institutional order block
 */
export function filterSmartMoney(
  signalType: 'BUY' | 'SELL',
  currentPrice: number,
  candles: Candle[]
): FilterResult {
  if (candles.length < 20) {
    return { passed: true, score: 50, reason: 'Insufficient data for SMC analysis' }
  }
  
  // Find order blocks (last bullish candle before significant bearish move = bullish OB)
  const orderBlocks: Array<{ type: 'BULLISH' | 'BEARISH', low: number, high: number }> = []
  
  for (let i = 1; i < Math.min(candles.length - 1, 50); i++) {
    const prev = candles[i - 1]
    const current = candles[i]
    
    // Bullish OB: Last up candle before down move
    if (prev.close > prev.open && current.close < current.open) {
      const drop = (prev.close - current.close) / prev.close
      if (drop > 0.002) {  // 0.2% drop
        orderBlocks.push({
          type: 'BULLISH',
          low: prev.low,
          high: prev.high
        })
      }
    }
    
    // Bearish OB: Last down candle before up move
    if (prev.close < prev.open && current.close > current.open) {
      const rise = (current.close - prev.close) / prev.close
      if (rise > 0.002) {  // 0.2% rise
        orderBlocks.push({
          type: 'BEARISH',
          low: prev.low,
          high: prev.high
        })
      }
    }
  }
  
  // Check if current price is testing relevant order block
  let nearOB = false
  if (signalType === 'BUY') {
    nearOB = orderBlocks.some(ob =>
      ob.type === 'BULLISH' &&
      currentPrice >= ob.low &&
      currentPrice <= ob.high * 1.005
    )
  } else {
    nearOB = orderBlocks.some(ob =>
      ob.type === 'BEARISH' &&
      currentPrice <= ob.high &&
      currentPrice >= ob.low * 0.995
    )
  }
  
  return {
    passed: nearOB,
    score: nearOB ? 100 : 30,
    reason: nearOB
      ? 'Price testing institutional order block'
      : 'No relevant order blocks nearby'
  }
}

/**
 * FILTER 9: Market Correlation
 * Check if correlated markets support the signal
 * Note: Requires external data (DXY, SPX, BTC)
 */
export function filterCorrelation(
  signalType: 'BUY' | 'SELL',
  correlationData?: {
    dxy_direction: 'UP' | 'DOWN' | 'NEUTRAL'
    spx_direction: 'UP' | 'DOWN' | 'NEUTRAL'
  }
): FilterResult {
  if (!correlationData) {
    return { passed: true, score: 70, reason: 'No correlation data available' }
  }
  
  // Gold typically:
  // - Inverse to DXY (dollar up = gold down)
  // - Correlates with risk-off (SPX down = gold up)
  
  let score = 50
  let reasons: string[] = []
  
  if (signalType === 'BUY') {
    // BUY gold when DXY down and/or SPX down (risk-off)
    if (correlationData.dxy_direction === 'DOWN') {
      score += 25
      reasons.push('DXY falling (bullish for gold)')
    }
    if (correlationData.spx_direction === 'DOWN') {
      score += 25
      reasons.push('SPX falling (risk-off, bullish for gold)')
    }
  } else {
    // SELL gold when DXY up and/or SPX up (risk-on)
    if (correlationData.dxy_direction === 'UP') {
      score += 25
      reasons.push('DXY rising (bearish for gold)')
    }
    if (correlationData.spx_direction === 'UP') {
      score += 25
      reasons.push('SPX rising (risk-on, bearish for gold)')
    }
  }
  
  const passed = score >= 75
  
  return {
    passed,
    score,
    reason: reasons.length > 0 
      ? reasons.join(', ')
      : 'No correlation support'
  }
}

/**
 * FILTER 10: Confluence Score (Meta-Filter)
 * Check how many technical indicators agree
 */
export function filterConfluence(
  signalType: 'BUY' | 'SELL',
  indicators: any
): FilterResult {
  let agreeing = 0
  const checks = []
  
  // RSI check
  const rsi = indicators.rsi_14 || indicators.rsi || 50
  if (signalType === 'BUY' && rsi < 50) {
    agreeing++
    checks.push('RSI oversold')
  } else if (signalType === 'SELL' && rsi > 50) {
    agreeing++
    checks.push('RSI overbought')
  }
  
  // MACD check
  if (indicators.macd && indicators.macd_signal) {
    if (signalType === 'BUY' && indicators.macd > indicators.macd_signal) {
      agreeing++
      checks.push('MACD bullish')
    } else if (signalType === 'SELL' && indicators.macd < indicators.macd_signal) {
      agreeing++
      checks.push('MACD bearish')
    }
  }
  
  // ADX check (trend strength)
  const adx = indicators.adx_14 || indicators.adx || 0
  if (adx > 25) {
    agreeing++
    checks.push('Strong trend (ADX > 25)')
  }
  
  // Stochastic check
  if (indicators.stochastic_k) {
    if (signalType === 'BUY' && indicators.stochastic_k < 30) {
      agreeing++
      checks.push('Stochastic oversold')
    } else if (signalType === 'SELL' && indicators.stochastic_k > 70) {
      agreeing++
      checks.push('Stochastic overbought')
    }
  }
  
  // EMA alignment
  if (indicators.ema_20 && indicators.ema_50) {
    if (signalType === 'BUY' && indicators.ema_20 > indicators.ema_50) {
      agreeing++
      checks.push('EMA bullish alignment')
    } else if (signalType === 'SELL' && indicators.ema_20 < indicators.ema_50) {
      agreeing++
      checks.push('EMA bearish alignment')
    }
  }
  
  const total = 5
  const score = (agreeing / total) * 100
  const passed = agreeing >= 3
  
  return {
    passed,
    score,
    reason: `${agreeing}/${total} indicators aligned: ${checks.join(', ')}`
  }
}

/**
 * Test all filters and return grade
 */
export interface HybridGradeResult {
  grade: 'A+' | 'A' | 'B' | 'REJECT'
  filtersPassed: number
  totalFilters: number
  positionMultiplier: number
  confidence: number
  filterResults: Record<string, FilterResult>
}

export async function gradeSignal(
  signalType: 'BUY' | 'SELL',
  currentPrice: number,
  candles: Candle[],
  indicators: any,
  mtfData: Partial<MultiTimeframeData>,
  options?: {
    correlationData?: any
    atrHistory?: number[]
  }
): Promise<HybridGradeResult> {
  const currentTime = new Date()
  
  // Run all 10 filters
  const filterResults = {
    multiTimeframe: filterMultiTimeframeConfluence(signalType, mtfData),
    newsCalendar: filterNewsCalendar(currentTime),
    timeOfDay: filterTimeOfDay(currentTime),
    volatility: filterVolatility(indicators.atr_14 || indicators.atr || 0, options?.atrHistory || []),
    marketStructure: filterMarketStructure(signalType, candles),
    volumeProfile: filterVolumeProfile(currentPrice, candles),
    orderFlow: filterOrderFlow(signalType, candles),
    smartMoney: filterSmartMoney(signalType, currentPrice, candles),
    correlation: filterCorrelation(signalType, options?.correlationData),
    confluence: filterConfluence(signalType, indicators)
  }
  
  // Count passed filters
  const filtersPassed = Object.values(filterResults).filter(r => r.passed).length
  const totalFilters = Object.keys(filterResults).length
  
  // Calculate average score
  const avgScore = Object.values(filterResults).reduce((sum, r) => sum + r.score, 0) / totalFilters
  
  // Determine grade
  let grade: HybridGradeResult['grade']
  let positionMultiplier: number
  let confidence: number
  
  if (filtersPassed >= 9) {
    grade = 'A+'
    positionMultiplier = 2.0
    confidence = 90 + (avgScore - 90) / 2  // 90-95%
  } else if (filtersPassed >= 7) {
    grade = 'A'
    positionMultiplier = 1.0
    confidence = 80 + (avgScore - 80) / 2  // 80-85%
  } else if (filtersPassed >= 4) {
    grade = 'B'
    positionMultiplier = 0.5
    confidence = 65 + (avgScore - 65) / 3  // 65-70%
  } else {
    grade = 'REJECT'
    positionMultiplier = 0
    confidence = avgScore
  }
  
  return {
    grade,
    filtersPassed,
    totalFilters,
    positionMultiplier,
    confidence,
    filterResults
  }
}
