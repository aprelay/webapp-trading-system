-- Add Liquidity Analysis Columns to Signals Table
-- Migration: 0010_liquidity_analysis.sql
-- Description: Adds comprehensive liquidity metrics to support optimal trading timing and position sizing

-- Liquidity Score (0-100, higher = better liquidity)
ALTER TABLE signals ADD COLUMN liquidity_score INTEGER DEFAULT 50;

-- Trading Session (ASIA, LONDON, NEW_YORK, OVERLAP, OFF_HOURS)
ALTER TABLE signals ADD COLUMN session TEXT DEFAULT 'UNKNOWN';

-- Time-of-Day Liquidity Zone (HIGH, MEDIUM, LOW)
ALTER TABLE signals ADD COLUMN time_zone TEXT DEFAULT 'MEDIUM';

-- Volume Analysis
ALTER TABLE signals ADD COLUMN volume_trend TEXT DEFAULT 'STABLE'; -- INCREASING, DECREASING, STABLE
ALTER TABLE signals ADD COLUMN volume_percentile INTEGER DEFAULT 50; -- 0-100 (vs 20-day avg)

-- Spread & Cost Analysis
ALTER TABLE signals ADD COLUMN estimated_spread_pips INTEGER DEFAULT 40; -- Estimated bid-ask spread
ALTER TABLE signals ADD COLUMN price_impact_bps INTEGER DEFAULT 10; -- Basis points for $100K position

-- Market Depth
ALTER TABLE signals ADD COLUMN market_depth_score INTEGER DEFAULT 50; -- 0-100

-- Trading Recommendation
ALTER TABLE signals ADD COLUMN optimal_for_trading BOOLEAN DEFAULT false; -- Ready to trade?
ALTER TABLE signals ADD COLUMN liquidity_warnings TEXT; -- JSON array of warnings
ALTER TABLE signals ADD COLUMN liquidity_recommendation TEXT; -- Human-readable recommendation

-- Position Sizing Multiplier (based on liquidity)
ALTER TABLE signals ADD COLUMN position_size_multiplier REAL DEFAULT 1.0; -- 0.5x, 0.75x, 1.0x, etc.

-- Index for querying by session and liquidity
CREATE INDEX IF NOT EXISTS idx_signals_session ON signals(session);
CREATE INDEX IF NOT EXISTS idx_signals_liquidity_score ON signals(liquidity_score);
CREATE INDEX IF NOT EXISTS idx_signals_optimal_trading ON signals(optimal_for_trading);
