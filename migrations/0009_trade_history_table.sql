-- Migration: 0009_trade_history_table.sql
-- Purpose: Create trade_history table for risk metrics calculation
-- Date: 2025-12-29

-- Trade history for performance tracking and risk metrics
CREATE TABLE IF NOT EXISTS trade_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trade_id TEXT UNIQUE NOT NULL,
  entry_time DATETIME NOT NULL,
  exit_time DATETIME,
  symbol TEXT NOT NULL DEFAULT 'XAU/USD',
  signal_type TEXT NOT NULL CHECK(signal_type IN ('BUY', 'SELL')),
  trading_style TEXT NOT NULL CHECK(trading_style IN ('day_trade', 'swing_trade')),
  
  -- Prices
  entry_price REAL NOT NULL,
  exit_price REAL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL,
  take_profit_3 REAL,
  
  -- Position sizing
  position_size REAL NOT NULL,
  position_value REAL NOT NULL,
  
  -- Risk metrics
  risk_amount REAL NOT NULL,
  risk_percent REAL NOT NULL,
  reward_risk_ratio REAL,
  
  -- Performance
  profit_loss REAL,
  profit_loss_percent REAL,
  exit_reason TEXT,
  
  -- Confidence and analysis
  base_confidence REAL NOT NULL,
  mtf_confidence REAL,
  final_confidence REAL NOT NULL,
  pattern_boost REAL DEFAULT 0,
  regime_boost REAL DEFAULT 0,
  ml_boost REAL DEFAULT 0,
  pop_boost REAL DEFAULT 0,
  
  -- Metadata
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'OPEN' CHECK(status IN ('OPEN', 'CLOSED', 'CANCELLED')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_trade_history_symbol ON trade_history(symbol);
CREATE INDEX IF NOT EXISTS idx_trade_history_status ON trade_history(status);
CREATE INDEX IF NOT EXISTS idx_trade_history_entry_time ON trade_history(entry_time);
CREATE INDEX IF NOT EXISTS idx_trade_history_exit_time ON trade_history(exit_time);
CREATE INDEX IF NOT EXISTS idx_trade_history_trading_style ON trade_history(trading_style);

-- Create trigger to update updated_at timestamp
CREATE TRIGGER IF NOT EXISTS update_trade_history_timestamp 
AFTER UPDATE ON trade_history
BEGIN
  UPDATE trade_history SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
