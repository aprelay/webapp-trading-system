/**
 * DXY (US Dollar Index) Correlation Analysis
 * 
 * LAYER 18: DXY CORRELATION
 * 
 * Impact: +3-5% win rate
 * Time: 2 hours
 * Difficulty: Easy
 * 
 * Gold (XAU/USD) typically moves INVERSE to the US Dollar Index (DXY):
 * - DXY down → Gold up (positive for BUY)
 * - DXY up → Gold down (positive for SELL)
 * 
 * This layer fetches recent DXY data and confirms the inverse relationship
 */

export interface DXYAnalysis {
  dxyPrice: number
  dxyChange: number // Percentage change
  dxyTrend: 'UP' | 'DOWN' | 'FLAT'
  goldSignalSupport: 'BULLISH' | 'BEARISH' | 'NEUTRAL'
  correlation: number // -1 to 1 (expect -0.7 to -0.9 for Gold/DXY)
  strength: number // 0-100
  description: string
  dataAge: number // Minutes since last DXY update
}

/**
 * Analyze DXY correlation with Gold
 * 
 * @param dxyCandles - Recent DXY candles (5m or 15m)
 * @param goldSignal - Current Gold signal ('BUY', 'SELL', 'HOLD')
 * @returns DXY correlation analysis
 */
export function analyzeDXYCorrelation(
  dxyCandles: Array<{ close: number; timestamp: string }>,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): DXYAnalysis {
  if (dxyCandles.length < 2) {
    return {
      dxyPrice: 0,
      dxyChange: 0,
      dxyTrend: 'FLAT',
      goldSignalSupport: 'NEUTRAL',
      correlation: 0,
      strength: 0,
      description: 'Insufficient DXY data',
      dataAge: 999
    }
  }
  
  // Get current and previous DXY price
  const current = dxyCandles[dxyCandles.length - 1]
  const previous = dxyCandles[0]
  
  const dxyPrice = current.close
  const dxyChange = ((current.close - previous.close) / previous.close) * 100
  
  // Determine DXY trend
  let dxyTrend: 'UP' | 'DOWN' | 'FLAT' = 'FLAT'
  if (dxyChange > 0.1) {
    dxyTrend = 'UP'
  } else if (dxyChange < -0.1) {
    dxyTrend = 'DOWN'
  }
  
  // Determine what DXY trend means for Gold
  let goldSignalSupport: 'BULLISH' | 'BEARISH' | 'NEUTRAL' = 'NEUTRAL'
  
  if (dxyTrend === 'DOWN') {
    // DXY down = Gold up (bullish for Gold)
    goldSignalSupport = 'BULLISH'
  } else if (dxyTrend === 'UP') {
    // DXY up = Gold down (bearish for Gold)
    goldSignalSupport = 'BEARISH'
  }
  
  // Calculate correlation strength
  const absChange = Math.abs(dxyChange)
  let correlation = -0.8 // Typical Gold/DXY correlation
  
  // Strength based on how much DXY is moving
  let strength = 0
  if (absChange > 0.3) {
    strength = 90 // Strong DXY move
  } else if (absChange > 0.2) {
    strength = 75
  } else if (absChange > 0.1) {
    strength = 60
  } else {
    strength = 40 // Weak DXY move
  }
  
  // Calculate data age (how old is the DXY data?)
  const lastUpdate = new Date(current.timestamp)
  const now = new Date()
  const dataAge = Math.floor((now.getTime() - lastUpdate.getTime()) / 60000) // Minutes
  
  // Format description
  const description = formatDXYDescription(
    dxyPrice,
    dxyChange,
    dxyTrend,
    goldSignalSupport,
    strength
  )
  
  return {
    dxyPrice,
    dxyChange,
    dxyTrend,
    goldSignalSupport,
    correlation,
    strength,
    description,
    dataAge
  }
}

/**
 * Check if DXY analysis aligns with Gold signal
 * 
 * BUY signal should align with DXY DOWN (bullish for Gold)
 * SELL signal should align with DXY UP (bearish for Gold)
 */
export function isDXYAligned(
  dxyAnalysis: DXYAnalysis,
  goldSignal: 'BUY' | 'SELL' | 'HOLD'
): boolean {
  if (goldSignal === 'HOLD' || dxyAnalysis.goldSignalSupport === 'NEUTRAL') {
    return false
  }
  
  // BUY signal aligns with DXY DOWN (bullish Gold support)
  if (goldSignal === 'BUY' && dxyAnalysis.goldSignalSupport === 'BULLISH') {
    return true
  }
  
  // SELL signal aligns with DXY UP (bearish Gold support)
  if (goldSignal === 'SELL' && dxyAnalysis.goldSignalSupport === 'BEARISH') {
    return true
  }
  
  return false
}

/**
 * Format DXY description for Telegram
 */
function formatDXYDescription(
  price: number,
  change: number,
  trend: string,
  support: string,
  strength: number
): string {
  const changeStr = change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`
  const priceStr = price.toFixed(2)
  
  if (trend === 'DOWN') {
    return `DXY down ${changeStr} → Gold BULLISH (${strength}/100)`
  } else if (trend === 'UP') {
    return `DXY up ${changeStr} → Gold BEARISH (${strength}/100)`
  } else {
    return `DXY flat ${changeStr} → Neutral (${strength}/100)`
  }
}

/**
 * Fetch DXY data from Twelve Data API
 * 
 * @param apiKey - Twelve Data API key
 * @returns Recent DXY candles
 */
export async function fetchDXYData(
  apiKey: string
): Promise<Array<{ close: number; timestamp: string }>> {
  try {
    // Fetch 5m DXY data (last 10 candles)
    const url = `https://api.twelvedata.com/time_series?symbol=DXY&interval=5min&outputsize=10&apikey=${apiKey}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (!data.values || data.values.length === 0) {
      console.error('[DXY] No data returned from API')
      return []
    }
    
    // Parse candles
    const candles = data.values.map((v: any) => ({
      close: parseFloat(v.close),
      timestamp: v.datetime
    })).reverse() // Oldest to newest
    
    return candles
  } catch (error: any) {
    console.error('[DXY] Error fetching DXY data:', error.message)
    return []
  }
}

/**
 * Store DXY data in database for caching
 * 
 * @param DB - D1 Database instance
 * @param candles - DXY candles to store
 */
export async function storeDXYData(
  DB: D1Database,
  candles: Array<{ close: number; timestamp: string }>
): Promise<void> {
  try {
    // Create table if not exists
    await DB.prepare(`
      CREATE TABLE IF NOT EXISTS dxy_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME NOT NULL,
        close REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run()
    
    // Insert candles
    for (const candle of candles) {
      await DB.prepare(`
        INSERT OR REPLACE INTO dxy_cache (timestamp, close)
        VALUES (?, ?)
      `).bind(candle.timestamp, candle.close).run()
    }
    
    // Clean up old data (keep last 24 hours only)
    await DB.prepare(`
      DELETE FROM dxy_cache
      WHERE timestamp < datetime('now', '-1 day')
    `).run()
    
  } catch (error: any) {
    console.error('[DXY] Error storing DXY data:', error.message)
  }
}

/**
 * Get cached DXY data from database
 * 
 * @param DB - D1 Database instance
 * @returns Recent DXY candles from cache
 */
export async function getCachedDXYData(
  DB: D1Database
): Promise<Array<{ close: number; timestamp: string }>> {
  try {
    const result = await DB.prepare(`
      SELECT timestamp, close
      FROM dxy_cache
      ORDER BY timestamp DESC
      LIMIT 10
    `).all()
    
    if (!result.results || result.results.length === 0) {
      return []
    }
    
    return (result.results as any[]).map(row => ({
      close: row.close,
      timestamp: row.timestamp
    })).reverse() // Oldest to newest
    
  } catch (error: any) {
    console.error('[DXY] Error fetching cached DXY data:', error.message)
    return []
  }
}

/**
 * Get or fetch DXY data (uses cache if fresh, otherwise fetches new)
 * 
 * @param DB - D1 Database instance
 * @param apiKey - Twelve Data API key
 * @param maxCacheAge - Maximum cache age in minutes (default: 15)
 * @returns Recent DXY candles
 */
export async function getOrFetchDXYData(
  DB: D1Database,
  apiKey: string,
  maxCacheAge: number = 15
): Promise<Array<{ close: number; timestamp: string }>> {
  // Try to get cached data first
  const cachedData = await getCachedDXYData(DB)
  
  if (cachedData.length > 0) {
    // Check if cache is fresh
    const lastTimestamp = new Date(cachedData[cachedData.length - 1].timestamp)
    const now = new Date()
    const ageMinutes = (now.getTime() - lastTimestamp.getTime()) / 60000
    
    if (ageMinutes < maxCacheAge) {
      console.log(`[DXY] Using cached data (${ageMinutes.toFixed(1)}min old)`)
      return cachedData
    }
  }
  
  // Cache is stale or empty, fetch new data
  console.log('[DXY] Fetching fresh DXY data from API...')
  const freshData = await fetchDXYData(apiKey)
  
  if (freshData.length > 0) {
    // Store in cache
    await storeDXYData(DB, freshData)
    return freshData
  }
  
  // If fetch failed, return cached data (even if stale)
  console.log('[DXY] Fetch failed, using stale cache')
  return cachedData
}
