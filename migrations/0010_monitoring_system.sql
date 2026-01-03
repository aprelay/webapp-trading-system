-- Migration: Monitoring System
-- Purpose: Track endpoint health, data freshness, and system status
-- Date: 2026-01-03

-- System Health Monitoring Table
CREATE TABLE IF NOT EXISTS system_health (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  endpoint_name TEXT NOT NULL,
  endpoint_url TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('healthy', 'degraded', 'down')),
  response_time_ms INTEGER,
  last_check_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_success_at DATETIME,
  last_failure_at DATETIME,
  failure_count INTEGER DEFAULT 0,
  error_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Data Freshness Monitoring Table
CREATE TABLE IF NOT EXISTS data_freshness (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  data_source TEXT NOT NULL,
  timeframe TEXT,
  last_data_timestamp DATETIME,
  last_fetch_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  data_age_minutes INTEGER,
  is_stale INTEGER DEFAULT 0 CHECK(is_stale IN (0, 1)),
  record_count INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Alert History Table
CREATE TABLE IF NOT EXISTS monitoring_alerts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  alert_type TEXT NOT NULL CHECK(alert_type IN ('endpoint_down', 'data_stale', 'slow_response', 'high_failure_rate')),
  severity TEXT NOT NULL CHECK(severity IN ('low', 'medium', 'high', 'critical')),
  source TEXT NOT NULL,
  message TEXT NOT NULL,
  telegram_sent INTEGER DEFAULT 0 CHECK(telegram_sent IN (0, 1)),
  resolved INTEGER DEFAULT 0 CHECK(resolved IN (0, 1)),
  resolved_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- System Metrics Table (for dashboards)
CREATE TABLE IF NOT EXISTS system_metrics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  metric_name TEXT NOT NULL,
  metric_value REAL NOT NULL,
  metric_unit TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Monitoring Configuration Table
CREATE TABLE IF NOT EXISTS monitoring_config (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  config_key TEXT UNIQUE NOT NULL,
  config_value TEXT NOT NULL,
  description TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert default monitoring configuration
INSERT OR IGNORE INTO monitoring_config (config_key, config_value, description) VALUES
  ('data_stale_threshold_minutes', '30', 'Alert if data older than X minutes'),
  ('endpoint_timeout_ms', '30000', 'Maximum endpoint response time before timeout'),
  ('slow_response_threshold_ms', '5000', 'Alert if response time exceeds this'),
  ('max_failure_count', '3', 'Alert after X consecutive failures'),
  ('monitoring_interval_minutes', '5', 'How often to run health checks'),
  ('telegram_alerts_enabled', '1', 'Send Telegram alerts for monitoring issues'),
  ('auto_recovery_enabled', '1', 'Attempt automatic recovery on failures');

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_system_health_endpoint ON system_health(endpoint_name);
CREATE INDEX IF NOT EXISTS idx_system_health_status ON system_health(status);
CREATE INDEX IF NOT EXISTS idx_system_health_last_check ON system_health(last_check_at);
CREATE INDEX IF NOT EXISTS idx_data_freshness_source ON data_freshness(data_source);
CREATE INDEX IF NOT EXISTS idx_data_freshness_stale ON data_freshness(is_stale);
CREATE INDEX IF NOT EXISTS idx_monitoring_alerts_resolved ON monitoring_alerts(resolved);
CREATE INDEX IF NOT EXISTS idx_monitoring_alerts_type ON monitoring_alerts(alert_type);
CREATE INDEX IF NOT EXISTS idx_system_metrics_name ON system_metrics(metric_name);
CREATE INDEX IF NOT EXISTS idx_system_metrics_timestamp ON system_metrics(timestamp);
