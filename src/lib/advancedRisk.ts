/**
 * Advanced Risk Management Module
 * Hedge Fund Grade Risk Controls
 */

export interface VaRResult {
  var_95: number;        // 95% Value at Risk
  var_99: number;        // 99% Value at Risk
  confidence_95: number; // How confident we are
  confidence_99: number;
  method: 'historical' | 'parametric';
  calculation_date: string;
}

export interface DrawdownStatus {
  current_balance: number;
  peak_balance: number;
  current_drawdown: number;
  current_drawdown_pct: number;
  max_allowed_drawdown_pct: number;
  is_within_limit: boolean;
  should_pause_trading: boolean;
  days_in_drawdown: number;
}

export interface PortfolioHeat {
  total_open_positions: number;
  total_risk_amount: number;
  total_risk_pct: number;
  max_allowed_risk_pct: number;
  is_within_limit: boolean;
  available_risk: number;
  positions: {
    position_id: number;
    entry_price: number;
    stop_loss: number;
    risk_amount: number;
    risk_pct: number;
  }[];
}

export interface RiskMetrics {
  var: VaRResult;
  drawdown: DrawdownStatus;
  portfolio_heat: PortfolioHeat;
  sharpe_ratio: number;
  sortino_ratio: number;
  calmar_ratio: number;
}

/**
 * Calculate Value at Risk (VaR) using Historical Method
 * VaR tells you: "With 95% confidence, you won't lose more than $X in one day"
 */
export function calculateHistoricalVaR(
  returns: number[],
  confidenceLevel: number = 0.95
): number {
  if (returns.length === 0) return 0;
  
  // Sort returns from worst to best
  const sortedReturns = [...returns].sort((a, b) => a - b);
  
  // Find the return at the confidence level percentile
  const index = Math.floor((1 - confidenceLevel) * sortedReturns.length);
  const var_value = Math.abs(sortedReturns[index] || 0);
  
  return var_value;
}

/**
 * Calculate Value at Risk using Parametric Method (assumes normal distribution)
 * Faster but less accurate for non-normal returns
 */
export function calculateParametricVaR(
  returns: number[],
  confidenceLevel: number = 0.95
): number {
  if (returns.length === 0) return 0;
  
  // Calculate mean and standard deviation
  const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
  const stdDev = Math.sqrt(variance);
  
  // Z-scores for common confidence levels
  const zScores: { [key: number]: number } = {
    0.90: 1.282,
    0.95: 1.645,
    0.99: 2.326,
  };
  
  const zScore = zScores[confidenceLevel] || 1.645;
  const var_value = mean + (zScore * stdDev);
  
  return Math.abs(var_value);
}

/**
 * Calculate comprehensive VaR metrics
 */
export function calculateVaR(
  returns: number[],
  accountBalance: number
): VaRResult {
  const var95Historical = calculateHistoricalVaR(returns, 0.95);
  const var99Historical = calculateHistoricalVaR(returns, 0.99);
  
  // Convert percentage returns to dollar amounts
  const var95Dollar = accountBalance * var95Historical;
  const var99Dollar = accountBalance * var99Historical;
  
  return {
    var_95: parseFloat(var95Dollar.toFixed(2)),
    var_99: parseFloat(var99Dollar.toFixed(2)),
    confidence_95: 95,
    confidence_99: 99,
    method: 'historical',
    calculation_date: new Date().toISOString()
  };
}

/**
 * Calculate current drawdown status
 */
export function calculateDrawdownStatus(
  currentBalance: number,
  peakBalance: number,
  maxAllowedDrawdownPct: number,
  equityCurve: { date: string; balance: number }[]
): DrawdownStatus {
  const currentDrawdown = peakBalance - currentBalance;
  const currentDrawdownPct = (currentDrawdown / peakBalance) * 100;
  
  // Calculate days in drawdown
  let daysInDrawdown = 0;
  for (let i = equityCurve.length - 1; i >= 0; i--) {
    if (equityCurve[i].balance < peakBalance) {
      daysInDrawdown++;
    } else {
      break;
    }
  }
  
  const isWithinLimit = currentDrawdownPct <= maxAllowedDrawdownPct;
  const shouldPauseTrading = currentDrawdownPct > maxAllowedDrawdownPct;
  
  return {
    current_balance: parseFloat(currentBalance.toFixed(2)),
    peak_balance: parseFloat(peakBalance.toFixed(2)),
    current_drawdown: parseFloat(currentDrawdown.toFixed(2)),
    current_drawdown_pct: parseFloat(currentDrawdownPct.toFixed(2)),
    max_allowed_drawdown_pct: maxAllowedDrawdownPct,
    is_within_limit: isWithinLimit,
    should_pause_trading: shouldPauseTrading,
    days_in_drawdown: daysInDrawdown
  };
}

/**
 * Calculate portfolio heat (total exposure across all positions)
 */
export function calculatePortfolioHeat(
  openPositions: {
    id: number;
    entry_price: number;
    stop_loss: number;
    position_size: number;
  }[],
  accountBalance: number,
  maxAllowedRiskPct: number = 5.0
): PortfolioHeat {
  let totalRiskAmount = 0;
  const positions = [];
  
  for (const position of openPositions) {
    const riskPerUnit = Math.abs(position.entry_price - position.stop_loss);
    const riskAmount = riskPerUnit * position.position_size;
    const riskPct = (riskAmount / accountBalance) * 100;
    
    totalRiskAmount += riskAmount;
    
    positions.push({
      position_id: position.id,
      entry_price: position.entry_price,
      stop_loss: position.stop_loss,
      risk_amount: parseFloat(riskAmount.toFixed(2)),
      risk_pct: parseFloat(riskPct.toFixed(2))
    });
  }
  
  const totalRiskPct = (totalRiskAmount / accountBalance) * 100;
  const isWithinLimit = totalRiskPct <= maxAllowedRiskPct;
  const availableRisk = accountBalance * (maxAllowedRiskPct / 100) - totalRiskAmount;
  
  return {
    total_open_positions: openPositions.length,
    total_risk_amount: parseFloat(totalRiskAmount.toFixed(2)),
    total_risk_pct: parseFloat(totalRiskPct.toFixed(2)),
    max_allowed_risk_pct: maxAllowedRiskPct,
    is_within_limit: isWithinLimit,
    available_risk: parseFloat(availableRisk.toFixed(2)),
    positions
  };
}

/**
 * Calculate Sharpe Ratio (risk-adjusted return)
 * Sharpe > 1 is good, > 2 is very good, > 3 is excellent
 */
export function calculateSharpeRatio(
  returns: number[],
  riskFreeRate: number = 0.02 // 2% annual risk-free rate
): number {
  if (returns.length === 0) return 0;
  
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length;
  const stdDev = Math.sqrt(variance);
  
  if (stdDev === 0) return 0;
  
  // Annualize (assuming daily returns)
  const annualizedReturn = avgReturn * 252; // 252 trading days
  const annualizedStdDev = stdDev * Math.sqrt(252);
  
  const sharpe = (annualizedReturn - riskFreeRate) / annualizedStdDev;
  
  return parseFloat(sharpe.toFixed(2));
}

/**
 * Calculate Sortino Ratio (only penalizes downside volatility)
 * Better than Sharpe because it only counts bad volatility
 */
export function calculateSortinoRatio(
  returns: number[],
  riskFreeRate: number = 0.02
): number {
  if (returns.length === 0) return 0;
  
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  
  // Only consider downside deviation (negative returns)
  const downsideReturns = returns.filter(r => r < 0);
  if (downsideReturns.length === 0) return 0;
  
  const downsideVariance = downsideReturns.reduce((sum, r) => sum + Math.pow(r, 2), 0) / returns.length;
  const downsideStdDev = Math.sqrt(downsideVariance);
  
  if (downsideStdDev === 0) return 0;
  
  // Annualize
  const annualizedReturn = avgReturn * 252;
  const annualizedDownsideStdDev = downsideStdDev * Math.sqrt(252);
  
  const sortino = (annualizedReturn - riskFreeRate) / annualizedDownsideStdDev;
  
  return parseFloat(sortino.toFixed(2));
}

/**
 * Calculate Calmar Ratio (return / max drawdown)
 * Higher is better. >3 is excellent
 */
export function calculateCalmarRatio(
  annualReturn: number,
  maxDrawdownPct: number
): number {
  if (maxDrawdownPct === 0) return 0;
  
  const calmar = annualReturn / maxDrawdownPct;
  
  return parseFloat(calmar.toFixed(2));
}

/**
 * Calculate comprehensive risk metrics
 */
export async function calculateRiskMetrics(
  db: any,
  accountId: number
): Promise<RiskMetrics> {
  // Fetch account data
  const account = await db.prepare('SELECT * FROM trading_accounts WHERE id = ?').bind(accountId).first();
  
  if (!account) {
    throw new Error(`Account ${accountId} not found`);
  }
  
  // Fetch trade history for returns calculation
  const trades = await db.prepare(`
    SELECT profit_loss, profit_loss_pct, closed_at
    FROM trades
    WHERE account_id = ? AND status = 'closed'
    ORDER BY closed_at DESC
    LIMIT 100
  `).bind(accountId).all();
  
  const returns = trades.results.map((t: any) => t.profit_loss_pct / 100);
  
  // Calculate VaR
  const var_result = calculateVaR(returns, account.current_balance);
  
  // Calculate drawdown status
  const equityCurve = await db.prepare(`
    SELECT closed_at as date, 
           SUM(profit_loss) OVER (ORDER BY closed_at) + ? as balance
    FROM trades
    WHERE account_id = ? AND status = 'closed'
    ORDER BY closed_at
  `).bind(account.starting_balance, accountId).all();
  
  let peakBalance = account.starting_balance;
  for (const point of equityCurve.results) {
    if (point.balance > peakBalance) {
      peakBalance = point.balance;
    }
  }
  
  const drawdown = calculateDrawdownStatus(
    account.current_balance,
    peakBalance,
    account.max_daily_loss_pct,
    equityCurve.results
  );
  
  // Calculate portfolio heat
  const openPositions = await db.prepare(`
    SELECT id, entry_price, stop_loss, position_size
    FROM trades
    WHERE account_id = ? AND status = 'open'
  `).bind(accountId).all();
  
  const portfolioHeat = calculatePortfolioHeat(
    openPositions.results,
    account.current_balance,
    5.0 // Max 5% portfolio risk
  );
  
  // Calculate risk-adjusted metrics
  const sharpe = calculateSharpeRatio(returns);
  const sortino = calculateSortinoRatio(returns);
  
  // Calculate annual return for Calmar
  const totalReturn = returns.reduce((sum, r) => sum + r, 0);
  const annualReturn = totalReturn * 252 / returns.length; // Annualize
  const calmar = calculateCalmarRatio(annualReturn * 100, drawdown.current_drawdown_pct);
  
  return {
    var: var_result,
    drawdown,
    portfolio_heat: portfolioHeat,
    sharpe_ratio: sharpe,
    sortino_ratio: sortino,
    calmar_ratio: calmar
  };
}

/**
 * Format risk metrics for display
 */
export function formatRiskMetrics(metrics: RiskMetrics): string {
  const lines = [
    '⚠️ RISK METRICS',
    '',
    '📊 Value at Risk:',
    `   95% VaR: $${metrics.var.var_95.toLocaleString()} (95% confident won't lose more in 1 day)`,
    `   99% VaR: $${metrics.var.var_99.toLocaleString()} (99% confident won't lose more in 1 day)`,
    '',
    '📉 Drawdown Status:',
    `   Current: $${metrics.drawdown.current_drawdown.toLocaleString()} (${metrics.drawdown.current_drawdown_pct}%)`,
    `   Peak Balance: $${metrics.drawdown.peak_balance.toLocaleString()}`,
    `   Days in Drawdown: ${metrics.drawdown.days_in_drawdown}`,
    `   Status: ${metrics.drawdown.is_within_limit ? '✅ Safe' : '❌ LIMIT EXCEEDED'}`,
    metrics.drawdown.should_pause_trading ? '   ⚠️ TRADING PAUSED - DRAWDOWN LIMIT HIT' : '',
    '',
    '🔥 Portfolio Heat:',
    `   Open Positions: ${metrics.portfolio_heat.total_open_positions}`,
    `   Total Risk: $${metrics.portfolio_heat.total_risk_amount.toLocaleString()} (${metrics.portfolio_heat.total_risk_pct}%)`,
    `   Max Allowed: ${metrics.portfolio_heat.max_allowed_risk_pct}%`,
    `   Available Risk: $${metrics.portfolio_heat.available_risk.toLocaleString()}`,
    `   Status: ${metrics.portfolio_heat.is_within_limit ? '✅ Safe' : '❌ OVER LIMIT'}`,
    '',
    '📈 Risk-Adjusted Performance:',
    `   Sharpe Ratio: ${metrics.sharpe_ratio} ${metrics.sharpe_ratio > 2 ? '🌟 Excellent' : metrics.sharpe_ratio > 1 ? '✅ Good' : '⚠️ Needs Improvement'}`,
    `   Sortino Ratio: ${metrics.sortino_ratio} ${metrics.sortino_ratio > 2 ? '🌟 Excellent' : metrics.sortino_ratio > 1 ? '✅ Good' : '⚠️ Needs Improvement'}`,
    `   Calmar Ratio: ${metrics.calmar_ratio} ${metrics.calmar_ratio > 3 ? '🌟 Excellent' : metrics.calmar_ratio > 1 ? '✅ Good' : '⚠️ Needs Improvement'}`
  ];
  
  return lines.filter(Boolean).join('\n');
}
