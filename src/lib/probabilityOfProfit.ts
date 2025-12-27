/**
 * Probability of Profit (PoP) Calculator
 * Estimates the likelihood of hitting take profit targets
 */

import { Candle, TechnicalIndicators } from './technicalAnalysis';
import { TradeSignal } from './technicalAnalysis';

export interface ProbabilityResult {
  tp1_probability: number;
  tp2_probability: number;
  tp3_probability: number;
  stop_loss_probability: number;
  expected_value: number; // Expected profit/loss
  risk_reward_adjusted: number;
  recommendation: 'STRONG_TRADE' | 'GOOD_TRADE' | 'MARGINAL_TRADE' | 'AVOID_TRADE';
  summary: string;
}

/**
 * Calculate probability using distance and volatility
 */
function calculateTargetProbability(
  currentPrice: number,
  targetPrice: number,
  atr: number,
  trendStrength: number,
  volatility: number
): number {
  // Distance to target in ATR units
  const distance = Math.abs(targetPrice - currentPrice);
  const atrDistance = distance / atr;
  
  // Base probability (inverse relationship with distance)
  // Closer targets have higher probability
  let baseProbability: number;
  
  if (atrDistance < 1) {
    baseProbability = 80;
  } else if (atrDistance < 2) {
    baseProbability = 65;
  } else if (atrDistance < 3) {
    baseProbability = 50;
  } else if (atrDistance < 4) {
    baseProbability = 35;
  } else {
    baseProbability = 20;
  }
  
  // Adjust for trend strength (0-100)
  const trendAdjustment = (trendStrength - 50) / 10; // -5 to +5
  baseProbability += trendAdjustment;
  
  // Adjust for volatility
  // Low volatility = harder to reach targets
  // High volatility = easier to reach targets
  const volatilityBonus = (volatility - 1) * 5; // -5 to +10
  baseProbability += volatilityBonus;
  
  // Clamp between 5% and 95%
  return Math.max(5, Math.min(95, baseProbability));
}

/**
 * Calculate stop loss hit probability
 */
function calculateStopLossProbability(
  currentPrice: number,
  stopLoss: number,
  atr: number,
  trendStrength: number,
  signalType: 'BUY' | 'SELL'
): number {
  const distance = Math.abs(currentPrice - stopLoss);
  const atrDistance = distance / atr;
  
  // Base probability (inverse of distance)
  let baseProbability: number;
  
  if (atrDistance < 1) {
    baseProbability = 60; // Very close stop = likely to hit
  } else if (atrDistance < 1.5) {
    baseProbability = 40;
  } else if (atrDistance < 2) {
    baseProbability = 25;
  } else {
    baseProbability = 15;
  }
  
  // Adjust for trend (strong trend = less likely to hit stop)
  if (signalType === 'BUY') {
    // For BUY: strong uptrend = less likely to hit stop
    const trendAdjustment = (trendStrength - 50) / 10;
    baseProbability -= trendAdjustment;
  } else {
    // For SELL: strong downtrend = less likely to hit stop
    const trendAdjustment = (trendStrength - 50) / 10;
    baseProbability -= trendAdjustment;
  }
  
  return Math.max(5, Math.min(80, baseProbability));
}

/**
 * Calculate expected value of trade
 */
function calculateExpectedValue(
  entryPrice: number,
  stopLoss: number,
  tp1: number,
  tp2: number,
  tp3: number,
  probabilities: {
    tp1: number;
    tp2: number;
    tp3: number;
    sl: number;
  }
): number {
  // Assume we take partial profits: 50% at TP1, 30% at TP2, 20% at TP3
  const tp1Profit = (tp1 - entryPrice) * 0.5;
  const tp2Profit = (tp2 - entryPrice) * 0.3;
  const tp3Profit = (tp3 - entryPrice) * 0.2;
  const slLoss = (stopLoss - entryPrice);
  
  // Expected value calculation
  const ev = 
    (probabilities.tp1 / 100) * tp1Profit +
    (probabilities.tp2 / 100) * tp2Profit +
    (probabilities.tp3 / 100) * tp3Profit +
    (probabilities.sl / 100) * slLoss;
  
  return ev;
}

/**
 * Calculate probability of profit for a trade
 */
export function calculateProbabilityOfProfit(
  signal: TradeSignal,
  indicators: TechnicalIndicators,
  candles: Candle[]
): ProbabilityResult {
  const currentPrice = signal.price;
  const atr = indicators.atr_14;
  
  // Calculate trend strength (0-100)
  let trendStrength = 50; // Neutral
  
  if (signal.signal_type === 'BUY') {
    if (currentPrice > indicators.sma_20) trendStrength += 10;
    if (currentPrice > indicators.sma_50) trendStrength += 10;
    if (indicators.adx > 25) trendStrength += Math.min(indicators.adx - 25, 20);
    if (indicators.macd > indicators.macd_signal) trendStrength += 10;
  } else if (signal.signal_type === 'SELL') {
    if (currentPrice < indicators.sma_20) trendStrength += 10;
    if (currentPrice < indicators.sma_50) trendStrength += 10;
    if (indicators.adx > 25) trendStrength += Math.min(indicators.adx - 25, 20);
    if (indicators.macd < indicators.macd_signal) trendStrength += 10;
  }
  
  trendStrength = Math.min(100, trendStrength);
  
  // Calculate volatility ratio (current ATR vs average)
  const recentCandles = candles.slice(-50);
  const atrValues: number[] = [];
  
  for (let i = 14; i < recentCandles.length; i++) {
    const subset = recentCandles.slice(i - 14, i);
    let atrSum = 0;
    for (let j = 1; j < subset.length; j++) {
      const tr = Math.max(
        subset[j].high - subset[j].low,
        Math.abs(subset[j].high - subset[j - 1].close),
        Math.abs(subset[j].low - subset[j - 1].close)
      );
      atrSum += tr;
    }
    atrValues.push(atrSum / 14);
  }
  
  const avgAtr = atrValues.reduce((sum, v) => sum + v, 0) / atrValues.length;
  const volatility = atr / avgAtr;
  
  // Calculate probabilities for each target
  const tp1Prob = calculateTargetProbability(
    currentPrice,
    signal.take_profit_1,
    atr,
    trendStrength,
    volatility
  );
  
  const tp2Prob = calculateTargetProbability(
    currentPrice,
    signal.take_profit_2,
    atr,
    trendStrength,
    volatility
  );
  
  const tp3Prob = calculateTargetProbability(
    currentPrice,
    signal.take_profit_3,
    atr,
    trendStrength,
    volatility
  );
  
  const slProb = calculateStopLossProbability(
    currentPrice,
    signal.stop_loss,
    atr,
    trendStrength,
    signal.signal_type
  );
  
  // Calculate expected value
  const expectedValue = calculateExpectedValue(
    currentPrice,
    signal.stop_loss,
    signal.take_profit_1,
    signal.take_profit_2,
    signal.take_profit_3,
    { tp1: tp1Prob, tp2: tp2Prob, tp3: tp3Prob, sl: slProb }
  );
  
  // Calculate risk-reward adjusted for probability
  const avgTpProb = (tp1Prob + tp2Prob + tp3Prob) / 3;
  const riskRewardAdjusted = avgTpProb / slProb;
  
  // Determine recommendation
  let recommendation: 'STRONG_TRADE' | 'GOOD_TRADE' | 'MARGINAL_TRADE' | 'AVOID_TRADE';
  
  if (tp1Prob > 70 && expectedValue > 5 && riskRewardAdjusted > 2) {
    recommendation = 'STRONG_TRADE';
  } else if (tp1Prob > 60 && expectedValue > 0 && riskRewardAdjusted > 1.5) {
    recommendation = 'GOOD_TRADE';
  } else if (tp1Prob > 50 && expectedValue > -2) {
    recommendation = 'MARGINAL_TRADE';
  } else {
    recommendation = 'AVOID_TRADE';
  }
  
  const summary = `TP1 has ${tp1Prob.toFixed(0)}% chance of hitting. ` +
    `Expected value: $${expectedValue.toFixed(2)}. ` +
    `Risk-adjusted R:R: ${riskRewardAdjusted.toFixed(2)}:1. ` +
    `Recommendation: ${recommendation.replace(/_/g, ' ')}`;
  
  return {
    tp1_probability: parseFloat(tp1Prob.toFixed(1)),
    tp2_probability: parseFloat(tp2Prob.toFixed(1)),
    tp3_probability: parseFloat(tp3Prob.toFixed(1)),
    stop_loss_probability: parseFloat(slProb.toFixed(1)),
    expected_value: parseFloat(expectedValue.toFixed(2)),
    risk_reward_adjusted: parseFloat(riskRewardAdjusted.toFixed(2)),
    recommendation,
    summary
  };
}

/**
 * Format probability results for display
 */
export function formatProbabilityResults(pop: ProbabilityResult): string {
  const recommendationEmoji: { [key: string]: string } = {
    'STRONG_TRADE': '🌟',
    'GOOD_TRADE': '✅',
    'MARGINAL_TRADE': '⚠️',
    'AVOID_TRADE': '❌'
  };
  
  const lines = [
    '🎯 PROBABILITY OF PROFIT',
    '',
    '📊 Target Probabilities:',
    `   TP1: ${pop.tp1_probability}% ${pop.tp1_probability > 70 ? '🟢' : pop.tp1_probability > 50 ? '🟡' : '🔴'}`,
    `   TP2: ${pop.tp2_probability}% ${pop.tp2_probability > 60 ? '🟢' : pop.tp2_probability > 40 ? '🟡' : '🔴'}`,
    `   TP3: ${pop.tp3_probability}% ${pop.tp3_probability > 50 ? '🟢' : pop.tp3_probability > 30 ? '🟡' : '🔴'}`,
    '',
    '⚠️ Risk Analysis:',
    `   Stop Loss Hit Probability: ${pop.stop_loss_probability}% ${pop.stop_loss_probability < 30 ? '🟢' : pop.stop_loss_probability < 50 ? '🟡' : '🔴'}`,
    `   Expected Value: $${pop.expected_value} ${pop.expected_value > 0 ? '✅ Positive' : '❌ Negative'}`,
    `   Risk-Adjusted R:R: ${pop.risk_reward_adjusted}:1`,
    '',
    `${recommendationEmoji[pop.recommendation]} ${pop.recommendation.replace(/_/g, ' ')}`
  ];
  
  return lines.join('\n');
}

/**
 * Should we take this trade based on PoP?
 */
export function shouldTakeTrade(pop: ProbabilityResult, minTp1Probability: number = 60): boolean {
  return pop.tp1_probability >= minTp1Probability && 
         pop.expected_value > 0 &&
         pop.recommendation !== 'AVOID_TRADE';
}
