-- Market Data Table (stores XAUUSD price data)
CREATE TABLE IF NOT EXISTS market_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  open REAL NOT NULL,
  high REAL NOT NULL,
  low REAL NOT NULL,
  close REAL NOT NULL,
  volume REAL,
  timeframe TEXT NOT NULL, -- '1m', '5m', '15m', '1h', '4h', '1d'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Technical Indicators Table
CREATE TABLE IF NOT EXISTS indicators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  timeframe TEXT NOT NULL,
  rsi_14 REAL,
  macd REAL,
  macd_signal REAL,
  macd_histogram REAL,
  sma_20 REAL,
  sma_50 REAL,
  sma_200 REAL,
  ema_12 REAL,
  ema_26 REAL,
  bb_upper REAL,
  bb_middle REAL,
  bb_lower REAL,
  atr_14 REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Trading Signals Table
CREATE TABLE IF NOT EXISTS signals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  signal_type TEXT NOT NULL, -- 'BUY', 'SELL', 'HOLD'
  trading_style TEXT NOT NULL, -- 'day_trade', 'swing_trade'
  price REAL NOT NULL,
  stop_loss REAL,
  take_profit_1 REAL,
  take_profit_2 REAL,
  take_profit_3 REAL,
  confidence REAL, -- 0-100
  reason TEXT,
  status TEXT DEFAULT 'active', -- 'active', 'triggered', 'expired', 'cancelled'
  telegram_sent INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- News and Events Table
CREATE TABLE IF NOT EXISTS news_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  source TEXT,
  impact TEXT, -- 'high', 'medium', 'low'
  sentiment TEXT, -- 'bullish', 'bearish', 'neutral'
  url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User Settings Table
CREATE TABLE IF NOT EXISTS user_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Alert History Table
CREATE TABLE IF NOT EXISTS alert_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  signal_id INTEGER,
  alert_type TEXT NOT NULL, -- 'telegram', 'email', 'dashboard'
  status TEXT NOT NULL, -- 'sent', 'failed'
  error_message TEXT,
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (signal_id) REFERENCES signals(id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_market_data_timestamp ON market_data(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_market_data_timeframe ON market_data(timeframe, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_indicators_timestamp ON indicators(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_signals_timestamp ON signals(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_signals_status ON signals(status);
CREATE INDEX IF NOT EXISTS idx_news_timestamp ON news_events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_news_impact ON news_events(impact);
