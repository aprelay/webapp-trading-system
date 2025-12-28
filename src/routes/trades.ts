/**
 * Trade Management API Routes
 * Handles live trade logging and performance tracking
 */

import { Hono } from 'hono'
import { D1Database } from '@cloudflare/workers-types'
import {
  getRiskLimits,
  validateTrade,
  logTradeEntry,
  logTradeExit,
  getTradeStats,
  getOpenPositions,
  LiveTrade
} from '../lib/riskEnforcement'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * GET /api/trades/limits
 * Get current risk limits and trading status
 */
app.get('/limits', async (c) => {
  try {
    const { DB } = c.env
    const limits = await getRiskLimits(DB)
    
    return c.json({
      success: true,
      limits
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/trades/validate
 * Validate if a trade can be taken (before entry)
 */
app.post('/validate', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    const validation = await validateTrade({
      entry_price: body.entry_price,
      stop_loss: body.stop_loss,
      take_profit_1: body.take_profit_1,
      confidence: body.confidence,
      trade_type: body.trade_type
    }, DB)
    
    return c.json({
      success: true,
      validation
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/trades/open
 * Log a new trade entry
 */
app.post('/open', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    const trade: LiveTrade = {
      signal_id: body.signal_id,
      trade_type: body.trade_type,
      trading_style: body.trading_style || 'day_trade',
      entry_price: body.entry_price,
      entry_time: body.entry_time || new Date().toISOString(),
      position_size: body.position_size || 0, // Will be calculated
      position_value: 0, // Will be calculated
      stop_loss: body.stop_loss,
      take_profit_1: body.take_profit_1,
      take_profit_2: body.take_profit_2,
      take_profit_3: body.take_profit_3,
      confidence: body.confidence,
      mtf_score: body.mtf_score,
      regime: body.regime,
      status: 'OPEN',
      notes: body.notes
    }
    
    const result = await logTradeEntry(trade, DB)
    
    if (!result.success) {
      return c.json({
        success: false,
        error: result.error
      }, 400)
    }
    
    return c.json({
      success: true,
      message: 'Trade logged successfully',
      trade_id: result.trade_id
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/trades/close/:id
 * Close an open trade
 */
app.post('/close/:id', async (c) => {
  try {
    const { DB } = c.env
    const tradeId = parseInt(c.req.param('id'))
    const body = await c.req.json()
    
    const result = await logTradeExit(
      tradeId,
      body.exit_price,
      body.exit_reason || 'MANUAL',
      DB
    )
    
    if (!result.success) {
      return c.json({
        success: false,
        error: result.error
      }, 400)
    }
    
    return c.json({
      success: true,
      message: 'Trade closed successfully',
      profit_loss: result.profit_loss
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/trades/open
 * Get all open positions
 */
app.get('/open', async (c) => {
  try {
    const { DB } = c.env
    const positions = await getOpenPositions(DB)
    
    return c.json({
      success: true,
      count: positions.length,
      positions
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/trades/history
 * Get closed trades history
 */
app.get('/history', async (c) => {
  try {
    const { DB } = c.env
    const limit = parseInt(c.req.query('limit') || '50')
    
    const result = await DB.prepare(`
      SELECT * FROM live_trades 
      WHERE status = 'CLOSED'
      ORDER BY exit_time DESC
      LIMIT ?
    `).bind(limit).all()
    
    return c.json({
      success: true,
      count: result.results.length,
      trades: result.results
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/trades/stats
 * Get overall trading statistics
 */
app.get('/stats', async (c) => {
  try {
    const { DB } = c.env
    const stats = await getTradeStats(DB)
    const limits = await getRiskLimits(DB)
    
    return c.json({
      success: true,
      stats,
      account: {
        starting_balance: limits.starting_balance,
        current_balance: limits.current_balance,
        total_return: limits.current_balance - limits.starting_balance,
        total_return_pct: ((limits.current_balance - limits.starting_balance) / limits.starting_balance) * 100
      }
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/trades/daily
 * Get daily performance breakdown
 */
app.get('/daily', async (c) => {
  try {
    const { DB } = c.env
    const days = parseInt(c.req.query('days') || '30')
    
    const result = await DB.prepare(`
      SELECT * FROM daily_performance
      ORDER BY trade_date DESC
      LIMIT ?
    `).bind(days).all()
    
    return c.json({
      success: true,
      count: result.results.length,
      daily_performance: result.results
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/trades/limits/update
 * Update risk limits (admin)
 */
app.post('/limits/update', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    await DB.prepare(`
      UPDATE risk_limits
      SET max_position_risk_pct = ?,
          max_portfolio_risk_pct = ?,
          max_daily_loss_pct = ?,
          max_drawdown_pct = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(
      body.max_position_risk_pct || 2.0,
      body.max_portfolio_risk_pct || 10.0,
      body.max_daily_loss_pct || 5.0,
      body.max_drawdown_pct || 10.0
    ).run()
    
    return c.json({
      success: true,
      message: 'Risk limits updated'
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/trades/limits/resume
 * Resume trading after pause
 */
app.post('/limits/resume', async (c) => {
  try {
    const { DB } = c.env
    
    await DB.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 1,
          pause_reason = NULL,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).run()
    
    return c.json({
      success: true,
      message: 'Trading resumed'
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

export default app
