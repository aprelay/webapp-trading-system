/**
 * Risk Management Enforcement System
 * Ensures all trading rules are followed automatically
 */

import { D1Database } from '@cloudflare/workers-types'

export interface RiskLimits {
  max_position_risk_pct: number // Max % per trade (e.g., 2%)
  max_portfolio_risk_pct: number // Max total risk (e.g., 10%)
  max_daily_loss_pct: number // Max loss per day (e.g., 5%)
  max_drawdown_pct: number // Max drawdown (e.g., 10%)
  starting_balance: number
  current_balance: number
  current_portfolio_risk: number
  current_daily_loss: number
  current_drawdown: number
  trading_enabled: number // 0 or 1
  pause_reason?: string
}

export interface TradeValidation {
  is_valid: boolean
  reason: string
  errors: string[]
  warnings: string[]
  calculated_position_size: number
  calculated_risk: number
  risk_reward_ratio: number
}

export interface LiveTrade {
  id?: number
  signal_id?: number
  trade_type: 'BUY' | 'SELL'
  trading_style: 'day_trade' | 'swing_trade'
  entry_price: number
  entry_time: string
  position_size: number
  position_value: number
  stop_loss: number
  take_profit_1: number
  take_profit_2?: number
  take_profit_3?: number
  exit_price?: number
  exit_time?: string
  exit_reason?: string
  profit_loss?: number
  profit_loss_pct?: number
  win?: number
  confidence?: number
  mtf_score?: number
  regime?: string
  status: 'OPEN' | 'CLOSED'
  notes?: string
}

/**
 * Get current risk limits from database
 */
export async function getRiskLimits(DB: D1Database): Promise<RiskLimits> {
  const result = await DB.prepare(`
    SELECT * FROM risk_limits WHERE id = 1 LIMIT 1
  `).first()
  
  if (!result) {
    // Initialize default
    await DB.prepare(`
      INSERT INTO risk_limits (id, starting_balance, current_balance)
      VALUES (1, 10000, 10000)
    `).run()
    
    return {
      max_position_risk_pct: 2.0,
      max_portfolio_risk_pct: 10.0,
      max_daily_loss_pct: 5.0,
      max_drawdown_pct: 10.0,
      starting_balance: 10000,
      current_balance: 10000,
      current_portfolio_risk: 0,
      current_daily_loss: 0,
      current_drawdown: 0,
      trading_enabled: 1
    }
  }
  
  return result as RiskLimits
}

/**
 * Calculate position size based on risk limits
 */
export function calculatePositionSize(
  entryPrice: number,
  stopLoss: number,
  confidence: number,
  limits: RiskLimits
): {
  position_size: number
  risk_amount: number
  risk_pct: number
  reason: string
} {
  const balance = limits.current_balance
  
  // Determine risk % based on confidence
  let riskPct = 0.5 // Default 0.5%
  
  if (confidence >= 90) riskPct = 2.0 // 90-100% confidence → 2% risk
  else if (confidence >= 80) riskPct = 1.5 // 80-89% → 1.5% risk
  else if (confidence >= 75) riskPct = 1.0 // 75-79% → 1% risk
  else if (confidence >= 70) riskPct = 0.5 // 70-74% → 0.5% risk
  else riskPct = 0.25 // <70% → 0.25% risk (should skip)
  
  // Cap at max position risk
  if (riskPct > limits.max_position_risk_pct) {
    riskPct = limits.max_position_risk_pct
  }
  
  // Calculate risk amount
  const riskAmount = balance * (riskPct / 100)
  
  // Calculate position size (oz)
  const riskPerUnit = Math.abs(entryPrice - stopLoss)
  const positionSize = riskPerUnit > 0 ? riskAmount / riskPerUnit : 0
  
  return {
    position_size: Math.round(positionSize * 100) / 100, // Round to 2 decimals
    risk_amount: Math.round(riskAmount * 100) / 100,
    risk_pct: riskPct,
    reason: `${confidence}% confidence → ${riskPct}% risk → ${riskAmount.toFixed(2)} USD`
  }
}

/**
 * Validate if a trade can be taken
 */
export async function validateTrade(
  trade: {
    entry_price: number
    stop_loss: number
    take_profit_1: number
    confidence: number
    trade_type: 'BUY' | 'SELL'
  },
  DB: D1Database
): Promise<TradeValidation> {
  const errors: string[] = []
  const warnings: string[] = []
  
  // Get risk limits
  const limits = await getRiskLimits(DB)
  
  // Check 1: Trading enabled?
  if (limits.trading_enabled === 0) {
    return {
      is_valid: false,
      reason: limits.pause_reason || 'Trading is currently paused',
      errors: [limits.pause_reason || 'Trading paused'],
      warnings: [],
      calculated_position_size: 0,
      calculated_risk: 0,
      risk_reward_ratio: 0
    }
  }
  
  // Check 2: Confidence threshold
  if (trade.confidence < 70) {
    errors.push(`Confidence ${trade.confidence}% too low (min 70%)`)
  }
  
  // Check 3: Stop loss exists
  if (!trade.stop_loss || trade.stop_loss === trade.entry_price) {
    errors.push('Invalid stop loss')
  }
  
  // Check 4: Take profit exists
  if (!trade.take_profit_1 || trade.take_profit_1 === trade.entry_price) {
    errors.push('Invalid take profit')
  }
  
  // Calculate position size
  const posCalc = calculatePositionSize(
    trade.entry_price,
    trade.stop_loss,
    trade.confidence,
    limits
  )
  
  // Check 5: Portfolio heat
  const currentRisk = limits.current_portfolio_risk + posCalc.risk_pct
  if (currentRisk > limits.max_portfolio_risk_pct) {
    errors.push(
      `Portfolio risk ${currentRisk.toFixed(1)}% exceeds limit ${limits.max_portfolio_risk_pct}%`
    )
  }
  
  // Check 6: Daily loss limit
  if (limits.current_daily_loss >= limits.max_daily_loss_pct) {
    errors.push(
      `Daily loss ${limits.current_daily_loss.toFixed(1)}% reached limit ${limits.max_daily_loss_pct}%`
    )
  }
  
  // Check 7: Drawdown limit
  if (limits.current_drawdown >= limits.max_drawdown_pct) {
    errors.push(
      `Drawdown ${limits.current_drawdown.toFixed(1)}% reached limit ${limits.max_drawdown_pct}%`
    )
  }
  
  // Calculate risk:reward ratio
  const riskAmount = Math.abs(trade.entry_price - trade.stop_loss)
  const rewardAmount = Math.abs(trade.take_profit_1 - trade.entry_price)
  const rrRatio = riskAmount > 0 ? rewardAmount / riskAmount : 0
  
  // Check 8: Risk:Reward ratio
  if (rrRatio < 1.5) {
    warnings.push(`Risk:Reward ${rrRatio.toFixed(2)} is low (min 1.5 recommended)`)
  }
  
  // Check 9: Position size sanity
  if (posCalc.position_size < 0.01) {
    errors.push('Position size too small (min 0.01 oz)')
  }
  
  if (posCalc.position_size > 10) {
    errors.push('Position size too large (max 10 oz)')
  }
  
  // Final validation
  const isValid = errors.length === 0
  const reason = isValid 
    ? `✅ Trade approved: ${posCalc.position_size} oz, risk ${posCalc.risk_amount} USD (${posCalc.risk_pct}%)`
    : `❌ Trade rejected: ${errors.join(', ')}`
  
  return {
    is_valid: isValid,
    reason,
    errors,
    warnings,
    calculated_position_size: posCalc.position_size,
    calculated_risk: posCalc.risk_amount,
    risk_reward_ratio: rrRatio
  }
}

/**
 * Log a new trade (when entered)
 */
export async function logTradeEntry(
  trade: LiveTrade,
  DB: D1Database
): Promise<{ success: boolean; trade_id?: number; error?: string }> {
  try {
    // Validate first
    const validation = await validateTrade({
      entry_price: trade.entry_price,
      stop_loss: trade.stop_loss,
      take_profit_1: trade.take_profit_1,
      confidence: trade.confidence || 75,
      trade_type: trade.trade_type
    }, DB)
    
    if (!validation.is_valid) {
      return {
        success: false,
        error: validation.reason
      }
    }
    
    // Use calculated position size
    trade.position_size = validation.calculated_position_size
    trade.position_value = trade.position_size * trade.entry_price
    
    // Insert trade
    const result = await DB.prepare(`
      INSERT INTO live_trades (
        signal_id, trade_type, trading_style,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence, mtf_score, regime, status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN', ?)
    `).bind(
      trade.signal_id || null,
      trade.trade_type,
      trade.trading_style,
      trade.entry_price,
      trade.entry_time,
      trade.position_size,
      trade.position_value,
      trade.stop_loss,
      trade.take_profit_1,
      trade.take_profit_2 || null,
      trade.take_profit_3 || null,
      trade.confidence || null,
      trade.mtf_score || null,
      trade.regime || null,
      trade.notes || null
    ).run()
    
    // Update portfolio risk
    await updatePortfolioRisk(DB)
    
    return {
      success: true,
      trade_id: result.meta.last_row_id as number
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Close a trade (when exited)
 */
export async function logTradeExit(
  tradeId: number,
  exitPrice: number,
  exitReason: string,
  DB: D1Database
): Promise<{ success: boolean; profit_loss?: number; error?: string }> {
  try {
    // Get trade
    const trade = await DB.prepare(`
      SELECT * FROM live_trades WHERE id = ? AND status = 'OPEN'
    `).bind(tradeId).first() as LiveTrade | null
    
    if (!trade) {
      return { success: false, error: 'Trade not found or already closed' }
    }
    
    // Calculate P&L
    const priceDiff = trade.trade_type === 'BUY' 
      ? exitPrice - trade.entry_price
      : trade.entry_price - exitPrice
    
    const profitLoss = priceDiff * trade.position_size
    const profitLossPct = (priceDiff / trade.entry_price) * 100
    const win = profitLoss > 0 ? 1 : 0
    
    // Update trade
    await DB.prepare(`
      UPDATE live_trades
      SET exit_price = ?,
          exit_time = ?,
          exit_reason = ?,
          profit_loss = ?,
          profit_loss_pct = ?,
          win = ?,
          status = 'CLOSED',
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      exitPrice,
      new Date().toISOString(),
      exitReason,
      profitLoss,
      profitLossPct,
      win,
      tradeId
    ).run()
    
    // Update balance
    const limits = await getRiskLimits(DB)
    const newBalance = limits.current_balance + profitLoss
    
    await DB.prepare(`
      UPDATE risk_limits
      SET current_balance = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(newBalance).run()
    
    // Update portfolio risk
    await updatePortfolioRisk(DB)
    
    // Update daily performance
    await updateDailyPerformance(DB)
    
    // Check risk limits
    await checkRiskLimits(DB)
    
    return {
      success: true,
      profit_loss: profitLoss
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Update portfolio risk (sum of all open positions)
 */
async function updatePortfolioRisk(DB: D1Database) {
  const limits = await getRiskLimits(DB)
  
  // Get all open positions
  const openTrades = await DB.prepare(`
    SELECT position_size, entry_price, stop_loss FROM live_trades WHERE status = 'OPEN'
  `).all()
  
  // Calculate total risk
  let totalRisk = 0
  for (const trade of openTrades.results || []) {
    const t = trade as any
    const riskPerUnit = Math.abs(t.entry_price - t.stop_loss)
    const riskAmount = riskPerUnit * t.position_size
    totalRisk += riskAmount
  }
  
  const riskPct = (totalRisk / limits.current_balance) * 100
  
  await DB.prepare(`
    UPDATE risk_limits
    SET current_portfolio_risk = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(riskPct).run()
}

/**
 * Update daily performance metrics
 */
async function updateDailyPerformance(DB: D1Database) {
  const today = new Date().toISOString().split('T')[0]
  
  // Get today's closed trades
  const todayTrades = await DB.prepare(`
    SELECT * FROM live_trades 
    WHERE DATE(exit_time) = ? AND status = 'CLOSED'
  `).bind(today).all()
  
  if (todayTrades.results.length === 0) return
  
  const trades = todayTrades.results as any[]
  const totalTrades = trades.length
  const winningTrades = trades.filter(t => t.win === 1).length
  const losingTrades = trades.filter(t => t.win === 0).length
  const winRate = (winningTrades / totalTrades) * 100
  const totalPL = trades.reduce((sum, t) => sum + (t.profit_loss || 0), 0)
  const largestWin = Math.max(...trades.map(t => t.profit_loss || 0))
  const largestLoss = Math.min(...trades.map(t => t.profit_loss || 0))
  const avgConfidence = trades.reduce((sum, t) => sum + (t.confidence || 0), 0) / totalTrades
  const avgMtf = trades.reduce((sum, t) => sum + (t.mtf_score || 0), 0) / totalTrades
  
  // Upsert daily performance
  await DB.prepare(`
    INSERT INTO daily_performance (
      trade_date, total_trades, winning_trades, losing_trades, win_rate,
      total_profit_loss, largest_win, largest_loss, avg_confidence, avg_mtf_score
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(trade_date) DO UPDATE SET
      total_trades = excluded.total_trades,
      winning_trades = excluded.winning_trades,
      losing_trades = excluded.losing_trades,
      win_rate = excluded.win_rate,
      total_profit_loss = excluded.total_profit_loss,
      largest_win = excluded.largest_win,
      largest_loss = excluded.largest_loss,
      avg_confidence = excluded.avg_confidence,
      avg_mtf_score = excluded.avg_mtf_score,
      updated_at = CURRENT_TIMESTAMP
  `).bind(
    today,
    totalTrades,
    winningTrades,
    losingTrades,
    winRate,
    totalPL,
    largestWin,
    largestLoss,
    avgConfidence,
    avgMtf
  ).run()
}

/**
 * Check and enforce risk limits
 */
async function checkRiskLimits(DB: D1Database) {
  const limits = await getRiskLimits(DB)
  
  // Calculate drawdown
  const drawdown = ((limits.starting_balance - limits.current_balance) / limits.starting_balance) * 100
  
  // Get today's loss
  const today = new Date().toISOString().split('T')[0]
  const todayPerf = await DB.prepare(`
    SELECT total_profit_loss FROM daily_performance WHERE trade_date = ?
  `).bind(today).first() as any
  
  const dailyLoss = todayPerf?.total_profit_loss < 0 
    ? Math.abs((todayPerf.total_profit_loss / limits.starting_balance) * 100)
    : 0
  
  // Update metrics
  await DB.prepare(`
    UPDATE risk_limits
    SET current_drawdown = ?,
        current_daily_loss = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).bind(drawdown, dailyLoss).run()
  
  // Check if need to pause trading
  let shouldPause = false
  let pauseReason = ''
  
  if (drawdown >= limits.max_drawdown_pct) {
    shouldPause = true
    pauseReason = `Max drawdown ${drawdown.toFixed(1)}% reached (limit ${limits.max_drawdown_pct}%)`
  } else if (dailyLoss >= limits.max_daily_loss_pct) {
    shouldPause = true
    pauseReason = `Daily loss ${dailyLoss.toFixed(1)}% reached (limit ${limits.max_daily_loss_pct}%)`
  }
  
  if (shouldPause && limits.trading_enabled === 1) {
    await DB.prepare(`
      UPDATE risk_limits
      SET trading_enabled = 0,
          pause_reason = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `).bind(pauseReason).run()
  }
}

/**
 * Get trade statistics
 */
export async function getTradeStats(DB: D1Database): Promise<any> {
  const stats = await DB.prepare(`SELECT * FROM trade_stats`).first()
  return stats || {
    total_trades: 0,
    winning_trades: 0,
    losing_trades: 0,
    win_rate: 0,
    total_profit_loss: 0,
    avg_win: 0,
    avg_loss: 0,
    largest_win: 0,
    largest_loss: 0,
    avg_confidence: 0,
    avg_mtf_score: 0
  }
}

/**
 * Get open positions
 */
export async function getOpenPositions(DB: D1Database): Promise<any[]> {
  const result = await DB.prepare(`SELECT * FROM open_positions`).all()
  return result.results || []
}
