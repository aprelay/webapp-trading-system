# Cron Setup Guide for Gold Trading System

## 🎯 Overview

**IMPORTANT**: Cloudflare Pages does **NOT** support native cron triggers in `wrangler.jsonc`. The `triggers.crons` configuration only works for **Cloudflare Workers**, not Pages.

To enable automated signal generation and Telegram alerts, you must use an **external cron service** or **Cloudflare's Dashboard** to trigger the endpoints.

---

## 📋 Available Cron Endpoints

### 1. **Auto-Fetch Endpoint** (Every 10 minutes)
- **URL**: `https://gold-trading-system.pages.dev/api/cron/auto-fetch`
- **Purpose**: Fetch market data, generate signals, send Telegram alerts
- **Threshold**: 70%+ confidence
- **Schedule**: `*/10 * * * *` (Every 10 minutes)

### 2. **Hedge Fund Endpoint** (Every 30 minutes)
- **URL**: `https://gold-trading-system.pages.dev/api/cron/hedge-fund`
- **Purpose**: Multi-timeframe analysis, high-confidence signals
- **Threshold**: 80%+ confidence
- **Schedule**: `*/30 * * * *` (Every 30 minutes)

### 3. **Auto-AI Scan Endpoint** (Optional)
- **URL**: `https://gold-trading-system.pages.dev/api/cron/auto-ai-scan`
- **Purpose**: AI-powered market analysis
- **Schedule**: Custom (as needed)

---

## 🔧 Setup Methods

### **Option 1: EasyCron (Recommended - Free Tier Available)**

1. **Sign up**: https://www.easycron.com/user/register
2. **Create Cron Job #1** (Auto-Fetch):
   - **Name**: Gold Trading - Auto Fetch
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/auto-fetch`
   - **Cron Expression**: `*/10 * * * *` (Every 10 minutes)
   - **Method**: GET
   - **Timezone**: UTC

3. **Create Cron Job #2** (Hedge Fund):
   - **Name**: Gold Trading - Hedge Fund
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/hedge-fund`
   - **Cron Expression**: `*/30 * * * *` (Every 30 minutes)
   - **Method**: GET
   - **Timezone**: UTC

**Free Tier Limits**: 100 executions/month (sufficient for testing)

---

### **Option 2: Cron-Job.org (Free, Unlimited)**

1. **Sign up**: https://cron-job.org/en/signup/
2. **Create Cron Job #1**:
   - **Title**: Gold Auto-Fetch
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/auto-fetch`
   - **Schedule**: Every 10 minutes
   - **Method**: GET

3. **Create Cron Job #2**:
   - **Title**: Gold Hedge Fund
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/hedge-fund`
   - **Schedule**: Every 30 minutes
   - **Method**: GET

**Advantages**: Free, unlimited, reliable

---

### **Option 3: UptimeRobot (Free, Monitoring + Cron)**

1. **Sign up**: https://uptimerobot.com/signUp
2. **Add Monitor #1**:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: Gold Auto-Fetch
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/auto-fetch`
   - **Monitoring Interval**: 10 minutes

3. **Add Monitor #2**:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: Gold Hedge Fund
   - **URL**: `https://gold-trading-system.pages.dev/api/cron/hedge-fund`
   - **Monitoring Interval**: 30 minutes

**Advantages**: Also monitors uptime, free tier includes 50 monitors

---

### **Option 4: GitHub Actions (Advanced)**

Create `.github/workflows/cron.yml`:

```yaml
name: Gold Trading Cron Jobs

on:
  schedule:
    # Auto-fetch: Every 10 minutes
    - cron: '*/10 * * * *'
    # Hedge fund: Every 30 minutes
    - cron: '*/30 * * * *'
  workflow_dispatch: # Manual trigger

jobs:
  auto-fetch:
    runs-on: ubuntu-latest
    if: github.event.schedule == '*/10 * * * *'
    steps:
      - name: Trigger Auto-Fetch
        run: curl -X GET "https://gold-trading-system.pages.dev/api/cron/auto-fetch"

  hedge-fund:
    runs-on: ubuntu-latest
    if: github.event.schedule == '*/30 * * * *'
    steps:
      - name: Trigger Hedge Fund
        run: curl -X GET "https://gold-trading-system.pages.dev/api/cron/hedge-fund"
```

**Advantages**: Integrated with GitHub, version controlled

---

### **Option 5: Cloudflare Workers (Native Solution)**

Create a separate Cloudflare Worker to trigger your Pages endpoints:

1. **Create Worker**: `npx wrangler init cron-trigger --type=scheduled`

2. **Worker Code** (`src/index.ts`):
```typescript
export default {
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    const currentMinute = new Date().getMinutes();
    
    // Auto-fetch every 10 minutes
    if (currentMinute % 10 === 0) {
      await fetch('https://gold-trading-system.pages.dev/api/cron/auto-fetch');
    }
    
    // Hedge fund every 30 minutes
    if (currentMinute % 30 === 0) {
      await fetch('https://gold-trading-system.pages.dev/api/cron/hedge-fund');
    }
  },
};
```

3. **wrangler.toml**:
```toml
name = "gold-trading-cron"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[triggers]
crons = ["* * * * *"]  # Every minute (handles both 10min and 30min internally)
```

4. **Deploy**: `npx wrangler deploy`

**Advantages**: Native Cloudflare solution, no external dependencies

---

## ✅ Verification

After setting up cron jobs, verify they're working:

### 1. **Check Telegram Bot**
Wait 10-30 minutes and check your Telegram chat for alerts.

### 2. **Check Database**
```bash
curl "https://gold-trading-system.pages.dev/api/signals/recent?limit=5"
```

Look for recent signals with `telegram_sent: 1`.

### 3. **Check Cron Logs**
Most cron services provide execution logs showing:
- ✅ Success (HTTP 200)
- ⏱️ Execution time
- 📊 Response data

---

## 🐛 Troubleshooting

### **No Telegram Alerts Received**

1. **Check Confidence Threshold**:
   ```bash
   curl "https://gold-trading-system.pages.dev/api/settings"
   ```
   - Auto-fetch threshold: 70%
   - Hedge fund threshold: 80%

2. **Check Recent Signals**:
   ```bash
   curl "https://gold-trading-system.pages.dev/api/signals/recent?limit=10"
   ```
   - Look for `confidence >= 70` (auto-fetch) or `>= 80` (hedge fund)
   - Check `telegram_sent` field

3. **Manually Trigger Endpoints**:
   ```bash
   curl "https://gold-trading-system.pages.dev/api/cron/hedge-fund"
   ```
   - Should return `telegram_sent: true` if signal meets threshold

### **Cron Jobs Not Firing**

1. **Verify Cron Service**:
   - Check service dashboard for execution history
   - Ensure URLs are correct
   - Check for SSL/HTTPS errors

2. **Test Endpoints Manually**:
   ```bash
   # Should return HTTP 200
   curl -I "https://gold-trading-system.pages.dev/api/cron/auto-fetch"
   ```

3. **Check Cloudflare Analytics**:
   - Go to Cloudflare Dashboard → Pages → gold-trading-system → Analytics
   - Look for `/api/cron/*` requests

---

## 📊 Expected Behavior

### **Current Market Conditions** (as of test):
- **Latest Signal**: HOLD at $4474.82
- **Confidence**: 50%
- **Telegram Sent**: No (below 70% threshold)

### **When Alerts Will Fire**:
- **Auto-Fetch**: When confidence >= 70%
- **Hedge Fund**: When confidence >= 80%

### **Example Successful Alert**:
```json
{
  "success": true,
  "message": "Hedge fund signal generated and sent to Telegram",
  "signals": {
    "day_trade": {
      "signal_type": "BUY",
      "confidence": 98
    },
    "swing_trade": {
      "signal_type": "BUY",
      "confidence": 98
    }
  },
  "telegram_sent": true,
  "threshold": 80
}
```

---

## 🎯 Recommended Setup

For most users, I recommend:

1. **EasyCron or Cron-Job.org** for simplicity
2. **UptimeRobot** if you also want uptime monitoring
3. **Cloudflare Workers** for a native, reliable solution
4. **GitHub Actions** if you're already using GitHub

---

## 📝 Summary

✅ **Auto-refresh is working** (30-second intervals on dashboard)  
✅ **Both cron endpoints are functional**  
✅ **Telegram bot is configured correctly**  
❌ **No automatic cron triggers** (requires external service)

**Next Step**: Choose a cron service above and set up the two endpoints. You should start receiving Telegram alerts when market conditions meet the confidence thresholds (70%+ for auto-fetch, 80%+ for hedge fund).

---

## 🔗 Quick Links

- **Dashboard**: https://gold-trading-system.pages.dev
- **Auto-Fetch**: https://gold-trading-system.pages.dev/api/cron/auto-fetch
- **Hedge Fund**: https://gold-trading-system.pages.dev/api/cron/hedge-fund
- **Settings**: https://gold-trading-system.pages.dev/api/settings
- **Recent Signals**: https://gold-trading-system.pages.dev/api/signals/recent?limit=10

---

**Last Updated**: 2026-01-09  
**System Status**: ✅ Operational  
**Auto-Refresh**: ✅ Active (30s)  
**Cron Status**: ⚠️ Requires External Setup
