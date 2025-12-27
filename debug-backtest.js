/**
 * Debug Backtest Script
 * Analyze why we're getting 19% win rate
 */

// Test 1: Check how many signals are generated
async function debugBacktest() {
  console.log('🔍 DEBUG BACKTEST ANALYSIS\n');
  
  // Fetch latest market data
  console.log('1️⃣ Fetching market data...');
  const marketRes = await fetch('http://localhost:3000/api/market/latest?timeframe=1h&limit=500');
  const marketData = await marketRes.json();
  
  if (!marketData.success) {
    console.error('❌ Failed to fetch market data');
    return;
  }
  
  console.log(`✅ Fetched ${marketData.data.length} candles\n`);
  
  // Test signal generation at different confidence levels
  console.log('2️⃣ Testing signal generation at different confidence levels...\n');
  
  for (const minConfidence of [50, 60, 70, 75, 80, 85, 90, 95]) {
    const backtestRes = await fetch('http://localhost:3000/api/trading/backtest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        run_name: `Debug Test - Confidence ${minConfidence}%`,
        start_date: '2025-01-01',
        end_date: '2025-12-31',
        starting_balance: 10000,
        min_confidence: minConfidence,
        use_mtf_confirmation: false,
        use_news_filter: false,
        timeframe: '1h',
        commission_per_trade: 0
      })
    });
    
    const result = await backtestRes.json();
    
    if (result.success) {
      const stats = result.result;
      console.log(`📊 Confidence ${minConfidence}%:`);
      console.log(`   Trades: ${stats.total_trades}`);
      console.log(`   Win Rate: ${stats.win_rate}%`);
      console.log(`   Net Profit: $${stats.net_profit.toFixed(2)}`);
      console.log(`   Profit Factor: ${stats.profit_factor}`);
      console.log(`   Avg Win: $${stats.avg_win.toFixed(2)} | Avg Loss: $${stats.avg_loss.toFixed(2)}`);
      console.log(`   Max DD: ${stats.max_drawdown_pct}%\n`);
    } else {
      console.log(`❌ Confidence ${minConfidence}%: ${result.error}\n`);
    }
  }
  
  // Test 3: Analyze recent signals
  console.log('3️⃣ Analyzing recent signals...\n');
  const signalsRes = await fetch('http://localhost:3000/api/signals/recent?limit=20');
  const signalsData = await signalsRes.json();
  
  if (signalsData.success && signalsData.signals.length > 0) {
    console.log(`📈 Last ${signalsData.signals.length} signals:`);
    for (const signal of signalsData.signals) {
      console.log(`   ${signal.trading_style} ${signal.signal_type} at $${signal.price} (${signal.confidence}%)`);
      console.log(`      SL: $${signal.stop_loss} | TP1: $${signal.take_profit_1}`);
      console.log(`      Risk:Reward = 1:${((signal.take_profit_1 - signal.price) / (signal.price - signal.stop_loss)).toFixed(2)}`);
    }
  }
  
  console.log('\n✅ Debug analysis complete!');
}

// Run debug
debugBacktest().catch(console.error);
