#!/bin/bash
# Gold/USD Trading System - Automatic Market Scanner
# This script automatically generates trading signals and sends them to Telegram

while true; do
    echo "=========================================="
    echo "$(date): Scanning market..."
    echo "=========================================="
    
    # Fetch latest market data
    echo "Fetching market data..."
    curl -s -X POST http://localhost:3000/api/market/fetch
    echo ""
    
    # Wait 2 seconds
    sleep 2
    
    # Generate signals and send to Telegram
    echo ""
    echo "Generating trading signals..."
    response=$(curl -s -X POST http://localhost:3000/api/signals/generate-now)
    echo "$response" | python3 -m json.tool
    
    # Check if signals were sent
    if echo "$response" | grep -q '"telegram_sent": true'; then
        echo ""
        echo "✅ Signals sent to Telegram successfully!"
    else
        echo ""
        echo "⚠️  No Telegram alerts sent (check configuration)"
    fi
    
    echo ""
    echo "Next scan in 15 minutes..."
    echo "=========================================="
    echo ""
    
    # Wait 15 minutes (900 seconds)
    sleep 900
done
