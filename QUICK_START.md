# ⚡ Gold/USD Trading System - Quick Start

## 🎉 YOUR SYSTEM IS NOW RUNNING!

### ✅ What's Running Now:
1. **Web Dashboard**: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai
2. **API Backend**: Hono server on port 3000
3. **Auto Scanner**: Checks market every 15 minutes and sends Telegram alerts
4. **Database**: Cloudflare D1 storing all signals and market data

---

## 📱 YOU ALREADY RECEIVED TRADE ALERTS!

Check your Telegram now! You should have **2 messages** with these signals:

### 🟢 BUY Signal - Day Trade
- **Entry**: $4,546.11
- **Stop Loss**: $4,516.77
- **TP1**: $4,604.78 | **TP2**: $4,634.11 | **TP3**: $4,663.45
- **Confidence**: 95% ⭐⭐⭐⭐⭐

### 🟢 BUY Signal - Swing Trade
- **Entry**: $4,546.11
- **Stop Loss**: $4,497.21
- **TP1**: $4,643.89 | **TP2**: $4,692.78 | **TP3**: $4,741.67
- **Confidence**: 95% ⭐⭐⭐⭐⭐

---

## 🚀 How to Use

### Option 1: Automatic (Recommended)
✅ **Already running!** The system scans every 15 minutes automatically.
- You'll get Telegram alerts when good signals appear
- No action needed - just wait for alerts!

### Option 2: Manual
Click **"Generate Signal Now"** on the dashboard anytime you want fresh signals.

Or run this command:
```bash
curl -X POST http://localhost:3000/api/signals/generate-now
```

---

## 📊 Dashboard Features

Open: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai

1. **Current Price**: Real-time Gold/USD price
2. **Quick Stats**: RSI, MACD, trend indicators
3. **Price Chart**: Last 100 hours of gold prices
4. **Recent Signals**: Last 10 trading signals with entry/SL/TP
5. **Technical Indicators**: Full breakdown of all 8 indicators
6. **Settings**: Configure Telegram bot, API keys, scan interval

---

## 🤖 Automatic Scanner

### What It Does:
- Fetches latest gold prices every 15 minutes (1 API call)
- Calculates 8 technical indicators
- Generates day trade + swing trade signals
- Sends alerts to your Telegram if confidence > 70%

### Check Status:
```bash
pm2 list
pm2 logs auto-scanner --nostream
```

### Stop/Start:
```bash
pm2 stop auto-scanner    # Stop scanning
pm2 start auto-scanner   # Start scanning
pm2 restart auto-scanner # Restart
```

---

## 📈 Trading Tips

### Day Trading (Quick Profits):
- Smaller stop loss ($29.34)
- Smaller take profits (1-2%)
- Hold for hours, not days
- More trades, smaller gains

### Swing Trading (Bigger Moves):
- Wider stop loss ($48.90)
- Bigger take profits (2-4%)
- Hold for days/weeks
- Fewer trades, bigger gains

### Position Sizing:
Risk only 1-2% of account per trade.

Example: $10,000 account
- Risk: $100-200 per trade
- Day Trade: $29.34 risk = 3-6 oz
- Swing Trade: $48.90 risk = 2-4 oz

---

## 🔧 System Management

### Check Services:
```bash
pm2 list                    # Show all services
pm2 logs gold-trader        # View backend logs
pm2 logs auto-scanner       # View scanner logs
```

### Restart Everything:
```bash
cd /home/user/webapp
pm2 delete all
npm run build
pm2 start ecosystem.config.cjs
```

### Stop Automatic Scanning:
```bash
pm2 stop auto-scanner
```

### Generate Signal Manually:
```bash
curl -X POST http://localhost:3000/api/signals/generate-now
```

---

## 📊 API Endpoints

### Market Data:
- `POST /api/market/fetch` - Fetch latest prices
- `GET /api/market/latest` - Get last 50 candles

### Signals:
- `POST /api/signals/generate-now` - Generate & send signals to Telegram
- `GET /api/signals/recent` - Get last 10 signals

### Indicators:
- `GET /api/indicators/latest` - Get current technical indicators

### Settings:
- `GET /api/settings` - Get configuration
- `POST /api/settings` - Update settings

### Telegram:
- `POST /api/telegram/test` - Test Telegram connection

---

## 🔑 Your Configuration

- ✅ **Twelve Data API**: 70140f57... (800 calls/day)
- ✅ **Telegram Bot Token**: Configured
- ✅ **Telegram Chat ID**: 7811732590
- ✅ **Min Confidence**: 70%
- ✅ **Scan Interval**: 15 minutes
- ✅ **Day Trading**: Enabled
- ✅ **Swing Trading**: Enabled

---

## 🎯 What Happens Next?

1. **Every 15 minutes**:
   - Auto-scanner fetches latest gold prices
   - Calculates indicators
   - Generates signals
   - Sends to Telegram if confidence > 70%

2. **Dashboard updates**:
   - Refresh page to see latest data
   - Click "Generate Signal Now" for instant analysis

3. **You receive alerts**:
   - Open Telegram
   - Review signal details
   - Decide whether to trade
   - Set up your trade with proper risk management

---

## ⚠️ Important Notes

### API Limits:
- **Twelve Data**: 800 calls/day (free tier)
- One scan = 1 API call
- 15-minute intervals = 96 calls/day
- **Plenty of room!** You're using ~12% of daily limit

### Trading Disclaimer:
- This is a tool, not financial advice
- Always use stop losses
- Risk only 1-2% per trade
- Practice on demo first
- 95% confidence ≠ 95% win rate

### Data Quality:
- Real-time XAU/USD hourly data
- 8 professional indicators
- Multi-factor signal scoring
- Historical tracking

---

## 🆘 Troubleshooting

### No Telegram Alerts?
```bash
curl -X POST http://localhost:3000/api/telegram/test
```

### Scanner Not Running?
```bash
pm2 restart auto-scanner
```

### Dashboard Not Loading?
```bash
pm2 restart gold-trader
```

### Generate Signal Manually:
```bash
curl -X POST http://localhost:3000/api/signals/generate-now
```

---

## 📚 Documentation

- `README.md` - Full project overview
- `HOW_TO_USE.md` - Detailed usage guide
- `SETUP_GUIDE.md` - Setup instructions
- `TELEGRAM_SETUP.md` - Telegram bot setup
- `TWELVE_DATA_UPGRADE.md` - API upgrade info
- `FEATURES_CHECKLIST.md` - All features list

---

## 🎉 You're All Set!

Your trading system is **fully operational**:
- ✅ Fetching real gold prices
- ✅ Calculating indicators
- ✅ Generating signals
- ✅ Sending Telegram alerts
- ✅ Auto-scanning every 15 minutes

**Just check your Telegram for alerts!**

Dashboard: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai

**Happy Trading! 📈💰**
