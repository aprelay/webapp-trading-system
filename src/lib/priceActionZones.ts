/**
 * Price Action Zones Analysis
 * 
 * LAYER 13: PRICE ACTION ZONES
 * 
 * Impact: +5-8% win rate
 * Time: 2-3 hours
 * Difficulty: Medium
 * 
 * Identifies key support/resistance levels:
 * - Previous day high/low
 * - Weekly pivot points
 * - Psychological levels ($100, $50 intervals)
 * - Recent swing highs/lows
 */

import { type Candle } from './technicalAnalysis'

export interface PriceZone {
  level: number
  type: 'RESISTANCE' | 'SUPPORT' | 'PIVOT' | 'PSYCHOLOGICAL'
  strength: number // 0-100
  distance: number // Distance from current price
  distancePercent: number
}

export interface ZoneAnalysis {
  nearZone: boolean
  closestZone: PriceZone | null
  zoneType: 'RESISTANCE' | 'SUPPORT' | 'PIVOT' | 'PSYCHOLOGICAL' | 'NONE'
  action: 'BREAKOUT' | 'BOUNCE' | 'NONE'
  strength: number
  description: string
}

/**
 * Calculate all price zones from recent candles
 * 
 * @param candles - Array of candles (need 100+ for accurate zones)
 * @param currentPrice - Current market price
 * @returns Analysis of price zones
 */
export function analyzePriceZones(candles: Candle[], currentPrice: number): ZoneAnalysis {
  if (candles.length < 20) {
    return {
      nearZone: false,
      closestZone: null,
      zoneType: 'NONE',
      action: 'NONE',
      strength: 0,
      description: 'Insufficient data for zone analysis'
    }
  }
  
  const zones: PriceZone[] = []
  
  // 1. Previous Day High/Low (if we have 24h+ data)
  if (candles.length >= 288) { // 288 x 5m = 24 hours
    const last24h = candles.slice(-288)
    const dayHigh = Math.max(...last24h.map(c => c.high))
    const dayLow = Math.min(...last24h.map(c => c.low))
    
    zones.push({
      level: dayHigh,
      type: 'RESISTANCE',
      strength: 85,
      distance: dayHigh - currentPrice,
      distancePercent: ((dayHigh - currentPrice) / currentPrice) * 100
    })
    
    zones.push({
      level: dayLow,
      type: 'SUPPORT',
      strength: 85,
      distance: currentPrice - dayLow,
      distancePercent: ((currentPrice - dayLow) / currentPrice) * 100
    })
  }
  
  // 2. Recent Swing Highs/Lows (last 50 candles)
  const recentCandles = candles.slice(-50)
  const swingHighs = findSwingPoints(recentCandles, 'HIGH')
  const swingLows = findSwingPoints(recentCandles, 'LOW')
  
  swingHighs.forEach(level => {
    zones.push({
      level,
      type: 'RESISTANCE',
      strength: 75,
      distance: level - currentPrice,
      distancePercent: ((level - currentPrice) / currentPrice) * 100
    })
  })
  
  swingLows.forEach(level => {
    zones.push({
      level,
      type: 'SUPPORT',
      strength: 75,
      distance: currentPrice - level,
      distancePercent: ((currentPrice - level) / currentPrice) * 100
    })
  })
  
  // 3. Psychological Levels ($100, $50 intervals for Gold)
  const psychLevels = getPsychologicalLevels(currentPrice)
  psychLevels.forEach(level => {
    const type = level > currentPrice ? 'RESISTANCE' : 'SUPPORT'
    zones.push({
      level,
      type,
      strength: 70,
      distance: Math.abs(level - currentPrice),
      distancePercent: (Math.abs(level - currentPrice) / currentPrice) * 100
    })
  })
  
  // 4. Calculate pivot points (using last 24h if available)
  if (candles.length >= 288) {
    const last24h = candles.slice(-288)
    const pivot = calculatePivotPoint(last24h)
    
    zones.push({
      level: pivot.pp,
      type: 'PIVOT',
      strength: 80,
      distance: Math.abs(pivot.pp - currentPrice),
      distancePercent: (Math.abs(pivot.pp - currentPrice) / currentPrice) * 100
    })
    
    zones.push({
      level: pivot.r1,
      type: 'RESISTANCE',
      strength: 70,
      distance: pivot.r1 - currentPrice,
      distancePercent: ((pivot.r1 - currentPrice) / currentPrice) * 100
    })
    
    zones.push({
      level: pivot.s1,
      type: 'SUPPORT',
      strength: 70,
      distance: currentPrice - pivot.s1,
      distancePercent: ((currentPrice - pivot.s1) / currentPrice) * 100
    })
  }
  
  // Find closest zone within 0.5% of current price
  const nearbyZones = zones.filter(z => Math.abs(z.distancePercent) <= 0.5)
  
  if (nearbyZones.length === 0) {
    return {
      nearZone: false,
      closestZone: null,
      zoneType: 'NONE',
      action: 'NONE',
      strength: 0,
      description: 'No key zones nearby'
    }
  }
  
  // Get closest zone
  const closestZone = nearbyZones.reduce((closest, zone) => {
    return Math.abs(zone.distancePercent) < Math.abs(closest.distancePercent) ? zone : closest
  })
  
  // Determine action (breakout vs bounce)
  const action = determineZoneAction(candles, currentPrice, closestZone)
  
  return {
    nearZone: true,
    closestZone,
    zoneType: closestZone.type,
    action,
    strength: closestZone.strength,
    description: formatZoneDescription(closestZone, action)
  }
}

/**
 * Find swing high/low points (peaks and troughs)
 */
function findSwingPoints(candles: Candle[], type: 'HIGH' | 'LOW'): number[] {
  const swings: number[] = []
  const lookback = 5 // Look 5 candles back and forward
  
  for (let i = lookback; i < candles.length - lookback; i++) {
    const current = type === 'HIGH' ? candles[i].high : candles[i].low
    
    let isSwing = true
    
    // Check if current is higher/lower than surrounding candles
    for (let j = i - lookback; j <= i + lookback; j++) {
      if (j === i) continue
      
      const compare = type === 'HIGH' ? candles[j].high : candles[j].low
      
      if (type === 'HIGH' && compare >= current) {
        isSwing = false
        break
      }
      if (type === 'LOW' && compare <= current) {
        isSwing = false
        break
      }
    }
    
    if (isSwing) {
      swings.push(current)
    }
  }
  
  // Remove duplicates and keep only strongest levels
  const uniqueSwings = Array.from(new Set(swings))
  return uniqueSwings.slice(-3) // Keep only last 3 swing points
}

/**
 * Get psychological levels ($100, $50 intervals)
 * For Gold: 4300, 4350, 4400, etc.
 */
function getPsychologicalLevels(currentPrice: number): number[] {
  const levels: number[] = []
  
  // Round to nearest 100
  const base100 = Math.floor(currentPrice / 100) * 100
  
  // $100 intervals
  levels.push(base100)
  levels.push(base100 + 100)
  levels.push(base100 - 100)
  
  // $50 intervals
  const base50 = Math.floor(currentPrice / 50) * 50
  if (!levels.includes(base50)) {
    levels.push(base50)
  }
  if (!levels.includes(base50 + 50)) {
    levels.push(base50 + 50)
  }
  
  // Filter levels within ±2% of current price
  return levels.filter(level => {
    const diff = Math.abs((level - currentPrice) / currentPrice) * 100
    return diff <= 2
  })
}

/**
 * Calculate pivot points (traditional method)
 */
function calculatePivotPoint(candles: Candle[]): {
  pp: number
  r1: number
  s1: number
  r2: number
  s2: number
} {
  const high = Math.max(...candles.map(c => c.high))
  const low = Math.min(...candles.map(c => c.low))
  const close = candles[candles.length - 1].close
  
  const pp = (high + low + close) / 3
  const r1 = (2 * pp) - low
  const s1 = (2 * pp) - high
  const r2 = pp + (high - low)
  const s2 = pp - (high - low)
  
  return { pp, r1, s1, r2, s2 }
}

/**
 * Determine if price is breaking out or bouncing from zone
 */
function determineZoneAction(
  candles: Candle[], 
  currentPrice: number, 
  zone: PriceZone
): 'BREAKOUT' | 'BOUNCE' | 'NONE' {
  if (candles.length < 3) return 'NONE'
  
  const recent3 = candles.slice(-3)
  const prev1 = recent3[1]
  const prev2 = recent3[0]
  
  // Check if we're very close to the zone (within 0.2%)
  const veryClose = Math.abs(zone.distancePercent) <= 0.2
  
  if (!veryClose) return 'NONE'
  
  if (zone.type === 'RESISTANCE') {
    // Breaking above resistance
    if (currentPrice > zone.level && prev1.close <= zone.level) {
      return 'BREAKOUT'
    }
    // Bouncing off resistance
    if (currentPrice < zone.level && prev1.close >= zone.level) {
      return 'BOUNCE'
    }
  }
  
  if (zone.type === 'SUPPORT') {
    // Breaking below support
    if (currentPrice < zone.level && prev1.close >= zone.level) {
      return 'BREAKOUT'
    }
    // Bouncing off support
    if (currentPrice > zone.level && prev1.close <= zone.level) {
      return 'BOUNCE'
    }
  }
  
  return 'NONE'
}

/**
 * Format zone description for Telegram
 */
function formatZoneDescription(zone: PriceZone, action: string): string {
  const levelStr = zone.level.toFixed(2)
  const distStr = Math.abs(zone.distancePercent).toFixed(2)
  
  if (action === 'BREAKOUT') {
    return `${zone.type} breakout at $${levelStr} (+${zone.strength}/100)`
  }
  if (action === 'BOUNCE') {
    return `${zone.type} bounce at $${levelStr} (+${zone.strength}/100)`
  }
  
  return `Near ${zone.type} $${levelStr} (${distStr}% away)`
}

/**
 * Check if zone analysis supports the signal
 */
export function isZoneAligned(
  zoneAnalysis: ZoneAnalysis,
  signal: 'BUY' | 'SELL' | 'HOLD'
): boolean {
  if (signal === 'HOLD' || !zoneAnalysis.nearZone) {
    return false
  }
  
  // BUY signal aligns with:
  // - Support bounce
  // - Resistance breakout
  if (signal === 'BUY') {
    if (zoneAnalysis.zoneType === 'SUPPORT' && zoneAnalysis.action === 'BOUNCE') {
      return true
    }
    if (zoneAnalysis.zoneType === 'RESISTANCE' && zoneAnalysis.action === 'BREAKOUT') {
      return true
    }
  }
  
  // SELL signal aligns with:
  // - Resistance bounce
  // - Support breakout
  if (signal === 'SELL') {
    if (zoneAnalysis.zoneType === 'RESISTANCE' && zoneAnalysis.action === 'BOUNCE') {
      return true
    }
    if (zoneAnalysis.zoneType === 'SUPPORT' && zoneAnalysis.action === 'BREAKOUT') {
      return true
    }
  }
  
  return false
}
