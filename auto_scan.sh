#!/bin/bash

# 5-Minute Assassin Auto-Scanner
# Runs every 5 minutes automatically

while true; do
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running 5m scan..."
  
  # Call the scanner endpoint
  curl -s -X POST http://localhost:3000/api/scanner/scan | jq '.scan_result // .message'
  
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Scan complete. Waiting 5 minutes..."
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  
  # Wait 5 minutes (300 seconds)
  sleep 300
done
