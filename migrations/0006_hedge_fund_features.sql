-- Migration: Hedge Fund Features (Simplified)
-- Adds tables for risk management, ML predictions, and analytics

-- Risk Metrics History
CREATE TABLE IF NOT EXISTS risk_metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  timestamp TEXT NOT NULL,
  var_95 REAL NOT NULL,
  var_99 REAL NOT NULL,
  current_drawdown_pct REAL NOT NULL,
  portfolio_risk_pct REAL DEFAULT 0,
  sharpe_ratio REAL DEFAULT 0,
  sortino_ratio REAL DEFAULT 0
);

-- Chart Patterns Detected
CREATE TABLE IF NOT EXISTS chart_patterns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  pattern_type TEXT NOT NULL,
  confidence REAL NOT NULL,
  direction TEXT NOT NULL,
  target_price REAL,
  signal_id INTEGER
);

-- Market Regime History
CREATE TABLE IF NOT EXISTS market_regimes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  regime TEXT NOT NULL,
  confidence REAL NOT NULL,
  volatility TEXT NOT NULL,
  trend_strength REAL NOT NULL,
  should_trade INTEGER NOT NULL,
  risk_adjustment REAL NOT NULL,
  price REAL NOT NULL
);

-- ML Price Predictions
CREATE TABLE IF NOT EXISTS ml_predictions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  current_price REAL NOT NULL,
  pred_1h_price REAL NOT NULL,
  pred_1h_confidence REAL NOT NULL,
  pred_4h_price REAL NOT NULL,
  pred_4h_confidence REAL NOT NULL,
  pred_24h_price REAL NOT NULL,
  pred_24h_confidence REAL NOT NULL,
  overall_direction TEXT NOT NULL,
  signal_id INTEGER
);

-- Probability of Profit Analysis  
CREATE TABLE IF NOT EXISTS probability_analysis (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  signal_id INTEGER NOT NULL,
  timestamp TEXT NOT NULL,
  tp1_probability REAL NOT NULL,
  tp2_probability REAL NOT NULL,
  tp3_probability REAL NOT NULL,
  stop_loss_probability REAL NOT NULL,
  expected_value REAL NOT NULL,
  recommendation TEXT NOT NULL
);

-- Audit Log
CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  event_type TEXT NOT NULL,
  account_id INTEGER,
  signal_id INTEGER,
  event_data TEXT,
  decision TEXT
);
