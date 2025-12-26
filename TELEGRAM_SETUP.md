# 📱 Telegram Bot Setup - Visual Guide

## Why Telegram?

Telegram bots provide:
- ✅ **Instant notifications** - Get alerts in seconds
- ✅ **Always accessible** - Phone, desktop, web
- ✅ **100% Free** - No charges for bot messages
- ✅ **Secure** - End-to-end encrypted
- ✅ **Reliable** - 99.9% uptime

---

## Step-by-Step Setup

### Step 1: Open Telegram

Open the Telegram app on your phone or desktop.

**Download Telegram:**
- iOS: https://apps.apple.com/app/telegram-messenger/id686449807
- Android: https://play.google.com/store/apps/details?id=org.telegram.messenger
- Desktop: https://desktop.telegram.org/

---

### Step 2: Find BotFather

1. In Telegram search bar, type: **@BotFather**
2. Click on the official BotFather bot (verified with blue checkmark)
3. Click **START** button

**Important**: Make sure it's the official @BotFather (has verification badge)

---

### Step 3: Create Your Bot

1. Send this command: `/newbot`

2. BotFather will ask: **"Alright, a new bot. How are we going to call it?"**
   
   Example: `Gold Trading Alert Bot`
   
   (This is the display name - can be anything)

3. BotFather will ask: **"Now choose a username for your bot."**
   
   Example: `my_gold_trader_bot`
   
   **Rules for username:**
   - Must end with `bot` (e.g., `my_gold_trader_bot`)
   - Must be unique (try different names if taken)
   - Can contain letters, numbers, and underscores
   - No spaces allowed

4. **SUCCESS!** BotFather will reply with:

```
Done! Congratulations on your new bot. You will find it at t.me/my_gold_trader_bot.

Use this token to access the HTTP API:
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-EXAMPLE

For a description of the Bot API, see this page: 
https://core.telegram.org/bots/api
```

5. **📋 COPY AND SAVE THIS TOKEN!**
   
   It looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
   
   ⚠️ **Keep it secret!** Anyone with this token can control your bot.

---

### Step 4: Get Your Chat ID

#### Method 1: Using Browser (Easiest)

1. **Send a message to your bot**
   
   - Search for your bot username in Telegram
   - Click **START** button
   - Send any message (e.g., "Hello")

2. **Open your browser** and visit this URL:
   
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
   
   **Replace `<YOUR_BOT_TOKEN>` with your actual token!**
   
   Example:
   ```
   https://api.telegram.org/bot1234567890:ABCdefGHIjklMNOpqrsTUVwxyz/getUpdates
   ```

3. **Find your Chat ID in the response:**

   ```json
   {
     "ok": true,
     "result": [
       {
         "update_id": 123456789,
         "message": {
           "message_id": 1,
           "from": {
             "id": 987654321,
             "is_bot": false,
             "first_name": "John"
           },
           "chat": {
             "id": 987654321,    ← THIS IS YOUR CHAT ID!
             "first_name": "John",
             "type": "private"
           },
           "date": 1703606400,
           "text": "Hello"
         }
       }
     ]
   }
   ```

4. **📋 COPY the number after `"chat":{"id":`**
   
   Example: `987654321`

#### Method 2: Using Telegram Bot (Alternative)

1. Add **@userinfobot** on Telegram
2. Send `/start` to @userinfobot
3. It will reply with your Chat ID

---

### Step 5: Configure Your Dashboard

1. **Open your trading system dashboard**
   
   https://3000-i8uevlgdwczm1ue55hfsx-5634da27.sandbox.novita.ai

2. **Scroll to "Settings & Configuration" section**

3. **Enter your credentials:**
   
   - **Telegram Bot Token**: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **Telegram Chat ID**: `987654321`
   - **Min Confidence**: `70` (keep default)
   - **Scan Interval**: `15` (keep default)

4. **Click "Save Settings"** button

5. **Click "Test Telegram"** button

6. **Check your Telegram!** You should receive:

```
🔔 Test Alert

Your Gold/USD Trading System is connected and working!

✅ Telegram alerts are active.
```

---

## What Alerts Look Like

### Buy Signal Example:

```
🟢 GOLD/USD BUY SIGNAL 🟢

📊 Day Trade
💰 Price: $2,023.10
📊 Confidence: 85.2%

🎯 Take Profits:
   TP1: $2,035.50
   TP2: $2,042.75
   TP3: $2,050.00

🛡️ Stop Loss: $2,010.30

📝 Reason:
RSI oversold (<30), MACD bullish crossover, 
Price above SMA20 and SMA50, Uptrend (above SMA200)

⏰ 12/26/2025, 3:45:23 PM
```

### Sell Signal Example:

```
🔴 GOLD/USD SELL SIGNAL 🔴

📈 Swing Trade
💰 Price: $2,055.40
📊 Confidence: 78.5%

🎯 Take Profits:
   TP1: $2,042.20
   TP2: $2,035.50
   TP3: $2,028.10

🛡️ Stop Loss: $2,068.90

📝 Reason:
RSI overbought (>70), Price at upper Bollinger Band, 
MACD bearish divergence

⏰ 12/26/2025, 4:15:07 PM
```

---

## Troubleshooting

### ❌ "Failed to send Telegram message"

**Possible causes:**

1. **Wrong Bot Token**
   - Make sure you copied the entire token
   - Check for extra spaces
   - Token format: `numbers:letters`

2. **Wrong Chat ID**
   - Must be numbers only
   - No spaces or special characters
   - Try the /getUpdates URL again

3. **Didn't message bot first**
   - You MUST send at least one message to your bot
   - Click START button in bot chat
   - Send any message

4. **Bot privacy settings**
   - In BotFather, send: `/mybots`
   - Select your bot
   - Click "Bot Settings"
   - Make sure bot can receive messages

### ❌ No response from /getUpdates

1. **Make sure you sent a message to your bot first**
2. **Check the URL is correct** (with your real token)
3. **Try sending another message** to your bot
4. **Clear browser cache** and try again

### ❌ "Token invalid"

1. **Regenerate token** in BotFather:
   - Send `/mybots` to @BotFather
   - Select your bot
   - Click "API Token"
   - Click "Revoke current token"
   - Get new token

### ✅ "Test message sent but I didn't receive it"

1. **Check spam/archived chats** in Telegram
2. **Search for your bot** by username
3. **Make sure bot isn't blocked** (unblock if needed)
4. **Try creating a new bot** if all else fails

---

## Security Tips

🔒 **Keep your Bot Token SECRET:**
- Don't share it publicly
- Don't commit it to GitHub
- Don't post it in forums
- Use environment variables

🔒 **Protect your Chat ID:**
- Only share with trusted services
- Change if compromised

🔒 **Bot Permissions:**
- Your bot can only send messages to you
- It cannot see other people's messages
- It's completely private

---

## Advanced: Group Notifications

Want alerts in a Telegram group?

1. **Create a Telegram group**
2. **Add your bot to the group**
3. **Send a message in the group**
4. **Visit**: `https://api.telegram.org/bot<TOKEN>/getUpdates`
5. **Find the group Chat ID** (negative number)
6. **Use this Chat ID** in settings

Example group Chat ID: `-1001234567890`

---

## Next Steps

After successful Telegram setup:

1. ✅ **Fetch Market Data** (click button in dashboard)
2. ✅ **Wait for signals** (automatic when conditions met)
3. ✅ **Receive alerts** on your phone instantly!
4. ✅ **Analyze signals** before trading
5. ✅ **Set up your trading plan**

---

## Frequently Asked Questions

**Q: Can I use one bot for multiple systems?**
A: Yes, but each system will send to the same chat. Better to create separate bots.

**Q: Will I get too many alerts?**
A: No! Signals only generated when confidence > 70% and multiple indicators align.

**Q: Can I mute notifications at night?**
A: Yes, in Telegram settings, mute your bot chat during specific hours.

**Q: How many alerts per day?**
A: Depends on market conditions. Usually 3-8 high-quality signals per day.

**Q: Can I change bot name later?**
A: Yes! Send `/setname` to @BotFather.

**Q: Is Telegram required?**
A: No, but highly recommended for real-time alerts. Dashboard works independently.

---

## Support Resources

- **Telegram Bot API**: https://core.telegram.org/bots/api
- **BotFather Commands**: https://core.telegram.org/bots/features#botfather
- **Telegram Support**: https://telegram.org/support

---

**🎉 You're Ready!**

Once configured, your system will automatically:
- Analyze Gold/USD market every time you fetch data
- Calculate all technical indicators
- Generate high-confidence trading signals
- Send instant Telegram alerts
- Display everything on your dashboard

**Happy Trading! 📈🏅**
