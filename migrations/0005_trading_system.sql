-- Migration: Live Trading & Backtesting System
-- Enables position tracking, risk management, and performance analytics

-- ============================================================
-- 1. Trading Accounts
-- ============================================================
CREATE TABLE IF NOT EXISTS trading_accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_name TEXT NOT NULL,
  account_type TEXT NOT NULL, -- 'LIVE', 'PAPER', 'BACKTEST'
  starting_balance REAL NOT NULL,
  current_balance REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  leverage REAL DEFAULT 1.0,
  max_daily_loss_pct REAL DEFAULT 2.0, -- Max 2% loss per day
  max_position_size_pct REAL DEFAULT 10.0, -- Max 10% per position
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Default paper trading account
INSERT INTO trading_accounts (account_name, account_type, starting_balance, current_balance)
VALUES ('Paper Trading', 'PAPER', 10000.0, 10000.0);

-- ============================================================
-- 2. Live Trades (Execution Tracking)
-- ============================================================
CREATE TABLE IF NOT EXISTS trades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  signal_id INTEGER, -- Reference to mtf_signals or signals table
  
  -- Trade details
  trade_type TEXT NOT NULL, -- 'BUY', 'SELL'
  trading_style TEXT NOT NULL, -- 'day_trade', 'swing_trade'
  symbol TEXT DEFAULT 'XAU/USD',
  
  -- Entry
  entry_price REAL NOT NULL,
  entry_time DATETIME NOT NULL,
  position_size REAL NOT NULL, -- In units (e.g., 0.1 lots = 10 oz)
  position_value REAL NOT NULL, -- Position size * entry price
  
  -- Risk management
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL,
  take_profit_3 REAL,
  
  -- Exit details
  exit_price REAL,
  exit_time DATETIME,
  exit_reason TEXT, -- 'TP1', 'TP2', 'TP3', 'STOP_LOSS', 'MANUAL', 'TRAILING_STOP'
  
  -- Performance
  profit_loss REAL, -- In USD
  profit_loss_pct REAL, -- Percentage gain/loss
  pips_gained REAL, -- For forex
  commission REAL DEFAULT 0,
  
  -- Trade metadata
  confidence_level INTEGER, -- Signal confidence when entered
  mtf_alignment INTEGER, -- Multi-timeframe alignment score
  status TEXT DEFAULT 'OPEN', -- 'OPEN', 'CLOSED', 'CANCELLED'
  notes TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES trading_accounts(id)
);

CREATE INDEX IF NOT EXISTS idx_trades_account ON trades(account_id);
CREATE INDEX IF NOT EXISTS idx_trades_status ON trades(status);
CREATE INDEX IF NOT EXISTS idx_trades_entry_time ON trades(entry_time DESC);

-- ============================================================
-- 3. Position Sizing Rules
-- ============================================================
CREATE TABLE IF NOT EXISTS position_sizing_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  
  -- Risk per trade (based on confidence)
  confidence_min INTEGER NOT NULL, -- e.g., 75
  confidence_max INTEGER NOT NULL, -- e.g., 85
  risk_pct REAL NOT NULL, -- % of account to risk (e.g., 1.0 = 1%)
  max_position_pct REAL NOT NULL, -- Max % of account (e.g., 5.0 = 5%)
  
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES trading_accounts(id)
);

-- Default position sizing rules for paper account
INSERT INTO position_sizing_rules (account_id, confidence_min, confidence_max, risk_pct, max_position_pct)
VALUES 
  (1, 90, 100, 2.0, 10.0),  -- 90-100% confidence: Risk 2%, Max 10% position
  (1, 80, 89, 1.5, 7.5),    -- 80-89% confidence: Risk 1.5%, Max 7.5% position
  (1, 75, 79, 1.0, 5.0),    -- 75-79% confidence: Risk 1%, Max 5% position
  (1, 70, 74, 0.5, 2.5);    -- 70-74% confidence: Risk 0.5%, Max 2.5% position

-- ============================================================
-- 4. Trade Performance Analytics
-- ============================================================
CREATE TABLE IF NOT EXISTS performance_metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  period_start DATETIME NOT NULL,
  period_end DATETIME NOT NULL,
  
  -- Basic metrics
  total_trades INTEGER DEFAULT 0,
  winning_trades INTEGER DEFAULT 0,
  losing_trades INTEGER DEFAULT 0,
  break_even_trades INTEGER DEFAULT 0,
  
  -- Win rate
  win_rate REAL, -- winning_trades / total_trades * 100
  
  -- Profit metrics
  total_profit REAL DEFAULT 0,
  total_loss REAL DEFAULT 0,
  net_profit REAL DEFAULT 0,
  
  -- Average metrics
  avg_win REAL,
  avg_loss REAL,
  avg_win_pct REAL,
  avg_loss_pct REAL,
  
  -- Risk metrics
  largest_win REAL,
  largest_loss REAL,
  max_consecutive_wins INTEGER,
  max_consecutive_losses INTEGER,
  max_drawdown REAL,
  max_drawdown_pct REAL,
  
  -- Advanced metrics
  profit_factor REAL, -- total_profit / abs(total_loss)
  sharpe_ratio REAL,
  expectancy REAL, -- (win_rate * avg_win) - (loss_rate * avg_loss)
  
  -- Return metrics
  starting_balance REAL,
  ending_balance REAL,
  total_return REAL,
  total_return_pct REAL,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES trading_accounts(id)
);

CREATE INDEX IF NOT EXISTS idx_performance_account ON performance_metrics(account_id);
CREATE INDEX IF NOT EXISTS idx_performance_period ON performance_metrics(period_end DESC);

-- ============================================================
-- 5. Backtesting Results
-- ============================================================
CREATE TABLE IF NOT EXISTS backtest_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_name TEXT NOT NULL,
  
  -- Backtest parameters
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  starting_balance REAL NOT NULL,
  
  -- Strategy settings
  min_confidence INTEGER DEFAULT 75,
  use_mtf_confirmation INTEGER DEFAULT 1,
  use_news_filter INTEGER DEFAULT 1,
  timeframe TEXT DEFAULT '1h',
  
  -- Results summary
  total_trades INTEGER DEFAULT 0,
  winning_trades INTEGER DEFAULT 0,
  win_rate REAL,
  net_profit REAL,
  total_return_pct REAL,
  max_drawdown_pct REAL,
  profit_factor REAL,
  sharpe_ratio REAL,
  
  -- Execution details
  trades_json TEXT, -- JSON array of all trades
  equity_curve_json TEXT, -- JSON array of equity over time
  
  status TEXT DEFAULT 'RUNNING', -- 'RUNNING', 'COMPLETED', 'FAILED'
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME
);

CREATE INDEX IF NOT EXISTS idx_backtest_date ON backtest_runs(created_at DESC);

-- ============================================================
-- 6. Daily Trading Journal
-- ============================================================
CREATE TABLE IF NOT EXISTS trading_journal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  trade_id INTEGER,
  
  -- Journal entry
  entry_date DATE NOT NULL,
  market_condition TEXT, -- 'TRENDING', 'RANGING', 'VOLATILE', 'CALM'
  
  -- Pre-trade analysis
  setup_notes TEXT,
  expected_outcome TEXT,
  risk_reward_ratio REAL,
  
  -- Post-trade review
  actual_outcome TEXT,
  what_went_right TEXT,
  what_went_wrong TEXT,
  lessons_learned TEXT,
  
  -- Emotional state
  emotion_entry TEXT, -- 'CONFIDENT', 'FEARFUL', 'GREEDY', 'DISCIPLINED'
  emotion_exit TEXT,
  
  -- Tags for filtering
  tags TEXT, -- Comma-separated: 'breakout,news-driven,perfect-setup'
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES trading_accounts(id),
  FOREIGN KEY (trade_id) REFERENCES trades(id)
);

CREATE INDEX IF NOT EXISTS idx_journal_date ON trading_journal(entry_date DESC);
CREATE INDEX IF NOT EXISTS idx_journal_account ON trading_journal(account_id);

-- ============================================================
-- 7. Risk Events Log
-- ============================================================
CREATE TABLE IF NOT EXISTS risk_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  
  -- Event details
  event_type TEXT NOT NULL, -- 'MAX_DAILY_LOSS', 'MAX_POSITION_SIZE', 'MARGIN_CALL', 'STOP_OUT'
  severity TEXT NOT NULL, -- 'WARNING', 'CRITICAL'
  description TEXT NOT NULL,
  
  -- Context
  current_balance REAL,
  daily_loss REAL,
  daily_loss_pct REAL,
  action_taken TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES trading_accounts(id)
);

CREATE INDEX IF NOT EXISTS idx_risk_events_account ON risk_events(account_id);
CREATE INDEX IF NOT EXISTS idx_risk_events_severity ON risk_events(severity);
