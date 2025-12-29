/**
 * Multi-Timeframe Analysis Library
 * Phase 3: 90% Accuracy through timeframe confirmation
 * 
 * Analyzes 5 timeframes (5m, 15m, 1h, 4h, daily) to confirm trends
 * and eliminate false signals.
 */

import { TechnicalIndicators } from './technicalAnalysis'

export type Timeframe = '5m' | '15m' | '1h' | '4h' | 'daily'

export type TrendDirection = 'BULLISH' | 'BEARISH' | 'NEUTRAL'

export interface TimeframeTrend {
  timeframe: Timeframe
  trend: TrendDirection
  strength: number // 0-100
  confidence: number // 0-100
}

export interface TimeframeAlignment {
  score: number // 0-5 (how many timeframes agree)
  type: 'ALL_BULLISH' | 'ALL_BEARISH' | 'MIXED' | 'CONFLICTING'
  confidenceBoost: number // +0 to +20
  trends: TimeframeTrend[]
}

export interface MultiTimeframeIndicators {
  '5m'?: TechnicalIndicators
  '15m'?: TechnicalIndicators
  '1h'?: TechnicalIndicators
  '4h'?: TechnicalIndicators
  'daily'?: TechnicalIndicators
}

/**
 * Determine trend direction from indicators
 */
export function determineTrend(
  indicators: TechnicalIndicators,
  currentPrice: number
): TimeframeTrend {
  // Defensive check
  if (!indicators) {
    console.error('[determineTrend] indicators is null/undefined!')
    throw new Error('Indicators is undefined')
  }
  if (indicators.rsi_14 === undefined) {
    console.error('[determineTrend] rsi_14 is undefined! Indicators:', Object.keys(indicators))
    throw new Error('rsi_14 is undefined in indicators')
  }
  
  let bullishPoints = 0
  let bearishPoints = 0
  let totalWeight = 0

  // 1. MACD trend (weight: 3)
  if (indicators.macd > indicators.macd_signal && indicators.macd_histogram > 0) {
    bullishPoints += 3
  } else if (indicators.macd < indicators.macd_signal && indicators.macd_histogram < 0) {
    bearishPoints += 3
  }
  totalWeight += 3

  // 2. Price vs SMA20 (weight: 2)
  if (currentPrice > indicators.sma_20) {
    bullishPoints += 2
  } else {
    bearishPoints += 2
  }
  totalWeight += 2

  // 3. Price vs SMA50 (weight: 2)
  if (currentPrice > indicators.sma_50) {
    bullishPoints += 2
  } else {
    bearishPoints += 2
  }
  totalWeight += 2

  // 4. Price vs SMA200 - long-term trend (weight: 3)
  if (currentPrice > indicators.sma_200) {
    bullishPoints += 3
  } else {
    bearishPoints += 3
  }
  totalWeight += 3

  // 5. ADX strength (weight: 2)
  if (indicators.adx && indicators.adx > 25) {
    // Strong trend - boost the dominant direction
    if (indicators.plus_di && indicators.minus_di) {
      if (indicators.plus_di > indicators.minus_di) {
        bullishPoints += 2
      } else {
        bearishPoints += 2
      }
      totalWeight += 2
    }
  }

  // 6. RSI trend (weight: 1)
  if (indicators.rsi_14 > 50) {
    bullishPoints += 1
  } else {
    bearishPoints += 1
  }
  totalWeight += 1

  // Calculate trend
  const bullishPercentage = (bullishPoints / totalWeight) * 100
  const bearishPercentage = (bearishPoints / totalWeight) * 100
  const strength = Math.abs(bullishPercentage - bearishPercentage)

  let trend: TrendDirection
  let confidence: number

  if (bullishPercentage > 60) {
    trend = 'BULLISH'
    confidence = bullishPercentage
  } else if (bearishPercentage > 60) {
    trend = 'BEARISH'
    confidence = bearishPercentage
  } else {
    trend = 'NEUTRAL'
    confidence = 50
  }

  return {
    timeframe: '1h', // Will be overridden by caller
    trend,
    strength,
    confidence
  }
}

/**
 * Analyze alignment across multiple timeframes
 */
export function analyzeTimeframeAlignment(
  indicators: MultiTimeframeIndicators,
  currentPrice: number
): TimeframeAlignment {
  console.log('[analyzeTimeframeAlignment] START')
  console.log('[analyzeTimeframeAlignment] indicators keys:', Object.keys(indicators || {}))
  console.log('[analyzeTimeframeAlignment] currentPrice:', currentPrice)
  
  const trends: TimeframeTrend[] = []

  // Analyze each timeframe
  const timeframes: Timeframe[] = ['5m', '15m', '1h', '4h', 'daily']
  
  for (const tf of timeframes) {
    console.log(`[analyzeTimeframeAlignment] Processing ${tf}`)
    const ind = indicators[tf]
    if (ind) {
      console.log(`[analyzeTimeframeAlignment] ${tf} has indicators, calling determineTrend`)
      console.log(`[analyzeTimeframeAlignment] ${tf} rsi_14:`, ind.rsi_14, typeof ind.rsi_14)
      const trend = determineTrend(ind, currentPrice)
      trend.timeframe = tf
      trends.push(trend)
    } else {
      console.log(`[analyzeTimeframeAlignment] ${tf} missing indicators`)
    }
  }

  // Count alignment
  const bullishCount = trends.filter(t => t.trend === 'BULLISH').length
  const bearishCount = trends.filter(t => t.trend === 'BEARISH').length
  const neutralCount = trends.filter(t => t.trend === 'NEUTRAL').length

  const totalTrends = trends.length
  const score = Math.max(bullishCount, bearishCount)

  // Determine alignment type
  let type: TimeframeAlignment['type']
  let confidenceBoost: number

  if (bullishCount === totalTrends) {
    type = 'ALL_BULLISH'
    confidenceBoost = 20 // Maximum boost
  } else if (bearishCount === totalTrends) {
    type = 'ALL_BEARISH'
    confidenceBoost = 20 // Maximum boost
  } else if (bullishCount >= totalTrends * 0.8) {
    type = 'ALL_BULLISH'
    confidenceBoost = 15 // Strong alignment
  } else if (bearishCount >= totalTrends * 0.8) {
    type = 'ALL_BEARISH'
    confidenceBoost = 15 // Strong alignment
  } else if (bullishCount >= totalTrends * 0.6) {
    type = 'MIXED'
    confidenceBoost = 10 // Moderate bullish
  } else if (bearishCount >= totalTrends * 0.6) {
    type = 'MIXED'
    confidenceBoost = 10 // Moderate bearish
  } else {
    type = 'CONFLICTING'
    confidenceBoost = 0 // No boost for conflicting signals
  }

  return {
    score,
    type,
    confidenceBoost,
    trends
  }
}

/**
 * Validate if signal should be taken based on higher timeframe confirmation
 * 
 * Rules:
 * 1. 4h and daily must confirm the direction (or at least not oppose)
 * 2. 1h must confirm the direction
 * 3. 15m and 5m can trigger entry timing
 */
export function validateMultiTimeframeSignal(
  signalType: 'BUY' | 'SELL' | 'HOLD',
  alignment: TimeframeAlignment
): {
  isValid: boolean
  confidence: number
  reason: string
} {
  if (signalType === 'HOLD') {
    return {
      isValid: false,
      confidence: 50,
      reason: 'HOLD signal - no trade'
    }
  }

  const { trends, type, confidenceBoost } = alignment

  // Find all timeframe trends
  const dailyTrend = trends.find(t => t.timeframe === 'daily')
  const h4Trend = trends.find(t => t.timeframe === '4h')
  const h1Trend = trends.find(t => t.timeframe === '1h')
  const m15Trend = trends.find(t => t.timeframe === '15m')
  const m5Trend = trends.find(t => t.timeframe === '5m')

  // **NEW LOGIC: Allow lower timeframes to override when they ALL strongly agree**
  // If 5m, 15m, and 1h ALL agree with signal AND any has strength > 70
  const lowerTimeframesAlign = 
    (signalType === 'BUY' && 
     m5Trend?.trend === 'BULLISH' && 
     m15Trend?.trend === 'BULLISH' && 
     h1Trend?.trend === 'BULLISH' &&
     (m5Trend.strength > 70 || m15Trend.strength > 70 || h1Trend.strength > 70)) ||
    (signalType === 'SELL' && 
     m5Trend?.trend === 'BEARISH' && 
     m15Trend?.trend === 'BEARISH' && 
     h1Trend?.trend === 'BEARISH' &&
     (m5Trend.strength > 70 || m15Trend.strength > 70 || h1Trend.strength > 70))

  // For BUY signals
  if (signalType === 'BUY') {
    // Check if higher timeframes oppose the signal
    if (dailyTrend && dailyTrend.trend === 'BEARISH' && dailyTrend.strength > 70) {
      return {
        isValid: false,
        confidence: 40,
        reason: 'Daily timeframe strongly BEARISH - opposing BUY signal'
      }
    }

    if (h4Trend && h4Trend.trend === 'BEARISH' && h4Trend.strength > 70) {
      return {
        isValid: false,
        confidence: 45,
        reason: '4h timeframe strongly BEARISH - opposing BUY signal'
      }
    }

    if (h1Trend && h1Trend.trend === 'BEARISH' && h1Trend.strength > 60) {
      return {
        isValid: false,
        confidence: 50,
        reason: '1h timeframe BEARISH - weak BUY setup'
      }
    }

    // Strong alignment
    if (type === 'ALL_BULLISH') {
      return {
        isValid: true,
        confidence: 85 + confidenceBoost,
        reason: `All timeframes BULLISH - high probability BUY (${alignment.score}/${trends.length} aligned)`
      }
    }

    // Good alignment (80%+)
    if (type === 'MIXED' && confidenceBoost >= 15) {
      return {
        isValid: true,
        confidence: 75 + confidenceBoost,
        reason: `Strong multi-timeframe BULLISH alignment (${alignment.score}/${trends.length})`
      }
    }

    // **NEW: Allow lower timeframe override for MIXED alignment**
    // If lower timeframes (5m, 15m, 1h) ALL agree strongly, allow trade
    if (type === 'MIXED' && lowerTimeframesAlign) {
      return {
        isValid: true,
        confidence: 70 + confidenceBoost,
        reason: `Lower timeframes (5m/15m/1h) strongly aligned BUY - immediate opportunity (${alignment.score}/${trends.length})`
      }
    }

    // Moderate alignment (60%+)
    if (confidenceBoost >= 10) {
      return {
        isValid: true,
        confidence: 65 + confidenceBoost,
        reason: `Moderate multi-timeframe alignment (${alignment.score}/${trends.length})`
      }
    }

    // Weak or conflicting
    return {
      isValid: false,
      confidence: 55,
      reason: `Weak timeframe alignment - skip BUY (${alignment.score}/${trends.length})`
    }
  }

  // For SELL signals
  if (signalType === 'SELL') {
    // Check if higher timeframes oppose the signal
    if (dailyTrend && dailyTrend.trend === 'BULLISH' && dailyTrend.strength > 70) {
      return {
        isValid: false,
        confidence: 40,
        reason: 'Daily timeframe strongly BULLISH - opposing SELL signal'
      }
    }

    if (h4Trend && h4Trend.trend === 'BULLISH' && h4Trend.strength > 70) {
      return {
        isValid: false,
        confidence: 45,
        reason: '4h timeframe strongly BULLISH - opposing SELL signal'
      }
    }

    if (h1Trend && h1Trend.trend === 'BULLISH' && h1Trend.strength > 60) {
      return {
        isValid: false,
        confidence: 50,
        reason: '1h timeframe BULLISH - weak SELL setup'
      }
    }

    // Strong alignment
    if (type === 'ALL_BEARISH') {
      return {
        isValid: true,
        confidence: 85 + confidenceBoost,
        reason: `All timeframes BEARISH - high probability SELL (${alignment.score}/${trends.length} aligned)`
      }
    }

    // Good alignment (80%+)
    if (type === 'MIXED' && confidenceBoost >= 15) {
      return {
        isValid: true,
        confidence: 75 + confidenceBoost,
        reason: `Strong multi-timeframe BEARISH alignment (${alignment.score}/${trends.length})`
      }
    }

    // **NEW: Allow lower timeframe override for MIXED alignment**
    // If lower timeframes (5m, 15m, 1h) ALL agree strongly, allow trade
    if (type === 'MIXED' && lowerTimeframesAlign) {
      return {
        isValid: true,
        confidence: 70 + confidenceBoost,
        reason: `Lower timeframes (5m/15m/1h) strongly aligned SELL - immediate opportunity (${alignment.score}/${trends.length})`
      }
    }

    // Moderate alignment (60%+)
    if (confidenceBoost >= 10) {
      return {
        isValid: true,
        confidence: 65 + confidenceBoost,
        reason: `Moderate multi-timeframe alignment (${alignment.score}/${trends.length})`
      }
    }

    // Weak or conflicting
    return {
      isValid: false,
      confidence: 55,
      reason: `Weak timeframe alignment - skip SELL (${alignment.score}/${trends.length})`
    }
  }

  return {
    isValid: false,
    confidence: 50,
    reason: 'Unknown signal type'
  }
}

/**
 * Get timeframe weight for signal generation
 * Higher timeframes have more weight
 */
export function getTimeframeWeight(timeframe: Timeframe): number {
  const weights: Record<Timeframe, number> = {
    '5m': 1,
    '15m': 2,
    '1h': 3,
    '4h': 4,
    'daily': 5
  }
  return weights[timeframe] || 1
}

/**
 * Format alignment report for display
 */
export function formatAlignmentReport(alignment: TimeframeAlignment): string {
  const lines = [`Multi-Timeframe Alignment: ${alignment.type}`]
  lines.push(`Score: ${alignment.score}/${alignment.trends.length}`)
  lines.push(`Confidence Boost: +${alignment.confidenceBoost}%`)
  lines.push('')
  lines.push('Timeframe Analysis:')
  
  for (const trend of alignment.trends) {
    const icon = trend.trend === 'BULLISH' ? '📈' : trend.trend === 'BEARISH' ? '📉' : '➡️'
    lines.push(`  ${icon} ${trend.timeframe.padEnd(6)}: ${trend.trend.padEnd(8)} (${trend.confidence.toFixed(0)}% confident, ${trend.strength.toFixed(0)}% strength)`)
  }
  
  return lines.join('\n')
}
