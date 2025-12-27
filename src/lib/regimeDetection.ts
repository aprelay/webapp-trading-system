/**
 * Market Regime Detection Module
 * Classifies market conditions for optimal strategy selection
 */

import { Candle, TechnicalIndicators } from './technicalAnalysis';

export type MarketRegime = 'STRONG_UPTREND' | 'WEAK_UPTREND' | 'RANGING' | 'WEAK_DOWNTREND' | 'STRONG_DOWNTREND' | 'BREAKOUT' | 'BREAKDOWN';

export interface RegimeAnalysis {
  regime: MarketRegime;
  confidence: number;
  volatility: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME';
  trend_strength: number; // 0-100
  mean_reversion_score: number; // 0-100 (higher = more likely to revert)
  should_trade: boolean;
  recommended_strategy: string;
  risk_adjustment: number; // Multiplier for position size (0.5 = half size, 1.5 = 1.5x size)
  description: string;
}

/**
 * Classify volatility level
 */
export function classifyVolatility(atr: number, price: number): 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME' {
  const atrPct = (atr / price) * 100;
  
  if (atrPct < 0.3) return 'LOW';
  if (atrPct < 0.6) return 'MEDIUM';
  if (atrPct < 1.0) return 'HIGH';
  return 'EXTREME';
}

/**
 * Calculate trend strength (0-100)
 */
export function calculateTrendStrength(indicators: TechnicalIndicators, price: number): number {
  let strength = 0;
  
  // ADX contribution (40 points max)
  strength += Math.min(indicators.adx, 40);
  
  // Moving average alignment (30 points max)
  if (price > indicators.sma_20 && indicators.sma_20 > indicators.sma_50 && indicators.sma_50 > indicators.sma_200) {
    strength += 30; // Perfect bullish alignment
  } else if (price < indicators.sma_20 && indicators.sma_20 < indicators.sma_50 && indicators.sma_50 < indicators.sma_200) {
    strength += 30; // Perfect bearish alignment
  } else {
    const alignedCount = [
      price > indicators.sma_20,
      indicators.sma_20 > indicators.sma_50,
      indicators.sma_50 > indicators.sma_200
    ].filter(Boolean).length;
    strength += alignedCount * 10;
  }
  
  // MACD histogram strength (30 points max)
  const macdStrength = Math.abs(indicators.macd_histogram) / indicators.atr_14;
  strength += Math.min(macdStrength * 10, 30);
  
  return Math.min(Math.round(strength), 100);
}

/**
 * Calculate mean reversion score (0-100)
 * Higher score = more likely to revert to mean
 */
export function calculateMeanReversionScore(indicators: TechnicalIndicators, price: number): number {
  let score = 0;
  
  // RSI extremes (40 points max)
  if (indicators.rsi_14 > 70) {
    score += Math.min((indicators.rsi_14 - 70) * 2, 40); // Overbought
  } else if (indicators.rsi_14 < 30) {
    score += Math.min((30 - indicators.rsi_14) * 2, 40); // Oversold
  }
  
  // Bollinger Band position (30 points max)
  const bbPosition = (price - indicators.bb_lower) / (indicators.bb_upper - indicators.bb_lower);
  if (bbPosition > 0.9) {
    score += 30; // Near upper band
  } else if (bbPosition < 0.1) {
    score += 30; // Near lower band
  }
  
  // Stochastic extremes (30 points max)
  if (indicators.stochastic_k > 80) {
    score += Math.min((indicators.stochastic_k - 80) * 1.5, 30);
  } else if (indicators.stochastic_k < 20) {
    score += Math.min((20 - indicators.stochastic_k) * 1.5, 30);
  }
  
  return Math.min(Math.round(score), 100);
}

/**
 * Detect market regime
 */
export function detectMarketRegime(
  candles: Candle[],
  indicators: TechnicalIndicators,
  currentPrice: number
): RegimeAnalysis {
  const volatility = classifyVolatility(indicators.atr_14, currentPrice);
  const trendStrength = calculateTrendStrength(indicators, currentPrice);
  const meanReversionScore = calculateMeanReversionScore(indicators, currentPrice);
  
  // Classify regime
  let regime: MarketRegime;
  let confidence: number;
  let shouldTrade: boolean;
  let recommendedStrategy: string;
  let riskAdjustment: number;
  let description: string;
  
  // Check for breakout/breakdown conditions
  const recentCandles = candles.slice(-10);
  const recentVolumes = recentCandles.map(c => c.volume || 0);
  const avgVolume = recentVolumes.reduce((sum, v) => sum + v, 0) / recentVolumes.length;
  const currentVolume = recentCandles[recentCandles.length - 1].volume || 0;
  const volumeSpike = currentVolume > avgVolume * 1.5;
  
  if (volatility === 'EXTREME' && volumeSpike) {
    if (currentPrice > indicators.bb_upper && indicators.rsi_14 > 60) {
      regime = 'BREAKOUT';
      confidence = 75;
      shouldTrade = true;
      recommendedStrategy = 'Trend-following (aggressive entry)';
      riskAdjustment = 1.3;
      description = 'Explosive upside breakout with volume - ride the momentum';
    } else if (currentPrice < indicators.bb_lower && indicators.rsi_14 < 40) {
      regime = 'BREAKDOWN';
      confidence = 75;
      shouldTrade = false; // Avoid trading in breakdown
      recommendedStrategy = 'Wait for stabilization';
      riskAdjustment = 0.5;
      description = 'Sharp breakdown in progress - avoid trading until dust settles';
    } else {
      regime = 'RANGING';
      confidence = 50;
      shouldTrade = false;
      recommendedStrategy = 'Wait for direction';
      riskAdjustment = 0.5;
      description = 'Extreme volatility without clear direction - wait for clarity';
    }
  }
  // Strong trending markets
  else if (indicators.adx > 30 && trendStrength > 70) {
    const isUptrend = currentPrice > indicators.sma_20 && 
                      indicators.sma_20 > indicators.sma_50 &&
                      indicators.plus_di > indicators.minus_di;
    
    if (isUptrend) {
      regime = 'STRONG_UPTREND';
      confidence = 90;
      shouldTrade = true;
      recommendedStrategy = 'Trend-following (buy dips, trail stops)';
      riskAdjustment = 1.5; // Increase position size in strong trends
      description = 'Strong bullish trend confirmed - ideal for aggressive long positions';
    } else {
      regime = 'STRONG_DOWNTREND';
      confidence = 90;
      shouldTrade = false; // Don't trade against strong downtrends in gold
      recommendedStrategy = 'Stay in cash or short';
      riskAdjustment = 0.3;
      description = 'Strong bearish trend - avoid long positions';
    }
  }
  // Weak trending markets
  else if (indicators.adx > 20 && trendStrength > 40) {
    const isUptrend = currentPrice > indicators.sma_50 && 
                      indicators.plus_di > indicators.minus_di;
    
    if (isUptrend) {
      regime = 'WEAK_UPTREND';
      confidence = 70;
      shouldTrade = true;
      recommendedStrategy = 'Trend-following (selective entries)';
      riskAdjustment = 1.0;
      description = 'Moderate bullish trend - trade with normal position sizing';
    } else {
      regime = 'WEAK_DOWNTREND';
      confidence = 70;
      shouldTrade = false;
      recommendedStrategy = 'Reduce exposure or stay flat';
      riskAdjustment = 0.5;
      description = 'Moderate bearish trend - reduce risk or wait';
    }
  }
  // Ranging/choppy markets
  else {
    regime = 'RANGING';
    confidence = 80;
    
    if (meanReversionScore > 60) {
      shouldTrade = true;
      recommendedStrategy = 'Mean-reversion (fade extremes)';
      riskAdjustment = 0.8;
      description = 'Choppy market with mean-reversion opportunities - trade extremes only';
    } else {
      shouldTrade = false;
      recommendedStrategy = 'Wait for trend to develop';
      riskAdjustment = 0.5;
      description = 'Choppy market without clear opportunity - stay on sidelines';
    }
  }
  
  return {
    regime,
    confidence,
    volatility,
    trend_strength: trendStrength,
    mean_reversion_score: meanReversionScore,
    should_trade: shouldTrade,
    recommended_strategy: recommendedStrategy,
    risk_adjustment: riskAdjustment,
    description
  };
}

/**
 * Format regime analysis for display
 */
export function formatRegimeAnalysis(regime: RegimeAnalysis): string {
  const regimeEmoji: { [key in MarketRegime]: string } = {
    'STRONG_UPTREND': '🚀',
    'WEAK_UPTREND': '📈',
    'RANGING': '↔️',
    'WEAK_DOWNTREND': '📉',
    'STRONG_DOWNTREND': '💥',
    'BREAKOUT': '⚡',
    'BREAKDOWN': '⚠️'
  };
  
  const volatilityEmoji: { [key: string]: string } = {
    'LOW': '🟢',
    'MEDIUM': '🟡',
    'HIGH': '🟠',
    'EXTREME': '🔴'
  };
  
  const lines = [
    `${regimeEmoji[regime.regime]} MARKET REGIME: ${regime.regime.replace(/_/g, ' ')}`,
    `   Confidence: ${regime.confidence}%`,
    `   ${regime.description}`,
    '',
    `${volatilityEmoji[regime.volatility]} Volatility: ${regime.volatility}`,
    `📊 Trend Strength: ${regime.trend_strength}/100`,
    `🔄 Mean Reversion Score: ${regime.mean_reversion_score}/100`,
    '',
    `💡 Recommended Strategy: ${regime.recommended_strategy}`,
    `⚖️ Risk Adjustment: ${regime.risk_adjustment}x position size`,
    '',
    regime.should_trade ? '✅ TRADE THIS MARKET' : '❌ AVOID TRADING - WAIT FOR BETTER SETUP'
  ];
  
  return lines.join('\n');
}

/**
 * Get regime-specific trading advice
 */
export function getRegimeAdvice(regime: RegimeAnalysis): string {
  const advice: { [key in MarketRegime]: string[] } = {
    'STRONG_UPTREND': [
      'Trade aggressively in direction of trend',
      'Use wider stops to avoid being shaken out',
      'Scale into positions on pullbacks',
      'Trail stops to lock in profits',
      'Increase position size (1.5x normal)'
    ],
    'WEAK_UPTREND': [
      'Trade with normal position sizing',
      'Wait for confirmation before entry',
      'Use tighter stops (more risk of reversal)',
      'Take profits at resistance levels',
      'Be ready to exit quickly if trend weakens'
    ],
    'RANGING': [
      'Trade mean-reversion strategies only',
      'Fade extremes (buy oversold, sell overbought)',
      'Use smaller position sizes (0.5-0.8x)',
      'Take quick profits (TP1 only)',
      'Avoid trend-following strategies'
    ],
    'WEAK_DOWNTREND': [
      'Reduce exposure significantly',
      'Avoid long positions',
      'Consider staying in cash',
      'Wait for trend reversal signals',
      'If trading, use very tight stops'
    ],
    'STRONG_DOWNTREND': [
      'DO NOT TRADE LONG POSITIONS',
      'Stay in cash or hedge',
      'Wait for clear trend reversal',
      'Protect capital - preservation is key',
      'Consider opposite market (stocks if gold falling)'
    ],
    'BREAKOUT': [
      'Enter quickly on breakout confirmation',
      'Use momentum strategies',
      'Wider stops (volatility is high)',
      'Scale out at multiple targets',
      'Be aggressive but protect downside'
    ],
    'BREAKDOWN': [
      'STAY OUT - highly dangerous',
      'Let the dust settle first',
      'Wait for stabilization',
      'Look for reversal signals',
      'Patience is key'
    ]
  };
  
  const regimeAdvice = advice[regime.regime];
  
  return [
    `📚 TRADING ADVICE FOR ${regime.regime.replace(/_/g, ' ')}:`,
    '',
    ...regimeAdvice.map((tip, i) => `${i + 1}. ${tip}`),
    '',
    `Risk Level: ${regime.volatility}`,
    `Position Sizing: ${(regime.risk_adjustment * 100).toFixed(0)}% of normal`
  ].join('\n');
}
