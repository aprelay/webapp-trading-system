/**
 * Backtesting API Routes
 * Run historical strategy validation
 */

import { Hono } from 'hono'
import { D1Database } from '@cloudflare/workers-types'
import { runBacktest, BacktestConfig, formatBacktestResults } from '../lib/backtesting'
import { Candle } from '../lib/technicalAnalysis'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * POST /api/backtest/run
 * Run a backtest on historical data
 */
app.post('/run', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    // Get historical candles from database
    const result = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume
      FROM market_data
      WHERE timeframe = '1h'
      ORDER BY timestamp ASC
    `).all()
    
    if (result.results.length < 200) {
      return c.json({
        success: false,
        error: `Not enough historical data. Have ${result.results.length} candles, need at least 200. System has been collecting data since Dec 26 - wait a few more days or reduce timeframe.`
      }, 400)
    }
    
    const candles: Candle[] = result.results.map((row: any) => ({
      timestamp: row.timestamp,
      open: row.open,
      high: row.high,
      low: row.low,
      close: row.close,
      volume: row.volume || 0
    }))
    
    // Default backtest config
    const config: BacktestConfig = {
      start_date: body.start_date || new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
      end_date: body.end_date || new Date().toISOString(),
      starting_balance: body.starting_balance || 10000,
      min_confidence: body.min_confidence || 75,
      use_mtf_confirmation: body.use_mtf_confirmation !== false,
      use_news_filter: body.use_news_filter !== false,
      timeframe: body.timeframe || '1h',
      commission_per_trade: body.commission_per_trade || 0
    }
    
    // Position sizing rules
    const positionRules = [
      { confidence_min: 90, confidence_max: 100, risk_pct: 2.0, max_position_pct: 10.0 },
      { confidence_min: 80, confidence_max: 89, risk_pct: 1.5, max_position_pct: 7.5 },
      { confidence_min: 75, confidence_max: 79, risk_pct: 1.0, max_position_pct: 5.0 },
      { confidence_min: 70, confidence_max: 74, risk_pct: 0.5, max_position_pct: 2.5 }
    ]
    
    // Run backtest
    const backtestResult = await runBacktest(candles, config, positionRules)
    
    // Save to database
    const saveResult = await DB.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit,
        total_return_pct, max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
    `).bind(
      body.run_name || `Backtest ${new Date().toISOString()}`,
      config.start_date,
      config.end_date,
      config.starting_balance,
      config.min_confidence,
      config.use_mtf_confirmation ? 1 : 0,
      config.use_news_filter ? 1 : 0,
      config.timeframe,
      backtestResult.total_trades,
      backtestResult.winning_trades,
      backtestResult.win_rate,
      backtestResult.net_profit,
      backtestResult.total_return_pct,
      backtestResult.max_drawdown_pct,
      backtestResult.profit_factor,
      backtestResult.sharpe_ratio,
      JSON.stringify(backtestResult.trades),
      JSON.stringify(backtestResult.equity_curve),
    ).run()
    
    // Send Telegram notification
    let telegramSent = false
    try {
      const settingsResult = await DB.prepare(`
        SELECT setting_key, setting_value FROM user_settings 
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all()
      
      const settings: any = {}
      settingsResult.results.forEach((row: any) => {
        if (row.setting_key === 'telegram_bot_token') settings.telegram_bot_token = row.setting_value
        if (row.setting_key === 'telegram_chat_id') settings.telegram_chat_id = row.setting_value
      })
      
      if (settings.telegram_bot_token && settings.telegram_chat_id) {
        const r = backtestResult
        
        // Determine verdict
        let verdict = ''
        let verdictIcon = ''
        if (r.total_trades < 10) {
          verdict = '⏳ INSUFFICIENT DATA'
          verdictIcon = '⏳'
        } else if (r.total_trades < 50) {
          verdict = '⚠️ SMALL SAMPLE SIZE'
          verdictIcon = '⚠️'
        } else if (r.win_rate >= 70 && r.profit_factor >= 2.0) {
          verdict = '✅ STRATEGY VALIDATED'
          verdictIcon = '✅'
        } else if (r.win_rate >= 60) {
          verdict = '⚠️ GOOD PERFORMANCE'
          verdictIcon = '⚠️'
        } else {
          verdict = '❌ NEEDS IMPROVEMENT'
          verdictIcon = '❌'
        }
        
        const message = `
🎯 *BACKTEST COMPLETE*

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *PERFORMANCE SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Total Trades:* ${r.total_trades}
*Win Rate:* ${r.win_rate.toFixed(1)}% (${r.winning_trades}W / ${r.losing_trades}L)
*Net Profit:* ${r.net_profit > 0 ? '+' : ''}$${r.net_profit.toFixed(2)}
*Total Return:* ${r.total_return_pct > 0 ? '+' : ''}${r.total_return_pct.toFixed(2)}%

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PROFIT METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Average Win:* +$${r.avg_win.toFixed(2)}
*Average Loss:* -$${Math.abs(r.avg_loss).toFixed(2)}
*Largest Win:* +$${r.largest_win.toFixed(2)}
*Largest Loss:* -$${Math.abs(r.largest_loss).toFixed(2)}
*Profit Factor:* ${r.profit_factor.toFixed(2)}
*Expectancy:* $${r.expectancy.toFixed(2)} per trade

━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *RISK METRICS*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Max Drawdown:* ${r.max_drawdown_pct.toFixed(2)}%
*Sharpe Ratio:* ${r.sharpe_ratio.toFixed(2)}
*Max Consecutive Wins:* ${r.max_consecutive_wins}
*Max Consecutive Losses:* ${r.max_consecutive_losses}

━━━━━━━━━━━━━━━━━━━━━━━━━
💵 *BALANCE PROGRESSION*
━━━━━━━━━━━━━━━━━━━━━━━━━

*Starting:* $${r.starting_balance.toFixed(2)}
*Peak:* $${r.peak_balance.toFixed(2)}
*Ending:* $${r.ending_balance.toFixed(2)}

━━━━━━━━━━━━━━━━━━━━━━━━━
${verdictIcon} *VERDICT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${verdict}

${r.total_trades < 10 ? '⚠️ Only ' + r.total_trades + ' trades executed. Need 50+ for validation.' : 
  r.total_trades < 50 ? '⚠️ Need 50+ trades for reliable results. Keep collecting data.' :
  r.win_rate >= 70 && r.profit_factor >= 2.0 ? '✅ Ready for paper trading!' :
  r.win_rate >= 60 ? '⚠️ Consider increasing confidence threshold or adding filters.' :
  '❌ Adjust strategy parameters before live trading.'}

⏱️ Execution Time: ${r.execution_time_ms}ms
📅 Backtest ID: ${saveResult.meta.last_row_id}
        `.trim()
        
        const success = await sendTelegramMessage(
          { botToken: settings.telegram_bot_token, chatId: settings.telegram_chat_id },
          message
        )
        
        telegramSent = success
      }
    } catch (telegramError) {
      console.error('[BACKTEST] Telegram send failed:', telegramError)
    }
    
    return c.json({
      success: true,
      backtest_id: saveResult.meta.last_row_id,
      result: backtestResult,
      formatted: formatBacktestResults(backtestResult),
      telegram_sent: telegramSent
    })
  } catch (error: any) {
    console.error('[BACKTEST ERROR]', error)
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/backtest/results
 * Get list of backtest runs
 */
app.get('/results', async (c) => {
  try {
    const { DB } = c.env
    const limit = parseInt(c.req.query('limit') || '10')
    
    const result = await DB.prepare(`
      SELECT 
        id, run_name, start_date, end_date, starting_balance,
        min_confidence, total_trades, winning_trades, win_rate,
        net_profit, total_return_pct, max_drawdown_pct,
        profit_factor, sharpe_ratio, status, created_at, completed_at
      FROM backtest_runs
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(limit).all()
    
    return c.json({
      success: true,
      count: result.results.length,
      backtests: result.results
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/backtest/results/:id
 * Get detailed backtest results
 */
app.get('/results/:id', async (c) => {
  try {
    const { DB } = c.env
    const backtestId = parseInt(c.req.param('id'))
    
    const result = await DB.prepare(`
      SELECT * FROM backtest_runs WHERE id = ?
    `).bind(backtestId).first() as any
    
    if (!result) {
      return c.json({
        success: false,
        error: 'Backtest not found'
      }, 404)
    }
    
    // Parse JSON fields
    result.trades = result.trades_json ? JSON.parse(result.trades_json) : []
    result.equity_curve = result.equity_curve_json ? JSON.parse(result.equity_curve_json) : []
    
    return c.json({
      success: true,
      backtest: result
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * DELETE /api/backtest/results/:id
 * Delete a backtest run
 */
app.delete('/results/:id', async (c) => {
  try {
    const { DB } = c.env
    const backtestId = parseInt(c.req.param('id'))
    
    await DB.prepare(`
      DELETE FROM backtest_runs WHERE id = ?
    `).bind(backtestId).run()
    
    return c.json({
      success: true,
      message: 'Backtest deleted'
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/backtest/data-availability
 * Check how much historical data is available
 */
app.get('/data-availability', async (c) => {
  try {
    const { DB } = c.env
    
    const result = await DB.prepare(`
      SELECT 
        COUNT(*) as total_candles,
        MIN(timestamp) as earliest_date,
        MAX(timestamp) as latest_date
      FROM market_data
      WHERE timeframe = '1h'
    `).first() as any
    
    if (!result || result.total_candles === 0) {
      return c.json({
        success: true,
        available: false,
        message: 'No historical data available. Fetch market data first.',
        total_candles: 0
      })
    }
    
    const earliestDate = new Date(result.earliest_date)
    const latestDate = new Date(result.latest_date)
    const daysCovered = Math.floor((latestDate.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24))
    
    return c.json({
      success: true,
      available: result.total_candles >= 200,
      total_candles: result.total_candles,
      earliest_date: result.earliest_date,
      latest_date: result.latest_date,
      days_covered: daysCovered,
      min_required: 200,
      ready_for_backtest: result.total_candles >= 200
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

export default app
