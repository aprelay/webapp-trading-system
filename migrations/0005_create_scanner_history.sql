-- Scanner History Table
-- Stores all 5m scan results for performance tracking

CREATE TABLE IF NOT EXISTS scanner_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  timeframe TEXT NOT NULL,
  signal_type TEXT NOT NULL,
  grade TEXT NOT NULL,
  score INTEGER NOT NULL,
  entry_price REAL NOT NULL,
  stop_loss REAL NOT NULL,
  take_profit_1 REAL NOT NULL,
  take_profit_2 REAL NOT NULL,
  take_profit_3 REAL NOT NULL,
  confidence INTEGER NOT NULL,
  layers_passed INTEGER NOT NULL,
  liquidity_score INTEGER,
  session TEXT,
  telegram_sent INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_scanner_timestamp ON scanner_history(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_scanner_grade ON scanner_history(grade);
CREATE INDEX IF NOT EXISTS idx_scanner_session ON scanner_history(session);
CREATE INDEX IF NOT EXISTS idx_scanner_signal ON scanner_history(signal_type);
