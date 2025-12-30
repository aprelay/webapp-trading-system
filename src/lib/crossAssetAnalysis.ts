/**
 * Cross-Asset Confirmation Analysis
 * 
 * LAYER 19: CROSS-ASSET CONFIRMATION
 * 
 * Impact: +3-5% win rate
 * Time: 3 hours
 * Difficulty: Medium
 * 
 * Commodities often move together:
 * - Gold (XAU/USD) + Silver (XAG/USD): High positive correlation (0.7-0.9)
 * - Gold + Crude Oil (WTI): Moderate positive correlation (0.4-0.6)
 * 
 * When multiple commodities align, it confirms the directional move
 */

export interface AssetData {
  symbol: string
  price: number
  change: number // Percentage change
  trend: 'UP' | 'DOWN' | 'FLAT'
  strength: number // 0-100
}

export interface CrossAssetAnalysis {
  silver: AssetData | null
  oil: AssetData | null
  aligned: boolean
  alignmentCount: number // 0-2 (how many assets align with Gold signal)
  strength: number // 0-100
  description: string
}

/**
 * Analyze cross-asset confirmation
 * 
 * @param silverCandles - Recent Silver (XAG/USD) candles
 * @param oilCandles - Recent Crude Oil (WTI) candles
 * @param goldSignal - Current Gold signal
 * @returns Cross-asset analysis
 */
export function analyzeCrossAssets(
  silverCandles: Array<{ close: number; timestamp: string }>,
  oilCandles: Array<{ close: number; timestamp: string }>,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): CrossAssetAnalysis {
  // Analyze Silver
  const silver = analyzeAsset('Silver (XAG/USD)', silverCandles)
  
  // Analyze Oil
  const oil = analyzeAsset('Crude Oil (WTI)', oilCandles)
  
  // Check alignment with Gold signal
  let alignmentCount = 0
  
  if (silver && isAssetAligned(silver.trend, goldSignal)) {
    alignmentCount++
  }
  
  if (oil && isAssetAligned(oil.trend, goldSignal)) {
    alignmentCount++
  }
  
  // Calculate overall strength
  let strength = 0
  const aligned = alignmentCount >= 1
  
  if (alignmentCount === 2) {
    // Both assets align - very strong
    strength = 95
  } else if (alignmentCount === 1) {
    // One asset aligns - good
    strength = 70
  } else {
    // No alignment - weak
    strength = 30
  }
  
  // Format description
  const description = formatCrossAssetDescription(silver, oil, alignmentCount, goldSignal)
  
  return {
    silver,
    oil,
    aligned,
    alignmentCount,
    strength,
    description
  }
}

/**
 * Analyze single asset (Silver or Oil)
 */
function analyzeAsset(
  symbol: string,
  candles: Array<{ close: number; timestamp: string }>
): AssetData | null {
  if (candles.length < 2) {
    return null
  }
  
  const current = candles[candles.length - 1]
  const previous = candles[0]
  
  const price = current.close
  const change = ((current.close - previous.close) / previous.close) * 100
  
  // Determine trend
  let trend: 'UP' | 'DOWN' | 'FLAT' = 'FLAT'
  if (change > 0.2) {
    trend = 'UP'
  } else if (change < -0.2) {
    trend = 'DOWN'
  }
  
  // Calculate strength based on magnitude of change
  const absChange = Math.abs(change)
  let strength = 0
  
  if (absChange > 1.0) {
    strength = 90
  } else if (absChange > 0.5) {
    strength = 75
  } else if (absChange > 0.2) {
    strength = 60
  } else {
    strength = 40
  }
  
  return {
    symbol,
    price,
    change,
    trend,
    strength
  }
}

/**
 * Check if asset trend aligns with Gold signal
 */
function isAssetAligned(
  assetTrend: 'UP' | 'DOWN' | 'FLAT',
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): boolean {
  if (goldSignal === 'HOLD' || assetTrend === 'FLAT') {
    return false
  }
  
  // BUY signal aligns with asset UP
  if (goldSignal === 'BUY' && assetTrend === 'UP') {
    return true
  }
  
  // SELL signal aligns with asset DOWN
  if (goldSignal === 'SELL' && assetTrend === 'DOWN') {
    return true
  }
  
  return false
}

/**
 * Format cross-asset description
 */
function formatCrossAssetDescription(
  silver: AssetData | null,
  oil: AssetData | null,
  alignmentCount: number,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): string {
  if (alignmentCount === 2) {
    return `Silver & Oil both ${goldSignal === 'BUY' ? 'up' : 'down'} (strong confirmation)`
  }
  
  if (alignmentCount === 1) {
    if (silver && isAssetAligned(silver.trend, goldSignal)) {
      return `Silver ${silver.trend.toLowerCase()} confirms Gold ${goldSignal}`
    }
    if (oil && isAssetAligned(oil.trend, goldSignal)) {
      return `Oil ${oil.trend.toLowerCase()} confirms Gold ${goldSignal}`
    }
  }
  
  // No alignment
  const silverStr = silver ? `Silver ${silver.trend.toLowerCase()}` : 'Silver N/A'
  const oilStr = oil ? `Oil ${oil.trend.toLowerCase()}` : 'Oil N/A'
  
  return `${silverStr}, ${oilStr} (mixed signals)`
}

/**
 * Fetch Silver (XAG/USD) data from Twelve Data API
 */
export async function fetchSilverData(
  apiKey: string
): Promise<Array<{ close: number; timestamp: string }>> {
  try {
    const url = `https://api.twelvedata.com/time_series?symbol=XAG/USD&interval=5min&outputsize=10&apikey=${apiKey}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (!data.values || data.values.length === 0) {
      console.error('[SILVER] No data returned from API')
      return []
    }
    
    const candles = data.values.map((v: any) => ({
      close: parseFloat(v.close),
      timestamp: v.datetime
    })).reverse()
    
    return candles
  } catch (error: any) {
    console.error('[SILVER] Error fetching Silver data:', error.message)
    return []
  }
}

/**
 * Fetch Crude Oil (WTI) data from Twelve Data API
 */
export async function fetchOilData(
  apiKey: string
): Promise<Array<{ close: number; timestamp: string }>> {
  try {
    const url = `https://api.twelvedata.com/time_series?symbol=WTI/USD&interval=5min&outputsize=10&apikey=${apiKey}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (!data.values || data.values.length === 0) {
      console.error('[OIL] No data returned from API')
      return []
    }
    
    const candles = data.values.map((v: any) => ({
      close: parseFloat(v.close),
      timestamp: v.datetime
    })).reverse()
    
    return candles
  } catch (error: any) {
    console.error('[OIL] Error fetching Oil data:', error.message)
    return []
  }
}

/**
 * Store cross-asset data in database
 */
export async function storeCrossAssetData(
  DB: D1Database,
  asset: 'SILVER' | 'OIL',
  candles: Array<{ close: number; timestamp: string }>
): Promise<void> {
  try {
    const tableName = asset === 'SILVER' ? 'silver_cache' : 'oil_cache'
    
    await DB.prepare(`
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()
    
    for (const candle of candles) {
      await DB.prepare(`
        INSERT OR REPLACE INTO ${tableName} (timestamp, close)
        VALUES (?, ?)
      `).bind(candle.timestamp, candle.close).run()
    }
    
    await DB.prepare(`
      DELETE FROM ${tableName}
      WHERE timestamp < datetime('now', '-1 day')
    `).run()
    
  } catch (error: any) {
    console.error(`[${asset}] Error storing data:`, error.message)
  }
}

/**
 * Get cached cross-asset data
 */
export async function getCachedCrossAssetData(
  DB: D1Database,
  asset: 'SILVER' | 'OIL'
): Promise<Array<{ close: number; timestamp: string }>> {
  try {
    const tableName = asset === 'SILVER' ? 'silver_cache' : 'oil_cache'
    
    const result = await DB.prepare(`
      SELECT timestamp, close
      FROM ${tableName}
      ORDER BY timestamp DESC
      LIMIT 10
    `).all()
    
    if (!result.results || result.results.length === 0) {
      return []
    }
    
    return (result.results as any[]).map(row => ({
      close: row.close,
      timestamp: row.timestamp
    })).reverse()
    
  } catch (error: any) {
    console.error(`[${asset}] Error fetching cached data:`, error.message)
    return []
  }
}

/**
 * Get or fetch cross-asset data (with caching)
 */
export async function getOrFetchCrossAssetData(
  DB: D1Database,
  apiKey: string,
  asset: 'SILVER' | 'OIL',
  maxCacheAge: number = 15
): Promise<Array<{ close: number; timestamp: string }>> {
  // Try cache first
  const cachedData = await getCachedCrossAssetData(DB, asset)
  
  if (cachedData.length > 0) {
    const lastTimestamp = new Date(cachedData[cachedData.length - 1].timestamp)
    const now = new Date()
    const ageMinutes = (now.getTime() - lastTimestamp.getTime()) / 60000
    
    if (ageMinutes < maxCacheAge) {
      console.log(`[${asset}] Using cached data (${ageMinutes.toFixed(1)}min old)`)
      return cachedData
    }
  }
  
  // Fetch fresh data
  console.log(`[${asset}] Fetching fresh data from API...`)
  const freshData = asset === 'SILVER' 
    ? await fetchSilverData(apiKey)
    : await fetchOilData(apiKey)
  
  if (freshData.length > 0) {
    await storeCrossAssetData(DB, asset, freshData)
    return freshData
  }
  
  console.log(`[${asset}] Fetch failed, using stale cache`)
  return cachedData
}
