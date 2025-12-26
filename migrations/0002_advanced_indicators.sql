-- Migration: Add advanced indicators to support 80-85% accuracy
-- Date: 2025-12-26
-- Phase 1: Advanced Technical Indicators

ALTER TABLE indicators ADD COLUMN stochastic_k REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN stochastic_d REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN adx REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN plus_di REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN minus_di REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN ichimoku_tenkan REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN ichimoku_kijun REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN ichimoku_senkou_a REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN ichimoku_senkou_b REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN parabolic_sar REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN vwap REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN fib_382 REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN fib_500 REAL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN fib_618 REAL DEFAULT 0;
