/**
 * Position Sizing & Risk Management Library
 * Calculates position sizes based on confidence levels and account balance
 */

export interface TradingAccount {
  id: number
  current_balance: number
  max_daily_loss_pct: number
  max_position_size_pct: number
  leverage: number
}

export interface PositionSizingRule {
  confidence_min: number
  confidence_max: number
  risk_pct: number
  max_position_pct: number
}

export interface TradeSetup {
  entry_price: number
  stop_loss: number
  take_profit_1: number
  take_profit_2?: number
  take_profit_3?: number
  confidence: number
  signal_type: 'BUY' | 'SELL'
  trading_style: 'day_trade' | 'swing_trade'
}

export interface PositionSize {
  units: number // Position size in units (lots)
  value: number // Position value in USD
  risk_amount: number // Amount risked in USD
  risk_pct: number // Percentage of account risked
  position_pct: number // Percentage of account used
  stop_loss_distance: number // Distance to stop loss in $
  reward_risk_ratio: number // Take profit / Stop loss distance
  is_valid: boolean
  warning?: string
}

/**
 * Calculate position size based on confidence and risk rules
 */
export function calculatePositionSize(
  account: TradingAccount,
  trade: TradeSetup,
  rules: PositionSizingRule[]
): PositionSize {
  // Find matching rule for confidence level
  const rule = rules.find(
    r => trade.confidence >= r.confidence_min && trade.confidence <= r.confidence_max
  )

  if (!rule) {
    return {
      units: 0,
      value: 0,
      risk_amount: 0,
      risk_pct: 0,
      position_pct: 0,
      stop_loss_distance: 0,
      reward_risk_ratio: 0,
      is_valid: false,
      warning: `No position sizing rule found for confidence ${trade.confidence}%`
    }
  }

  // Calculate stop loss distance
  const stopLossDistance = Math.abs(trade.entry_price - trade.stop_loss)
  
  // Calculate risk amount (% of account balance)
  const riskAmount = account.current_balance * (rule.risk_pct / 100)

  // Calculate position size based on risk
  // Position Size = Risk Amount / Stop Loss Distance
  const units = riskAmount / stopLossDistance

  // Calculate position value
  const positionValue = units * trade.entry_price

  // Calculate position as % of account
  const positionPct = (positionValue / account.current_balance) * 100

  // Check if position exceeds max position size
  const maxPositionValue = account.current_balance * (rule.max_position_pct / 100)
  let adjustedUnits = units
  let adjustedValue = positionValue
  let adjustedRiskPct = rule.risk_pct
  let warning: string | undefined

  if (positionValue > maxPositionValue) {
    // Reduce position to max allowed
    adjustedValue = maxPositionValue
    adjustedUnits = maxPositionValue / trade.entry_price
    adjustedRiskPct = (adjustedUnits * stopLossDistance / account.current_balance) * 100
    warning = `Position reduced to ${rule.max_position_pct}% max position size`
  }

  // Calculate reward:risk ratio
  const takeProfitDistance = Math.abs(trade.take_profit_1 - trade.entry_price)
  const rewardRiskRatio = takeProfitDistance / stopLossDistance

  // Validate position
  let isValid = true
  const warnings: string[] = []

  if (warning) warnings.push(warning)

  // Check minimum reward:risk ratio
  if (rewardRiskRatio < 1.5) {
    warnings.push(`Low reward:risk ratio (${rewardRiskRatio.toFixed(2)}:1). Recommended: >1.5:1`)
  }

  // Check if risk is too high
  if (adjustedRiskPct > account.max_daily_loss_pct) {
    isValid = false
    warnings.push(`Risk ${adjustedRiskPct.toFixed(2)}% exceeds max daily loss ${account.max_daily_loss_pct}%`)
  }

  // Check minimum position size
  if (adjustedUnits < 0.01) {
    isValid = false
    warnings.push('Position size too small (minimum 0.01 lots)')
  }

  return {
    units: parseFloat(adjustedUnits.toFixed(2)),
    value: parseFloat(adjustedValue.toFixed(2)),
    risk_amount: parseFloat((adjustedUnits * stopLossDistance).toFixed(2)),
    risk_pct: parseFloat(adjustedRiskPct.toFixed(2)),
    position_pct: parseFloat((adjustedValue / account.current_balance * 100).toFixed(2)),
    stop_loss_distance: parseFloat(stopLossDistance.toFixed(2)),
    reward_risk_ratio: parseFloat(rewardRiskRatio.toFixed(2)),
    is_valid: isValid,
    warning: warnings.length > 0 ? warnings.join('; ') : undefined
  }
}

/**
 * Calculate trade profit/loss
 */
export function calculateProfitLoss(
  entry_price: number,
  exit_price: number,
  position_size: number,
  signal_type: 'BUY' | 'SELL',
  commission: number = 0
): {
  profit_loss: number
  profit_loss_pct: number
  pips: number
} {
  let profitLoss: number

  if (signal_type === 'BUY') {
    profitLoss = (exit_price - entry_price) * position_size
  } else {
    profitLoss = (entry_price - exit_price) * position_size
  }

  profitLoss -= commission

  const profitLossPct = ((exit_price - entry_price) / entry_price) * 100
  const pips = Math.abs(exit_price - entry_price) / 0.01 // For forex, 1 pip = 0.01

  return {
    profit_loss: parseFloat(profitLoss.toFixed(2)),
    profit_loss_pct: parseFloat(profitLossPct.toFixed(2)),
    pips: parseFloat(pips.toFixed(1))
  }
}

/**
 * Check if daily loss limit exceeded
 */
export function checkDailyLossLimit(
  account: TradingAccount,
  trades_today: { profit_loss: number }[]
): {
  current_loss: number
  current_loss_pct: number
  limit_exceeded: boolean
  remaining: number
} {
  const totalLoss = trades_today
    .filter(t => t.profit_loss < 0)
    .reduce((sum, t) => sum + t.profit_loss, 0)

  const currentLossPct = Math.abs(totalLoss / account.current_balance) * 100
  const limitExceeded = currentLossPct >= account.max_daily_loss_pct

  const maxLossAmount = account.current_balance * (account.max_daily_loss_pct / 100)
  const remaining = maxLossAmount - Math.abs(totalLoss)

  return {
    current_loss: parseFloat(totalLoss.toFixed(2)),
    current_loss_pct: parseFloat(currentLossPct.toFixed(2)),
    limit_exceeded: limitExceeded,
    remaining: parseFloat(remaining.toFixed(2))
  }
}

/**
 * Calculate portfolio metrics
 */
export function calculatePortfolioMetrics(
  trades: Array<{
    profit_loss: number
    profit_loss_pct: number
    status: string
  }>
): {
  total_trades: number
  winning_trades: number
  losing_trades: number
  win_rate: number
  total_profit: number
  total_loss: number
  net_profit: number
  avg_win: number
  avg_loss: number
  profit_factor: number
  expectancy: number
  largest_win: number
  largest_loss: number
} {
  const closedTrades = trades.filter(t => t.status === 'CLOSED')
  const winningTrades = closedTrades.filter(t => t.profit_loss > 0)
  const losingTrades = closedTrades.filter(t => t.profit_loss < 0)

  const totalProfit = winningTrades.reduce((sum, t) => sum + t.profit_loss, 0)
  const totalLoss = Math.abs(losingTrades.reduce((sum, t) => sum + t.profit_loss, 0))
  const netProfit = totalProfit - totalLoss

  const avgWin = winningTrades.length > 0 ? totalProfit / winningTrades.length : 0
  const avgLoss = losingTrades.length > 0 ? totalLoss / losingTrades.length : 0

  const winRate = closedTrades.length > 0
    ? (winningTrades.length / closedTrades.length) * 100
    : 0

  const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : totalProfit

  const lossRate = 100 - winRate
  const expectancy = (winRate / 100) * avgWin - (lossRate / 100) * avgLoss

  const largestWin = winningTrades.length > 0
    ? Math.max(...winningTrades.map(t => t.profit_loss))
    : 0

  const largestLoss = losingTrades.length > 0
    ? Math.min(...losingTrades.map(t => t.profit_loss))
    : 0

  return {
    total_trades: closedTrades.length,
    winning_trades: winningTrades.length,
    losing_trades: losingTrades.length,
    win_rate: parseFloat(winRate.toFixed(2)),
    total_profit: parseFloat(totalProfit.toFixed(2)),
    total_loss: parseFloat(totalLoss.toFixed(2)),
    net_profit: parseFloat(netProfit.toFixed(2)),
    avg_win: parseFloat(avgWin.toFixed(2)),
    avg_loss: parseFloat(avgLoss.toFixed(2)),
    profit_factor: parseFloat(profitFactor.toFixed(2)),
    expectancy: parseFloat(expectancy.toFixed(2)),
    largest_win: parseFloat(largestWin.toFixed(2)),
    largest_loss: parseFloat(largestLoss.toFixed(2))
  }
}

/**
 * Calculate maximum drawdown
 */
export function calculateMaxDrawdown(
  equity_curve: number[]
): {
  max_drawdown: number
  max_drawdown_pct: number
} {
  let maxDrawdown = 0
  let maxDrawdownPct = 0
  let peak = equity_curve[0]

  for (const value of equity_curve) {
    if (value > peak) {
      peak = value
    }

    const drawdown = peak - value
    const drawdownPct = (drawdown / peak) * 100

    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown
      maxDrawdownPct = drawdownPct
    }
  }

  return {
    max_drawdown: parseFloat(maxDrawdown.toFixed(2)),
    max_drawdown_pct: parseFloat(maxDrawdownPct.toFixed(2))
  }
}

/**
 * Format position size for display
 */
export function formatPositionSize(ps: PositionSize): string {
  if (!ps.is_valid) {
    return `❌ Invalid: ${ps.warning}`
  }

  return `
Position Size: ${ps.units} lots ($${ps.value.toLocaleString()})
Risk: $${ps.risk_amount.toLocaleString()} (${ps.risk_pct}% of account)
Position: ${ps.position_pct}% of account
Reward:Risk: ${ps.reward_risk_ratio}:1
Stop Distance: $${ps.stop_loss_distance}
${ps.warning ? `⚠️ ${ps.warning}` : '✅ Valid position'}
  `.trim()
}
