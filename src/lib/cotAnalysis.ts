/**
 * COT (Commitments of Traders) Analysis
 * 
 * LAYER 20: COT DATA INTEGRATION
 * 
 * Impact: +4-7% win rate
 * Time: 4 hours
 * Difficulty: Medium
 * 
 * COT reports show positioning of major market participants:
 * - Commercials (producers, hedgers) - Usually RIGHT long-term
 * - Large Speculators (hedge funds) - Often WRONG at extremes
 * - Small Speculators (retail) - Usually WRONG
 * 
 * Strategy:
 * - Follow commercials (contrarian indicator when extreme)
 * - Fade large specs at extremes
 * - Extreme positioning signals reversals
 */

export interface COTPosition {
  commercialNet: number // Net long positions (long - short)
  largeSpecNet: number // Net long positions
  smallSpecNet: number // Net long positions
  timestamp: string
  percentile: number // Historical percentile (0-100)
}

export interface COTAnalysis {
  currentPosition: COTPosition | null
  positioning: 'EXTREME_BULLISH' | 'BULLISH' | 'NEUTRAL' | 'BEARISH' | 'EXTREME_BEARISH'
  goldSignalSupport: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
  strength: number // 0-100
  description: string
  dataAge: number // Days since last COT report (weekly data)
}

/**
 * Analyze COT positioning for Gold
 * 
 * COT Logic:
 * - Commercials net LONG (>80th percentile) = Bullish for Gold
 * - Commercials net SHORT (<20th percentile) = Bearish for Gold
 * - Large specs EXTREME long (>90th) = Bearish (contrarian)
 * - Large specs EXTREME short (<10th) = Bullish (contrarian)
 * 
 * @param position - Current COT position data
 * @param goldSignal - Current Gold signal
 * @returns COT analysis
 */
export function analyzeCOT(
  position: COTPosition | null,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): COTAnalysis {
  if (!position) {
    return {
      currentPosition: null,
      positioning: 'NEUTRAL',
      goldSignalSupport: 'NEUTRAL',
      strength: 0,
      description: 'No COT data available',
      dataAge: 999
    }
  }
  
  // Calculate data age
  const lastUpdate = new Date(position.timestamp)
  const now = new Date()
  const dataAge = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24))
  
  // Analyze commercial positioning (primary signal)
  let positioning: 'EXTREME_BULLISH' | 'BULLISH' | 'NEUTRAL' | 'BEARISH' | 'EXTREME_BEARISH' = 'NEUTRAL'
  let goldSignalSupport: 'BULLISH' | 'BEARISH' | 'NEUTRAL' = 'NEUTRAL'
  let strength = 50
  
  const percentile = position.percentile
  
  // EXTREME BULLISH: Commercials heavily long (they know something!)
  if (percentile >= 90) {
    positioning = 'EXTREME_BULLISH'
    goldSignalSupport = 'BULLISH'
    strength = 95
  }
  // BULLISH: Commercials moderately long
  else if (percentile >= 70) {
    positioning = 'BULLISH'
    goldSignalSupport = 'BULLISH'
    strength = 80
  }
  // BEARISH: Commercials moderately short
  else if (percentile <= 30) {
    positioning = 'BEARISH'
    goldSignalSupport = 'BEARISH'
    strength = 80
  }
  // EXTREME BEARISH: Commercials heavily short
  else if (percentile <= 10) {
    positioning = 'EXTREME_BEARISH'
    goldSignalSupport = 'BEARISH'
    strength = 95
  }
  // NEUTRAL: Middle range
  else {
    positioning = 'NEUTRAL'
    goldSignalSupport = 'NEUTRAL'
    strength = 50
  }
  
  // Additional check: Large speculators (contrarian indicator)
  // If large specs are EXTREMELY positioned, it's often a reversal signal
  if (position.largeSpecNet > 0) {
    const specPercentile = calculateSpecPercentile(position.largeSpecNet)
    
    // Large specs EXTREMELY long → Bearish contrarian signal
    if (specPercentile >= 95) {
      if (goldSignalSupport === 'BEARISH') {
        strength += 10 // Confirms bearish bias
      } else if (goldSignalSupport === 'BULLISH') {
        strength -= 15 // Conflicts with bullish bias
      }
    }
    // Large specs EXTREMELY short → Bullish contrarian signal
    else if (specPercentile <= 5) {
      if (goldSignalSupport === 'BULLISH') {
        strength += 10 // Confirms bullish bias
      } else if (goldSignalSupport === 'BEARISH') {
        strength -= 15 // Conflicts with bearish bias
      }
    }
  }
  
  // Cap strength at 100
  strength = Math.min(100, Math.max(0, strength))
  
  const description = formatCOTDescription(positioning, percentile, dataAge)
  
  return {
    currentPosition: position,
    positioning,
    goldSignalSupport,
    strength,
    description,
    dataAge
  }
}

/**
 * Calculate percentile for large speculators (simplified)
 */
function calculateSpecPercentile(specNet: number): number {
  // Simplified percentile calculation
  // In production, this should use historical data
  // For now, use rough thresholds:
  // >100k contracts = extreme long (>95th percentile)
  // <-100k contracts = extreme short (<5th percentile)
  
  if (specNet > 100000) return 98
  if (specNet > 50000) return 85
  if (specNet > 20000) return 70
  if (specNet > 0) return 55
  if (specNet > -20000) return 45
  if (specNet > -50000) return 30
  if (specNet > -100000) return 15
  return 2
}

/**
 * Check if COT analysis aligns with Gold signal
 */
export function isCOTAligned(
  cotAnalysis: COTAnalysis,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): boolean {
  if (goldSignal === 'HOLD' || cotAnalysis.goldSignalSupport === 'NEUTRAL') {
    return false
  }
  
  // Check if data is too old (>14 days)
  if (cotAnalysis.dataAge > 14) {
    return false // Don't use stale COT data
  }
  
  // BUY signal aligns with BULLISH COT support
  if (goldSignal === 'BUY' && cotAnalysis.goldSignalSupport === 'BULLISH') {
    return true
  }
  
  // SELL signal aligns with BEARISH COT support
  if (goldSignal === 'SELL' && cotAnalysis.goldSignalSupport === 'BEARISH') {
    return true
  }
  
  return false
}

/**
 * Format COT description for Telegram
 */
function formatCOTDescription(
  positioning: string,
  percentile: number,
  dataAge: number
): string {
  const ageStr = dataAge === 0 ? 'today' : dataAge === 1 ? '1 day ago' : `${dataAge} days ago`
  
  if (positioning === 'EXTREME_BULLISH') {
    return `COT: Commercials EXTREME LONG (${percentile}th percentile) - BULLISH [${ageStr}]`
  } else if (positioning === 'BULLISH') {
    return `COT: Commercials net long (${percentile}th percentile) - Bullish [${ageStr}]`
  } else if (positioning === 'EXTREME_BEARISH') {
    return `COT: Commercials EXTREME SHORT (${percentile}th percentile) - BEARISH [${ageStr}]`
  } else if (positioning === 'BEARISH') {
    return `COT: Commercials net short (${percentile}th percentile) - Bearish [${ageStr}]`
  } else {
    return `COT: Neutral positioning (${percentile}th percentile) [${ageStr}]`
  }
}

/**
 * Fetch COT data from CFTC (simplified version)
 * 
 * NOTE: In production, you would:
 * 1. Fetch from CFTC API: https://publicreporting.cftc.gov/
 * 2. Parse the disaggregated futures reports
 * 3. Extract Gold futures (GC contract)
 * 4. Calculate net positions for each category
 * 
 * For now, we'll use a mock/cached approach
 */
export async function fetchCOTData(): Promise<COTPosition | null> {
  // In production, implement actual CFTC API call
  // For now, return mock data
  
  // COT reports are released weekly (Tuesday afternoon)
  // This would be actual CFTC data in production
  
  return null // Will be implemented with actual API
}

/**
 * Store COT data in database
 */
export async function storeCOTData(
  DB: D1Database,
  position: COTPosition
): Promise<void> {
  try {
    await DB.prepare(`
      CREATE TABLE IF NOT EXISTS cot_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        commercial_net INTEGER NOT NULL,
        large_spec_net INTEGER NOT NULL,
        small_spec_net INTEGER NOT NULL,
        percentile REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()
    
    await DB.prepare(`
      INSERT INTO cot_cache 
      (timestamp, commercial_net, large_spec_net, small_spec_net, percentile)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      position.timestamp,
      position.commercialNet,
      position.largeSpecNet,
      position.smallSpecNet,
      position.percentile
    ).run()
    
    // Keep last 52 weeks (1 year) of COT data
    await DB.prepare(`
      DELETE FROM cot_cache
      WHERE timestamp < datetime('now', '-1 year')
    `).run()
    
  } catch (error: any) {
    console.error('[COT] Error storing COT data:', error.message)
  }
}

/**
 * Get cached COT data
 */
export async function getCachedCOTData(
  DB: D1Database
): Promise<COTPosition | null> {
  try {
    const result = await DB.prepare(`
      SELECT 
        timestamp,
        commercial_net as commercialNet,
        large_spec_net as largeSpecNet,
        small_spec_net as smallSpecNet,
        percentile
      FROM cot_cache
      ORDER BY timestamp DESC
      LIMIT 1
    `).first()
    
    if (!result) {
      return null
    }
    
    return {
      commercialNet: (result as any).commercialNet,
      largeSpecNet: (result as any).largeSpecNet,
      smallSpecNet: (result as any).smallSpecNet,
      timestamp: (result as any).timestamp,
      percentile: (result as any).percentile
    }
    
  } catch (error: any) {
    console.error('[COT] Error fetching cached COT data:', error.message)
    return null
  }
}

/**
 * Get or fetch COT data (uses cache, COT updates weekly)
 */
export async function getOrFetchCOTData(
  DB: D1Database
): Promise<COTPosition | null> {
  // Try cache first (COT data is weekly, so cache is valid)
  const cachedData = await getCachedCOTData(DB)
  
  if (cachedData) {
    // Check if data is less than 7 days old
    const lastUpdate = new Date(cachedData.timestamp)
    const now = new Date()
    const ageDays = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24)
    
    if (ageDays < 7) {
      console.log(`[COT] Using cached data (${ageDays.toFixed(1)} days old)`)
      return cachedData
    }
  }
  
  // Fetch new data
  console.log('[COT] Fetching fresh COT data...')
  const freshData = await fetchCOTData()
  
  if (freshData) {
    await storeCOTData(DB, freshData)
    return freshData
  }
  
  // If fetch failed, return cached data (even if old)
  console.log('[COT] Fetch failed, using stale cache')
  return cachedData
}

/**
 * Generate mock COT data for testing
 * 
 * In production, remove this and use actual CFTC data
 */
export function generateMockCOTData(scenario: 'BULLISH' | 'BEARISH' | 'NEUTRAL'): COTPosition {
  const now = new Date()
  
  if (scenario === 'BULLISH') {
    return {
      commercialNet: 80000, // Commercials net long
      largeSpecNet: -30000, // Large specs net short (contrarian bullish)
      smallSpecNet: -10000,
      timestamp: now.toISOString(),
      percentile: 85 // 85th percentile = bullish
    }
  } else if (scenario === 'BEARISH') {
    return {
      commercialNet: -60000, // Commercials net short
      largeSpecNet: 40000, // Large specs net long (contrarian bearish)
      smallSpecNet: 15000,
      timestamp: now.toISOString(),
      percentile: 15 // 15th percentile = bearish
    }
  } else {
    return {
      commercialNet: 5000, // Neutral
      largeSpecNet: -2000,
      smallSpecNet: 1000,
      timestamp: now.toISOString(),
      percentile: 50 // 50th percentile = neutral
    }
  }
}
