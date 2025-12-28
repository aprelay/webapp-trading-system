/**
 * Economic Calendar API Routes
 * Provides economic event data and trading safety checks
 */

import { Hono } from 'hono'
import { D1Database } from '@cloudflare/workers-types'
import {
  generateStaticEvents,
  checkTradingSafety,
  getTodayEvents,
  isHighRiskDay,
  calculateCalendarImpact,
  formatEvent,
  EconomicEvent
} from '../lib/economicCalendar'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * GET /api/calendar/events
 * Get upcoming economic events
 */
app.get('/events', async (c) => {
  try {
    const days = parseInt(c.req.query('days') || '7')
    const events = generateStaticEvents(days)
    
    return c.json({
      success: true,
      count: events.length,
      events: events.map(e => ({
        ...e,
        formatted: formatEvent(e)
      }))
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/calendar/today
 * Get today's high-impact events
 */
app.get('/today', async (c) => {
  try {
    const events = getTodayEvents()
    const safety = checkTradingSafety()
    
    return c.json({
      success: true,
      date: new Date().toISOString().split('T')[0],
      event_count: events.length,
      events,
      trading_safety: safety
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/calendar/check
 * Check if it's safe to trade right now
 */
app.get('/check', async (c) => {
  try {
    const safety = checkTradingSafety()
    const impact = calculateCalendarImpact()
    
    return c.json({
      success: true,
      timestamp: new Date().toISOString(),
      should_trade: safety.shouldTrade,
      risk_level: safety.riskLevel,
      reason: safety.reason,
      confidence_adjustment: impact.adjustment,
      upcoming_events: safety.upcomingEvents.slice(0, 5),
      next_safe_time: safety.nextSafeTime
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/calendar/high-risk-days
 * Get list of high-risk trading days (next 30 days)
 */
app.get('/high-risk-days', async (c) => {
  try {
    const today = new Date()
    const highRiskDays: string[] = []
    
    for (let i = 0; i < 30; i++) {
      const checkDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
      if (isHighRiskDay(checkDate)) {
        highRiskDays.push(checkDate.toISOString().split('T')[0])
      }
    }
    
    return c.json({
      success: true,
      count: highRiskDays.length,
      high_risk_days: highRiskDays
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * POST /api/calendar/add-event
 * Add custom economic event
 */
app.post('/add-event', async (c) => {
  try {
    const { DB } = c.env
    const body = await c.req.json()
    
    const result = await DB.prepare(`
      INSERT INTO economic_events (
        event_date, event_time, title, country, impact, source
      ) VALUES (?, ?, ?, ?, ?, 'user')
    `).bind(
      body.event_date,
      body.event_time,
      body.title,
      body.country || 'USD',
      body.impact || 'medium'
    ).run()
    
    return c.json({
      success: true,
      message: 'Event added',
      event_id: result.meta.last_row_id
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * GET /api/calendar/stored
 * Get custom events from database
 */
app.get('/stored', async (c) => {
  try {
    const { DB } = c.env
    const days = parseInt(c.req.query('days') || '30')
    
    const result = await DB.prepare(`
      SELECT * FROM economic_events
      WHERE event_date >= DATE('now')
      AND event_date <= DATE('now', '+' || ? || ' days')
      ORDER BY event_date, event_time
    `).bind(days).all()
    
    return c.json({
      success: true,
      count: result.results.length,
      events: result.results
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

/**
 * DELETE /api/calendar/event/:id
 * Delete a custom event
 */
app.delete('/event/:id', async (c) => {
  try {
    const { DB } = c.env
    const eventId = parseInt(c.req.param('id'))
    
    await DB.prepare(`
      DELETE FROM economic_events WHERE id = ? AND source = 'user'
    `).bind(eventId).run()
    
    return c.json({
      success: true,
      message: 'Event deleted'
    })
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message
    }, 500)
  }
})

export default app
