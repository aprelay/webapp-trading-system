-- Migration: Enhanced Hedge Fund Signals Table
-- Stores complete enhanced signals with all hedge fund features

CREATE TABLE IF NOT EXISTS hedge_fund_signals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  signal_type TEXT NOT NULL,
  trading_style TEXT NOT NULL,
  price REAL NOT NULL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL NOT NULL,
  take_profit_3 REAL NOT NULL,
  
  -- Confidence Breakdown
  base_confidence REAL NOT NULL,
  final_confidence REAL NOT NULL,
  pattern_boost REAL DEFAULT 0,
  regime_boost REAL DEFAULT 0,
  ml_boost REAL DEFAULT 0,
  pop_boost REAL DEFAULT 0,
  
  -- Risk Metrics
  var_95 REAL NOT NULL,
  var_99 REAL NOT NULL,
  current_drawdown_pct REAL NOT NULL,
  portfolio_heat_pct REAL NOT NULL,
  
  -- Metadata
  telegram_sent INTEGER DEFAULT 0,
  metadata_json TEXT,
  
  -- Timestamps
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Index for fast queries
CREATE INDEX IF NOT EXISTS idx_hf_signals_timestamp ON hedge_fund_signals(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_hf_signals_type ON hedge_fund_signals(signal_type);
CREATE INDEX IF NOT EXISTS idx_hf_signals_confidence ON hedge_fund_signals(final_confidence DESC);
