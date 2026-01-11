#!/bin/bash
echo "Checking database for candles..."
curl -s "https://gold-trading-system.pages.dev/api/monitoring/database" | python3 << 'PYTHON'
import json
import sys

try:
    data = json.load(sys.stdin)
    if 'market_data' in data:
        print("Market Data by Timeframe:")
        for tf_data in data['market_data']:
            print(f"  {tf_data['timeframe']}: {tf_data['count']} candles")
    else:
        print("No market_data found")
        print(json.dumps(data, indent=2))
except Exception as e:
    print(f"Error: {e}")
    print(sys.stdin.read())
PYTHON
