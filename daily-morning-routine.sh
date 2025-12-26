#!/bin/bash

# Daily Trading Automation Script
# Run this script every morning to get your trading signal

echo "🚀 Gold/USD Trading System - Daily Morning Routine"
echo "=================================================="
echo ""

# Configuration
API_URL="http://localhost:3000"
ACCOUNT_ID=1

echo "⏰ $(date)"
echo ""

# Step 1: Fetch Multi-Timeframe Data
echo "📊 Step 1/4: Fetching multi-timeframe data..."
curl -s -X POST "$API_URL/api/market/fetch-mtf" | jq -r '
  if .success then
    "✅ Fetched \(.totalCount) candles across 5 timeframes"
  else
    "❌ Error: \(.error)"
  end
'
echo ""

# Step 2: Fetch News & Sentiment
echo "📰 Step 2/4: Fetching news and sentiment..."
curl -s -X POST "$API_URL/api/news/fetch" | jq -r '
  if .success then
    "✅ News: \(.sentiment.overall) sentiment (score: \(.sentiment.score))"
  else
    "⚠️  No news data available"
  end
'
echo ""

# Step 3: Generate Multi-Timeframe Signal
echo "🎯 Step 3/4: Generating MTF signal..."
SIGNAL=$(curl -s -X POST "$API_URL/api/signals/generate-mtf")

echo "$SIGNAL" | jq -r '
if .success then
  .signals.day_trade as $day |
  .signals.swing_trade as $swing |
  .alignment as $align |
  
  "
📈 DAY TRADE SIGNAL
  Type: \($day.signal_type)
  Entry: $\($day.price)
  Stop Loss: $\($day.stop_loss) (\(($day.stop_loss / $day.price * 100 - 100) | floor * -1)%)
  Take Profit 1: $\($day.take_profit_1) (\(($day.take_profit_1 / $day.price * 100 - 100) | floor)%)
  Confidence: \($day.final_confidence)%
  Valid: \(if $day.isValid then "✅ YES" else "❌ NO" end)

🌊 SWING TRADE SIGNAL
  Type: \($swing.signal_type)
  Entry: $\($swing.price)
  Stop Loss: $\($swing.stop_loss) (\(($swing.stop_loss / $swing.price * 100 - 100) | floor * -1)%)
  Take Profit 1: $\($swing.take_profit_1) (\(($swing.take_profit_1 / $swing.price * 100 - 100) | floor)%)
  Confidence: \($swing.final_confidence)%
  Valid: \(if $swing.isValid then "✅ YES" else "❌ NO" end)

📊 MULTI-TIMEFRAME ALIGNMENT
  Score: \($align.score)/5 (\($align.type))
  Confidence Boost: +\($align.confidenceBoost)%
  "
else
  "❌ Error generating signal: \(.error)"
end
'

# Step 4: Calculate Position Size (for day trade)
echo "💰 Step 4/4: Calculating position size..."
SIGNAL_PRICE=$(echo "$SIGNAL" | jq -r '.signals.day_trade.price')
SIGNAL_SL=$(echo "$SIGNAL" | jq -r '.signals.day_trade.stop_loss')
SIGNAL_TP1=$(echo "$SIGNAL" | jq -r '.signals.day_trade.take_profit_1')
SIGNAL_TP2=$(echo "$SIGNAL" | jq -r '.signals.day_trade.take_profit_2')
SIGNAL_TP3=$(echo "$SIGNAL" | jq -r '.signals.day_trade.take_profit_3')
SIGNAL_CONF=$(echo "$SIGNAL" | jq -r '.signals.day_trade.final_confidence')
SIGNAL_TYPE=$(echo "$SIGNAL" | jq -r '.signals.day_trade.signal_type')

if [ "$SIGNAL_TYPE" != "HOLD" ]; then
  curl -s -X POST "$API_URL/api/trading/calculate-position" \
    -H "Content-Type: application/json" \
    -d "{
      \"account_id\": $ACCOUNT_ID,
      \"signal\": {
        \"entry_price\": $SIGNAL_PRICE,
        \"stop_loss\": $SIGNAL_SL,
        \"take_profit_1\": $SIGNAL_TP1,
        \"take_profit_2\": $SIGNAL_TP2,
        \"take_profit_3\": $SIGNAL_TP3,
        \"confidence\": $SIGNAL_CONF,
        \"signal_type\": \"$SIGNAL_TYPE\",
        \"trading_style\": \"day_trade\"
      }
    }" | jq -r '
    if .success then
      .position as $pos |
      "
💼 POSITION SIZE (Day Trade)
  Size: \($pos.units) lots ($\($pos.value))
  Risk: $\($pos.risk_amount) (\($pos.risk_pct)% of account)
  Position: \($pos.position_pct)% of account
  Reward:Risk: \($pos.reward_risk_ratio):1
  Status: \(if $pos.is_valid then "✅ Valid" else "❌ Invalid" end)
  \(if $pos.warning then "⚠️  \($pos.warning)" else "" end)
      "
    else
      "❌ Error calculating position: \(.error)"
    end
  '
else
  echo "⚠️  Signal is HOLD - no position sizing needed"
fi

echo ""
echo "=================================================="
echo "✅ Morning routine complete!"
echo ""
echo "Next steps:"
echo "1. Review the signal quality"
echo "2. If valid (✅), execute trade via dashboard or API"
echo "3. Monitor throughout the day"
echo "4. Close at TP or SL"
echo ""
echo "📱 Check Telegram for alert if MTF signal is valid"
echo "🌐 Dashboard: http://localhost:3000"
echo ""
