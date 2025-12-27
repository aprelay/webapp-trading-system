/**
 * Enhanced Signal Generation with All Hedge Fund Features
 * Integrates: Risk Management, Pattern Detection, Regime Detection, ML Prediction, PoP
 */

import { Candle, TechnicalIndicators, TradeSignal, generateSignal, calculateIndicators } from './technicalAnalysis';
import { detectChartPatterns, PatternDetectionResult } from './patternDetection';
import { detectMarketRegime, RegimeAnalysis } from './regimeDetection';
import { generateMLPredictions, MLPredictionResult, validatePredictionWithSignal } from './mlPrediction';
import { calculateProbabilityOfProfit, ProbabilityResult, shouldTakeTrade } from './probabilityOfProfit';
import { calculateRiskMetrics, RiskMetrics } from './advancedRisk';

export interface EnhancedSignal {
  // Original signal
  base_signal: TradeSignal;
  
  // Enhanced analytics
  patterns: PatternDetectionResult;
  regime: RegimeAnalysis;
  ml_prediction: MLPredictionResult;
  probability: ProbabilityResult;
  risk_metrics?: RiskMetrics;
  
  // Adjusted values
  final_confidence: number;
  adjusted_position_size_multiplier: number;
  should_trade: boolean;
  trade_quality: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'DO_NOT_TRADE';
  
  // Reasoning
  confidence_breakdown: {
    base: number;
    pattern_boost: number;
    regime_boost: number;
    ml_boost: number;
    pop_boost: number;
    news_boost: number;
  };
  
  reasons_for: string[];
  reasons_against: string[];
  final_recommendation: string;
  
  // Metadata
  generated_at: string;
  processing_time_ms: number;
}

/**
 * Generate enhanced signal with all hedge fund features
 */
export async function generateEnhancedSignal(
  candles: Candle[],
  currentPrice: number,
  tradingStyle: 'day_trade' | 'swing_trade',
  db?: any,
  accountId?: number
): Promise<EnhancedSignal> {
  const startTime = Date.now();
  
  // Step 1: Calculate base indicators
  const indicators = calculateIndicators(candles);
  if (!indicators) {
    throw new Error('Failed to calculate indicators');
  }
  
  // Step 2: Generate base signal
  const baseSignal = generateSignal(currentPrice, indicators, tradingStyle);
  
  // Step 3: Detect chart patterns
  const patterns = detectChartPatterns(candles);
  
  // Step 4: Detect market regime
  const regime = detectMarketRegime(candles, indicators, currentPrice);
  
  // Step 5: Generate ML predictions
  const mlPrediction = generateMLPredictions(candles, indicators);
  
  // Step 6: Calculate probability of profit
  const probability = calculateProbabilityOfProfit(baseSignal, indicators, candles);
  
  // Step 7: Get risk metrics (if database available)
  let riskMetrics: RiskMetrics | undefined;
  if (db && accountId) {
    try {
      riskMetrics = await calculateRiskMetrics(db, accountId);
    } catch (error) {
      console.warn('Could not calculate risk metrics:', error);
    }
  }
  
  // Step 8: Calculate confidence adjustments
  const confidenceBreakdown = {
    base: baseSignal.confidence,
    pattern_boost: patterns.confidence_boost,
    regime_boost: regime.should_trade ? 5 : -10,
    ml_boost: mlPrediction.confidence_boost,
    pop_boost: probability.tp1_probability > 70 ? 10 : probability.tp1_probability > 60 ? 5 : 0,
    news_boost: 0 // Will be added by caller if news available
  };
  
  // Calculate final confidence (capped at 95%)
  const rawConfidence = 
    confidenceBreakdown.base +
    confidenceBreakdown.pattern_boost +
    confidenceBreakdown.regime_boost +
    confidenceBreakdown.ml_boost +
    confidenceBreakdown.pop_boost +
    confidenceBreakdown.news_boost;
  
  const finalConfidence = Math.max(30, Math.min(95, rawConfidence));
  
  // Step 9: Determine position size multiplier
  let positionSizeMultiplier = regime.risk_adjustment;
  
  // Reduce size if probability is marginal
  if (probability.recommendation === 'MARGINAL_TRADE') {
    positionSizeMultiplier *= 0.7;
  } else if (probability.recommendation === 'AVOID_TRADE') {
    positionSizeMultiplier *= 0.3;
  }
  
  // Increase size for excellent setups
  if (probability.recommendation === 'STRONG_TRADE' && patterns.patterns.length > 0) {
    positionSizeMultiplier *= 1.2;
  }
  
  // Cap multiplier between 0.3x and 2.0x
  positionSizeMultiplier = Math.max(0.3, Math.min(2.0, positionSizeMultiplier));
  
  // Step 10: Validate signal with ML prediction
  const mlValidation = validatePredictionWithSignal(mlPrediction, baseSignal.signal_type);
  
  // Step 11: Determine if we should trade
  let shouldTrade = true;
  const reasonsFor: string[] = [];
  const reasonsAgainst: string[] = [];
  
  // Check regime
  if (!regime.should_trade) {
    shouldTrade = false;
    reasonsAgainst.push(`Market regime ${regime.regime} - not favorable for trading`);
  } else {
    reasonsFor.push(`Market regime ${regime.regime} - favorable conditions`);
  }
  
  // Check ML prediction alignment
  if (!mlValidation) {
    reasonsAgainst.push('ML prediction does not agree with signal direction');
  } else {
    reasonsFor.push('ML prediction confirms signal direction');
  }
  
  // Check probability of profit
  if (!shouldTakeTrade(probability, 60)) {
    shouldTrade = false;
    reasonsAgainst.push(`Low probability of profit (TP1: ${probability.tp1_probability}%)`);
  } else {
    reasonsFor.push(`High probability of profit (TP1: ${probability.tp1_probability}%)`);
  }
  
  // Check risk metrics (if available)
  if (riskMetrics) {
    if (riskMetrics.drawdown.should_pause_trading) {
      shouldTrade = false;
      reasonsAgainst.push(`Drawdown limit exceeded (${riskMetrics.drawdown.current_drawdown_pct}%)`);
    }
    
    if (!riskMetrics.portfolio_heat.is_within_limit) {
      shouldTrade = false;
      reasonsAgainst.push(`Portfolio heat too high (${riskMetrics.portfolio_heat.total_risk_pct}%)`);
    }
    
    if (riskMetrics.drawdown.is_within_limit && riskMetrics.portfolio_heat.is_within_limit) {
      reasonsFor.push('Risk limits are healthy');
    }
  }
  
  // Check base signal
  if (baseSignal.signal_type === 'HOLD') {
    shouldTrade = false;
    reasonsAgainst.push('Base signal is HOLD');
  }
  
  // Check minimum confidence
  if (finalConfidence < 65) {
    shouldTrade = false;
    reasonsAgainst.push(`Confidence too low (${finalConfidence}%)`);
  }
  
  // Add pattern insights
  if (patterns.patterns.length > 0) {
    reasonsFor.push(`Detected ${patterns.patterns.length} chart pattern(s): ${patterns.patterns.map(p => p.pattern_type).join(', ')}`);
  }
  
  // Step 12: Determine trade quality
  let tradeQuality: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR' | 'DO_NOT_TRADE';
  
  if (!shouldTrade) {
    tradeQuality = 'DO_NOT_TRADE';
  } else if (
    finalConfidence >= 90 &&
    probability.recommendation === 'STRONG_TRADE' &&
    regime.regime.includes('UPTREND') &&
    mlValidation
  ) {
    tradeQuality = 'EXCELLENT';
  } else if (
    finalConfidence >= 80 &&
    probability.recommendation !== 'AVOID_TRADE' &&
    regime.should_trade
  ) {
    tradeQuality = 'GOOD';
  } else if (
    finalConfidence >= 70 &&
    regime.should_trade
  ) {
    tradeQuality = 'FAIR';
  } else {
    tradeQuality = 'POOR';
  }
  
  // Step 13: Generate final recommendation
  let finalRecommendation = '';
  
  switch (tradeQuality) {
    case 'EXCELLENT':
      finalRecommendation = `🌟 EXCELLENT SETUP: All systems aligned. Execute immediately with ${positionSizeMultiplier.toFixed(1)}x position size. High conviction trade.`;
      break;
    case 'GOOD':
      finalRecommendation = `✅ GOOD SETUP: Most indicators favorable. Execute with ${positionSizeMultiplier.toFixed(1)}x position size. Solid trade opportunity.`;
      break;
    case 'FAIR':
      finalRecommendation = `⚠️ FAIR SETUP: Acceptable but not ideal. Consider executing with ${positionSizeMultiplier.toFixed(1)}x position size if conditions improve.`;
      break;
    case 'POOR':
      finalRecommendation = `🔴 POOR SETUP: Many concerns. Only trade if you have strong conviction, use ${positionSizeMultiplier.toFixed(1)}x position size.`;
      break;
    case 'DO_NOT_TRADE':
      finalRecommendation = `❌ DO NOT TRADE: ${reasonsAgainst.join('; ')}. Wait for better opportunity.`;
      break;
  }
  
  const processingTime = Date.now() - startTime;
  
  return {
    base_signal: baseSignal,
    patterns,
    regime,
    ml_prediction: mlPrediction,
    probability,
    risk_metrics: riskMetrics,
    final_confidence: parseFloat(finalConfidence.toFixed(1)),
    adjusted_position_size_multiplier: parseFloat(positionSizeMultiplier.toFixed(2)),
    should_trade: shouldTrade,
    trade_quality: tradeQuality,
    confidence_breakdown: confidenceBreakdown,
    reasons_for: reasonsFor,
    reasons_against: reasonsAgainst,
    final_recommendation: finalRecommendation,
    generated_at: new Date().toISOString(),
    processing_time_ms: processingTime
  };
}

/**
 * Format enhanced signal for Telegram
 */
export function formatEnhancedSignalForTelegram(signal: EnhancedSignal): string {
  const s = signal.base_signal;
  const emoji = s.signal_type === 'BUY' ? '🟢' : s.signal_type === 'SELL' ? '🔴' : '⚪';
  const qualityEmoji = {
    'EXCELLENT': '🌟',
    'GOOD': '✅',
    'FAIR': '⚠️',
    'POOR': '🔴',
    'DO_NOT_TRADE': '❌'
  }[signal.trade_quality];
  
  const lines = [
    `${emoji} ${qualityEmoji} ENHANCED GOLD SIGNAL`,
    '',
    `📊 ${s.signal_type} ${s.trading_style.replace('_', ' ').toUpperCase()}`,
    `💰 Entry: $${s.price}`,
    `🛑 Stop Loss: $${s.stop_loss} (Risk: $${Math.abs(s.price - s.stop_loss).toFixed(2)})`,
    `🎯 TP1: $${s.take_profit_1} (${signal.probability.tp1_probability}% prob)`,
    `🎯 TP2: $${s.take_profit_2} (${signal.probability.tp2_probability}% prob)`,
    `🎯 TP3: $${s.take_profit_3} (${signal.probability.tp3_probability}% prob)`,
    `⚖️ Risk:Reward: 1:${((s.take_profit_1 - s.price) / Math.abs(s.price - s.stop_loss)).toFixed(1)}`,
    '',
    '📈 TECHNICAL ANALYSIS:',
    ...signal.reasons_for.slice(0, 3).map(r => `   ✅ ${r}`),
  ];
  
  if (signal.patterns.patterns.length > 0) {
    lines.push('');
    lines.push('📊 CHART PATTERNS:');
    for (const pattern of signal.patterns.patterns.slice(0, 2)) {
      lines.push(`   ${pattern.direction === 'bullish' ? '🟢' : '🔴'} ${pattern.pattern_type} (${pattern.confidence}%)`);
    }
  }
  
  lines.push('');
  lines.push('🤖 MACHINE LEARNING:');
  lines.push(`   ${signal.ml_prediction.predictions[0].direction === 'UP' ? '📈' : '📉'} 1H: $${signal.ml_prediction.predictions[0].predicted_price} (${signal.ml_prediction.predictions[0].confidence}%)`);
  lines.push(`   ${signal.ml_prediction.predictions[1].direction === 'UP' ? '📈' : '📉'} 4H: $${signal.ml_prediction.predictions[1].predicted_price} (${signal.ml_prediction.predictions[1].confidence}%)`);
  lines.push(`   Overall: ${signal.ml_prediction.overall_direction}`);
  
  lines.push('');
  lines.push(`🚀 MARKET REGIME: ${signal.regime.regime.replace(/_/g, ' ')}`);
  lines.push(`   ${signal.regime.description}`);
  lines.push(`   Position Size: ${signal.adjusted_position_size_multiplier}x`);
  
  if (signal.risk_metrics) {
    lines.push('');
    lines.push('⚠️ RISK METRICS:');
    lines.push(`   VaR (95%): $${signal.risk_metrics.var.var_95}`);
    lines.push(`   Portfolio Heat: ${signal.risk_metrics.portfolio_heat.total_risk_pct}%`);
    lines.push(`   Drawdown: ${signal.risk_metrics.drawdown.current_drawdown_pct}%`);
    lines.push(`   Sharpe: ${signal.risk_metrics.sharpe_ratio}`);
  }
  
  lines.push('');
  lines.push('🎯 PROBABILITY ANALYSIS:');
  lines.push(`   Expected Value: $${signal.probability.expected_value}`);
  lines.push(`   ${signal.probability.recommendation.replace(/_/g, ' ')}`);
  
  lines.push('');
  lines.push(`🔢 CONFIDENCE: ${signal.final_confidence}%`);
  lines.push(`   (Base: ${signal.confidence_breakdown.base}% + Patterns: +${signal.confidence_breakdown.pattern_boost}% + ML: +${signal.confidence_breakdown.ml_boost}% + Regime: ${signal.confidence_breakdown.regime_boost >= 0 ? '+' : ''}${signal.confidence_breakdown.regime_boost}%)`);
  
  lines.push('');
  lines.push('💡 RECOMMENDATION:');
  lines.push(signal.final_recommendation);
  
  if (signal.reasons_against.length > 0) {
    lines.push('');
    lines.push('⚠️ CONCERNS:');
    lines.push(...signal.reasons_against.map(r => `   • ${r}`));
  }
  
  lines.push('');
  lines.push(`⏰ Generated: ${new Date(signal.generated_at).toLocaleString()}`);
  lines.push(`⚡ Processing: ${signal.processing_time_ms}ms`);
  
  return lines.join('\n');
}

/**
 * Format enhanced signal for display
 */
export function formatEnhancedSignal(signal: EnhancedSignal): string {
  return formatEnhancedSignalForTelegram(signal);
}
