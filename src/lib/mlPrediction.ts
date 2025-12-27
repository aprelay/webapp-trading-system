/**
 * Machine Learning Price Prediction Module
 * Lightweight statistical ML for price forecasting
 */

import { Candle, TechnicalIndicators } from './technicalAnalysis';

export interface PricePrediction {
  timeframe: '1h' | '4h' | '24h';
  predicted_price: number;
  confidence_interval_upper: number;
  confidence_interval_lower: number;
  confidence: number;
  direction: 'UP' | 'DOWN' | 'NEUTRAL';
  expected_move_pct: number;
  method: string;
}

export interface MLPredictionResult {
  current_price: number;
  predictions: PricePrediction[];
  overall_direction: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  confidence_boost: number;
  summary: string;
}

/**
 * Linear Regression for trend prediction
 */
function linearRegression(values: number[]): { slope: number; intercept: number } {
  const n = values.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  
  for (let i = 0; i < n; i++) {
    sumX += i;
    sumY += values[i];
    sumXY += i * values[i];
    sumXX += i * i;
  }
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return { slope, intercept };
}

/**
 * Exponential Moving Average prediction
 */
function predictWithEMA(candles: Candle[], periods: number, horizon: number): number {
  const closes = candles.map(c => c.close);
  const multiplier = 2 / (periods + 1);
  
  // Calculate EMA
  let ema = closes[0];
  for (let i = 1; i < closes.length; i++) {
    ema = (closes[i] - ema) * multiplier + ema;
  }
  
  // Project forward based on recent trend
  const recentTrend = (closes[closes.length - 1] - closes[closes.length - 10]) / 10;
  return ema + (recentTrend * horizon);
}

/**
 * ARIMA-like prediction using autoregression
 */
function predictWithAutoregression(candles: Candle[], horizon: number): number {
  const closes = candles.map(c => c.close).slice(-20); // Use last 20 candles
  
  // Calculate differences (first order)
  const diffs: number[] = [];
  for (let i = 1; i < closes.length; i++) {
    diffs.push(closes[i] - closes[i - 1]);
  }
  
  // Average recent momentum
  const avgDiff = diffs.slice(-5).reduce((sum, d) => sum + d, 0) / 5;
  
  // Apply momentum with decay
  const decay = 0.8; // Momentum decays over time
  const predictedChange = avgDiff * horizon * Math.pow(decay, horizon);
  
  return closes[closes.length - 1] + predictedChange;
}

/**
 * Momentum-based prediction
 */
function predictWithMomentum(
  candles: Candle[],
  indicators: TechnicalIndicators,
  horizon: number
): number {
  const currentPrice = candles[candles.length - 1].close;
  const closes = candles.map(c => c.close).slice(-20);
  
  // Calculate momentum score (-100 to +100)
  let momentumScore = 0;
  
  // RSI contribution
  if (indicators.rsi_14 > 50) {
    momentumScore += (indicators.rsi_14 - 50);
  } else {
    momentumScore -= (50 - indicators.rsi_14);
  }
  
  // MACD contribution
  if (indicators.macd > indicators.macd_signal) {
    momentumScore += 20;
  } else {
    momentumScore -= 20;
  }
  
  // Trend contribution (price vs SMAs)
  if (currentPrice > indicators.sma_20) momentumScore += 10;
  if (currentPrice > indicators.sma_50) momentumScore += 10;
  
  // Convert momentum to price move
  const atrMultiplier = (momentumScore / 100) * horizon;
  return currentPrice + (indicators.atr_14 * atrMultiplier);
}

/**
 * Pattern-based prediction using historical patterns
 */
function predictWithPatterns(candles: Candle[], horizon: number): number {
  const closes = candles.map(c => c.close);
  const currentPrice = closes[closes.length - 1];
  
  // Find similar historical patterns (simple pattern matching)
  const patternLength = 10;
  const currentPattern = closes.slice(-patternLength);
  
  // Normalize current pattern
  const patternMin = Math.min(...currentPattern);
  const patternMax = Math.max(...currentPattern);
  const normalizedCurrent = currentPattern.map(p => 
    (p - patternMin) / (patternMax - patternMin)
  );
  
  // Search for similar patterns in history
  let bestMatch = { index: 0, similarity: -Infinity };
  
  for (let i = patternLength; i < closes.length - patternLength - horizon; i++) {
    const historicalPattern = closes.slice(i - patternLength, i);
    const histMin = Math.min(...historicalPattern);
    const histMax = Math.max(...historicalPattern);
    const normalizedHist = historicalPattern.map(p =>
      (p - histMin) / (histMax - histMin)
    );
    
    // Calculate similarity (inverse of mean squared error)
    let mse = 0;
    for (let j = 0; j < patternLength; j++) {
      mse += Math.pow(normalizedCurrent[j] - normalizedHist[j], 2);
    }
    const similarity = -mse;
    
    if (similarity > bestMatch.similarity) {
      bestMatch = { index: i, similarity };
    }
  }
  
  // Get what happened after the best match
  const futureMove = closes[bestMatch.index + horizon] - closes[bestMatch.index];
  const futureMoveScaled = futureMove * (currentPrice / closes[bestMatch.index]);
  
  return currentPrice + futureMoveScaled;
}

/**
 * Ensemble prediction (combines multiple models)
 */
function ensemblePrediction(
  candles: Candle[],
  indicators: TechnicalIndicators,
  horizon: number
): { prediction: number; confidence: number } {
  const predictions: number[] = [];
  const weights: number[] = [];
  
  // Model 1: Linear Regression (weight: 1.0)
  const closes = candles.map(c => c.close);
  const { slope, intercept } = linearRegression(closes.slice(-20));
  const lrPrediction = slope * (closes.length - 1 + horizon) + intercept;
  predictions.push(lrPrediction);
  weights.push(1.0);
  
  // Model 2: EMA-based (weight: 1.5)
  const emaPrediction = predictWithEMA(candles, 12, horizon);
  predictions.push(emaPrediction);
  weights.push(1.5);
  
  // Model 3: Autoregression (weight: 1.2)
  const arPrediction = predictWithAutoregression(candles, horizon);
  predictions.push(arPrediction);
  weights.push(1.2);
  
  // Model 4: Momentum-based (weight: 1.8)
  const momentumPrediction = predictWithMomentum(candles, indicators, horizon);
  predictions.push(momentumPrediction);
  weights.push(1.8);
  
  // Model 5: Pattern-based (weight: 1.3)
  const patternPrediction = predictWithPatterns(candles, horizon);
  predictions.push(patternPrediction);
  weights.push(1.3);
  
  // Weighted average
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  const weightedSum = predictions.reduce((sum, p, i) => sum + p * weights[i], 0);
  const ensemblePred = weightedSum / totalWeight;
  
  // Calculate confidence based on agreement between models
  const avgPrediction = predictions.reduce((sum, p) => sum + p, 0) / predictions.length;
  const variance = predictions.reduce((sum, p) => sum + Math.pow(p - avgPrediction, 2), 0) / predictions.length;
  const stdDev = Math.sqrt(variance);
  const currentPrice = candles[candles.length - 1].close;
  const agreementScore = 1 - (stdDev / currentPrice);
  const confidence = Math.max(50, Math.min(95, agreementScore * 100));
  
  return {
    prediction: ensemblePred,
    confidence
  };
}

/**
 * Generate ML predictions for multiple timeframes
 */
export function generateMLPredictions(
  candles: Candle[],
  indicators: TechnicalIndicators
): MLPredictionResult {
  const currentPrice = candles[candles.length - 1].close;
  const predictions: PricePrediction[] = [];
  
  // 1-hour prediction
  const pred1h = ensemblePrediction(candles, indicators, 1);
  const move1h = pred1h.prediction - currentPrice;
  const movePct1h = (move1h / currentPrice) * 100;
  
  predictions.push({
    timeframe: '1h',
    predicted_price: parseFloat(pred1h.prediction.toFixed(2)),
    confidence_interval_upper: parseFloat((pred1h.prediction + indicators.atr_14 * 0.8).toFixed(2)),
    confidence_interval_lower: parseFloat((pred1h.prediction - indicators.atr_14 * 0.8).toFixed(2)),
    confidence: parseFloat(pred1h.confidence.toFixed(1)),
    direction: move1h > 0.5 ? 'UP' : move1h < -0.5 ? 'DOWN' : 'NEUTRAL',
    expected_move_pct: parseFloat(movePct1h.toFixed(2)),
    method: 'Ensemble (5 models)'
  });
  
  // 4-hour prediction
  const pred4h = ensemblePrediction(candles, indicators, 4);
  const move4h = pred4h.prediction - currentPrice;
  const movePct4h = (move4h / currentPrice) * 100;
  
  predictions.push({
    timeframe: '4h',
    predicted_price: parseFloat(pred4h.prediction.toFixed(2)),
    confidence_interval_upper: parseFloat((pred4h.prediction + indicators.atr_14 * 1.5).toFixed(2)),
    confidence_interval_lower: parseFloat((pred4h.prediction - indicators.atr_14 * 1.5).toFixed(2)),
    confidence: parseFloat(pred4h.confidence.toFixed(1)),
    direction: move4h > 2 ? 'UP' : move4h < -2 ? 'DOWN' : 'NEUTRAL',
    expected_move_pct: parseFloat(movePct4h.toFixed(2)),
    method: 'Ensemble (5 models)'
  });
  
  // 24-hour prediction
  const pred24h = ensemblePrediction(candles, indicators, 24);
  const move24h = pred24h.prediction - currentPrice;
  const movePct24h = (move24h / currentPrice) * 100;
  
  predictions.push({
    timeframe: '24h',
    predicted_price: parseFloat(pred24h.prediction.toFixed(2)),
    confidence_interval_upper: parseFloat((pred24h.prediction + indicators.atr_14 * 2.5).toFixed(2)),
    confidence_interval_lower: parseFloat((pred24h.prediction - indicators.atr_14 * 2.5).toFixed(2)),
    confidence: parseFloat(pred24h.confidence.toFixed(1)),
    direction: move24h > 5 ? 'UP' : move24h < -5 ? 'DOWN' : 'NEUTRAL',
    expected_move_pct: parseFloat(movePct24h.toFixed(2)),
    method: 'Ensemble (5 models)'
  });
  
  // Determine overall direction
  const upCount = predictions.filter(p => p.direction === 'UP').length;
  const downCount = predictions.filter(p => p.direction === 'DOWN').length;
  
  let overallDirection: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  let confidenceBoost = 0;
  
  if (upCount > downCount) {
    overallDirection = 'BULLISH';
    confidenceBoost = Math.min(upCount * 5, 15); // Max +15% boost
  } else if (downCount > upCount) {
    overallDirection = 'BEARISH';
    confidenceBoost = Math.min(downCount * 5, 15);
  } else {
    overallDirection = 'NEUTRAL';
  }
  
  const summary = `ML models predict ${overallDirection} movement. ` +
    `1h: ${predictions[0].direction} (${predictions[0].expected_move_pct.toFixed(2)}%), ` +
    `4h: ${predictions[1].direction} (${predictions[1].expected_move_pct.toFixed(2)}%), ` +
    `24h: ${predictions[2].direction} (${predictions[2].expected_move_pct.toFixed(2)}%)`;
  
  return {
    current_price: parseFloat(currentPrice.toFixed(2)),
    predictions,
    overall_direction: overallDirection,
    confidence_boost: parseFloat(confidenceBoost.toFixed(1)),
    summary
  };
}

/**
 * Format ML predictions for display
 */
export function formatMLPredictions(result: MLPredictionResult): string {
  const lines = [
    '🤖 ML PRICE PREDICTIONS',
    `   Current Price: $${result.current_price}`,
    ''
  ];
  
  for (const pred of result.predictions) {
    const arrow = pred.direction === 'UP' ? '📈' : pred.direction === 'DOWN' ? '📉' : '➡️';
    const color = pred.direction === 'UP' ? '🟢' : pred.direction === 'DOWN' ? '🔴' : '⚪';
    
    lines.push(`${color} ${pred.timeframe.toUpperCase()} Prediction: $${pred.predicted_price} ${arrow}`);
    lines.push(`   Move: ${pred.expected_move_pct > 0 ? '+' : ''}${pred.expected_move_pct}%`);
    lines.push(`   Range: $${pred.confidence_interval_lower} - $${pred.confidence_interval_upper}`);
    lines.push(`   Confidence: ${pred.confidence}%`);
    lines.push('');
  }
  
  lines.push(`Overall Direction: ${result.overall_direction}`);
  lines.push(`Confidence Boost: +${result.confidence_boost}%`);
  
  return lines.join('\n');
}

/**
 * Validate prediction against actual signal
 * Returns true if ML prediction agrees with signal direction
 */
export function validatePredictionWithSignal(
  prediction: MLPredictionResult,
  signalType: 'BUY' | 'SELL' | 'HOLD'
): boolean {
  if (signalType === 'BUY' && prediction.overall_direction === 'BULLISH') return true;
  if (signalType === 'SELL' && prediction.overall_direction === 'BEARISH') return true;
  if (signalType === 'HOLD' && prediction.overall_direction === 'NEUTRAL') return true;
  
  return false;
}
