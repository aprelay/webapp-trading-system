-- Add hybrid system fields to micro_trade_signals table

-- Add grade column (A+, A, B)
ALTER TABLE micro_trade_signals ADD COLUMN grade TEXT DEFAULT 'B';

-- Add filters_passed column
ALTER TABLE micro_trade_signals ADD COLUMN filters_passed INTEGER DEFAULT 0;

-- Add position_multiplier column
ALTER TABLE micro_trade_signals ADD COLUMN position_multiplier REAL DEFAULT 1.0;

-- Create index for grade-based queries
CREATE INDEX IF NOT EXISTS idx_micro_signals_grade ON micro_trade_signals(grade);

-- Create index for high-quality signals (A+ and A)
CREATE INDEX IF NOT EXISTS idx_micro_signals_quality ON micro_trade_signals(grade, created_at) WHERE grade IN ('A+', 'A');
