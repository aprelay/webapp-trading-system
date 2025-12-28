-- Simple migration - just tables, no constraints

CREATE TABLE IF NOT EXISTS economic_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_date TEXT NOT NULL,
  event_time TEXT NOT NULL,
  title TEXT NOT NULL,
  country TEXT NOT NULL,
  impact TEXT NOT NULL,
  actual TEXT,
  forecast TEXT,
  previous TEXT,
  source TEXT DEFAULT 'static',
  created_at TEXT,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS live_trades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  signal_id INTEGER,
  trade_type TEXT NOT NULL,
  trading_style TEXT NOT NULL,
  entry_price REAL NOT NULL,
  entry_time TEXT NOT NULL,
  position_size REAL NOT NULL,
  position_value REAL NOT NULL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL,
  take_profit_3 REAL,
  exit_price REAL,
  exit_time TEXT,
  exit_reason TEXT,
  profit_loss REAL,
  profit_loss_pct REAL,
  win INTEGER,
  confidence INTEGER,
  mtf_score INTEGER,
  regime TEXT,
  status TEXT DEFAULT 'OPEN',
  notes TEXT,
  created_at TEXT,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS daily_performance (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  trade_date TEXT NOT NULL UNIQUE,
  total_trades INTEGER DEFAULT 0,
  winning_trades INTEGER DEFAULT 0,
  losing_trades INTEGER DEFAULT 0,
  win_rate REAL DEFAULT 0,
  total_profit_loss REAL DEFAULT 0,
  largest_win REAL DEFAULT 0,
  largest_loss REAL DEFAULT 0,
  avg_confidence REAL DEFAULT 0,
  avg_mtf_score REAL DEFAULT 0,
  total_risk_taken REAL DEFAULT 0,
  max_drawdown REAL DEFAULT 0,
  created_at TEXT,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS risk_limits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  max_position_risk_pct REAL DEFAULT 2.0,
  max_portfolio_risk_pct REAL DEFAULT 10.0,
  max_daily_loss_pct REAL DEFAULT 5.0,
  max_drawdown_pct REAL DEFAULT 10.0,
  current_portfolio_risk REAL DEFAULT 0,
  current_daily_loss REAL DEFAULT 0,
  current_drawdown REAL DEFAULT 0,
  starting_balance REAL DEFAULT 10000,
  current_balance REAL DEFAULT 10000,
  trading_enabled INTEGER DEFAULT 1,
  pause_reason TEXT,
  created_at TEXT,
  updated_at TEXT
);

INSERT OR IGNORE INTO risk_limits (id, starting_balance, current_balance)
VALUES (1, 10000, 10000);
