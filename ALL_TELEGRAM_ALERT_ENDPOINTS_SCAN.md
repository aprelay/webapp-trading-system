# Complete Telegram Alert Endpoints Scan

**Scan Date**: 2026-01-06  
**Purpose**: Document ALL endpoints that send Telegram alerts and verify S/R (Support/Resistance) data is included

---

## Executive Summary

**Total Alert Endpoints**: 7 main endpoints  
**S/R Status**: ✅ **IMPLEMENTED** - S/R calculation logic exists and is active  
**Current Issue**: ⚠️ **S/R NOT INCLUDED IN TELEGRAM MESSAGES** - Need to add S/R blocks to all alert formats

---

## 🎯 Priority Endpoints (Send Telegram Alerts)

### 1. **Hedge Fund Cron Endpoint** ⭐ HIGHEST PRIORITY
- **Path**: `/api/cron/hedge-fund` (GET)
- **File**: `/home/user/webapp/src/index.tsx` (Lines ~2488-2700)
- **Trigger**: Automated cron job (or manual button click)
- **Threshold**: ≥80% enhanced confidence (Day Trade OR Swing Trade)
- **Current Status**: ✅ Working, sends Telegram
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

**Current Message Format**:
```
🏦 HEDGE FUND GRADE SIGNAL
⏰ 2026-01-06 16:42:54 UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 DAY TRADE
━━━━━━━━━━━━━━━━━━━━━━━━━

BUY (98% confidence)

*Entry:* $4,485.74
*Stop Loss:* $4,467.00
*TP1:* $4,533.67
*TP2:* $4,557.62
*TP3:* $4,581.56

📊 *Advanced Metrics:*
• VaR(95%): $18.74
• Drawdown: 2.1%
• Portfolio Heat: 5.0%
• Profit Probability: 85%

🌊 *Market Regime:* NORMAL
💧 *Liquidity:* 82/100 Good

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 SWING TRADE
━━━━━━━━━━━━━━━━━━━━━━━━━

BUY (98% confidence)
[similar format]
```

**REQUIRED: Insert S/R Block After TP3 and Before Advanced Metrics**:
```
*TP1:* $4,533.67
*TP2:* $4,557.62
*TP3:* $4,581.56

🎯 *Support/Resistance Levels (1h)*
━━━━━━━━━━━━━━━━━━━━━━━━━
Resistance: 4,533.67 | 4,557.62 | 4,581.56
Support: 4,467.00 | 4,440.00 | 4,420.00

📊 *Advanced Metrics:*
```

---

### 2. **Simple Signals - Generate Signal NOW Button** 🔵
- **Path**: `/api/signals/simple/simple` (POST)
- **File**: `/home/user/webapp/src/routes/simpleSignals.ts` (Lines ~15-300)
- **Trigger**: User clicks "Generate Signal NOW" button on dashboard
- **Threshold**: Always sends (no confidence threshold)
- **Current Status**: ✅ Working, sends Telegram
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

**Simple Signal Message Format**:
```
🟢 BUY SIGNAL - Gold/USD (XAU/USD)

📊 Day Trade
Entry: $4,485.74
Stop Loss: $4,467.00
Take Profit: $4,533.67

Confidence: 76.4%
📈 Strong uptrend with ADX 99.0
```

**REQUIRED: Add S/R Block**:
```
Take Profit: $4,533.67

🎯 Key Levels (1h):
Resistance: 4,533.67 | 4,557.62 | 4,581.56
Support: 4,467.00 | 4,440.00 | 4,420.00

Confidence: 76.4%
```

---

### 3. **Auto-Fetch Endpoint** 🤖
- **Path**: `/api/cron/auto-fetch` (GET)
- **File**: `/home/user/webapp/src/index.tsx` (Lines ~2214-2400)
- **Trigger**: Automated every 15 minutes (Cloudflare cron)
- **Threshold**: ≥70% confidence for Day Trades, ≥80% for Swing Trades
- **Current Status**: ✅ Working (but threshold gating may block many signals)
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

**Auto-Fetch Message Format**:
```
🔄 AUTO-FETCH SIGNAL

📊 Day Trade
Entry: $4,485.74
Stop Loss: $4,467.00
TP1-TP3: [targets]

Confidence: 76.4%
```

**REQUIRED: Add S/R Block**

---

### 4. **Enhanced Signals Endpoint** 🏦
- **Path**: `/api/signals/enhanced/enhanced` (POST)
- **File**: `/home/user/webapp/src/routes/enhancedSignals.ts` (Lines ~15-800)
- **Trigger**: Called by hedge fund cron OR manual enhanced signal button
- **Threshold**: No threshold (sends 2 messages: main signal + liquidity details)
- **Current Status**: ✅ Working
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO BOTH MESSAGES**

**Enhanced Signal Messages** (2 messages sent):
- **Message 1**: Main signal with entry, stops, targets
- **Message 2**: Liquidity analysis + risk details

**REQUIRED: Add S/R Block to Message 1**

---

### 5. **5-Minute Assassin Scanner** 🎯
- **Path**: `/api/scanner/scan` (POST and GET)
- **File**: `/home/user/webapp/src/routes/autoScanner.ts` (Lines ~76-523)
- **Trigger**: Automated every 5 minutes for A-grade setups
- **Threshold**: A-grade or A+ grade only (score ≥144/180)
- **Current Status**: ✅ Working
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

**5M Scanner Message Format**:
```
🚨 A-GRADE 5M SETUP DETECTED! 🚨

🟢 BUY XAU/USD
⭐ Grade: A (87% confidence)
⏰ 16:42 UTC - LONDON

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 7-LAYER ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Layer 1: Trend Aligned (BULLISH)
✅ Layer 2: RSI 54, MACD bullish crossover
[...20 layers total...]

━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 TRADE SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━

💰 Entry: $4,386.50 (NOW!)
🛡️ Stop: $4,371.50

🎯 Targets:
   TP1: $4,416.50 (2R) - Take 50%
   TP2: $4,431.50 (3R) - Take 30%
   TP3: $4,446.50 (4R) - Trail rest
```

**REQUIRED: Add S/R Block After Targets**:
```
   TP3: $4,446.50 (4R) - Trail rest

🎯 Key S/R Levels (1h):
Resistance: 4,416.50 | 4,431.50 | 4,446.50
Support: 4,371.50 | 4,360.00 | 4,340.00

📊 Risk/Reward: 1:2.0
```

---

### 6. **AI Market Analysis Endpoint** 🤖
- **Path**: `/api/ai/analyze` (POST)
- **File**: `/home/user/webapp/src/routes/aiAnalysis.ts` (Lines ~15-400)
- **Trigger**: User clicks "AI Market Analysis" button
- **Threshold**: No threshold (always sends if AI confidence is high)
- **Current Status**: ✅ Working
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

---

### 7. **Automation Analyze-and-Notify** 🔄
- **Path**: `/api/automation/analyze-and-notify` (POST)
- **File**: `/home/user/webapp/src/index.tsx` (Lines ~2966-3200)
- **Trigger**: User clicks "Run Automated Analysis" button
- **Threshold**: No threshold (analysis results)
- **Current Status**: ✅ Working
- **S/R Status**: ❌ **S/R NOT INCLUDED IN MESSAGE**
- **Action Required**: **ADD S/R BLOCK TO MESSAGE FORMAT**

---

## 📊 S/R Implementation Status

### ✅ What's Already Done:
1. **S/R Calculation Logic**: COMPLETE ✅
   - Function: `calculateSupportResistanceLevels(candles: Candle[])`
   - Location: `/home/user/webapp/src/lib/technicalAnalysis.ts`
   - Returns: `{ resistance: [R1, R2, R3], support: [S1, S2, S3] }`
   - Data Source: Last 20 × 1h candles
   - Format: Top 3 highs for resistance, Bottom 3 lows for support

2. **S/R Database Schema**: COMPLETE ✅
   - Table: `signals` has `sr_resistance` and `sr_support` columns (TEXT fields for JSON arrays)
   - Multi-timeframe indicators table: `multi_timeframe_indicators` stores hourly candles

3. **S/R Data Flow**: COMPLETE ✅
   - Auto-fetch endpoint: Calculates S/R ✅
   - Enhanced signals endpoint: Calculates S/R ✅
   - Simple signals endpoint: Calculates S/R ✅

### ❌ What's Missing:
1. **S/R NOT IN TELEGRAM MESSAGES** ❌
   - Calculated data exists in backend responses
   - NOT formatted into Telegram message strings
   - Need to add S/R block to all 7 alert formats

---

## 🔧 Required Implementation Steps

### Step 1: Add S/R Block to Message Formats
For EACH of the 7 endpoints listed above, insert S/R block between TP/SL section and confidence/metrics section.

**Standard S/R Block Format**:
```
🎯 *Support/Resistance Levels (1h)*
━━━━━━━━━━━━━━━━━━━━━━━━━
Resistance: 4,533.67 | 4,557.62 | 4,581.56
Support: 4,467.00 | 4,440.00 | 4,420.00
```

### Step 2: Ensure S/R Data is Passed to Telegram Functions
- Verify each endpoint passes `sr_resistance` and `sr_support` arrays to message formatting function
- If missing, fetch from DB or recalculate from latest 20 × 1h candles

### Step 3: Test All Endpoints
- Test hedge fund button: `/api/cron/hedge-fund` ✅ (primary test complete)
- Test "Generate Signal NOW": `/api/signals/simple/simple`
- Test auto-fetch: `/api/cron/auto-fetch`
- Test enhanced signals: `/api/signals/enhanced/enhanced`
- Test 5M scanner: `/api/scanner/scan`
- Test AI analysis: `/api/ai/analyze`
- Test automation: `/api/automation/analyze-and-notify`

---

## 📝 Next Actions

### Immediate Priority:
1. ✅ **DONE**: Hedge fund button now sends Telegram (verified 16:42 UTC test)
2. ⏳ **IN PROGRESS**: Add S/R block to hedge fund message format
3. ⏳ **PENDING**: Add S/R block to all other 6 endpoint message formats
4. ⏳ **PENDING**: Test each endpoint to verify S/R appears in Telegram

### Implementation Order:
1. Start with hedge fund endpoint (HIGHEST user priority)
2. Then simple signals (Generate Signal NOW button)
3. Then auto-fetch (most frequent automated alerts)
4. Then 5M scanner (A-grade alerts)
5. Then enhanced signals
6. Then AI analysis
7. Finally automation analyze-and-notify

---

## 🎯 Success Criteria

**Definition of COMPLETE**:
- All 7 endpoints include S/R block in Telegram messages ✅
- S/R data format: `Resistance: 4,533.67 | 4,557.62 | 4,581.56` ✅
- S/R data source: Last 20 × 1h candles (from `multi_timeframe_indicators` table) ✅
- S/R appears BETWEEN TP/SL section and confidence/metrics section ✅
- All endpoints tested and verified sending Telegram with S/R ✅

---

## 📊 Current Production Status

**Live URL**: https://gold-trading-system.pages.dev  
**Last Deployment**: 2026-01-06  
**Hedge Fund Button**: ✅ Working (sends Telegram at ≥80% confidence)  
**S/R Calculation**: ✅ Active  
**S/R in Telegram**: ❌ NOT YET IMPLEMENTED

**User Confirmation Received**:
- User received hedge fund alert at ~16:42 UTC ✅
- Alert had 98% confidence ✅
- User wants alerts when clicking "Hedge Funds" button ✅ (now fixed)
- User confirmed receiving one alert ✅

---

## 🔍 File Locations Reference

### Main Application:
- `/home/user/webapp/src/index.tsx` (Lines 1-5000+)
  - Hedge fund cron: Lines ~2488-2700
  - Auto-fetch cron: Lines ~2214-2400
  - Automation analyze-and-notify: Lines ~2966-3200
  - Telegram test endpoints: Lines ~1856, ~2522, ~2628

### Route Files:
- `/home/user/webapp/src/routes/simpleSignals.ts` (Simple signals - Generate NOW button)
- `/home/user/webapp/src/routes/enhancedSignals.ts` (Enhanced signals with hedge fund features)
- `/home/user/webapp/src/routes/autoScanner.ts` (5-Minute Assassin scanner)
- `/home/user/webapp/src/routes/aiAnalysis.ts` (AI market analysis)

### Library Files:
- `/home/user/webapp/src/lib/telegram.ts` (Telegram send function)
- `/home/user/webapp/src/lib/technicalAnalysis.ts` (S/R calculation function)

---

## ✅ Documentation Created

- [x] `SR_COMPLETE_IMPLEMENTATION.md` - S/R calculation logic documentation
- [x] `HEDGE_FUND_BUTTON_FIXED.md` - Hedge fund button Telegram fix
- [x] `HEDGE_FUND_DIAGNOSIS.md` - System diagnosis showing 98% confidence working
- [x] `ALL_TELEGRAM_ALERT_ENDPOINTS_SCAN.md` - This document (complete endpoint scan)

---

**Report Generated**: 2026-01-06 05:50 UTC  
**Status**: 🟡 S/R CALCULATION COMPLETE, TELEGRAM INTEGRATION PENDING  
**Next Step**: Add S/R blocks to all 7 Telegram message formats
