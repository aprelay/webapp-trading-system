#!/bin/bash

# Gold Trading System - Endpoint Testing Script
# Tests all critical endpoints and reports status

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 GOLD TRADING SYSTEM - ENDPOINT TESTING"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

BASE_URL="http://localhost:3000"

# Function to test endpoint
test_endpoint() {
  local name="$1"
  local method="$2"
  local endpoint="$3"
  
  echo -n "Testing $name... "
  
  response=$(curl -s -X $method "$BASE_URL$endpoint" -o /dev/null -w "%{http_code}")
  
  if [ "$response" = "200" ]; then
    echo "✅ OK ($response)"
  else
    echo "❌ FAILED ($response)"
  fi
}

# Test JSON endpoints
test_json_endpoint() {
  local name="$1"
  local method="$2"
  local endpoint="$3"
  
  echo -n "Testing $name... "
  
  result=$(curl -s -X $method "$BASE_URL$endpoint" | jq -r '.success')
  
  if [ "$result" = "true" ]; then
    echo "✅ OK (success: true)"
  else
    echo "❌ FAILED (success: $result)"
  fi
}

echo "📊 Core API Endpoints:"
test_json_endpoint "Market Latest      " "GET" "/api/market/latest"
test_json_endpoint "Signals Recent     " "GET" "/api/signals/recent"
test_json_endpoint "Indicators Latest  " "GET" "/api/indicators/latest"
test_json_endpoint "Settings          " "GET" "/api/settings"

echo ""
echo "🎯 Scanner Endpoints:"
test_json_endpoint "Scanner (POST)     " "POST" "/api/scanner/scan"
test_json_endpoint "Scanner (GET)      " "GET" "/api/scanner/scan"
test_json_endpoint "Scanner Stats      " "GET" "/api/scanner/stats"
test_json_endpoint "Scanner History    " "GET" "/api/scanner/history"

echo ""
echo "⏰ Cron Endpoints:"
test_json_endpoint "Auto-Fetch (GET)   " "GET" "/api/cron/auto-fetch"

echo ""
echo "🏠 Homepage:"
test_endpoint "Dashboard          " "GET" "/"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Testing complete!"
echo ""
echo "📊 Quick Stats:"
curl -s "$BASE_URL/api/market/latest" | jq '{candles: (.data | length), latest_price: .data[0].close}'
echo ""
curl -s "$BASE_URL/api/scanner/scan" | jq '{scanner_grade: .scan_result.grade, layers_passed: .scan_result.layers_passed}'
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
