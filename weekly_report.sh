#!/bin/bash

# Weekly Performance Report
# Sends Telegram message with week's statistics

echo "📊 Generating weekly performance report..."

# Get last 7 days stats
STATS=$(curl -s http://localhost:3000/api/trades/stats)
DAILY=$(curl -s http://localhost:3000/api/trades/daily?days=7)

# Extract values using jq
TOTAL_TRADES=$(echo $STATS | jq -r '.stats.total_trades')
WIN_RATE=$(echo $STATS | jq -r '.stats.win_rate')
PROFIT_LOSS=$(echo $STATS | jq -r '.stats.total_profit_loss')
PROFIT_FACTOR=$(echo $STATS | jq -r '.stats.profit_factor')
CURRENT_BALANCE=$(echo $STATS | jq -r '.account.current_balance')
RETURN_PCT=$(echo $STATS | jq -r '.account.total_return_pct')

# Build message
MESSAGE="📊 *WEEKLY PERFORMANCE REPORT*\n"
MESSAGE+="Week ending: $(date +%Y-%m-%d)\n\n"
MESSAGE+="━━━━━━━━━━━━━━━━━━━━━━━━━\n"
MESSAGE+="📈 *OVERALL STATISTICS*\n"
MESSAGE+="━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
MESSAGE+="Total Trades: ${TOTAL_TRADES}\n"
MESSAGE+="Win Rate: ${WIN_RATE}%\n"
MESSAGE+="Total P&L: \$${PROFIT_LOSS}\n"
MESSAGE+="Profit Factor: ${PROFIT_FACTOR}\n"
MESSAGE+="Account Balance: \$${CURRENT_BALANCE}\n"
MESSAGE+="Total Return: ${RETURN_PCT}%\n\n"
MESSAGE+="━━━━━━━━━━━━━━━━━━━━━━━━━\n"
MESSAGE+="🎯 *TARGET METRICS*\n"
MESSAGE+="━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"

# Check if targets met
if (( $(echo "$WIN_RATE >= 85" | bc -l) )); then
  MESSAGE+="✅ Win Rate: TARGET MET (85%+)\n"
else
  MESSAGE+="⚠️ Win Rate: Below target (need 85%+)\n"
fi

if (( $(echo "$PROFIT_FACTOR >= 2.0" | bc -l) )); then
  MESSAGE+="✅ Profit Factor: TARGET MET (2.0+)\n"
else
  MESSAGE+="⚠️ Profit Factor: Below target (need 2.0+)\n"
fi

MESSAGE+="\n🚀 Keep following the system!"

# Send to Telegram via API
curl -s -X POST http://localhost:3000/api/automation/notify \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"$MESSAGE\"}"

echo "✅ Weekly report sent to Telegram!"
