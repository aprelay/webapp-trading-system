-- ============================================================
-- MIGRATION: Micro Day Trade Signals Table
-- Created: 2026-01-10
-- Purpose: High-frequency 5-minute trading signals (30-35/day)
-- ============================================================

-- Create micro_trade_signals table
CREATE TABLE IF NOT EXISTS micro_trade_signals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  signal_type TEXT NOT NULL CHECK(signal_type IN ('BUY', 'SELL', 'HOLD')),
  price REAL NOT NULL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL NOT NULL,
  take_profit_3 REAL NOT NULL,
  confidence REAL NOT NULL CHECK(confidence >= 0 AND confidence <= 100),
  
  -- Setup classification
  setup_type TEXT CHECK(setup_type IN ('BREAKOUT', 'CONTINUATION', 'REVERSAL', 'BOUNCE', 'PATTERN')),
  
  -- Multi-timeframe analysis
  trend_5m TEXT CHECK(trend_5m IN ('BULLISH', 'BEARISH', 'NEUTRAL')),
  trend_15m TEXT CHECK(trend_15m IN ('BULLISH', 'BEARISH', 'NEUTRAL')),
  
  -- Technical indicators (5-minute timeframe)
  rsi_5m REAL,
  macd_5m REAL,
  macd_signal_5m REAL,
  macd_histogram_5m REAL,
  adx_5m REAL,
  stochastic_k_5m REAL,
  stochastic_d_5m REAL,
  ema_20_5m REAL,
  volume_5m REAL,
  
  -- Liquidity analysis
  liquidity_score INTEGER CHECK(liquidity_score >= 0 AND liquidity_score <= 100),
  session TEXT CHECK(session IN ('ASIA', 'LONDON', 'NEW_YORK', 'OVERLAP', 'UNKNOWN')),
  time_zone TEXT,
  volume_trend TEXT CHECK(volume_trend IN ('INCREASING', 'STABLE', 'DECREASING')),
  volume_percentile INTEGER CHECK(volume_percentile >= 0 AND volume_percentile <= 100),
  estimated_spread_pips INTEGER,
  price_impact_bps INTEGER,
  market_depth_score INTEGER,
  optimal_for_trading INTEGER DEFAULT 0,
  
  -- Position sizing
  position_size_multiplier REAL DEFAULT 1.0,
  recommended_position_lots REAL,
  risk_amount REAL,
  risk_percent REAL,
  
  -- Trade management
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'triggered', 'expired', 'closed')),
  telegram_sent INTEGER DEFAULT 0,
  valid_until DATETIME,
  
  -- Reason for signal
  reason TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_micro_signals_timestamp ON micro_trade_signals(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_micro_signals_status ON micro_trade_signals(status);
CREATE INDEX IF NOT EXISTS idx_micro_signals_created ON micro_trade_signals(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_micro_signals_telegram ON micro_trade_signals(telegram_sent, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_micro_signals_setup ON micro_trade_signals(setup_type, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_micro_signals_session ON micro_trade_signals(session, created_at DESC);

-- Create table for daily statistics tracking
CREATE TABLE IF NOT EXISTS micro_trade_daily_stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE NOT NULL UNIQUE,
  total_signals INTEGER DEFAULT 0,
  signals_sent INTEGER DEFAULT 0,
  signals_buy INTEGER DEFAULT 0,
  signals_sell INTEGER DEFAULT 0,
  avg_confidence REAL,
  avg_liquidity_score REAL,
  session_asia INTEGER DEFAULT 0,
  session_london INTEGER DEFAULT 0,
  session_ny INTEGER DEFAULT 0,
  session_overlap INTEGER DEFAULT 0,
  setup_breakout INTEGER DEFAULT 0,
  setup_continuation INTEGER DEFAULT 0,
  setup_reversal INTEGER DEFAULT 0,
  setup_bounce INTEGER DEFAULT 0,
  setup_pattern INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_micro_daily_date ON micro_trade_daily_stats(date DESC);

-- Create table for tracking daily limits
CREATE TABLE IF NOT EXISTS micro_trade_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE NOT NULL UNIQUE,
  signals_sent_today INTEGER DEFAULT 0,
  consecutive_losses INTEGER DEFAULT 0,
  daily_pnl_pips REAL DEFAULT 0,
  last_signal_time DATETIME,
  paused_until DATETIME,
  pause_reason TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_micro_limits_date ON micro_trade_limits(date DESC);
