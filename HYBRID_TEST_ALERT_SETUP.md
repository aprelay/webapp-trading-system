# 🧪 Hybrid Test Alert Setup Guide

## ✅ Status: Implementation Complete - Migration Needed

### What's Working
- ✅ Hybrid test-alert endpoint created
- ✅ Telegram alert formatting (Grade A with HTML)
- ✅ Database insert SQL fixed for hybrid fields
- ✅ Code deployed to Cloudflare Pages

### What's Needed
- ⚠️ **Database migration must be applied to production**

---

## 🚀 Quick Start (3 Steps)

### Step 1: Configure Cloudflare API Key (If Not Done)
1. Go to **Deploy** tab in sidebar
2. Create Cloudflare API token:
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Create Token → Edit Cloudflare Workers
   - Permissions: Account.D1, Account.Workers
3. Save API key in Deploy tab

### Step 2: Apply Database Migration
```bash
cd /home/user/webapp
npx wrangler d1 migrations apply gold-trader-db --remote
```

This adds 3 new columns to `micro_trade_signals` table:
- `grade` (TEXT) - A+, A, B
- `filters_passed` (INTEGER) - 0-10
- `position_multiplier` (REAL) - 0.5x, 1.0x, 2.0x

### Step 3: Test the Hybrid Alert
```bash
curl https://gold-trading-system.pages.dev/api/hybrid-micro/test-alert
```

Expected output:
```json
{
  "success": true,
  "message": "Test Grade A hybrid alert sent to Telegram and stored in database!",
  "signal": {
    "grade": "A",
    "filters_passed": 7,
    "confidence": 78.5,
    "position_multiplier": 1.0,
    "signal_type": "BUY",
    "entry": 4509.82,
    "stop_loss": 4501.82,
    "telegram_sent": true,
    "signal_number": 1
  }
}
```

---

## 📊 New Endpoint Details

### GET /api/hybrid-micro/test-alert

**Purpose**: Send a test Grade A hybrid signal to Telegram and database

**What it does**:
1. Creates a sample BUY signal with Grade A quality
2. Formats Telegram message with hybrid grading
3. Sends to @mygoldusdnews_bot
4. Stores in `micro_trade_signals` table with hybrid fields
5. Returns confirmation with signal details

**Sample Signal**:
- Grade: A ⭐
- Filters Passed: 7/10
- Confidence: 78.5%
- Position Multiplier: 1.0x
- Setup Type: BREAKOUT
- Entry: Current price
- Stop Loss: Entry - 8 pips
- TP1: Entry + 10 pips
- TP2: Entry + 18 pips
- TP3: Entry + 25 pips

---

## 📱 Example Telegram Alert (Grade A)

```
🟢 HIGH-QUALITY SIGNAL [A]
━━━━━━━━━━━━━━━━━━━━
Signal #1 | 03:15:42 UTC

🎯 BUY XAU/USD (BREAKOUT)

📊 Entry & Stops:
▶️ Entry: $4,509.82
🛑 Stop Loss: $4,501.82 (-8 pips)

💎 Take Profits:
TP1: $4,519.82 (+10 pips) - Take 50%
TP2: $4,527.82 (+18 pips) - Take 30%
TP3: $4,534.82 (+25 pips) - Trail rest
R:R Ratio: 1:3.1

🟢 Position: 0.10 lots ($1,000) [1.0x]
⚠️ Risk: $8.00 (0.08%)

📊 Quality Metrics:
   Filters Passed: 7/10
   Liquidity: 85/100 | NEW_YORK
   R:R Ratio: 1:3.1

⏱️ Valid: 15 minutes
⚡ Execute immediately!

━━━━━━━━━━━━━━━━━━━━
TEST ALERT - Strong bullish breakout with Grade A quality (7/10 filters passed)

Signal #1 | 03:15:42
```

---

## 🗄️ Database Schema

### New Columns Added (Migration 0003)

```sql
-- Add hybrid system fields to micro_trade_signals table

ALTER TABLE micro_trade_signals ADD COLUMN grade TEXT DEFAULT 'B';
ALTER TABLE micro_trade_signals ADD COLUMN filters_passed INTEGER DEFAULT 0;
ALTER TABLE micro_trade_signals ADD COLUMN position_multiplier REAL DEFAULT 1.0;

CREATE INDEX IF NOT EXISTS idx_micro_signals_grade 
  ON micro_trade_signals(grade);

CREATE INDEX IF NOT EXISTS idx_micro_signals_quality 
  ON micro_trade_signals(grade, created_at) 
  WHERE grade IN ('A+', 'A');
```

### Query Example

```sql
-- Get all Grade A+ and A signals from today
SELECT 
  signal_type, price, grade, filters_passed, 
  position_multiplier, confidence, telegram_sent, created_at
FROM micro_trade_signals
WHERE DATE(created_at) = DATE('now')
  AND grade IN ('A+', 'A')
ORDER BY created_at DESC;
```

---

## 🔍 Verification Steps

### 1. Check Migration Status
```bash
npx wrangler d1 migrations list gold-trader-db --remote
```

Should show migration 0003 as applied.

### 2. Verify Table Schema
```bash
npx wrangler d1 execute gold-trader-db --remote \
  --command="PRAGMA table_info(micro_trade_signals);"
```

Should include `grade`, `filters_passed`, `position_multiplier` columns.

### 3. Test the Alert
```bash
curl https://gold-trading-system.pages.dev/api/hybrid-micro/test-alert
```

Should return `success: true` and send Telegram message.

### 4. Check Database
```bash
npx wrangler d1 execute gold-trader-db --remote \
  --command="SELECT grade, filters_passed, position_multiplier, signal_type, confidence, created_at FROM micro_trade_signals ORDER BY created_at DESC LIMIT 1;"
```

Should show the test signal with Grade A.

### 5. Check Dashboard
Open https://gold-trading-system.pages.dev

The dashboard's "5M-Assassin Scanner" section should show the test signal (if it queries `micro_trade_signals` table).

---

## 🏥 System Health Monitor Integration

Currently, the System Health Monitor tracks:
- Scanner status
- Cron jobs
- API endpoints
- Database health
- Telegram connectivity

**To add hybrid signals to monitor**, update `/api/monitoring` endpoint:

```typescript
// Add to monitoring route
const hybridSignals = await DB.prepare(`
  SELECT 
    COUNT(*) as total,
    SUM(CASE WHEN grade = 'A+' THEN 1 ELSE 0 END) as a_plus,
    SUM(CASE WHEN grade = 'A' THEN 1 ELSE 0 END) as a,
    SUM(CASE WHEN grade = 'B' THEN 1 ELSE 0 END) as b
  FROM micro_trade_signals
  WHERE DATE(created_at) = DATE('now')
`).first()

return {
  ...existingData,
  hybrid_signals: hybridSignals
}
```

Then update dashboard to display:
```html
<div>
  <h4>Hybrid Signals Today</h4>
  <p>A+: <span id="signalsAPlus">0</span></p>
  <p>A: <span id="signalsA">0</span></p>
  <p>B: <span id="signalsB">0</span></p>
</div>
```

---

## 🐛 Troubleshooting

### Issue: "table micro_trade_signals has no column named grade"

**Solution**: Migration not applied. Run:
```bash
npx wrangler d1 migrations apply gold-trader-db --remote
```

### Issue: "A request to the Cloudflare API failed" or "not authorized"

**Solution**: Configure Cloudflare API key:
1. Go to Deploy tab
2. Create API token with D1 permissions
3. Save token
4. Try migration again

### Issue: Test alert returns success but no Telegram message

**Solution**: Check Telegram configuration:
```bash
curl https://gold-trading-system.pages.dev/api/settings
```

Verify:
- `telegram_bot_token` is set
- `telegram_chat_id` is set (7811732590)
- Bot token format: `8485343161:AAH...`

### Issue: Dashboard not showing hybrid signals

**Solution**: 
1. Check if dashboard queries `micro_trade_signals` table
2. Verify the query includes `grade`, `filters_passed` columns
3. Update dashboard JavaScript to fetch and display hybrid data

---

## 📈 Expected Results After Setup

### Immediate Results
- ✅ Test alert sends successfully
- ✅ Telegram message received at @mygoldusdnews_bot
- ✅ Signal stored in database with Grade A
- ✅ Can query signals by grade (A+, A, B)

### Long-term Results (After Setting Up Cron)
- **A+ signals**: 5-8 per day (90-95% win rate target)
- **A signals**: 12-15 per day (80-85% win rate target)
- **B signals**: 30-35 per day (65-70% win rate target)
- **Total**: ~50 signals/day with +267% profit improvement

### Dashboard Features (After Monitor Integration)
- Real-time hybrid signal counts
- Grade distribution (A+/A/B breakdown)
- Win rate tracking per grade
- Position size multipliers
- Filter pass rates

---

## 📝 Files Modified

1. **src/routes/hybridMicroScanner.ts**
   - Added `/test-alert` endpoint
   - Fixed database inserts to use individual indicator columns
   - Added sample signal generation

2. **migrations/0003_add_hybrid_fields.sql**
   - Already created - adds grade, filters_passed, position_multiplier

---

## 🎯 Next Steps

### Required (To Make Test Alert Work)
1. ✅ Configure Cloudflare API key (if not done)
2. ✅ Apply migration: `npx wrangler d1 migrations apply gold-trader-db --remote`
3. ✅ Test alert: `curl .../api/hybrid-micro/test-alert`

### Optional (Enhancements)
4. ⏱️ Set up cron job for `/api/hybrid-micro/scan` (every 5 minutes)
5. 📊 Update dashboard to display hybrid signals
6. 🏥 Add hybrid metrics to System Health Monitor
7. 📈 Create analytics endpoint for grade-based performance tracking

---

## 🔗 Related Documentation

- `HYBRID_SCANNER_FIX_COMPLETE.md` - How we fixed the rsi_14 error
- `HYBRID_SCANNER_OPERATIONAL_SUMMARY.md` - Complete system status
- `HYBRID_SYSTEM_GUIDE.md` - Full hybrid system guide
- `WIN_RATE_OPTIMIZATION_PLAN.md` - Strategy and performance targets
- `migrations/0003_add_hybrid_fields.sql` - Database schema changes

---

**Current Status**: Code deployed ✅ | Migration needed ⚠️ | Ready to test ⏳

**Deployment**: https://6c50dad6.gold-trading-system.pages.dev (latest)  
**Production**: https://gold-trading-system.pages.dev (will update in ~5 minutes)

**Date**: 2026-01-11  
**Version**: Hybrid Scanner v1.0 with Test Alert
