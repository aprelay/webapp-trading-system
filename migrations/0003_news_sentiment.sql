-- Migration: Add news and sentiment tracking
-- Date: 2025-12-26
-- Phase 2: News + Sentiment Analysis for 85% accuracy

-- News articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  url TEXT,
  published_at DATETIME,
  source TEXT,
  sentiment TEXT CHECK(sentiment IN ('bullish', 'bearish', 'neutral')),
  score INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Market sentiment summary table
CREATE TABLE IF NOT EXISTS market_sentiment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp DATETIME NOT NULL,
  overall_sentiment TEXT CHECK(overall_sentiment IN ('bullish', 'bearish', 'neutral')),
  sentiment_score INTEGER,
  bullish_count INTEGER,
  bearish_count INTEGER,
  neutral_count INTEGER,
  news_source TEXT DEFAULT 'NewsAPI',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Economic events table
CREATE TABLE IF NOT EXISTS economic_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  event_date DATE NOT NULL,
  impact TEXT CHECK(impact IN ('high', 'medium', 'low')),
  actual REAL,
  forecast REAL,
  previous REAL,
  currency TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Add news_impact column to signals table
ALTER TABLE signals ADD COLUMN news_sentiment TEXT DEFAULT 'neutral';
ALTER TABLE signals ADD COLUMN news_boost INTEGER DEFAULT 0;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_news_published ON news_articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_sentiment_timestamp ON market_sentiment(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_events_date ON economic_events(event_date);
