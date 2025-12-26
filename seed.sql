-- Insert default user settings
INSERT OR IGNORE INTO user_settings (setting_key, setting_value) VALUES 
  ('telegram_bot_token', ''),
  ('telegram_chat_id', ''),
  ('alpha_vantage_api_key', 'J5LBTD5UCBAB1PBG'),
  ('twelve_data_api_key', ''),
  ('news_api_key', ''),
  ('day_trade_enabled', 'true'),
  ('swing_trade_enabled', 'true'),
  ('min_confidence', '70'),
  ('scan_interval_minutes', '15'),
  ('rsi_oversold', '30'),
  ('rsi_overbought', '70');

-- Insert sample market data for testing
INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe) VALUES 
  (datetime('now', '-1 hour'), 2020.50, 2025.30, 2018.40, 2023.10, 1500000, '1h'),
  (datetime('now', '-2 hours'), 2018.20, 2022.50, 2016.10, 2020.50, 1450000, '1h'),
  (datetime('now', '-3 hours'), 2015.30, 2019.80, 2014.20, 2018.20, 1400000, '1h');
