#!/bin/bash
echo "Testing hybrid scanner data availability..."
curl -s "https://gold-trading-system.pages.dev/api/hybrid-micro/scan" | python3 << 'PYTHON'
import json
import sys

data = json.load(sys.stdin)
print(f"Success: {data.get('success')}")
print(f"Message: {data.get('message')}")
if 'error' in data:
    print(f"Error: {data['error']}")
print(f"\nFull Response:")
print(json.dumps(data, indent=2))
PYTHON
