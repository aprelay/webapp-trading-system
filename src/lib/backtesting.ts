/**
 * Backtesting Engine
 * Tests trading strategies on historical data
 */

import { Candle, TechnicalIndicators, TradeSignal, calculateIndicators, generateSignal } from './technicalAnalysis'
import { calculatePositionSize, calculateProfitLoss, PositionSizingRule, TradingAccount } from './riskManagement'

export interface BacktestConfig {
  start_date: string
  end_date: string
  starting_balance: number
  min_confidence: number
  use_mtf_confirmation: boolean
  use_news_filter: boolean
  timeframe: string
  commission_per_trade: number
}

export interface BacktestTrade {
  entry_time: string
  entry_price: number
  exit_time: string
  exit_price: number
  signal_type: 'BUY' | 'SELL'
  trading_style: string
  position_size: number
  profit_loss: number
  profit_loss_pct: number
  exit_reason: string
  confidence: number
}

export interface BacktestResult {
  config: BacktestConfig
  
  // Trade statistics
  total_trades: number
  winning_trades: number
  losing_trades: number
  win_rate: number
  
  // Profit metrics
  net_profit: number
  total_return_pct: number
  avg_win: number
  avg_loss: number
  largest_win: number
  largest_loss: number
  
  // Risk metrics
  max_drawdown: number
  max_drawdown_pct: number
  profit_factor: number
  sharpe_ratio: number
  expectancy: number
  
  // Consecutive stats
  max_consecutive_wins: number
  max_consecutive_losses: number
  
  // Balance progression
  starting_balance: number
  ending_balance: number
  peak_balance: number
  
  // Trade details
  trades: BacktestTrade[]
  equity_curve: { date: string; balance: number }[]
  
  // Execution time
  execution_time_ms: number
}

/**
 * Run backtest on historical candle data
 */
export async function runBacktest(
  candles: Candle[],
  config: BacktestConfig,
  positionRules: PositionSizingRule[]
): Promise<BacktestResult> {
  const startTime = Date.now()
  
  const trades: BacktestTrade[] = []
  const equityCurve: { date: string; balance: number }[] = []
  
  let currentBalance = config.starting_balance
  let peakBalance = config.starting_balance
  
  // Filter candles by date range
  const filteredCandles = candles.filter(c => {
    const candleDate = new Date(c.timestamp)
    return candleDate >= new Date(config.start_date) && candleDate <= new Date(config.end_date)
  })
  
  // Need at least 200 candles for indicators
  if (filteredCandles.length < 200) {
    throw new Error(`Not enough candles for backtest. Need at least 200, got ${filteredCandles.length}`)
  }
  
  // Simulate trading account
  const account: TradingAccount = {
    id: 0,
    current_balance: currentBalance,
    max_daily_loss_pct: 2.0,
    max_position_size_pct: 10.0,
    leverage: 1.0
  }
  
  // Walk through candles and generate signals
  for (let i = 200; i < filteredCandles.length; i++) {
    // Get last 200 candles for indicator calculation
    const historicalCandles = filteredCandles.slice(i - 200, i)
    
    // Calculate indicators
    const indicators = calculateIndicators(historicalCandles)
    if (!indicators) continue
    
    // Get current price
    const currentCandle = filteredCandles[i]
    const currentPrice = currentCandle.close
    
    // Generate signals for both styles
    const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade')
    const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade')
    
    // Process each signal
    for (const signal of [dayTradeSignal, swingTradeSignal]) {
      // Skip HOLD signals
      if (signal.signal_type === 'HOLD') continue
      
      // Skip low confidence signals
      if (signal.confidence < config.min_confidence) continue
      
      // Update account balance
      account.current_balance = currentBalance
      
      // Calculate position size
      const positionSize = calculatePositionSize(account, {
        entry_price: signal.price,
        stop_loss: signal.stop_loss,
        take_profit_1: signal.take_profit_1,
        take_profit_2: signal.take_profit_2,
        take_profit_3: signal.take_profit_3,
        confidence: signal.confidence,
        signal_type: signal.signal_type,
        trading_style: signal.trading_style
      }, positionRules)
      
      if (!positionSize.is_valid) continue
      
      // Simulate trade execution
      const entryTime = currentCandle.timestamp
      const entryPrice = signal.price
      
      // Look ahead to find exit
      let exitPrice: number | null = null
      let exitTime: string | null = null
      let exitReason: string = 'UNKNOWN'
      
      // Check next 50 candles (or until end)
      const lookAhead = Math.min(50, filteredCandles.length - i - 1)
      
      for (let j = 1; j <= lookAhead; j++) {
        const futureCandle = filteredCandles[i + j]
        
        if (signal.signal_type === 'BUY') {
          // Check if stop loss hit
          if (futureCandle.low <= signal.stop_loss) {
            exitPrice = signal.stop_loss
            exitTime = futureCandle.timestamp
            exitReason = 'STOP_LOSS'
            break
          }
          
          // Check if TP3 hit
          if (futureCandle.high >= signal.take_profit_3) {
            exitPrice = signal.take_profit_3
            exitTime = futureCandle.timestamp
            exitReason = 'TP3'
            break
          }
          
          // Check if TP2 hit
          if (futureCandle.high >= signal.take_profit_2) {
            exitPrice = signal.take_profit_2
            exitTime = futureCandle.timestamp
            exitReason = 'TP2'
            break
          }
          
          // Check if TP1 hit
          if (futureCandle.high >= signal.take_profit_1) {
            exitPrice = signal.take_profit_1
            exitTime = futureCandle.timestamp
            exitReason = 'TP1'
            break
          }
        } else { // SELL
          // Check if stop loss hit
          if (futureCandle.high >= signal.stop_loss) {
            exitPrice = signal.stop_loss
            exitTime = futureCandle.timestamp
            exitReason = 'STOP_LOSS'
            break
          }
          
          // Check if TP3 hit
          if (futureCandle.low <= signal.take_profit_3) {
            exitPrice = signal.take_profit_3
            exitTime = futureCandle.timestamp
            exitReason = 'TP3'
            break
          }
          
          // Check if TP2 hit
          if (futureCandle.low <= signal.take_profit_2) {
            exitPrice = signal.take_profit_2
            exitTime = futureCandle.timestamp
            exitReason = 'TP2'
            break
          }
          
          // Check if TP1 hit
          if (futureCandle.low <= signal.take_profit_1) {
            exitPrice = signal.take_profit_1
            exitTime = futureCandle.timestamp
            exitReason = 'TP1'
            break
          }
        }
      }
      
      // If no exit found, skip this trade
      if (!exitPrice || !exitTime) continue
      
      // Calculate profit/loss
      const pl = calculateProfitLoss(
        entryPrice,
        exitPrice,
        positionSize.units,
        signal.signal_type,
        config.commission_per_trade
      )
      
      // Update balance
      currentBalance += pl.profit_loss
      
      // Track peak balance
      if (currentBalance > peakBalance) {
        peakBalance = currentBalance
      }
      
      // Record trade
      trades.push({
        entry_time: entryTime,
        entry_price: entryPrice,
        exit_time: exitTime,
        exit_price: exitPrice,
        signal_type: signal.signal_type,
        trading_style: signal.trading_style,
        position_size: positionSize.units,
        profit_loss: pl.profit_loss,
        profit_loss_pct: pl.profit_loss_pct,
        exit_reason: exitReason,
        confidence: signal.confidence
      })
      
      // Record equity
      equityCurve.push({
        date: exitTime,
        balance: currentBalance
      })
    }
  }
  
  // Calculate statistics
  const winningTrades = trades.filter(t => t.profit_loss > 0)
  const losingTrades = trades.filter(t => t.profit_loss < 0)
  
  const totalProfit = winningTrades.reduce((sum, t) => sum + t.profit_loss, 0)
  const totalLoss = Math.abs(losingTrades.reduce((sum, t) => sum + t.profit_loss, 0))
  const netProfit = currentBalance - config.starting_balance
  
  const winRate = trades.length > 0 ? (winningTrades.length / trades.length) * 100 : 0
  
  const avgWin = winningTrades.length > 0 ? totalProfit / winningTrades.length : 0
  const avgLoss = losingTrades.length > 0 ? totalLoss / losingTrades.length : 0
  
  const largestWin = winningTrades.length > 0 ? Math.max(...winningTrades.map(t => t.profit_loss)) : 0
  const largestLoss = losingTrades.length > 0 ? Math.min(...losingTrades.map(t => t.profit_loss)) : 0
  
  const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : totalProfit
  
  const lossRate = 100 - winRate
  const expectancy = (winRate / 100) * avgWin - (lossRate / 100) * avgLoss
  
  // Calculate max drawdown
  let maxDrawdown = 0
  let maxDrawdownPct = 0
  let peak = config.starting_balance
  
  for (const point of equityCurve) {
    if (point.balance > peak) {
      peak = point.balance
    }
    
    const drawdown = peak - point.balance
    const drawdownPct = (drawdown / peak) * 100
    
    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown
      maxDrawdownPct = drawdownPct
    }
  }
  
  // Calculate Sharpe ratio (simplified)
  const returns = trades.map(t => t.profit_loss_pct)
  const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length
  const stdDev = Math.sqrt(
    returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length
  )
  const sharpeRatio = stdDev > 0 ? avgReturn / stdDev : 0
  
  // Calculate consecutive wins/losses
  let maxConsecutiveWins = 0
  let maxConsecutiveLosses = 0
  let currentWinStreak = 0
  let currentLossStreak = 0
  
  for (const trade of trades) {
    if (trade.profit_loss > 0) {
      currentWinStreak++
      currentLossStreak = 0
      maxConsecutiveWins = Math.max(maxConsecutiveWins, currentWinStreak)
    } else {
      currentLossStreak++
      currentWinStreak = 0
      maxConsecutiveLosses = Math.max(maxConsecutiveLosses, currentLossStreak)
    }
  }
  
  const executionTime = Date.now() - startTime
  
  return {
    config,
    total_trades: trades.length,
    winning_trades: winningTrades.length,
    losing_trades: losingTrades.length,
    win_rate: parseFloat(winRate.toFixed(2)),
    net_profit: parseFloat(netProfit.toFixed(2)),
    total_return_pct: parseFloat(((netProfit / config.starting_balance) * 100).toFixed(2)),
    avg_win: parseFloat(avgWin.toFixed(2)),
    avg_loss: parseFloat(avgLoss.toFixed(2)),
    largest_win: parseFloat(largestWin.toFixed(2)),
    largest_loss: parseFloat(largestLoss.toFixed(2)),
    max_drawdown: parseFloat(maxDrawdown.toFixed(2)),
    max_drawdown_pct: parseFloat(maxDrawdownPct.toFixed(2)),
    profit_factor: parseFloat(profitFactor.toFixed(2)),
    sharpe_ratio: parseFloat(sharpeRatio.toFixed(2)),
    expectancy: parseFloat(expectancy.toFixed(2)),
    max_consecutive_wins: maxConsecutiveWins,
    max_consecutive_losses: maxConsecutiveLosses,
    starting_balance: config.starting_balance,
    ending_balance: parseFloat(currentBalance.toFixed(2)),
    peak_balance: parseFloat(peakBalance.toFixed(2)),
    trades,
    equity_curve: equityCurve,
    execution_time_ms: executionTime
  }
}

/**
 * Format backtest results for display
 */
export function formatBacktestResults(result: BacktestResult): string {
  const lines = [
    '🎯 BACKTEST RESULTS',
    '',
    '📊 Configuration:',
    `   Period: ${result.config.start_date} to ${result.config.end_date}`,
    `   Starting Balance: $${result.starting_balance.toLocaleString()}`,
    `   Min Confidence: ${result.config.min_confidence}%`,
    `   Commission: $${result.config.commission_per_trade} per trade`,
    '',
    '📈 Performance:',
    `   Total Trades: ${result.total_trades}`,
    `   Winning Trades: ${result.winning_trades} (${result.win_rate}%)`,
    `   Losing Trades: ${result.losing_trades}`,
    `   Net Profit: $${result.net_profit.toLocaleString()} (${result.total_return_pct}%)`,
    `   Ending Balance: $${result.ending_balance.toLocaleString()}`,
    '',
    '💰 Profit Metrics:',
    `   Average Win: $${result.avg_win.toLocaleString()}`,
    `   Average Loss: $${result.avg_loss.toLocaleString()}`,
    `   Largest Win: $${result.largest_win.toLocaleString()}`,
    `   Largest Loss: $${result.largest_loss.toLocaleString()}`,
    `   Profit Factor: ${result.profit_factor}`,
    `   Expectancy: $${result.expectancy.toFixed(2)} per trade`,
    '',
    '⚠️ Risk Metrics:',
    `   Max Drawdown: $${result.max_drawdown.toLocaleString()} (${result.max_drawdown_pct}%)`,
    `   Sharpe Ratio: ${result.sharpe_ratio.toFixed(2)}`,
    `   Max Consecutive Wins: ${result.max_consecutive_wins}`,
    `   Max Consecutive Losses: ${result.max_consecutive_losses}`,
    '',
    `⏱️ Execution Time: ${result.execution_time_ms}ms`
  ]
  
  return lines.join('\n')
}
