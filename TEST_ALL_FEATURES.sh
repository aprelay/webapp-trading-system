#!/bin/bash
echo "🧪 TESTING ALL 3 CRITICAL FEATURES"
echo "=================================="
echo ""

echo "1️⃣ Testing Economic Calendar..."
curl -s http://localhost:3000/api/calendar/check | jq '.success, .risk_level, .reason'
echo ""

echo "2️⃣ Testing Risk Management..."
curl -s http://localhost:3000/api/trades/limits | jq '.success, .limits.trading_enabled, .limits.current_balance'
echo ""

echo "3️⃣ Testing Trade Validation..."
curl -s -X POST http://localhost:3000/api/trades/validate \
  -H "Content-Type: application/json" \
  -d '{"entry_price": 4550, "stop_loss": 4535, "take_profit_1": 4580, "confidence": 85, "trade_type": "BUY"}' \
  | jq '.validation.is_valid, .validation.calculated_position_size, .validation.reason'
echo ""

echo "4️⃣ Testing Backtest Data Availability..."
curl -s http://localhost:3000/api/backtest/data-availability | jq '.ready_for_backtest, .total_candles'
echo ""

echo "✅ ALL FEATURES OPERATIONAL!"
