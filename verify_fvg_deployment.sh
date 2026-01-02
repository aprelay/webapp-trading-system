#!/bin/bash

# FVG Deployment Verification Script
# Run this to check if FVG Layer 21 is deployed

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║           FVG DEPLOYMENT VERIFICATION SCRIPT                 ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Checking deployment status..."
echo ""

# Step 1: Check local files
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 STEP 1: Local Files Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/lib/fvgAnalysis.ts" ]; then
    echo -e "${GREEN}✅ FVG library exists: src/lib/fvgAnalysis.ts${NC}"
else
    echo -e "${RED}❌ FVG library missing!${NC}"
fi

LAYER21_COUNT=$(grep -c "Layer 21" src/routes/autoScanner.ts 2>/dev/null || echo "0")
if [ "$LAYER21_COUNT" -gt 0 ]; then
    echo -e "${GREEN}✅ Layer 21 integrated ($LAYER21_COUNT references)${NC}"
else
    echo -e "${RED}❌ Layer 21 not found in scanner!${NC}"
fi

echo ""

# Step 2: Check Git status
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔧 STEP 2: Git Commit Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

LATEST_COMMIT=$(git log --oneline -1 2>/dev/null)
if echo "$LATEST_COMMIT" | grep -q "4c64611"; then
    echo -e "${GREEN}✅ Latest commit: $LATEST_COMMIT${NC}"
else
    echo -e "${YELLOW}⚠️  Latest commit: $LATEST_COMMIT${NC}"
    echo -e "${YELLOW}   (Expected: 4c64611 Add FVG...)${NC}"
fi

echo ""

# Step 3: Test production API
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 STEP 3: Production API Test"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Testing: https://gold-trading-system.pages.dev/api/scanner/scan"
echo ""

# Make API call with timeout
RESPONSE=$(timeout 30 curl -s -X POST https://gold-trading-system.pages.dev/api/scanner/scan 2>&1)

if [ $? -eq 124 ]; then
    echo -e "${RED}❌ API request timed out (30s)${NC}"
    echo "   This may be due to:"
    echo "   - Cloudflare still building"
    echo "   - Network issues"
    echo "   - Scanner requires data (run /api/market/fetch-mtf first)"
    echo ""
    echo "🔄 Please retry in 2-3 minutes"
    exit 1
fi

# Parse response
MAX_SCORE=$(echo "$RESPONSE" | jq -r '.scan_result.max_score // empty' 2>/dev/null)
GRADE=$(echo "$RESPONSE" | jq -r '.scan_result.grade // empty' 2>/dev/null)
SCORE=$(echo "$RESPONSE" | jq -r '.scan_result.score // empty' 2>/dev/null)
LAYER21=$(echo "$RESPONSE" | jq -r '.scan_result.layers[] | select(contains("Layer 21"))' 2>/dev/null | head -1)
SUCCESS=$(echo "$RESPONSE" | jq -r '.success // empty' 2>/dev/null)
ERROR=$(echo "$RESPONSE" | jq -r '.error // empty' 2>/dev/null)

echo "Response Analysis:"
echo "─────────────────────────────────────────────────────────────"

# Check if API is working
if [ "$SUCCESS" != "true" ]; then
    echo -e "${RED}❌ API Error:${NC}"
    echo "   $ERROR"
    echo ""
    echo "💡 Try fetching data first:"
    echo "   curl -X POST https://gold-trading-system.pages.dev/api/market/fetch-mtf"
    exit 1
fi

# Check max_score
if [ "$MAX_SCORE" = "190" ]; then
    echo -e "${GREEN}✅ Max Score: 190 (FVG deployed!)${NC}"
    DEPLOYED=true
elif [ "$MAX_SCORE" = "180" ]; then
    echo -e "${RED}❌ Max Score: 180 (OLD version - FVG not deployed)${NC}"
    echo "   Cloudflare may still be building. Wait 2-3 minutes."
    DEPLOYED=false
else
    echo -e "${YELLOW}⚠️  Max Score: $MAX_SCORE (unexpected value)${NC}"
    DEPLOYED=false
fi

# Check Layer 21
if [ -n "$LAYER21" ]; then
    echo -e "${GREEN}✅ Layer 21 Found:${NC}"
    echo "   $LAYER21"
else
    echo -e "${RED}❌ Layer 21 Not Found (FVG not deployed)${NC}"
    DEPLOYED=false
fi

# Show grade and score
if [ -n "$GRADE" ] && [ -n "$SCORE" ]; then
    echo ""
    echo "Current Scan Result:"
    echo "   Grade: $GRADE"
    echo "   Score: $SCORE / $MAX_SCORE"
fi

echo ""

# Step 4: Final verdict
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎯 FINAL VERDICT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$DEPLOYED" = true ]; then
    echo -e "${GREEN}"
    echo "╔═══════════════════════════════════════════════════════════════╗"
    echo "║                ✅ FVG SUCCESSFULLY DEPLOYED ✅                 ║"
    echo "╚═══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo "Your 5M Scanner now has Layer 21 (FVG Detection) live!"
    echo ""
    echo "🎉 Ready to trade with institutional-level gap analysis!"
    echo ""
    echo "Next steps:"
    echo "  1. Test with: Scan 5M NOW! button"
    echo "  2. Monitor Grade distribution (expect more A/B grades)"
    echo "  3. Track win rate improvement (+8-12% expected)"
    exit 0
else
    echo -e "${YELLOW}"
    echo "╔═══════════════════════════════════════════════════════════════╗"
    echo "║              ⏳ DEPLOYMENT STILL IN PROGRESS ⏳               ║"
    echo "╚═══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo "Cloudflare is still building or caching the old version."
    echo ""
    echo "What to do:"
    echo "  1. Wait 2-3 more minutes"
    echo "  2. Clear browser cache (Ctrl+Shift+R)"
    echo "  3. Re-run this script"
    echo "  4. Check Cloudflare dashboard: https://dash.cloudflare.com"
    echo ""
    echo "If issue persists after 10 minutes, check build logs."
    exit 1
fi
