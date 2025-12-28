/**
 * Telegram Command Handlers
 * Simplified trade logging via Telegram messages
 */

import { Hono } from 'hono'
import { D1Database } from '@cloudflare/workers-types'
import { logTradeEntry, logTradeExit, getOpenPositions, getTradeStats } from '../lib/riskEnforcement'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /api/telegram/webhook
 * Handle incoming Telegram commands
 */
app.post('/webhook', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    // Parse Telegram message
    const message = body.message || body.edited_message
    if (!message || !message.text) {
      return c.json({ ok: true })
    }
    
    const chatId = message.chat.id
    const text = message.text.trim()
    
    // Get Telegram settings
    const settings = await DB.prepare(`
      SELECT setting_value FROM user_settings WHERE setting_key = 'telegram_bot_token'
    `).first() as any
    
    if (!settings) {
      return c.json({ ok: true })
    }
    
    const config = { botToken: settings.setting_value, chatId: chatId.toString() }
    
    // Handle commands
    if (text.startsWith('/log_trade')) {
      // Parse: /log_trade BUY 4550 4535 4580
      const parts = text.split(' ')
      if (parts.length < 5) {
        await sendTelegramMessage(config, '❌ Usage: /log_trade <BUY|SELL> <entry> <stop> <tp1>')
        return c.json({ ok: true })
      }
      
      const tradeType = parts[1].toUpperCase() as 'BUY' | 'SELL'
      const entryPrice = parseFloat(parts[2])
      const stopLoss = parseFloat(parts[3])
      const takeProfit1 = parseFloat(parts[4])
      
      const result = await logTradeEntry({
        trade_type: tradeType,
        trading_style: 'day_trade',
        entry_price: entryPrice,
        entry_time: new Date().toISOString(),
        position_size: 0,
        position_value: 0,
        stop_loss: stopLoss,
        take_profit_1: takeProfit1,
        take_profit_2: takeProfit1 * 1.002,
        take_profit_3: takeProfit1 * 1.003,
        status: 'OPEN',
        confidence: 85
      }, DB)
      
      if (result.success) {
        await sendTelegramMessage(
          config,
          `✅ *Trade #${result.trade_id} Logged*\n\n` +
          `${tradeType} @ $${entryPrice}\n` +
          `Stop: $${stopLoss}\n` +
          `TP1: $${takeProfit1}`
        )
      } else {
        await sendTelegramMessage(config, `❌ Error: ${result.error}`)
      }
    }
    
    else if (text.startsWith('/close_trade')) {
      // Parse: /close_trade 1 4580 TP1
      const parts = text.split(' ')
      if (parts.length < 4) {
        await sendTelegramMessage(config, '❌ Usage: /close_trade <id> <exit_price> <reason>')
        return c.json({ ok: true })
      }
      
      const tradeId = parseInt(parts[1])
      const exitPrice = parseFloat(parts[2])
      const exitReason = parts[3]
      
      const result = await logTradeExit(tradeId, exitPrice, exitReason, DB)
      
      if (result.success) {
        const profit = result.profit_loss || 0
        const icon = profit > 0 ? '💰' : '❌'
        await sendTelegramMessage(
          config,
          `${icon} *Trade #${tradeId} Closed*\n\n` +
          `Exit: $${exitPrice}\n` +
          `P&L: ${profit > 0 ? '+' : ''}$${profit.toFixed(2)}\n` +
          `Result: ${profit > 0 ? 'WIN ✅' : 'LOSS ❌'}`
        )
      } else {
        await sendTelegramMessage(config, `❌ Error: ${result.error}`)
      }
    }
    
    else if (text === '/open') {
      const positions = await getOpenPositions(DB)
      
      if (positions.length === 0) {
        await sendTelegramMessage(config, '📊 No open positions')
      } else {
        let msg = `📊 *Open Positions (${positions.length})*\n\n`
        for (const pos of positions) {
          msg += `#${pos.id}: ${pos.trade_type} @ $${pos.entry_price}\n`
          msg += `Stop: $${pos.stop_loss}\n`
          msg += `TP1: $${pos.take_profit_1}\n\n`
        }
        await sendTelegramMessage(config, msg)
      }
    }
    
    else if (text === '/stats') {
      const stats = await getTradeStats(DB)
      
      let msg = `📊 *Trading Statistics*\n\n`
      msg += `Total Trades: ${stats.total_trades}\n`
      msg += `Win Rate: ${stats.win_rate}%\n`
      msg += `P&L: $${stats.total_profit_loss}\n`
      msg += `Avg Win: $${stats.avg_win}\n`
      msg += `Avg Loss: $${stats.avg_loss}\n`
      msg += `Profit Factor: ${stats.profit_factor || 0}\n`
      
      await sendTelegramMessage(config, msg)
    }
    
    else if (text === '/help') {
      const msg = `📚 *Available Commands*\n\n` +
        `/log_trade <BUY|SELL> <entry> <stop> <tp1>\n` +
        `Example: /log_trade BUY 4550 4535 4580\n\n` +
        `/close_trade <id> <exit> <reason>\n` +
        `Example: /close_trade 1 4580 TP1\n\n` +
        `/open - Show open positions\n` +
        `/stats - Show performance stats\n` +
        `/help - Show this message`
      
      await sendTelegramMessage(config, msg)
    }
    
    return c.json({ ok: true })
    
  } catch (error: any) {
    console.error('[TELEGRAM WEBHOOK] Error:', error)
    return c.json({ ok: true })
  }
})

export default app
