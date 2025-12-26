# Gold/USD Trading Analysis System 🏅📈

A comprehensive trading analysis system for Gold/USD (XAU/USD) that provides automated market scanning, technical analysis, and real-time trade signals via Telegram alerts. Perfect for day traders and swing traders.

## 🌟 Features

### ✅ Currently Implemented

1. **Real-time Market Data Collection**
   - Integration with Alpha Vantage API for live Gold/USD prices
   - Historical price data storage with multiple timeframes
   - Automated data fetching and updates

2. **Advanced Technical Analysis**
   - **RSI (14)** - Relative Strength Index for overbought/oversold conditions
   - **MACD** - Moving Average Convergence Divergence with signal line
   - **Moving Averages** - SMA 20, 50, 200 for trend identification
   - **Bollinger Bands** - Volatility and price extremes detection
   - **ATR (14)** - Average True Range for stop-loss calculation
   - **EMA** - Exponential Moving Averages (12, 26)

3. **Intelligent Signal Generation**
   - Separate signals for day trading and swing trading strategies
   - Confidence scoring system (0-100%)
   - Multi-factor analysis combining all indicators
   - Automatic entry, stop-loss, and take-profit levels
   - Three take-profit targets for risk management

4. **Telegram Integration** 
   - Real-time trade alerts sent to your Telegram
   - Formatted notifications with emoji indicators
   - Market update notifications
   - Test message functionality

5. **Interactive Dashboard**
   - Real-time price charts using Chart.js
   - Live technical indicator display
   - Recent signals history
   - Quick stats overview
   - Settings management panel

6. **Data Persistence**
   - Cloudflare D1 database for market data
   - Signal history tracking
   - User settings storage
   - Alert history logging

## 🚀 Public URLs

- **Dashboard**: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai

## 📊 API Endpoints

### Market Data
- `GET /api/market/latest` - Get latest market data (last 50 candles)
- `POST /api/market/fetch` - Fetch new market data from Alpha Vantage

### Signals
- `GET /api/signals/recent` - Get recent trading signals (last 20)
- `POST /api/signals/generate` - Generate new trading signals

### Indicators
- `GET /api/indicators/latest` - Get latest technical indicators

### Settings
- `GET /api/settings` - Get user settings
- `POST /api/settings` - Save user settings

### Telegram
- `POST /api/telegram/test` - Test Telegram bot connection

## 📁 Data Models

### Market Data
```sql
- timestamp: Date and time of the candle
- open, high, low, close: OHLC price data
- volume: Trading volume
- timeframe: '1m', '5m', '15m', '1h', '4h', '1d'
```

### Trading Signals
```sql
- signal_type: 'BUY', 'SELL', 'HOLD'
- trading_style: 'day_trade', 'swing_trade'
- price: Entry price
- stop_loss: Stop loss level
- take_profit_1/2/3: Three take-profit targets
- confidence: Signal confidence (0-100%)
- reason: Analysis reasoning
```

### Technical Indicators
```sql
- RSI (14), MACD, MACD Signal, MACD Histogram
- SMA (20, 50, 200), EMA (12, 26)
- Bollinger Bands (Upper, Middle, Lower)
- ATR (14)
```

## 🛠️ Setup Instructions

### 1. Create Telegram Bot

1. Open Telegram and message [@BotFather](https://t.me/BotFather)
2. Send `/newbot` command
3. Follow instructions to create your bot
4. Save the **Bot Token** (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 2. Get Your Chat ID

1. Message your bot on Telegram (say "Hello")
2. Visit this URL in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. Look for `"chat":{"id":123456789` and save the **Chat ID**

### 3. Configure API Keys

1. Sign up at [Alpha Vantage](https://www.alphavantage.co/support/#api-key) for free API key
2. Open the dashboard and go to Settings panel
3. Enter your:
   - Telegram Bot Token
   - Telegram Chat ID
   - (Optional) Alpha Vantage API Key
4. Click **Save Settings**

### 4. Fetch Market Data

1. Click **"Fetch Market Data"** button in the dashboard
2. Wait for data to be downloaded (uses Alpha Vantage API)
3. The system will:
   - Download latest Gold/USD price data
   - Calculate technical indicators
   - Generate trading signals
   - Send alerts to Telegram (if configured)

### 5. Test Telegram Alerts

1. Click **"Test Telegram"** button
2. Check your Telegram for a test message
3. If successful, you'll receive automated trade alerts!

## 📱 User Guide

### Understanding the Dashboard

**Quick Stats:**
- **Current Signal**: Latest trading recommendation (BUY/SELL/HOLD)
- **RSI**: Current RSI value (< 30 = oversold, > 70 = overbought)
- **MACD**: Current MACD value
- **Active Signals**: Number of active trading signals

**Price Chart:**
- Interactive line chart showing Gold/USD price history
- Hover to see exact prices and timestamps
- Auto-updates every minute

**Recent Signals:**
- Last 5 trading signals with:
  - Signal type (BUY/SELL)
  - Entry price
  - Confidence percentage
  - Take Profit 1 (TP1)
  - Stop Loss (SL)
  - Timestamp

**Technical Indicators:**
- Real-time values of all technical indicators
- Color-coded RSI (green = oversold, red = overbought)
- All values update automatically

### Trading Signal Format

When you receive a Telegram alert, it will look like this:

```
🟢 GOLD/USD BUY SIGNAL 🟢

📊 Day Trade
💰 Price: $2023.10
📊 Confidence: 85.2%

🎯 Take Profits:
   TP1: $2035.50
   TP2: $2042.75
   TP3: $2050.00

🛡️ Stop Loss: $2010.30

📝 Reason:
RSI oversold (<30), MACD bullish crossover, Price above SMA20 and SMA50

⏰ 12/26/2025, 3:45:23 PM
```

### Risk Management

**Day Trading Signals:**
- Shorter stop-loss (1.5x ATR)
- Tighter take-profit targets
- Higher frequency

**Swing Trading Signals:**
- Wider stop-loss (2.5x ATR)
- Extended take-profit targets
- Lower frequency, higher confidence

**Recommended Strategy:**
1. Only take signals with 70%+ confidence
2. Use proper position sizing (1-2% account risk)
3. Always set stop-loss orders
4. Take partial profits at TP1, TP2, TP3
5. Never risk more than you can afford to lose

## ⚙️ Configuration Options

- **Min Confidence**: Minimum confidence % to generate alerts (default: 70%)
- **Scan Interval**: How often to check for new signals (default: 15 minutes)
- **Day Trade Enabled**: Enable day trading signals
- **Swing Trade Enabled**: Enable swing trading signals
- **RSI Oversold/Overbought**: Custom RSI thresholds

## 🔄 Features Not Yet Implemented

1. **News Sentiment Analysis** - Integrate NewsAPI for market sentiment
2. **Economic Calendar** - Track important economic events affecting gold
3. **Automated Scanning** - Cron job for automatic signal generation
4. **Multi-Timeframe Analysis** - Analyze multiple timeframes simultaneously
5. **Backtesting** - Historical performance testing
6. **Position Management** - Track open positions and P&L
7. **Custom Indicators** - Add your own technical indicators
8. **Email Alerts** - Alternative to Telegram
9. **SMS Alerts** - SMS notifications for critical signals

## 🎯 Recommended Next Steps

1. **Implement Automated Scanning**
   - Set up Cloudflare Workers Cron Triggers
   - Scan market every 15 minutes automatically
   - Generate and send signals without manual intervention

2. **Add News Integration**
   - Integrate NewsAPI for gold-related news
   - Sentiment analysis on news articles
   - Correlate news sentiment with price movements

3. **Build Position Tracker**
   - Track your open trades
   - Calculate real-time P&L
   - Show win rate and performance metrics

4. **Add Backtesting Engine**
   - Test strategies on historical data
   - Optimize indicator parameters
   - Generate performance reports

5. **Enhance Alert System**
   - Add email notifications
   - SMS alerts for critical signals
   - Custom alert rules

## 🏗️ Tech Stack

- **Backend**: Hono framework on Cloudflare Workers
- **Frontend**: HTML5, TailwindCSS, Chart.js, Axios
- **Database**: Cloudflare D1 (SQLite)
- **APIs**: Alpha Vantage (market data), Telegram Bot API
- **Deployment**: Cloudflare Pages
- **TypeScript**: Full type safety

## 📈 Deployment Status

- **Platform**: Cloudflare Pages (Development)
- **Status**: ✅ Active
- **Database**: Local D1 (use `--local` flag)
- **Last Updated**: 2025-12-26

## 💡 Tips for Best Results

1. **API Limits**: Free Alpha Vantage allows 25 requests/day. Get your own key for more.
2. **Market Hours**: Gold trades 24/5. Best signals during London/NY sessions.
3. **Risk Warning**: This is an analysis tool, not investment advice. Always do your own research.
4. **Confidence Scores**: Higher confidence doesn't guarantee success. Use proper risk management.
5. **Multiple Timeframes**: Check both day trade and swing trade signals for confirmation.

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Initialize database
npm run db:migrate:local
npm run db:seed

# Build project
npm run build

# Start development server
npm run dev:sandbox

# Or use PM2
pm2 start ecosystem.config.cjs
```

## 📝 License

This project is for educational and personal use only. Not financial advice.

## ⚠️ Disclaimer

**IMPORTANT**: This system is a technical analysis tool and should NOT be considered financial advice. Trading involves substantial risk of loss. Past performance does not guarantee future results. Always:

- Do your own research
- Use proper risk management
- Never invest more than you can afford to lose
- Consult a licensed financial advisor
- Test strategies in demo accounts first

The creators of this system are not responsible for any trading losses incurred.

---

**Built with ❤️ for traders by traders**

🔗 **Links:**
- Dashboard: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai
- Repository: /home/user/webapp
