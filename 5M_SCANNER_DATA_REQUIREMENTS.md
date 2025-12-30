# 🎯 5M Scanner - Data Requirements

## ✅ **YES! The 5M scanner DOES work with fetched data!**

---

## 📊 **How It Works:**

### **Step 1: Fetch Market Data (REQUIRED FIRST TIME)**
1. Open dashboard: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai
2. Scroll to **Settings & Configuration**
3. Click **"Fetch Market Data"** button
4. Wait 30-60 seconds

**What This Does:**
- Fetches **5 timeframes**: 5m, 15m, 1h, 4h, daily
- Gets **100 candles per timeframe** = 500 total candles
- Calculates **all indicators** (RSI, MACD, ADX, etc.)
- Stores in database: `multi_timeframe_indicators` table

### **Step 2: Scan 5M (After Data Fetch)**
1. Click **"Scan 5M NOW!"** button (big green panel)
2. Scanner reads data from database
3. Runs 7-layer analysis
4. Returns Grade + Signal + Entry/Stop/Targets

---

## 🔍 **Data Flow:**

```
1. Click "Fetch Market Data"
   ↓
2. API calls Twelve Data (https://api.twelvedata.com)
   ↓
3. Gets 5m, 15m, 1h, 4h, daily candles
   ↓
4. Calculates indicators for each timeframe
   ↓
5. Stores in database:
   - market_data table (candles)
   - multi_timeframe_indicators table (indicators)
   ↓
6. Click "Scan 5M NOW!" or wait for auto-scan
   ↓
7. Scanner reads from database:
   - 5m indicators (RSI, MACD, ADX, etc.)
   - 15m indicators (EMA50)
   - 1h indicators (SMA200)
   - 5m candles (last 100 for volume analysis)
   ↓
8. Runs 7-layer analysis
   ↓
9. Returns: Grade (A+/A/B/C) + Signal (BUY/SELL/HOLD)
```

---

## 📋 **Database Tables Used:**

### **1. multi_timeframe_indicators**
Stores calculated indicators for each timeframe:
```sql
SELECT * FROM multi_timeframe_indicators 
WHERE timeframe = '5m'
ORDER BY timestamp DESC 
LIMIT 1
```

**Fields Used by Scanner:**
- `rsi_14` - RSI(14) for Layer 2 momentum
- `macd`, `macd_signal`, `macd_histogram` - MACD for Layer 2
- `adx`, `plus_di`, `minus_di` - ADX for Layer 7 trend strength
- `ema_12` - Used as EMA20 proxy for 5m trend
- `ema_26` - Used as EMA50 proxy for 15m trend
- `sma_200` - 1h long-term trend for Layer 1
- `atr_14` - Stop loss calculation

### **2. market_data**
Stores raw candle data:
```sql
SELECT timestamp, open, high, low, close, volume 
FROM market_data 
WHERE timeframe = '5m'
ORDER BY timestamp DESC 
LIMIT 100
```

**Used For:**
- Volume analysis (Layer 3)
- Support/Resistance calculation (Layer 4)
- Current price determination

---

## ⚠️ **Important Notes:**

### **Data Freshness:**
- **Auto-scanner**: Runs every 5 minutes, uses existing data
- **Manual scan**: Click "Scan 5M NOW!" anytime, uses latest data in DB
- **Data age**: Check timestamp - if >2 hours old, click "Fetch Market Data" again

### **First-Time Setup:**
1. **MUST click "Fetch Market Data" first** before any scans work
2. Takes 30-60 seconds to fetch all 5 timeframes
3. After first fetch, data is cached in database
4. Auto-scanner uses cached data (updated every 5 mins)

### **When to Re-Fetch:**
- ✅ **Every day**: At start of trading session
- ✅ **After errors**: If scanner says "Insufficient data"
- ✅ **Stale data**: If data is >2 hours old
- ⚠️ **NOT needed**: Between scans (use cached data)

---

## 🎯 **Testing Data Availability:**

### **Test 1: Check if data exists**
```bash
curl -X POST http://localhost:3000/api/scanner/scan
```

**Expected:**
- ✅ `success: true` = Data exists, scan complete
- ❌ `message: "Insufficient data"` = Need to fetch data first

### **Test 2: Check data freshness**
```bash
curl http://localhost:3000/api/indicators/latest
```

**Look for:**
- `timestamp` field - how old is the data?
- `timeframe: "5m"` - 5m data exists?

### **Test 3: Manual data fetch**
```bash
curl -X POST http://localhost:3000/api/market/fetch-mtf
```

**Expected:**
- `success: true`
- `totalCount: 500` (100 candles × 5 timeframes)
- Takes 30-60 seconds

---

## 🚀 **Quick Start Workflow:**

### **First Time (Setup):**
```
1. Open dashboard
2. Click "Fetch Market Data" (wait 60s)
3. Click "Scan 5M NOW!" (see results)
4. Done! Auto-scanner now runs every 5 mins
```

### **Daily Trading:**
```
1. Open dashboard (data already in DB from yesterday)
2. Click "Fetch Market Data" (refresh to today's data)
3. Click "Scan 5M NOW!" every 5 minutes
   OR
   Wait for Telegram alerts (auto-scanner)
```

### **During Trading Session:**
```
Every 5 minutes:
- Auto-scanner runs automatically
- OR click "Scan 5M NOW!" manually
- Uses cached data (no re-fetch needed)
```

---

## 📊 **Data Usage Summary:**

| Component | Data Source | Freshness |
|-----------|-------------|-----------|
| **5M Scanner** | Database (multi_timeframe_indicators) | Uses cached data |
| **Auto-Scanner** | Database (runs every 5 mins) | Uses cached data |
| **Manual Scan** | Database (click "Scan 5M NOW!") | Uses cached data |
| **Fetch Button** | Twelve Data API → Database | Updates cache |

**Bottom Line**: 
- ✅ Scanner uses **fetched data** from database
- ✅ First fetch required, then cached
- ✅ Re-fetch daily or when stale
- ✅ Auto-scanner runs every 5 mins with cached data

---

## ✅ **Verification:**

**Run this test now:**
```bash
curl -X POST http://localhost:3000/api/scanner/scan
```

**You should see:**
```json
{
  "success": true,
  "scan_result": {
    "grade": "C",
    "score": 25,
    "signal": "HOLD",
    "entry": 4397.80,
    ...
  }
}
```

**This proves:**
- ✅ 5m data exists in database
- ✅ Scanner can read the data
- ✅ 7-layer analysis is working
- ✅ Ready to use!

---

**Created**: December 30, 2025  
**Status**: ✅ Confirmed Working  
**Next**: Click "Fetch Market Data" daily, then scan away!
