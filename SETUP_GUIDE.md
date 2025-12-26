# 🚀 Quick Setup Guide for Gold/USD Trading System

## Step 1: Create Your Telegram Bot (5 minutes)

### Create Bot
1. Open Telegram app
2. Search for **@BotFather** (official bot)
3. Send: `/newbot`
4. Choose a name (e.g., "Gold Trading Bot")
5. Choose a username (e.g., "my_gold_trader_bot")
6. **SAVE THE TOKEN** (looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Get Your Chat ID
1. Send a message to your new bot (any message like "Hello")
2. Open browser and visit (replace YOUR_TOKEN):
   ```
   https://api.telegram.org/botYOUR_TOKEN/getUpdates
   ```
3. Find the number after `"chat":{"id":` (e.g., `123456789`)
4. **SAVE THIS CHAT ID**

Example response:
```json
{
  "ok": true,
  "result": [{
    "message": {
      "chat": {
        "id": 123456789,  ← THIS IS YOUR CHAT ID
        "first_name": "John"
      }
    }
  }]
}
```

## Step 2: Get Alpha Vantage API Key (2 minutes)

1. Visit: https://www.alphavantage.co/support/#api-key
2. Enter your email
3. Click "GET FREE API KEY"
4. **SAVE THE API KEY** (you'll receive it immediately)

**Note**: Free tier = 25 requests/day (sufficient for testing)

## Step 3: Configure the System (2 minutes)

1. Open the dashboard: https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai
2. Scroll to **Settings & Configuration** section
3. Enter:
   - **Telegram Bot Token**: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **Telegram Chat ID**: `123456789`
   - **Min Confidence**: `70` (default is fine)
   - **Scan Interval**: `15` (default is fine)
4. Click **"Save Settings"** button
5. Click **"Test Telegram"** to verify (you should receive a test message)

## Step 4: Fetch Market Data (1 minute)

1. Click **"Fetch Market Data"** button
2. Wait 10-30 seconds
3. You should see:
   - Price chart populated
   - Technical indicators showing values
   - Signals generated (if conditions met)
   - Telegram alert sent (if signal confidence > 70%)

## Step 5: Start Receiving Alerts! 🎉

Your system is now live! You will receive Telegram alerts when:
- RSI indicates oversold/overbought conditions
- MACD shows bullish/bearish crossover
- Price breaks through Bollinger Bands
- Multiple indicators confirm a high-confidence trade

## 📱 What to Expect

### Telegram Alert Example:
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
RSI oversold (<30), MACD bullish crossover, 
Price above SMA20 and SMA50

⏰ 12/26/2025, 3:45:23 PM
```

## 🔄 Refreshing Data

Currently, you need to manually click **"Fetch Market Data"** to update.

**Future Enhancement**: Set up automated scanning every 15 minutes using Cloudflare Workers Cron Triggers.

## ⚠️ Troubleshooting

### "Failed to send Telegram message"
- Double-check your Bot Token (no spaces)
- Verify Chat ID is a number
- Make sure you sent at least one message to the bot
- Try the `/getUpdates` URL again

### "API limit reached"
- Free Alpha Vantage = 25 requests/day
- Wait 24 hours or get your own API key
- Use the key in settings (future feature)

### No signals generated
- Check that market data was fetched successfully
- Verify chart shows data
- Lower "Min Confidence" to 60% in settings
- Signals only generated when conditions align

### Chart not showing
- Refresh the page
- Check browser console for errors (F12)
- Ensure "Fetch Market Data" completed successfully

## 🎯 Trading Tips

1. **Don't trade every signal** - Wait for 80%+ confidence
2. **Use stop-loss always** - Protect your capital
3. **Start with demo account** - Test before using real money
4. **Multiple confirmations** - Check both day trade and swing signals
5. **Market hours matter** - Best signals during London/NY sessions

## 📊 Understanding Technical Indicators

- **RSI < 30**: Oversold (potential BUY)
- **RSI > 70**: Overbought (potential SELL)
- **MACD > Signal**: Bullish momentum
- **MACD < Signal**: Bearish momentum
- **Price > SMA200**: Long-term uptrend
- **Price < BB Lower**: Potential reversal up
- **Price > BB Upper**: Potential reversal down

## 🔐 Security Best Practices

1. **Never share your Bot Token**
2. **Keep Chat ID private**
3. **Don't commit API keys to GitHub**
4. **Use environment variables in production**
5. **Regularly rotate API keys**

## 📚 Next Steps

Once you're comfortable:
1. Adjust indicator settings for your strategy
2. Set up automated scanning (Cloudflare Cron)
3. Add multiple notification channels
4. Track your trading performance
5. Backtest strategies on historical data

## 💬 Support

If you have questions:
1. Check the main README.md
2. Review indicator calculations in `src/lib/technicalAnalysis.ts`
3. Test with "demo" API key first

## ⚡ Quick Command Reference

```bash
# Check service status
pm2 list

# View logs
pm2 logs gold-trader --nostream

# Restart service
pm2 restart gold-trader

# Stop service
pm2 stop gold-trader

# Database commands
npm run db:migrate:local  # Apply migrations
npm run db:seed           # Seed data
npm run db:reset          # Reset database
```

---

**You're all set! Happy trading! 📈🏅**

Remember: This is a technical analysis tool, not financial advice. Always do your own research and never risk more than you can afford to lose.
