/**
 * Liquidity Analysis Module
 * 
 * Institutional-grade liquidity assessment for XAU/USD
 * Helps identify optimal entry/exit times based on market liquidity
 * 
 * Key Metrics:
 * 1. Volume Profile Analysis
 * 2. Time-of-Day Liquidity Zones
 * 3. Spread Analysis (bid-ask simulation)
 * 4. Price Impact Estimation
 * 5. Liquidity Score (0-100)
 */

export interface LiquidityMetrics {
  liquidity_score: number; // 0-100 (100 = highest liquidity)
  volume_trend: 'INCREASING' | 'DECREASING' | 'STABLE';
  volume_percentile: number; // 0-100 (relative to 20-day average)
  time_of_day_zone: 'HIGH' | 'MEDIUM' | 'LOW';
  session: 'ASIA' | 'LONDON' | 'NEW_YORK' | 'OVERLAP' | 'OFF_HOURS';
  estimated_spread_pips: number; // Estimated bid-ask spread
  price_impact_bps: number; // Basis points for $100K position
  market_depth_score: number; // 0-100
  optimal_for_trading: boolean;
  warnings: string[];
  recommendation: string;
}

export interface VolumeProfile {
  avg_volume: number;
  current_volume: number;
  volume_ratio: number; // current / average
  volume_spike: boolean; // >200% of average
  volume_drought: boolean; // <50% of average
}

/**
 * Calculate liquidity score based on volume and market conditions
 */
export function calculateLiquidityScore(candles: any[]): LiquidityMetrics {
  if (!candles || candles.length < 20) {
    return {
      liquidity_score: 50,
      volume_trend: 'STABLE',
      volume_percentile: 50,
      time_of_day_zone: 'MEDIUM',
      session: 'OFF_HOURS',
      estimated_spread_pips: 50, // Conservative default for low liquidity
      price_impact_bps: 20,
      market_depth_score: 50,
      optimal_for_trading: false,
      warnings: ['Insufficient data for liquidity analysis'],
      recommendation: 'Use caution - limited liquidity data available'
    };
  }

  // 1. VOLUME PROFILE ANALYSIS
  const volumeProfile = analyzeVolumeProfile(candles);
  
  // 2. TIME-OF-DAY ANALYSIS
  const timeAnalysis = analyzeTimeOfDay();
  
  // 3. SPREAD ESTIMATION
  const spreadAnalysis = estimateSpread(candles, timeAnalysis.session);
  
  // 4. PRICE IMPACT ESTIMATION
  const priceImpact = estimatePriceImpact(volumeProfile, timeAnalysis.session);
  
  // 5. MARKET DEPTH SCORE
  const depthScore = calculateMarketDepthScore(volumeProfile, timeAnalysis);
  
  // 6. OVERALL LIQUIDITY SCORE (0-100)
  const liquidityScore = calculateOverallLiquidityScore(
    volumeProfile,
    timeAnalysis,
    spreadAnalysis,
    depthScore
  );
  
  // 7. GENERATE WARNINGS
  const warnings = generateLiquidityWarnings(
    liquidityScore,
    volumeProfile,
    timeAnalysis,
    spreadAnalysis
  );
  
  // 8. TRADING RECOMMENDATION
  const recommendation = generateLiquidityRecommendation(
    liquidityScore,
    timeAnalysis,
    warnings
  );
  
  return {
    liquidity_score: Math.round(liquidityScore),
    volume_trend: volumeProfile.trend,
    volume_percentile: Math.round(volumeProfile.percentile),
    time_of_day_zone: timeAnalysis.zone,
    session: timeAnalysis.session,
    estimated_spread_pips: spreadAnalysis.spread_pips,
    price_impact_bps: Math.round(priceImpact),
    market_depth_score: Math.round(depthScore),
    optimal_for_trading: liquidityScore >= 70 && warnings.length === 0,
    warnings,
    recommendation
  };
}

/**
 * Analyze volume profile
 */
function analyzeVolumeProfile(candles: any[]): VolumeProfile & { trend: any; percentile: number } {
  const recent10 = candles.slice(-10);
  const previous10 = candles.slice(-20, -10);
  
  const avgVolume = candles.reduce((sum, c) => sum + (c.volume || 1), 0) / candles.length;
  const currentVolume = recent10.reduce((sum, c) => sum + (c.volume || 1), 0) / recent10.length;
  const previousVolume = previous10.reduce((sum, c) => sum + (c.volume || 1), 0) / previous10.length;
  
  const volumeRatio = currentVolume / avgVolume;
  
  // Determine trend
  let trend: 'INCREASING' | 'DECREASING' | 'STABLE';
  if (currentVolume > previousVolume * 1.2) {
    trend = 'INCREASING';
  } else if (currentVolume < previousVolume * 0.8) {
    trend = 'DECREASING';
  } else {
    trend = 'STABLE';
  }
  
  // Calculate percentile (0-100)
  const percentile = Math.min(100, volumeRatio * 100);
  
  return {
    avg_volume: avgVolume,
    current_volume: currentVolume,
    volume_ratio: volumeRatio,
    volume_spike: volumeRatio > 2.0,
    volume_drought: volumeRatio < 0.5,
    trend,
    percentile
  };
}

/**
 * Analyze time of day and trading session
 */
function analyzeTimeOfDay(): { zone: 'HIGH' | 'MEDIUM' | 'LOW'; session: any } {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMinute = now.getUTCMinutes();
  const timeInMinutes = utcHour * 60 + utcMinute;
  
  // Trading sessions (UTC times)
  // Tokyo:    00:00 - 09:00 UTC (midnight to 9am)
  // London:   08:00 - 16:00 UTC (8am to 4pm)
  // New York: 13:00 - 22:00 UTC (1pm to 10pm)
  
  let session: 'ASIA' | 'LONDON' | 'NEW_YORK' | 'OVERLAP' | 'OFF_HOURS';
  let zone: 'HIGH' | 'MEDIUM' | 'LOW';
  
  // London/New York Overlap (13:00-16:00 UTC) - HIGHEST LIQUIDITY
  if (timeInMinutes >= 780 && timeInMinutes < 960) { // 13:00-16:00
    session = 'OVERLAP';
    zone = 'HIGH';
  }
  // London Session (08:00-13:00 UTC) - HIGH LIQUIDITY
  else if (timeInMinutes >= 480 && timeInMinutes < 780) { // 08:00-13:00
    session = 'LONDON';
    zone = 'HIGH';
  }
  // New York Session (16:00-22:00 UTC) - HIGH LIQUIDITY
  else if (timeInMinutes >= 960 && timeInMinutes < 1320) { // 16:00-22:00
    session = 'NEW_YORK';
    zone = 'HIGH';
  }
  // Asia Session (00:00-08:00 UTC) - MEDIUM LIQUIDITY
  else if (timeInMinutes >= 0 && timeInMinutes < 480) { // 00:00-08:00
    session = 'ASIA';
    zone = 'MEDIUM';
  }
  // Off Hours (22:00-24:00 UTC) - LOW LIQUIDITY
  else {
    session = 'OFF_HOURS';
    zone = 'LOW';
  }
  
  return { zone, session };
}

/**
 * Estimate bid-ask spread based on volatility and session
 */
function estimateSpread(candles: any[], session: string): { spread_pips: number } {
  const recentCandles = candles.slice(-20);
  
  // Calculate average true range as proxy for volatility
  let totalRange = 0;
  for (const candle of recentCandles) {
    const range = candle.high - candle.low;
    totalRange += range;
  }
  const avgRange = totalRange / recentCandles.length;
  const currentPrice = recentCandles[recentCandles.length - 1].close;
  const volatilityPct = (avgRange / currentPrice) * 100;
  
  // Base spread by session
  let baseSpread = 0;
  switch (session) {
    case 'OVERLAP':
      baseSpread = 20; // Tightest spread
      break;
    case 'LONDON':
    case 'NEW_YORK':
      baseSpread = 30;
      break;
    case 'ASIA':
      baseSpread = 40;
      break;
    case 'OFF_HOURS':
      baseSpread = 60; // Widest spread
      break;
    default:
      baseSpread = 40;
  }
  
  // Adjust for volatility
  const volatilityMultiplier = 1 + (volatilityPct * 2);
  const estimatedSpread = baseSpread * volatilityMultiplier;
  
  return {
    spread_pips: Math.round(estimatedSpread)
  };
}

/**
 * Estimate price impact for a given position size
 */
function estimatePriceImpact(volumeProfile: VolumeProfile, session: string): number {
  // Base price impact (basis points for $100K position)
  let baseImpact = 10; // 10 bps = 0.10%
  
  // Adjust for session
  const sessionMultipliers: Record<string, number> = {
    'OVERLAP': 0.5,    // Best liquidity
    'LONDON': 0.7,
    'NEW_YORK': 0.7,
    'ASIA': 1.2,
    'OFF_HOURS': 2.0   // Worst liquidity
  };
  
  const sessionMultiplier = sessionMultipliers[session] || 1.0;
  
  // Adjust for volume
  const volumeMultiplier = volumeProfile.volume_ratio < 0.5 ? 2.0 :
                           volumeProfile.volume_ratio < 0.8 ? 1.5 :
                           volumeProfile.volume_ratio > 1.5 ? 0.8 :
                           1.0;
  
  return baseImpact * sessionMultiplier * volumeMultiplier;
}

/**
 * Calculate market depth score
 */
function calculateMarketDepthScore(
  volumeProfile: VolumeProfile,
  timeAnalysis: { zone: string; session: string }
): number {
  let score = 50; // Base score
  
  // Volume contribution (0-30 points)
  if (volumeProfile.volume_ratio > 1.5) score += 30;
  else if (volumeProfile.volume_ratio > 1.2) score += 20;
  else if (volumeProfile.volume_ratio > 0.8) score += 10;
  else if (volumeProfile.volume_ratio < 0.5) score -= 20;
  
  // Time of day contribution (0-20 points)
  if (timeAnalysis.zone === 'HIGH') score += 20;
  else if (timeAnalysis.zone === 'MEDIUM') score += 10;
  else score -= 10;
  
  return Math.max(0, Math.min(100, score));
}

/**
 * Calculate overall liquidity score
 */
function calculateOverallLiquidityScore(
  volumeProfile: any,
  timeAnalysis: any,
  spreadAnalysis: any,
  depthScore: number
): number {
  // Weighted components
  const volumeScore = volumeProfile.percentile * 0.3;
  const timeScore = (timeAnalysis.zone === 'HIGH' ? 100 : timeAnalysis.zone === 'MEDIUM' ? 60 : 30) * 0.3;
  const spreadScore = Math.max(0, 100 - spreadAnalysis.spread_pips) * 0.2;
  const depthWeight = depthScore * 0.2;
  
  return volumeScore + timeScore + spreadScore + depthWeight;
}

/**
 * Generate liquidity warnings
 */
function generateLiquidityWarnings(
  liquidityScore: number,
  volumeProfile: any,
  timeAnalysis: any,
  spreadAnalysis: any
): string[] {
  const warnings: string[] = [];
  
  if (liquidityScore < 50) {
    warnings.push('⚠️ LOW LIQUIDITY: Reduce position size by 50%');
  }
  
  if (volumeProfile.volume_drought) {
    warnings.push('⚠️ VOLUME DROUGHT: Current volume <50% of average');
  }
  
  if (timeAnalysis.session === 'OFF_HOURS') {
    warnings.push('⚠️ OFF-HOURS TRADING: Spreads are wider, slippage risk high');
  }
  
  if (spreadAnalysis.spread_pips > 50) {
    warnings.push(`⚠️ WIDE SPREADS: Estimated ${spreadAnalysis.spread_pips} pips - costs are high`);
  }
  
  if (timeAnalysis.zone === 'LOW' && volumeProfile.volume_ratio < 0.8) {
    warnings.push('🔴 EXTREME LOW LIQUIDITY: Consider waiting for better conditions');
  }
  
  return warnings;
}

/**
 * Generate liquidity recommendation
 */
function generateLiquidityRecommendation(
  liquidityScore: number,
  timeAnalysis: any,
  warnings: string[]
): string {
  if (liquidityScore >= 80) {
    return '✅ EXCELLENT LIQUIDITY - Optimal for trading. Full position size OK.';
  } else if (liquidityScore >= 70) {
    return '✅ GOOD LIQUIDITY - Safe to trade. Normal position size.';
  } else if (liquidityScore >= 60) {
    return '⚠️ MODERATE LIQUIDITY - Trade with caution. Reduce position size by 25%.';
  } else if (liquidityScore >= 50) {
    return '⚠️ LOW LIQUIDITY - High risk. Reduce position size by 50%.';
  } else {
    return '🔴 POOR LIQUIDITY - Avoid trading. Wait for better conditions.';
  }
}

/**
 * Format liquidity metrics for display
 */
export function formatLiquidityAnalysis(metrics: LiquidityMetrics): string {
  let output = '\n📊 LIQUIDITY ANALYSIS\n';
  output += '═══════════════════════════════════════\n\n';
  
  // Overall Score
  const scoreEmoji = metrics.liquidity_score >= 80 ? '🟢' :
                     metrics.liquidity_score >= 70 ? '🟡' :
                     metrics.liquidity_score >= 50 ? '🟠' : '🔴';
  output += `${scoreEmoji} Liquidity Score: ${metrics.liquidity_score}/100\n`;
  output += `${metrics.optimal_for_trading ? '✅' : '⚠️'} Optimal for Trading: ${metrics.optimal_for_trading ? 'YES' : 'NO'}\n\n`;
  
  // Session Info
  output += `🕐 Trading Session: ${metrics.session}\n`;
  output += `📈 Time Zone: ${metrics.time_of_day_zone} LIQUIDITY\n`;
  output += `📊 Volume Trend: ${metrics.volume_trend}\n`;
  output += `📉 Volume Percentile: ${metrics.volume_percentile}%\n\n`;
  
  // Cost Analysis
  output += `💰 Cost Analysis:\n`;
  output += `   • Spread: ~${metrics.estimated_spread_pips} pips\n`;
  output += `   • Price Impact: ~${metrics.price_impact_bps} bps ($100K position)\n`;
  output += `   • Market Depth: ${metrics.market_depth_score}/100\n\n`;
  
  // Warnings
  if (metrics.warnings.length > 0) {
    output += `⚠️  Warnings:\n`;
    for (const warning of metrics.warnings) {
      output += `   ${warning}\n`;
    }
    output += '\n';
  }
  
  // Recommendation
  output += `💡 Recommendation:\n   ${metrics.recommendation}\n`;
  
  return output;
}
