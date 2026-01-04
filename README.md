# 🚀 Gold/USD Trading Analysis System

## 🎯 Overview

A comprehensive trading analysis system for Gold/USD (XAU/USD) that provides automated technical analysis, trade signals, and Telegram alerts for both day trading and swing trading strategies.

---

## ✅ SYSTEM IS FULLY OPERATIONAL

### Current Status (January 4th, 2026):
- ✅ **Production**: https://gold-trading-system.pages.dev/
- ✅ **API Backend**: Cloudflare Pages (Edge deployment)
- ✅ **Auto-Fetch**: Running every 10 minutes (background cron)
- ✅ **Telegram Alerts**: Working with Support & Resistance levels
- ✅ **Database**: Cloudflare D1 (SQLite)
- ✅ **Market Data**: Real-time XAU/USD (Twelve Data API)
- ✅ **Monitoring System**: 7 data sources tracked
- ✅ **Version**: Latest with S/R feature

### Recent Updates:
1. ✅ **Support & Resistance Levels** - Auto-fetch alerts now include top 3 resistance/support from last 20x1h candles
2. ✅ **Monitoring Dashboard** - Track endpoint health and data freshness (7 data sources)
3. ✅ **Fixed Monitoring** - "Check Now" no longer triggers AI alerts (uses /health endpoint)
4. ✅ **Data Freshness** - Live tracking without monitoring tables (fallback mode)
5. ✅ **Auto-fetch Optimization** - Increased from 15min to 10min intervals

---

## 📱 Current Market Status

### Latest Data (January 3rd, 2026 @ 03:00 UTC):
- **Price**: $4,324.63/oz
- **Data Source**: Twelve Data API (verified accurate)
- **Last Update**: Auto-fetch (17:00 UTC)
- **Status**: ✅ Using latest data (not cached)

### Current Signals:

**Generate Signal NOW**: HOLD 50%  
- Status: ⚪ Low confidence  
- Telegram: ✅ Always sends (no threshold)  
- Action: Click button to get alert

**Auto-Fetch** (Background): HOLD 50%  
- Status: ⚪ Waiting for ≥70% signal  
- Telegram: ❌ No alert (correct - below threshold)  
- Next Run: Every 15 minutes  
- Will Alert: When BUY/SELL ≥70%

**5M Scanner**: Grade C (70%)  
- Status: ⚪ Waiting for A/A+ grade  
- Telegram: ❌ No alert (correct - only A grades)  
- Action: Click "Scan 5M NOW" to test

**Why No Alerts?** Market is currently in HOLD mode. The system is correctly filtering low-quality signals and waiting for high-probability setups (≥70% confidence).

---

## 🎨 Key Features

### 📊 Technical Analysis Engine
- **RSI (14)**: Relative Strength Index for momentum
- **MACD**: Moving Average Convergence Divergence
- **SMA (20, 50, 200)**: Simple Moving Averages for trend
- **EMA (12, 26)**: Exponential Moving Averages
- **Bollinger Bands**: Volatility and overbought/oversold levels
- **ATR (14)**: Average True Range for stop loss calculation

### 🎯 Trading Signals
- **Day Trading**: Quick trades with 1-2% targets
- **Swing Trading**: Longer holds with 2-4% targets
- **Entry Price**: Current market price
- **Stop Loss**: ATR-based protective stop
- **Take Profit Levels**: TP1, TP2, TP3 for scaling out
- **Confidence Score**: 0-100% based on multiple indicators
- **Signal Reasoning**: Clear explanation of why signal was generated

### 📱 Telegram Integration
- **Instant Alerts**: Receive signals immediately on your phone
- **Formatted Messages**: Clear entry, stop loss, take profit
- **Support & Resistance Levels**: Key price zones from last 20x1h candles
- **Trade Context**: Confidence score and reasoning
- **Dual Signals**: Both day trade and swing trade sent
- **Test Function**: Verify Telegram bot is working

#### Support & Resistance Display
Each Telegram alert now includes:
- 🔴 **Resistance**: Top 3 highest prices (sell zones)
- 🟢 **Support**: Bottom 3 lowest prices (buy zones)
- Calculated from last 20 hours of market data
- Helps identify key price levels for entries/exits

### 🖥️ Web Dashboard
- **Real-Time Data**: Latest gold prices and indicators
- **Interactive Charts**: 100-hour price history with Chart.js
- **Quick Stats**: RSI, MACD, trend at a glance
- **Recent Signals**: Last 10 trading signals
- **Technical Indicators**: Full breakdown of all 8 indicators
- **Settings Panel**: Configure Telegram, API keys, scan interval
- **Manual Controls**: Fetch data and generate signals on demand

### 🤖 Automated Scanner
- **15-Minute Intervals**: Continuous market monitoring
- **Auto Data Fetch**: Gets latest prices automatically
- **Auto Signal Generation**: Creates signals when conditions met
- **Auto Telegram Alerts**: Sends to phone if confidence > 70%
- **PM2 Management**: Reliable background process

---

## 🚀 Quick Start

### 1. Check Your Telegram
You should have already received 2 trade alerts! Open Telegram and look for messages from your bot.

### 2. Open the Dashboard
Visit: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai

### 3. The System Runs Automatically
- Scans market every 15 minutes
- Sends Telegram alerts when signals appear
- No action required - just wait for alerts!

### 4. Manual Signal Generation (Get Alert NOW)
Click **"Generate Signal NOW"** button on dashboard to get immediate Telegram alert.

Or use the API:
```bash
curl -X POST https://gold-trading-system.pages.dev/api/signals/simple/simple
```

**This ALWAYS sends a Telegram alert**, even for low-confidence signals.

---

## 🛠️ Technology Stack

### Backend:
- **Hono**: Lightweight web framework for Cloudflare Workers
- **TypeScript**: Type-safe development
- **Cloudflare D1**: SQLite database for persistence
- **Cloudflare Pages**: Edge deployment platform

### Frontend:
- **HTML5/CSS3**: Modern web standards
- **TailwindCSS**: Utility-first styling (CDN)
- **Chart.js**: Interactive price charts
- **Axios**: HTTP client for API calls
- **FontAwesome**: Professional icons

### APIs:
- **Twelve Data**: Real-time gold/USD market data (800 calls/day free)
- **Telegram Bot API**: Push notifications

### DevOps:
- **PM2**: Process management for Node.js
- **Vite**: Fast build tool
- **Wrangler**: Cloudflare CLI tool
- **Git**: Version control

---

## 📁 Project Structure

```
webapp/
├── src/
│   ├── index.tsx              # Main Hono application
│   └── lib/
│       ├── technicalAnalysis.ts  # Indicator calculations
│       └── telegram.ts           # Telegram bot functions
├── migrations/
│   └── 0001_initial_schema.sql  # Database schema
├── public/                    # Static assets
├── dist/                      # Build output
├── ecosystem.config.cjs       # PM2 configuration
├── auto_scan.sh              # Auto scanner script
├── wrangler.jsonc            # Cloudflare config
├── package.json              # Dependencies
└── README.md                 # This file

Documentation:
├── README.md                  # Main overview (you are here)
├── QUICK_START.md            # Fast setup guide
├── HOW_TO_USE.md             # Detailed usage instructions
├── SETUP_GUIDE.md            # Initial setup steps
├── TELEGRAM_SETUP.md         # Telegram bot configuration
├── TWELVE_DATA_UPGRADE.md    # API upgrade info
├── FEATURES_CHECKLIST.md     # Complete feature list
└── YOUR_API_KEYS.md          # API key configuration
```

---

## 🔧 System Management

### Check Status:
```bash
pm2 list                      # Show all processes
pm2 logs gold-trader          # Backend logs
pm2 logs auto-scanner         # Scanner logs
```

### Restart Services:
```bash
pm2 restart gold-trader       # Restart web app
pm2 restart auto-scanner      # Restart scanner
pm2 restart all              # Restart everything
```

### Stop/Start Auto Scanner:
```bash
pm2 stop auto-scanner         # Stop automatic scanning
pm2 start auto-scanner        # Start automatic scanning
```

### Manual Signal Generation:
```bash
curl -X POST http://localhost:3000/api/signals/generate-now
```

---

## 📊 API Endpoints

### Market Data:
- `POST /api/market/fetch` - Fetch latest gold prices from Twelve Data
- `GET /api/market/latest` - Get last 50 hourly candles

### Signals:
- `POST /api/signals/generate-now` - Generate signals and send to Telegram
- `GET /api/signals/recent` - Get last 10 signals from database

### Indicators:
- `GET /api/indicators/latest` - Get current technical indicators

### Settings:
- `GET /api/settings` - Get system configuration
- `POST /api/settings` - Update configuration

### Telegram:
- `POST /api/telegram/test` - Test Telegram bot connection

---

## 🔑 Configuration

### Twelve Data API:
- **API Key**: `70140f57bea54c5e90768de696487d8f`
- **Free Tier**: 800 API calls/day
- **Usage**: ~96 calls/day (15-minute intervals)
- **Symbol**: XAU/USD (Gold vs US Dollar)
- **Interval**: 1 hour
- **Data Points**: 100 candles per fetch

### Telegram Bot:
- **Bot Token**: Configured in settings
- **Chat ID**: 7811732590
- **Status**: ✅ Working and sending alerts

### Trading Settings:
- **Min Confidence**: 70% (only send alerts for signals above this)
- **Scan Interval**: 15 minutes
- **Day Trading**: Enabled
- **Swing Trading**: Enabled
- **RSI Oversold**: 30
- **RSI Overbought**: 70

---

## 📈 How It Works

### 1. Data Collection:
- Fetches 100 hours of XAU/USD data from Twelve Data
- Stores in Cloudflare D1 database
- Updates every 15 minutes automatically

### 2. Technical Analysis:
- Calculates 8 technical indicators on 100 candles
- RSI, MACD, SMAs, EMAs, Bollinger Bands, ATR
- Identifies trends, momentum, volatility

### 3. Signal Generation:
- Analyzes indicator alignment
- Scores signal confidence (0-100%)
- Generates entry, stop loss, take profit levels
- Creates both day trade and swing trade signals

### 4. Alert Delivery:
- Sends formatted message to Telegram
- Includes all trade parameters
- Only sends if confidence > 70%
- Stores in database for tracking

---

## 🎯 Trading Strategy

### Signal Quality Levels:

**🟢 EXCELLENT (85-100%)**
- All indicators aligned
- Strong trend confirmation
- Low risk, high probability
- **Action**: Take the trade

**🟡 GOOD (70-84%)**
- Most indicators aligned
- Moderate trend confirmation
- Acceptable risk/reward
- **Action**: Consider taking with smaller position

**🔴 WEAK (0-69%)**
- Few indicators aligned
- Weak or no trend
- Higher risk
- **Action**: Wait for better setup

### Position Sizing:
Risk only 1-2% of account per trade.

**Example**: $10,000 account
- Risk per trade: $100-200
- Day Trade: $29.34 stop = 3-6 oz position
- Swing Trade: $48.90 stop = 2-4 oz position

---

## ⚠️ Important Disclaimers

### Trading Risk:
- **This is a technical analysis tool, NOT financial advice**
- Past performance does not guarantee future results
- Trading involves substantial risk of loss
- Only trade with money you can afford to lose
- Always use stop losses
- Consider practicing on demo account first

### Signal Accuracy:
- 95% confidence does NOT mean 95% win rate
- Markets can be unpredictable
- News events can override technical analysis
- Risk management is essential

### API Limitations:
- Twelve Data free tier: 800 calls/day
- Current usage: ~96 calls/day (12% of limit)
- Don't fetch data too frequently
- One scan every 15 minutes is optimal

---

## 📚 Documentation

- **QUICK_START.md**: Get up and running in 5 minutes
- **HOW_TO_USE.md**: Detailed usage guide with current signals
- **SETUP_GUIDE.md**: Complete setup instructions
- **TELEGRAM_SETUP.md**: How to create and configure Telegram bot
- **TWELVE_DATA_UPGRADE.md**: Why we upgraded from Alpha Vantage
- **FEATURES_CHECKLIST.md**: Complete list of all features
- **YOUR_API_KEYS.md**: API key configuration guide

---

## 🔄 Updates and Maintenance

### Last Updated: 2026-01-04
### Version: 2.1.0 (S/R Feature + Monitoring System)
### Status: Production Ready (Cloudflare Pages)

### Recent Changes (January 4th, 2026):
- ✅ **Support & Resistance Levels** - Added to all auto-fetch Telegram alerts
- ✅ **Monitoring System** - Comprehensive health and data freshness tracking
- ✅ **Fixed Monitoring Alerts** - Check Now button no longer triggers AI analysis
- ✅ **Data Freshness Tracking** - Live monitoring of 7 data sources (30min stale threshold)
- ✅ **Auto-fetch Optimization** - Reduced interval from 15min to 10min
- ✅ **S/R Calculation** - Uses last 20x1h candles for key levels
- ✅ **Production Deployment** - All features live on Cloudflare Pages

### Git History:
- **Backup Branch**: `backup-jan2-2026` (contains January improvements)
- **Current Branch**: `main` (December 31st + fixes)
- **GitHub**: https://github.com/aprelay/webapp-trading-system

---

## 🆘 Troubleshooting

### No Telegram Alerts?
```bash
# Test Telegram connection:
curl -X POST http://localhost:3000/api/telegram/test

# Check scanner logs:
pm2 logs auto-scanner --nostream
```

### Dashboard Not Loading?
```bash
# Restart backend:
pm2 restart gold-trader

# Check if running:
pm2 list
```

### Want Fresh Signals?
```bash
# Generate manually:
curl -X POST http://localhost:3000/api/signals/generate-now
```

### Scanner Not Running?
```bash
# Restart scanner:
pm2 restart auto-scanner

# Or restart everything:
cd /home/user/webapp
pm2 delete all
pm2 start ecosystem.config.cjs
```

---

## 🎉 You're All Set!

Your Gold/USD trading system is **fully operational**:

✅ Real-time market data fetching  
✅ Professional technical analysis  
✅ Automated signal generation  
✅ Telegram alerts working  
✅ Auto-scanning every 15 minutes  
✅ Web dashboard accessible  

**Just check your Telegram for trade alerts!**

---

## 📞 Support

For questions or issues:
1. Check the documentation files in this directory
2. Review the troubleshooting section above
3. Check PM2 logs: `pm2 logs`
4. Verify API status: `curl http://localhost:3000/api/market/latest`

---

## 🔗 Links

- **Dashboard**: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai
- **Twelve Data**: https://twelvedata.com
- **Telegram Bots**: https://core.telegram.org/bots
- **Project Location**: `/home/user/webapp/`

---

**Happy Trading! 📈💰**

---

*Disclaimer: This software is provided for educational and informational purposes only. It is not intended as financial advice, and you should not rely on it as such. Trading financial instruments involves significant risk. Please consult with a qualified financial advisor before making investment decisions.*
