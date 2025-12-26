-- Migration: Add Multi-Timeframe Support for 90% Accuracy
-- Phase 3: Multi-timeframe confirmation across 5m, 15m, 1h, 4h, daily

-- ============================================================
-- 1. Multi-Timeframe Indicators Table
-- ============================================================
-- Store indicators for each timeframe separately
CREATE TABLE IF NOT EXISTS multi_timeframe_indicators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  timeframe TEXT NOT NULL, -- '5m', '15m', '1h', '4h', 'daily'
  
  -- Core indicators
  rsi_14 REAL,
  macd REAL,
  macd_signal REAL,
  macd_histogram REAL,
  
  -- Moving averages
  sma_20 REAL,
  sma_50 REAL,
  sma_200 REAL,
  ema_12 REAL,
  ema_26 REAL,
  
  -- Bollinger Bands
  bb_upper REAL,
  bb_middle REAL,
  bb_lower REAL,
  
  -- Volatility
  atr_14 REAL,
  
  -- Advanced indicators (Phase 1)
  stochastic_k REAL,
  stochastic_d REAL,
  adx REAL,
  plus_di REAL,
  minus_di REAL,
  
  -- Ichimoku Cloud
  ichimoku_tenkan REAL,
  ichimoku_kijun REAL,
  ichimoku_senkou_a REAL,
  ichimoku_senkou_b REAL,
  
  -- Others
  parabolic_sar REAL,
  vwap REAL,
  
  -- Fibonacci levels
  fib_382 REAL,
  fib_500 REAL,
  fib_618 REAL,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_mtf_indicators_timeframe ON multi_timeframe_indicators(timeframe);
CREATE INDEX IF NOT EXISTS idx_mtf_indicators_timestamp ON multi_timeframe_indicators(timestamp DESC);

-- ============================================================
-- 2. Timeframe Alignment Table
-- ============================================================
-- Track trend alignment across timeframes
CREATE TABLE IF NOT EXISTS timeframe_alignment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  
  -- Trend direction per timeframe
  trend_5m TEXT, -- 'BULLISH', 'BEARISH', 'NEUTRAL'
  trend_15m TEXT,
  trend_1h TEXT,
  trend_4h TEXT,
  trend_daily TEXT,
  
  -- Alignment score (0-5)
  alignment_score INTEGER,
  alignment_type TEXT, -- 'ALL_BULLISH', 'ALL_BEARISH', 'MIXED', 'CONFLICTING'
  
  -- Confidence boost from alignment
  confidence_boost INTEGER, -- +0 to +20
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_alignment_timestamp ON timeframe_alignment(timestamp DESC);

-- ============================================================
-- 3. Multi-Timeframe Signals Table
-- ============================================================
-- Enhanced signals with timeframe confirmation
CREATE TABLE IF NOT EXISTS mtf_signals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  
  -- Signal details
  signal_type TEXT NOT NULL, -- 'BUY', 'SELL', 'HOLD'
  trading_style TEXT NOT NULL, -- 'day_trade', 'swing_trade'
  
  -- Entry and exits
  price REAL NOT NULL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL NOT NULL,
  take_profit_3 REAL NOT NULL,
  
  -- Confidence breakdown
  base_confidence INTEGER, -- From single timeframe
  mtf_confidence INTEGER, -- After multi-timeframe boost
  final_confidence INTEGER, -- After news/sentiment
  
  -- Timeframe confirmation
  confirmed_5m INTEGER DEFAULT 0, -- 1 = confirmed, 0 = not confirmed
  confirmed_15m INTEGER DEFAULT 0,
  confirmed_1h INTEGER DEFAULT 0,
  confirmed_4h INTEGER DEFAULT 0,
  confirmed_daily INTEGER DEFAULT 0,
  
  -- Alignment details
  alignment_score INTEGER,
  alignment_type TEXT,
  
  -- Reason
  reason TEXT,
  
  -- Status
  status TEXT DEFAULT 'active', -- 'active', 'closed', 'expired'
  telegram_sent INTEGER DEFAULT 0,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_mtf_signals_type ON mtf_signals(signal_type);
CREATE INDEX IF NOT EXISTS idx_mtf_signals_status ON mtf_signals(status);
CREATE INDEX IF NOT EXISTS idx_mtf_signals_timestamp ON mtf_signals(timestamp DESC);

-- ============================================================
-- 4. Signal Performance Tracking
-- ============================================================
-- Track how well multi-timeframe signals perform
CREATE TABLE IF NOT EXISTS signal_performance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  signal_id INTEGER NOT NULL,
  
  -- Entry details
  entry_price REAL NOT NULL,
  entry_time DATETIME NOT NULL,
  
  -- Exit details
  exit_price REAL,
  exit_time DATETIME,
  exit_type TEXT, -- 'TP1', 'TP2', 'TP3', 'STOP_LOSS', 'MANUAL'
  
  -- Performance metrics
  pips_gained REAL,
  percentage_gain REAL,
  duration_hours INTEGER,
  
  -- Accuracy tracking
  was_accurate INTEGER, -- 1 = hit TP, 0 = hit stop loss
  mtf_score INTEGER, -- Alignment score at entry
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (signal_id) REFERENCES mtf_signals(id)
);

CREATE INDEX IF NOT EXISTS idx_performance_signal ON signal_performance(signal_id);
CREATE INDEX IF NOT EXISTS idx_performance_accuracy ON signal_performance(was_accurate);
