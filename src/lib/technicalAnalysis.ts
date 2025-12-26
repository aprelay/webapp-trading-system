// Technical Analysis Library for Gold/USD Trading

export interface Candle {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface TechnicalIndicators {
  rsi_14: number;
  macd: number;
  macd_signal: number;
  macd_histogram: number;
  sma_20: number;
  sma_50: number;
  sma_200: number;
  ema_12: number;
  ema_26: number;
  bb_upper: number;
  bb_middle: number;
  bb_lower: number;
  atr_14: number;
}

export interface TradeSignal {
  signal_type: 'BUY' | 'SELL' | 'HOLD';
  trading_style: 'day_trade' | 'swing_trade';
  price: number;
  stop_loss: number;
  take_profit_1: number;
  take_profit_2: number;
  take_profit_3: number;
  confidence: number;
  reason: string;
}

// Calculate Simple Moving Average
export function calculateSMA(prices: number[], period: number): number {
  if (prices.length < period) return 0;
  const sum = prices.slice(-period).reduce((a, b) => a + b, 0);
  return sum / period;
}

// Calculate Exponential Moving Average
export function calculateEMA(prices: number[], period: number): number {
  if (prices.length < period) return 0;
  
  const multiplier = 2 / (period + 1);
  let ema = calculateSMA(prices.slice(0, period), period);
  
  for (let i = period; i < prices.length; i++) {
    ema = (prices[i] - ema) * multiplier + ema;
  }
  
  return ema;
}

// Calculate Relative Strength Index (RSI)
export function calculateRSI(prices: number[], period: number = 14): number {
  if (prices.length < period + 1) return 50;
  
  const changes = [];
  for (let i = 1; i < prices.length; i++) {
    changes.push(prices[i] - prices[i - 1]);
  }
  
  let gains = 0;
  let losses = 0;
  
  for (let i = 0; i < period; i++) {
    if (changes[i] > 0) gains += changes[i];
    else losses += Math.abs(changes[i]);
  }
  
  let avgGain = gains / period;
  let avgLoss = losses / period;
  
  for (let i = period; i < changes.length; i++) {
    const change = changes[i];
    avgGain = (avgGain * (period - 1) + (change > 0 ? change : 0)) / period;
    avgLoss = (avgLoss * (period - 1) + (change < 0 ? Math.abs(change) : 0)) / period;
  }
  
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - (100 / (1 + rs));
}

// Calculate MACD
export function calculateMACD(prices: number[]): { macd: number; signal: number; histogram: number } {
  const ema12 = calculateEMA(prices, 12);
  const ema26 = calculateEMA(prices, 26);
  const macd = ema12 - ema26;
  
  // Calculate signal line (9-period EMA of MACD)
  const macdHistory = [macd]; // Simplified for current value
  const signal = macd * 0.9; // Approximation
  const histogram = macd - signal;
  
  return { macd, signal, histogram };
}

// Calculate Bollinger Bands
export function calculateBollingerBands(prices: number[], period: number = 20, stdDev: number = 2): {
  upper: number;
  middle: number;
  lower: number;
} {
  const middle = calculateSMA(prices, period);
  const recentPrices = prices.slice(-period);
  
  const variance = recentPrices.reduce((sum, price) => {
    return sum + Math.pow(price - middle, 2);
  }, 0) / period;
  
  const standardDeviation = Math.sqrt(variance);
  
  return {
    upper: middle + (standardDeviation * stdDev),
    middle: middle,
    lower: middle - (standardDeviation * stdDev)
  };
}

// Calculate Average True Range (ATR)
export function calculateATR(candles: Candle[], period: number = 14): number {
  if (candles.length < period + 1) return 0;
  
  const trueRanges = [];
  for (let i = 1; i < candles.length; i++) {
    const high = candles[i].high;
    const low = candles[i].low;
    const prevClose = candles[i - 1].close;
    
    const tr = Math.max(
      high - low,
      Math.abs(high - prevClose),
      Math.abs(low - prevClose)
    );
    trueRanges.push(tr);
  }
  
  return calculateSMA(trueRanges, period);
}

// Calculate all technical indicators
export function calculateIndicators(candles: Candle[]): TechnicalIndicators | null {
  if (candles.length < 200) return null;
  
  const closePrices = candles.map(c => c.close);
  const macd = calculateMACD(closePrices);
  const bb = calculateBollingerBands(closePrices);
  
  return {
    rsi_14: calculateRSI(closePrices, 14),
    macd: macd.macd,
    macd_signal: macd.signal,
    macd_histogram: macd.histogram,
    sma_20: calculateSMA(closePrices, 20),
    sma_50: calculateSMA(closePrices, 50),
    sma_200: calculateSMA(closePrices, 200),
    ema_12: calculateEMA(closePrices, 12),
    ema_26: calculateEMA(closePrices, 26),
    bb_upper: bb.upper,
    bb_middle: bb.middle,
    bb_lower: bb.lower,
    atr_14: calculateATR(candles, 14)
  };
}

// Generate trading signals based on technical analysis
export function generateSignal(
  currentPrice: number,
  indicators: TechnicalIndicators,
  tradingStyle: 'day_trade' | 'swing_trade'
): TradeSignal {
  const signals: string[] = [];
  let bullishCount = 0;
  let bearishCount = 0;
  
  // RSI Analysis
  if (indicators.rsi_14 < 30) {
    signals.push('RSI oversold (<30)');
    bullishCount += 2;
  } else if (indicators.rsi_14 < 40) {
    signals.push('RSI below 40');
    bullishCount += 1;
  } else if (indicators.rsi_14 > 70) {
    signals.push('RSI overbought (>70)');
    bearishCount += 2;
  } else if (indicators.rsi_14 > 60) {
    signals.push('RSI above 60');
    bearishCount += 1;
  }
  
  // MACD Analysis
  if (indicators.macd > indicators.macd_signal && indicators.macd_histogram > 0) {
    signals.push('MACD bullish crossover');
    bullishCount += 2;
  } else if (indicators.macd < indicators.macd_signal && indicators.macd_histogram < 0) {
    signals.push('MACD bearish crossover');
    bearishCount += 2;
  }
  
  // Moving Average Analysis
  if (currentPrice > indicators.sma_20 && currentPrice > indicators.sma_50) {
    signals.push('Price above SMA20 and SMA50');
    bullishCount += 1;
  } else if (currentPrice < indicators.sma_20 && currentPrice < indicators.sma_50) {
    signals.push('Price below SMA20 and SMA50');
    bearishCount += 1;
  }
  
  // Long-term trend
  if (currentPrice > indicators.sma_200) {
    signals.push('Uptrend (above SMA200)');
    bullishCount += 1;
  } else {
    signals.push('Downtrend (below SMA200)');
    bearishCount += 1;
  }
  
  // Bollinger Bands Analysis
  if (currentPrice <= indicators.bb_lower) {
    signals.push('Price at lower Bollinger Band');
    bullishCount += 2;
  } else if (currentPrice >= indicators.bb_upper) {
    signals.push('Price at upper Bollinger Band');
    bearishCount += 2;
  }
  
  // Determine signal
  const totalSignals = bullishCount + bearishCount;
  const bullishPercentage = totalSignals > 0 ? (bullishCount / totalSignals) * 100 : 50;
  
  let signalType: 'BUY' | 'SELL' | 'HOLD' = 'HOLD';
  let confidence = 50;
  
  if (bullishCount > bearishCount + 2) {
    signalType = 'BUY';
    confidence = Math.min(bullishPercentage, 95);
  } else if (bearishCount > bullishCount + 2) {
    signalType = 'SELL';
    confidence = Math.min(100 - bullishPercentage, 95);
  }
  
  // Calculate stop loss and take profit levels based on ATR
  const atrMultiplier = tradingStyle === 'day_trade' ? 1.5 : 2.5;
  const stopLossDistance = indicators.atr_14 * atrMultiplier;
  const takeProfitDistance = indicators.atr_14 * (atrMultiplier * 2);
  
  let stopLoss: number;
  let takeProfit1: number;
  let takeProfit2: number;
  let takeProfit3: number;
  
  if (signalType === 'BUY') {
    stopLoss = currentPrice - stopLossDistance;
    takeProfit1 = currentPrice + takeProfitDistance;
    takeProfit2 = currentPrice + takeProfitDistance * 1.5;
    takeProfit3 = currentPrice + takeProfitDistance * 2;
  } else {
    stopLoss = currentPrice + stopLossDistance;
    takeProfit1 = currentPrice - takeProfitDistance;
    takeProfit2 = currentPrice - takeProfitDistance * 1.5;
    takeProfit3 = currentPrice - takeProfitDistance * 2;
  }
  
  return {
    signal_type: signalType,
    trading_style: tradingStyle,
    price: currentPrice,
    stop_loss: parseFloat(stopLoss.toFixed(2)),
    take_profit_1: parseFloat(takeProfit1.toFixed(2)),
    take_profit_2: parseFloat(takeProfit2.toFixed(2)),
    take_profit_3: parseFloat(takeProfit3.toFixed(2)),
    confidence: parseFloat(confidence.toFixed(1)),
    reason: signals.join(', ')
  };
}
