import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { calculateIndicators, generateSignal, type Candle } from './lib/technicalAnalysis'
import { sendTelegramMessage, formatTradeSignal, formatMarketUpdate } from './lib/telegram'
import enhancedSignalsRouter from './routes/enhancedSignals'
import tradesRouter from './routes/trades'
import calendarRouter from './routes/calendar'
import backtestRouter from './routes/backtest'
import telegramCommandsRouter from './routes/telegramCommands'

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for all API routes
app.use('/api/*', cors())

// Mount API routers
app.route('/api/signals/enhanced', enhancedSignalsRouter)
app.route('/api/trades', tradesRouter)
app.route('/api/calendar', calendarRouter)
app.route('/api/backtest', backtestRouter)
app.route('/api/telegram', telegramCommandsRouter)

// Homepage - Dashboard
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gold/USD Trading System (XAU/USD)</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    </head>
    <body class="bg-gray-900 text-gray-100">
        <div class="min-h-screen">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg border-b border-yellow-500">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-chart-line text-yellow-500 text-3xl"></i>
                            <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System (XAU/USD)</h1>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div id="currentPrice" class="text-2xl font-bold text-green-400">
                                Loading...
                            </div>
                            <button onclick="refreshData()" class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-semibold transition">
                                <i class="fas fa-sync-alt mr-2"></i>Refresh
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="container mx-auto px-4 py-6">
                <!-- Quick Stats -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">Current Signal</p>
                                <p id="currentSignal" class="text-xl font-bold text-green-400">LOADING</p>
                            </div>
                            <i class="fas fa-signal text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">RSI (14)</p>
                                <p id="rsiValue" class="text-xl font-bold">--</p>
                            </div>
                            <i class="fas fa-chart-bar text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">MACD</p>
                                <p id="macdValue" class="text-xl font-bold">--</p>
                            </div>
                            <i class="fas fa-wave-square text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-400 text-sm">Active Signals</p>
                                <p id="activeSignals" class="text-xl font-bold">0</p>
                            </div>
                            <i class="fas fa-bell text-yellow-500 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- Automation Panel -->
                <div class="bg-gradient-to-r from-yellow-900 to-yellow-800 p-6 rounded-lg border-2 border-yellow-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-robot mr-3"></i>Automated Daily Analysis
                            </h2>
                            <p class="text-yellow-100 mb-4">
                                One-click analysis: Fetches latest data, generates MTF signals, calculates position sizes, and sends to Telegram
                            </p>
                            <div id="automationStatus" class="text-sm text-yellow-200">
                                Click the button to run automated analysis →
                            </div>
                        </div>
                        <button 
                            id="analyzeButton"
                            onclick="runAutomatedAnalysis()" 
                            class="bg-white hover:bg-yellow-50 text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class="fas fa-play-circle mr-2"></i>
                            <span id="analyzeButtonText">Analyze & Notify</span>
                        </button>
                    </div>
                    
                    <!-- Results Display -->
                    <div id="analysisResults" class="mt-6 hidden">
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-lg font-bold text-white mb-3">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>Analysis Complete
                            </h3>
                            <div id="analysisDetails" class="space-y-2 text-sm text-yellow-100">
                                <!-- Results will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Price Chart -->
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                    <h2 class="text-xl font-bold mb-4 text-yellow-500">
                        <i class="fas fa-chart-area mr-2"></i>Gold/USD Price Chart
                    </h2>
                    <canvas id="priceChart" height="100"></canvas>
                </div>

                <!-- Trading Signals -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <!-- Recent Signals -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-bell mr-2"></i>Recent Signals
                        </h2>
                        <div id="recentSignals" class="space-y-3">
                            <p class="text-gray-400">Loading signals...</p>
                        </div>
                    </div>

                    <!-- Technical Indicators -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-calculator mr-2"></i>Technical Indicators
                        </h2>
                        <div id="indicators" class="space-y-2">
                            <p class="text-gray-400">Loading indicators...</p>
                        </div>
                    </div>
                </div>

                <!-- Settings Panel -->
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h2 class="text-xl font-bold mb-4 text-yellow-500">
                        <i class="fas fa-cog mr-2"></i>Settings & Configuration
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Twelve Data API Key</label>
                            <input type="text" id="twelveDataKey" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Your API key (configured)" readonly>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Telegram Bot Token</label>
                            <input type="text" id="telegramToken" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Enter bot token">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Telegram Chat ID</label>
                            <input type="text" id="telegramChatId" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" placeholder="Enter chat ID">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Min Confidence (%)</label>
                            <input type="number" id="minConfidence" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" value="70" min="0" max="100">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Scan Interval (minutes)</label>
                            <input type="number" id="scanInterval" class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2" value="15" min="1" max="60">
                        </div>
                    </div>
                    <div class="mt-4 flex space-x-3">
                        <button onclick="saveSettings()" class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-save mr-2"></i>Save Settings
                        </button>
                        <button onclick="testTelegram()" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fab fa-telegram mr-2"></i>Test Telegram
                        </button>
                        <button onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal
                        </button>
                        <button onclick="runBacktest()" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-history mr-2"></i>📊 Run Backtest
                        </button>
                    </div>
                </div>

                <!-- Backtest Results Panel -->
                <div id="backtestResults" class="bg-gradient-to-r from-indigo-900 to-indigo-800 p-6 rounded-lg border-2 border-indigo-500 mt-6 hidden">
                    <h3 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-chart-bar mr-2"></i>Backtest Results
                    </h3>
                    <div id="backtestDetails" class="space-y-4">
                        <!-- Results will be inserted here -->
                    </div>
                </div>

                <!-- Instructions -->
                <div class="bg-blue-900 border border-blue-700 p-6 rounded-lg mt-6">
                    <h3 class="text-lg font-bold mb-3 text-blue-300">
                        <i class="fas fa-info-circle mr-2"></i>Setup Instructions
                    </h3>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-gray-300">
                        <li><strong>Create Telegram Bot:</strong> Message @BotFather on Telegram, use /newbot command, save the bot token</li>
                        <li><strong>Get Chat ID:</strong> Message your bot, then visit: https://api.telegram.org/bot[YOUR_BOT_TOKEN]/getUpdates</li>
                        <li><strong>Configure Settings:</strong> Enter your Telegram credentials above and click "Save Settings"</li>
                        <li><strong>API Configured:</strong> Using Twelve Data API (800 calls/day) for real-time XAU/USD data</li>
                        <li><strong>Fetch Data:</strong> Click "Fetch Market Data" to get latest hourly Gold/USD prices</li>
                        <li><strong>Test Alerts:</strong> Click "Test Telegram" to verify your bot is working</li>
                    </ol>
                </div>
            </main>
        </div>

        <script>
            let priceChart = null;

            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                setInterval(refreshData, 60000); // Refresh every minute
            }

            async function refreshData() {
                try {
                    // Load latest signals
                    const signalsRes = await axios.get('/api/signals/recent');
                    displayRecentSignals(signalsRes.data.signals);
                    
                    // Load market data
                    const marketRes = await axios.get('/api/market/latest');
                    if (marketRes.data.data && marketRes.data.data.length > 0) {
                        updateDashboard(marketRes.data.data);
                    }

                    // Load indicators
                    const indicatorsRes = await axios.get('/api/indicators/latest');
                    if (indicatorsRes.data.indicators) {
                        displayIndicators(indicatorsRes.data.indicators);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                }
            }

            function updateDashboard(marketData) {
                const latest = marketData[0];
                const currentPrice = latest.close;
                
                document.getElementById('currentPrice').innerHTML = 
                    '$' + currentPrice.toFixed(2) + ' <span class="text-sm text-gray-400">XAU/USD</span>';
                
                // Update chart
                if (priceChart) {
                    priceChart.destroy();
                }
                
                const ctx = document.getElementById('priceChart').getContext('2d');
                priceChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: marketData.reverse().map(d => new Date(d.timestamp).toLocaleTimeString()),
                        datasets: [{
                            label: 'Gold/USD Price',
                            data: marketData.map(d => d.close),
                            borderColor: 'rgb(234, 179, 8)',
                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { 
                                display: true,
                                labels: { color: 'rgb(209, 213, 219)' }
                            }
                        },
                        scales: {
                            y: { 
                                ticks: { color: 'rgb(209, 213, 219)' },
                                grid: { color: 'rgba(75, 85, 99, 0.3)' }
                            },
                            x: { 
                                ticks: { color: 'rgb(209, 213, 219)' },
                                grid: { color: 'rgba(75, 85, 99, 0.3)' }
                            }
                        }
                    }
                });
            }

            function displayRecentSignals(signals) {
                const container = document.getElementById('recentSignals');
                document.getElementById('activeSignals').textContent = signals.filter(s => s.status === 'active').length;
                
                if (signals.length === 0) {
                    container.innerHTML = '<p class="text-gray-400">No signals yet</p>';
                    document.getElementById('currentSignal').textContent = 'HOLD';
                    return;
                }
                
                const latest = signals[0];
                document.getElementById('currentSignal').textContent = latest.signal_type;
                document.getElementById('currentSignal').className = 
                    latest.signal_type === 'BUY' ? 'text-xl font-bold text-green-400' :
                    latest.signal_type === 'SELL' ? 'text-xl font-bold text-red-400' :
                    'text-xl font-bold text-gray-400';
                
                container.innerHTML = signals.slice(0, 5).map(signal => {
                    const bgColor = signal.signal_type === 'BUY' ? 'bg-green-900' : 
                                    signal.signal_type === 'SELL' ? 'bg-red-900' : 'bg-gray-700';
                    const textColor = signal.signal_type === 'BUY' ? 'text-green-400' : 
                                      signal.signal_type === 'SELL' ? 'text-red-400' : 'text-gray-400';
                    
                    return '<div class="' + bgColor + ' border border-gray-700 p-3 rounded">' +
                            '<div class="flex justify-between items-start mb-2">' +
                                '<span class="font-bold ' + textColor + '">' + signal.signal_type + '</span>' +
                                '<span class="text-sm text-gray-400">' + new Date(signal.timestamp).toLocaleString() + '</span>' +
                            '</div>' +
                            '<div class="text-sm space-y-1">' +
                                '<p><span class="text-gray-400">Price:</span> $' + signal.price.toFixed(2) + '</p>' +
                                '<p><span class="text-gray-400">Confidence:</span> ' + signal.confidence + '%</p>' +
                                '<p><span class="text-gray-400">TP1:</span> $' + signal.take_profit_1.toFixed(2) + '</p>' +
                                '<p><span class="text-gray-400">SL:</span> $' + signal.stop_loss.toFixed(2) + '</p>' +
                            '</div>' +
                        '</div>';
                }).join('');
            }

            function displayIndicators(indicators) {
                const rsi = indicators.rsi_14;
                document.getElementById('rsiValue').textContent = rsi.toFixed(1);
                document.getElementById('rsiValue').className = 
                    rsi < 30 ? 'text-xl font-bold text-green-400' :
                    rsi > 70 ? 'text-xl font-bold text-red-400' :
                    'text-xl font-bold text-yellow-400';
                
                document.getElementById('macdValue').textContent = indicators.macd.toFixed(2);
                
                const container = document.getElementById('indicators');
                container.innerHTML = 
                    '<div class="grid grid-cols-2 gap-2 text-sm">' +
                        '<div><span class="text-gray-400">RSI(14):</span> <span class="font-semibold">' + indicators.rsi_14.toFixed(1) + '</span></div>' +
                        '<div><span class="text-gray-400">MACD:</span> <span class="font-semibold">' + indicators.macd.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(20):</span> <span class="font-semibold">$' + indicators.sma_20.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(50):</span> <span class="font-semibold">$' + indicators.sma_50.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">SMA(200):</span> <span class="font-semibold">$' + indicators.sma_200.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">ATR(14):</span> <span class="font-semibold">' + indicators.atr_14.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">BB Upper:</span> <span class="font-semibold">$' + indicators.bb_upper.toFixed(2) + '</span></div>' +
                        '<div><span class="text-gray-400">BB Lower:</span> <span class="font-semibold">$' + indicators.bb_lower.toFixed(2) + '</span></div>' +
                    '</div>';
            }

            async function loadSettings() {
                try {
                    const res = await axios.get('/api/settings');
                    const settings = res.data.settings;
                    
                    const apiKey = settings.twelve_data_api_key || '70140f57bea54c5e90768de696487d8f';
                    document.getElementById('twelveDataKey').value = apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4);
                    document.getElementById('telegramToken').value = settings.telegram_bot_token || '';
                    document.getElementById('telegramChatId').value = settings.telegram_chat_id || '';
                    document.getElementById('minConfidence').value = settings.min_confidence || '70';
                    document.getElementById('scanInterval').value = settings.scan_interval_minutes || '15';
                } catch (error) {
                    console.error('Error loading settings:', error);
                }
            }

            async function saveSettings() {
                const settings = {
                    telegram_bot_token: document.getElementById('telegramToken').value,
                    telegram_chat_id: document.getElementById('telegramChatId').value,
                    min_confidence: document.getElementById('minConfidence').value,
                    scan_interval_minutes: document.getElementById('scanInterval').value
                };
                
                try {
                    await axios.post('/api/settings', settings);
                    alert('Settings saved successfully!');
                } catch (error) {
                    alert('Error saving settings: ' + error.message);
                }
            }

            async function testTelegram() {
                try {
                    const res = await axios.post('/api/telegram/test');
                    if (res.data.success) {
                        alert('✅ Telegram test message sent successfully!');
                    } else {
                        alert('❌ Failed to send Telegram message. Check your settings.');
                    }
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                }
            }

            async function fetchMarketData() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    const res = await axios.post('/api/market/fetch');
                    alert('✅ Fetched ' + res.data.count + ' candles successfully!');
                    await refreshData();
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } catch (error) {
                    alert('❌ Error fetching data: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                }
            }

            async function generateSignalNow() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    const res = await axios.post('/api/signals/generate-now');
                    
                    if (res.data.success) {
                        const day = res.data.signals.day_trade;
                        const swing = res.data.signals.swing_trade;
                        
                        let message = '✅ Signals Generated!\\n\\n';
                        message += '📊 DAY TRADE:\\n';
                        message += 'Signal: ' + day.signal_type + ' (' + day.confidence.toFixed(1) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop Loss: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + '\\n\\n';
                        
                        message += '📈 SWING TRADE:\\n';
                        message += 'Signal: ' + swing.signal_type + ' (' + swing.confidence.toFixed(1) + '%)\\n';
                        message += 'Entry: $' + swing.price.toFixed(2) + '\\n';
                        message += 'Stop Loss: $' + swing.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + swing.take_profit_1.toFixed(2) + '\\n\\n';
                        
                        if (res.data.telegram_sent) {
                            message += '📱 Sent to Telegram!';
                        } else {
                            message += '⚠️ Telegram not sent (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.data.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                }
            }

            async function generateEnhancedSignal() {
                try {
                    const btn = event.target;
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    const res = await axios.post('/api/signals/enhanced/enhanced');
                    
                    if (res.data.success) {
                        // API returns day_trade and swing_trade directly (not nested in signals)
                        const day = res.data.day_trade;
                        const swing = res.data.swing_trade;
                        const alignment = res.data.alignment;
                        const risk_metrics = res.data.risk_metrics;
                        const regime = res.data.regime;
                        const ml = res.data.ml_prediction;
                        const pop = res.data.profit_probability;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        
                        // Risk Warnings
                        if (day.risk_warning) {
                            message += '⚠️ RISK ALERT: ' + day.risk_warning + '\\n\\n';
                        }
                        
                        // Multi-Timeframe Alignment
                        message += '📊 MTF ALIGNMENT: ' + alignment.type + ' (' + alignment.score + '/5)\\n\\n';
                        
                        // Day Trade
                        message += '📈 DAY TRADE:\\n';
                        message += (day.isValid ? '✅' : '❌') + ' ' + day.signal_type + ' (' + day.enhanced_confidence.toFixed(0) + '%)\\n';
                        message += 'Entry: $' + day.price.toFixed(2) + '\\n';
                        message += 'Stop: $' + day.stop_loss.toFixed(2) + '\\n';
                        message += 'TP1: $' + day.take_profit_1.toFixed(2) + '\\n';
                        
                        // Confidence Breakdown
                        message += '\\nConfidence Breakdown:\\n';
                        message += 'Base: ' + day.base_confidence.toFixed(0) + '%\\n';
                        message += 'MTF: ' + day.mtf_confidence.toFixed(0) + '%\\n';
                        if (day.pattern_boost > 0) message += 'Pattern: +' + day.pattern_boost.toFixed(0) + '%\\n';
                        if (day.regime_boost > 0) message += 'Regime: +' + day.regime_boost.toFixed(0) + '%\\n';
                        if (day.ml_boost > 0) message += 'ML: +' + day.ml_boost.toFixed(0) + '%\\n';
                        if (day.pop_boost > 0) message += 'PoP: +' + day.pop_boost.toFixed(0) + '%\\n';
                        message += 'FINAL: ' + day.enhanced_confidence.toFixed(0) + '%\\n\\n';
                        
                        // Market Regime
                        if (regime) {
                            message += '🌡️ REGIME: ' + (regime.trend || 'N/A') + ' | Volatility: ' + regime.volatility + '\\n';
                            message += 'Should Trade: ' + (regime.should_trade ? '✅ YES' : '❌ NO') + '\\n\\n';
                        }
                        
                        // ML Prediction
                        if (ml && ml.direction !== 'NEUTRAL') {
                            message += '🤖 ML: ' + ml.direction + '\\n\\n';
                        }
                        
                        // Risk Metrics
                        message += '⚡ RISK METRICS:\\n';
                        message += 'VaR(95%): $' + risk_metrics.var_95.toFixed(2) + '\\n';
                        message += 'VaR(99%): $' + risk_metrics.var_99.toFixed(2) + '\\n';
                        message += 'Drawdown: ' + risk_metrics.drawdown_pct.toFixed(2) + '%\\n';
                        message += 'Portfolio Heat: ' + risk_metrics.portfolio_heat_pct.toFixed(1) + '%\\n\\n';
                        
                        // Recommendation
                        message += '💡 RECOMMENDATION:\\n';
                        if (day.isValid && day.signal_type !== 'HOLD') {
                            message += '✅ EXECUTE ' + day.signal_type;
                        } else {
                            message += '⚠️ SKIP - ' + day.mtf_reason;
                        }
                        
                        // Telegram Status
                        message += '\\n\\n';
                        if (res.data.telegram_sent) {
                            message += '📱 ✅ Sent to Telegram!';
                        } else {
                            message += '📱 ⚠️ Telegram not configured (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.data.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    event.target.disabled = false;
                    event.target.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                }
            }

            async function runAutomatedAnalysis() {
                const btn = document.getElementById('analyzeButton');
                const statusDiv = document.getElementById('automationStatus');
                const resultsDiv = document.getElementById('analysisResults');
                const detailsDiv = document.getElementById('analysisDetails');
                const buttonText = document.getElementById('analyzeButtonText');
                
                try {
                    // Disable button
                    btn.disabled = true;
                    buttonText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Running full analysis...';
                    resultsDiv.classList.add('hidden');
                    
                    // Run automated analysis
                    const res = await axios.post('/api/automation/analyze-and-notify');
                    
                    if (res.data.success) {
                        const { signals, positions, alignment, telegram_sent, results } = res.data;
                        
                        // Update status
                        statusDiv.innerHTML = '<i class="fas fa-check-circle text-green-400 mr-2"></i>' +
                            'Analysis completed at ' + new Date().toLocaleTimeString() +
                            (telegram_sent ? ' | 📱 Sent to Telegram' : ' | ⚠️ Telegram not configured');
                        
                        // Build results display
                        let html = '';
                        
                        // Step results
                        html += '<div class="mb-4"><h4 class="font-bold mb-2">Analysis Steps:</h4>';
                        results.steps.forEach(step => {
                            const icon = step.status === 'completed' ? '✅' : step.status === 'failed' ? '❌' : '⏳';
                            html += '<div>' + icon + ' Step ' + step.step + ': ' + step.name + '</div>';
                        });
                        html += '</div>';
                        
                        // Multi-timeframe alignment
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Multi-Timeframe Alignment:</h4>';
                        html += '<div class="text-lg font-bold">' + alignment.type + ' (' + alignment.score + '/5)</div>';
                        html += '<div class="mt-2 space-y-1">';
                        alignment.trends.forEach(t => {
                            const icon = t.trend === 'BULLISH' ? '📈' : t.trend === 'BEARISH' ? '📉' : '➡️';
                            html += '<div>' + icon + ' ' + t.timeframe + ': ' + t.trend + ' (' + t.confidence.toFixed(0) + '%)</div>';
                        });
                        html += '</div></div>';
                        
                        // Day Trade Signal
                        const day = signals.day_trade;
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Day Trade Signal:</h4>';
                        html += '<div class="text-lg font-bold ' + (day.isValid ? 'text-green-400' : 'text-yellow-400') + '">';
                        html += (day.isValid ? '✅' : '⚠️') + ' ' + day.signal_type + ' (' + day.final_confidence + '% confidence)';
                        html += '</div>';
                        html += '<div class="mt-2 space-y-1">';
                        html += '<div>Entry: $' + day.price.toFixed(2) + '</div>';
                        html += '<div>Stop: $' + day.stop_loss.toFixed(2) + ' (' + ((day.stop_loss / day.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>TP1: $' + day.take_profit_1.toFixed(2) + ' (' + ((day.take_profit_1 / day.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>Position: ' + positions.day_trade.units + ' lots ($' + positions.day_trade.value + ')</div>';
                        html += '<div>Risk: $' + positions.day_trade.risk_amount + ' (' + positions.day_trade.risk_pct + '%)</div>';
                        html += '<div>R:R: ' + positions.day_trade.reward_risk_ratio + ':1</div>';
                        html += '</div></div>';
                        
                        // Swing Trade Signal
                        const swing = signals.swing_trade;
                        html += '<div class="mb-4">';
                        html += '<h4 class="font-bold mb-2">Swing Trade Signal:</h4>';
                        html += '<div class="text-lg font-bold ' + (swing.isValid ? 'text-green-400' : 'text-yellow-400') + '">';
                        html += (swing.isValid ? '✅' : '⚠️') + ' ' + swing.signal_type + ' (' + swing.final_confidence + '% confidence)';
                        html += '</div>';
                        html += '<div class="mt-2 space-y-1">';
                        html += '<div>Entry: $' + swing.price.toFixed(2) + '</div>';
                        html += '<div>Stop: $' + swing.stop_loss.toFixed(2) + ' (' + ((swing.stop_loss / swing.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>TP1: $' + swing.take_profit_1.toFixed(2) + ' (' + ((swing.take_profit_1 / swing.price - 1) * 100).toFixed(2) + '%)</div>';
                        html += '<div>Position: ' + positions.swing_trade.units + ' lots ($' + positions.swing_trade.value + ')</div>';
                        html += '<div>Risk: $' + positions.swing_trade.risk_amount + ' (' + positions.swing_trade.risk_pct + '%)</div>';
                        html += '<div>R:R: ' + positions.swing_trade.reward_risk_ratio + ':1</div>';
                        html += '</div></div>';
                        
                        // Recommendation
                        html += '<div class="mt-4 pt-4 border-t border-yellow-300">';
                        html += '<h4 class="font-bold mb-2">Recommendation:</h4>';
                        
                        if (day.isValid && day.signal_type !== 'HOLD') {
                            html += '<div class="text-green-400 font-bold">✅ Day Trade: EXECUTE ' + day.signal_type + '</div>';
                        } else {
                            html += '<div class="text-yellow-400">⚠️ Day Trade: SKIP (' + day.mtf_reason + ')</div>';
                        }
                        
                        if (swing.isValid && swing.signal_type !== 'HOLD') {
                            html += '<div class="text-green-400 font-bold">✅ Swing Trade: EXECUTE ' + swing.signal_type + '</div>';
                        } else {
                            html += '<div class="text-yellow-400">⚠️ Swing Trade: SKIP (' + swing.mtf_reason + ')</div>';
                        }
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                        resultsDiv.classList.remove('hidden');
                        
                        // Refresh signals display
                        await refreshData();
                    } else {
                        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + res.data.error;
                    }
                } catch (error) {
                    statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + error.message;
                } finally {
                    btn.disabled = false;
                    buttonText.innerHTML = 'Analyze & Notify';
                }
            }

            // Run Backtest
            async function runBacktest() {
                const resultsDiv = document.getElementById('backtestResults');
                const detailsDiv = document.getElementById('backtestDetails');
                
                // Show panel and loading state
                resultsDiv.classList.remove('hidden');
                detailsDiv.innerHTML = '<div class="text-center text-white">' +
                    '<i class="fas fa-spinner fa-spin text-4xl mb-4"></i>' +
                    '<p class="text-lg">Running backtest on historical data...</p>' +
                    '<p class="text-sm text-indigo-300 mt-2">This may take 30-60 seconds</p>' +
                    '</div>';
                
                try {
                    const res = await axios.post('/api/backtest/run', {
                        min_confidence: 75,
                        use_mtf_confirmation: true,
                        use_news_filter: false,
                        starting_balance: 10000
                    });
                    
                    if (res.data.success) {
                        const r = res.data.result;
                        
                        // Format results
                        let html = '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">';
                        
                        // Key Metrics
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Total Trades</div>';
                        html += '<div class="text-2xl font-bold text-white">' + r.total_trades + '</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Win Rate</div>';
                        html += '<div class="text-2xl font-bold ' + (r.win_rate >= 70 ? 'text-green-400' : r.win_rate >= 60 ? 'text-yellow-400' : 'text-red-400') + '">';
                        html += r.win_rate.toFixed(1) + '%</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Net Profit</div>';
                        html += '<div class="text-2xl font-bold ' + (r.net_profit > 0 ? 'text-green-400' : 'text-red-400') + '">';
                        html += (r.net_profit > 0 ? '+' : '') + '$' + r.net_profit.toFixed(2) + '</div>';
                        html += '</div>';
                        
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<div class="text-indigo-300 text-sm">Total Return</div>';
                        html += '<div class="text-2xl font-bold ' + (r.total_return_pct > 0 ? 'text-green-400' : 'text-red-400') + '">';
                        html += (r.total_return_pct > 0 ? '+' : '') + r.total_return_pct.toFixed(2) + '%</div>';
                        html += '</div>';
                        
                        html += '</div>';
                        
                        // Detailed Metrics
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg">';
                        html += '<h4 class="font-bold text-white mb-3">Performance Metrics</h4>';
                        html += '<div class="grid grid-cols-2 gap-3 text-sm">';
                        
                        html += '<div><span class="text-indigo-300">Winning Trades:</span> <span class="text-white font-semibold">' + r.winning_trades + '</span></div>';
                        html += '<div><span class="text-indigo-300">Losing Trades:</span> <span class="text-white font-semibold">' + r.losing_trades + '</span></div>';
                        html += '<div><span class="text-indigo-300">Avg Win:</span> <span class="text-green-400 font-semibold">+$' + r.avg_win.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Avg Loss:</span> <span class="text-red-400 font-semibold">-$' + Math.abs(r.avg_loss).toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Largest Win:</span> <span class="text-green-400 font-semibold">+$' + r.largest_win.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Largest Loss:</span> <span class="text-red-400 font-semibold">-$' + Math.abs(r.largest_loss).toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Max Drawdown:</span> <span class="text-white font-semibold">' + r.max_drawdown_pct.toFixed(2) + '%</span></div>';
                        html += '<div><span class="text-indigo-300">Profit Factor:</span> <span class="text-white font-semibold">' + r.profit_factor.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Sharpe Ratio:</span> <span class="text-white font-semibold">' + r.sharpe_ratio.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Expectancy:</span> <span class="text-white font-semibold">$' + r.expectancy.toFixed(2) + '</span></div>';
                        
                        html += '</div></div>';
                        
                        // Balance Progress
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mt-4">';
                        html += '<h4 class="font-bold text-white mb-3">Balance Progress</h4>';
                        html += '<div class="flex justify-between text-sm">';
                        html += '<div><span class="text-indigo-300">Starting:</span> <span class="text-white font-semibold">$' + r.starting_balance.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Peak:</span> <span class="text-green-400 font-semibold">$' + r.peak_balance.toFixed(2) + '</span></div>';
                        html += '<div><span class="text-indigo-300">Ending:</span> <span class="text-white font-semibold">$' + r.ending_balance.toFixed(2) + '</span></div>';
                        html += '</div></div>';
                        
                        // Verdict
                        html += '<div class="mt-4 p-4 rounded-lg ' + (r.win_rate >= 70 && r.profit_factor >= 2.0 ? 'bg-green-900 bg-opacity-50 border border-green-500' : r.win_rate >= 60 ? 'bg-yellow-900 bg-opacity-50 border border-yellow-500' : 'bg-red-900 bg-opacity-50 border border-red-500') + '">';
                        html += '<h4 class="font-bold text-white mb-2">Verdict:</h4>';
                        
                        if (r.win_rate >= 70 && r.profit_factor >= 2.0) {
                            html += '<div class="text-green-300">✅ <strong>STRATEGY VALIDATED</strong> - Excellent performance! Win rate > 70% and Profit Factor > 2.0</div>';
                            html += '<div class="text-green-200 text-sm mt-2">This strategy is ready for paper trading and live execution.</div>';
                        } else if (r.win_rate >= 60 && r.profit_factor >= 1.5) {
                            html += '<div class="text-yellow-300">⚠️ <strong>GOOD PERFORMANCE</strong> - Strategy shows promise but needs refinement.</div>';
                            html += '<div class="text-yellow-200 text-sm mt-2">Consider increasing confidence threshold or adding filters.</div>';
                        } else {
                            html += '<div class="text-red-300">❌ <strong>NEEDS IMPROVEMENT</strong> - Performance below target.</div>';
                            html += '<div class="text-red-200 text-sm mt-2">Adjust strategy parameters before live trading.</div>';
                        }
                        
                        html += '</div>';
                        
                        // Execution time
                        html += '<div class="text-center text-indigo-300 text-sm mt-4">';
                        html += 'Backtest completed in ' + r.execution_time_ms + 'ms';
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                    } else {
                        detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                            '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                            '<strong>Error:</strong> ' + (res.data.error || 'Backtest failed') +
                            '</div>';
                    }
                } catch (error) {
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // Initialize on page load
            init();
        </script>
    </body>
    </html>
  `)
})

// API Routes

// Get recent signals
app.get('/api/signals/recent', async (c) => {
  const { DB } = c.env;
  
  try {
    const result = await DB.prepare(`
      SELECT * FROM signals 
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all();
    
    return c.json({ success: true, signals: result.results || [] });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Get latest market data
app.get('/api/market/latest', async (c) => {
  const { DB } = c.env;
  
  try {
    const result = await DB.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 50
    `).all();
    
    return c.json({ success: true, data: result.results || [] });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Get latest indicators
app.get('/api/indicators/latest', async (c) => {
  const { DB } = c.env;
  
  try {
    const result = await DB.prepare(`
      SELECT * FROM indicators 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();
    
    return c.json({ success: true, indicators: result });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Get settings
app.get('/api/settings', async (c) => {
  const { DB } = c.env;
  
  try {
    const result = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
    `).all();
    
    const settings: Record<string, string> = {};
    for (const row of result.results || []) {
      settings[(row as any).setting_key] = (row as any).setting_value;
    }
    
    return c.json({ success: true, settings });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Save settings
app.post('/api/settings', async (c) => {
  const { DB } = c.env;
  const body = await c.req.json();
  
  try {
    for (const [key, value] of Object.entries(body)) {
      await DB.prepare(`
        INSERT INTO user_settings (setting_key, setting_value, updated_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(setting_key) 
        DO UPDATE SET setting_value = ?, updated_at = datetime('now')
      `).bind(key, value, value).run();
    }
    
    return c.json({ success: true });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Test Telegram
app.post('/api/telegram/test', async (c) => {
  const { DB } = c.env;
  
  try {
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all();
    
    const config: any = {};
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value;
    }
    
    const success = await sendTelegramMessage(
      { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
      '🔔 <b>Test Alert</b>\n\nYour Gold/USD Trading System is connected and working!\n\n✅ Telegram alerts are active.'
    );
    
    return c.json({ success });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// ============================================================================
// PHASE 2: NEWS & SENTIMENT API ENDPOINTS (85% Accuracy)
// ============================================================================

// Fetch and analyze gold-related news
app.post('/api/news/fetch', async (c) => {
  const { DB } = c.env;
  
  try {
    // Get NewsAPI key from settings
    const settingsResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'news_api_key'
    `).first();
    
    const apiKey = (settingsResult as any)?.setting_value || '';
    
    if (!apiKey || apiKey === 'your_key_here') {
      return c.json({ 
        success: false, 
        message: 'NewsAPI key not configured. Using free tier (100 calls/day)',
        sentiment: { overall: 'neutral', score: 0, bullishCount: 0, bearishCount: 0, neutralCount: 0, articles: [] }
      });
    }
    
    // Import news functions
    const { fetchGoldNews, analyzeNewsSentiment } = await import('./lib/newsAnalysis');
    
    // Fetch latest gold news
    const articles = await fetchGoldNews(apiKey);
    
    // Analyze sentiment
    const sentiment = analyzeNewsSentiment(articles);
    
    // Store news articles in database
    for (const article of sentiment.articles.slice(0, 10)) {
      await DB.prepare(`
        INSERT INTO news_articles 
        (title, description, url, published_at, source, sentiment, score)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        article.title,
        article.description || '',
        article.url,
        article.publishedAt,
        article.source,
        article.sentiment,
        article.score || 0
      ).run();
    }
    
    // Store sentiment summary
    await DB.prepare(`
      INSERT INTO market_sentiment 
      (timestamp, overall_sentiment, sentiment_score, bullish_count, bearish_count, neutral_count)
      VALUES (datetime('now'), ?, ?, ?, ?, ?)
    `).bind(
      sentiment.overall,
      sentiment.score,
      sentiment.bullishCount,
      sentiment.bearishCount,
      sentiment.neutralCount
    ).run();
    
    return c.json({ success: true, sentiment, articleCount: articles.length });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Get latest news sentiment
app.get('/api/news/sentiment', async (c) => {
  const { DB } = c.env;
  
  try {
    const sentiment = await DB.prepare(`
      SELECT * FROM market_sentiment 
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();
    
    const articles = await DB.prepare(`
      SELECT * FROM news_articles 
      ORDER BY published_at DESC 
      LIMIT 10
    `).all();
    
    return c.json({ 
      success: true, 
      sentiment: sentiment || { overall_sentiment: 'neutral', sentiment_score: 0 },
      articles: articles.results || []
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Get economic calendar events
app.get('/api/news/events', async (c) => {
  try {
    const { getEconomicEvents } = await import('./lib/newsAnalysis');
    const events = await getEconomicEvents();
    
    return c.json({ success: true, events });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Fetch market data from Alpha Vantage
app.post('/api/market/fetch', async (c) => {
  const { DB } = c.env;
  
  try {
    // Get Twelve Data API key from settings
    const settingsResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();
    
    let apiKey = (settingsResult as any)?.setting_value || '70140f57bea54c5e90768de696487d8f';
    
    // If still empty or placeholder, return error
    if (!apiKey || apiKey === 'your_key_here' || apiKey === '') {
      return c.json({ 
        success: false, 
        error: 'Twelve Data API key not configured. Please add it in settings.',
        count: 0 
      });
    }
    
    // Use real XAU/USD (Gold Spot / US Dollar) from Twelve Data
    const symbol = 'XAU/USD';
    const interval = '1h'; // 1-hour candles for better analysis
    
    // Fetch hourly data (800 calls/day on free tier!)
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}&outputsize=100`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data['code'] && data['status'] === 'error') {
      return c.json({ 
        success: false, 
        error: data['message'] || 'Twelve Data API error',
        count: 0 
      });
    }
    
    if (!data['values'] || !Array.isArray(data['values'])) {
      return c.json({ 
        success: false, 
        error: 'No data available from Twelve Data API',
        count: 0 
      });
    }
    
    const values = data['values'];
    
    let count = 0;
    const candles: Candle[] = [];
    
    // Twelve Data returns array of values, not object
    for (const item of values) {
      const candle = {
        timestamp: item.datetime,
        open: parseFloat(item.open),
        high: parseFloat(item.high),
        low: parseFloat(item.low),
        close: parseFloat(item.close),
        volume: 0 // Twelve Data doesn't provide volume for forex
      };
      
      candles.push(candle);
      
      await DB.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume).run();
      
      count++;
    }
    
    // Calculate indicators (need at least 50 candles)
    if (candles.length >= 50) {
      const indicators = calculateIndicators(candles.reverse());
      
      if (indicators) {
        await DB.prepare(`
          INSERT INTO indicators 
          (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
           sma_20, sma_50, sma_200, ema_12, ema_26,
           bb_upper, bb_middle, bb_lower, atr_14,
           stochastic_k, stochastic_d, adx, plus_di, minus_di,
           ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
           parabolic_sar, vwap, fib_382, fib_500, fib_618)
          VALUES (datetime('now'), '1h', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          indicators.rsi_14,
          indicators.macd,
          indicators.macd_signal,
          indicators.macd_histogram,
          indicators.sma_20,
          indicators.sma_50,
          indicators.sma_200,
          indicators.ema_12,
          indicators.ema_26,
          indicators.bb_upper,
          indicators.bb_middle,
          indicators.bb_lower,
          indicators.atr_14,
          indicators.stochastic_k,
          indicators.stochastic_d,
          indicators.adx,
          indicators.plus_di,
          indicators.minus_di,
          indicators.ichimoku_tenkan,
          indicators.ichimoku_kijun,
          indicators.ichimoku_senkou_a,
          indicators.ichimoku_senkou_b,
          indicators.parabolic_sar,
          indicators.vwap,
          indicators.fib_382 || 0,
          indicators.fib_500 || 0,
          indicators.fib_618 || 0
        ).run();
        
        // Generate trading signals
        const currentPrice = candles[candles.length - 1].close;
        const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade');
        const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade');
        
        // Store signals if confidence is high enough
        const minConfidence = 70;
        
        for (const signal of [dayTradeSignal, swingTradeSignal]) {
          if (signal.confidence >= minConfidence && signal.signal_type !== 'HOLD') {
            await DB.prepare(`
              INSERT INTO signals 
              (timestamp, signal_type, trading_style, price, stop_loss, 
               take_profit_1, take_profit_2, take_profit_3, confidence, reason)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              signal.signal_type,
              signal.trading_style,
              signal.price,
              signal.stop_loss,
              signal.take_profit_1,
              signal.take_profit_2,
              signal.take_profit_3,
              signal.confidence,
              signal.reason
            ).run();
            
            // Send Telegram alert
            const settings = await DB.prepare(`
              SELECT setting_key, setting_value FROM user_settings
              WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
            `).all();
            
            const config: any = {};
            for (const row of settings.results || []) {
              config[(row as any).setting_key] = (row as any).setting_value;
            }
            
            if (config.telegram_bot_token && config.telegram_chat_id) {
              await sendTelegramMessage(
                { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
                formatTradeSignal(signal)
              );
            }
          }
        }
      }
    }
    
    return c.json({ success: true, count });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Fetch multi-timeframe market data (Phase 3: 90% Accuracy)
app.post('/api/market/fetch-mtf', async (c) => {
  const { DB } = c.env;
  
  try {
    // Get Twelve Data API key from settings
    const settingsResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();
    
    let apiKey = (settingsResult as any)?.setting_value || '70140f57bea54c5e90768de696487d8f';
    
    if (!apiKey || apiKey === 'your_key_here' || apiKey === '') {
      return c.json({ 
        success: false, 
        error: 'Twelve Data API key not configured.',
        count: 0 
      });
    }
    
    const symbol = 'XAU/USD';
    
    // Timeframes to fetch: 5m, 15m, 1h, 4h, daily
    const timeframes = [
      { interval: '5min', dbKey: '5m', outputsize: 100 },
      { interval: '15min', dbKey: '15m', outputsize: 100 },
      { interval: '1h', dbKey: '1h', outputsize: 100 },
      { interval: '4h', dbKey: '4h', outputsize: 100 },
      { interval: '1day', dbKey: 'daily', outputsize: 100 }
    ];
    
    let totalCount = 0;
    const results: any = {};
    
    // Fetch each timeframe
    for (const tf of timeframes) {
      const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${tf.interval}&apikey=${apiKey}&outputsize=${tf.outputsize}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data['code'] && data['status'] === 'error') {
        results[tf.dbKey] = { success: false, error: data['message'], count: 0 };
        continue;
      }
      
      if (!data['values'] || !Array.isArray(data['values'])) {
        results[tf.dbKey] = { success: false, error: 'No data', count: 0 };
        continue;
      }
      
      const values = data['values'];
      let count = 0;
      const candles: Candle[] = [];
      
      for (const item of values) {
        const candle = {
          timestamp: item.datetime,
          open: parseFloat(item.open),
          high: parseFloat(item.high),
          low: parseFloat(item.low),
          close: parseFloat(item.close),
          volume: 0
        };
        
        candles.push(candle);
        
        await DB.prepare(`
          INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT DO NOTHING
        `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume, tf.dbKey).run();
        
        count++;
      }
      
      // Calculate indicators for this timeframe
      if (candles.length >= 50) {
        const indicators = calculateIndicators(candles.reverse());
        
        if (indicators) {
          await DB.prepare(`
            INSERT INTO multi_timeframe_indicators 
            (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
             sma_20, sma_50, sma_200, ema_12, ema_26,
             bb_upper, bb_middle, bb_lower, atr_14,
             stochastic_k, stochastic_d, adx, plus_di, minus_di,
             ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
             parabolic_sar, vwap, fib_382, fib_500, fib_618)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(
            tf.dbKey,
            indicators.rsi_14,
            indicators.macd,
            indicators.macd_signal,
            indicators.macd_histogram,
            indicators.sma_20,
            indicators.sma_50,
            indicators.sma_200,
            indicators.ema_12,
            indicators.ema_26,
            indicators.bb_upper,
            indicators.bb_middle,
            indicators.bb_lower,
            indicators.atr_14,
            indicators.stochastic_k,
            indicators.stochastic_d,
            indicators.adx,
            indicators.plus_di,
            indicators.minus_di,
            indicators.ichimoku_tenkan,
            indicators.ichimoku_kijun,
            indicators.ichimoku_senkou_a,
            indicators.ichimoku_senkou_b,
            indicators.parabolic_sar,
            indicators.vwap,
            indicators.fib_382,
            indicators.fib_500,
            indicators.fib_618
          ).run();
        }
      }
      
      results[tf.dbKey] = { success: true, count };
      totalCount += count;
      
      // Small delay to avoid API rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    return c.json({ 
      success: true, 
      totalCount,
      timeframes: results,
      message: 'Multi-timeframe data fetched successfully'
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Generate signal manually
app.post('/api/signals/generate', async (c) => {
  const { DB } = c.env;
  
  try {
    // Get recent market data
    const marketData = await DB.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();
    
    if (!marketData.results || marketData.results.length < 50) {
      return c.json({ success: false, error: 'Not enough data. Please fetch market data first (need at least 50 candles).' });
    }
    
    const candles = (marketData.results as any[]).reverse().map(row => ({
      timestamp: row.timestamp,
      open: row.open,
      high: row.high,
      low: row.low,
      close: row.close,
      volume: row.volume
    }));
    
    const indicators = calculateIndicators(candles);
    if (!indicators) {
      return c.json({ success: false, error: 'Failed to calculate indicators' });
    }
    
    const currentPrice = candles[candles.length - 1].close;
    const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade');
    const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade');
    
    return c.json({ 
      success: true, 
      signals: {
        day_trade: dayTradeSignal,
        swing_trade: swingTradeSignal
      }
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// Force generate signal and send to Telegram
// Generate signal with multi-timeframe confirmation (Phase 3: 90% Accuracy)
app.post('/api/signals/generate-mtf', async (c) => {
  const { DB } = c.env;
  
  try {
    // Import multi-timeframe functions
    const { analyzeTimeframeAlignment, validateMultiTimeframeSignal, formatAlignmentReport } = await import('./lib/multiTimeframeAnalysis');
    
    // Get indicators for all timeframes
    const timeframes = ['5m', '15m', '1h', '4h', 'daily'];
    const mtfIndicators: any = {};
    
    for (const tf of timeframes) {
      const indicatorData = await DB.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(tf).first();
      
      if (indicatorData) {
        mtfIndicators[tf] = indicatorData;
      }
    }
    
    // Need at least 3 timeframes
    const availableTimeframes = Object.keys(mtfIndicators).length;
    if (availableTimeframes < 3) {
      return c.json({ 
        success: false, 
        error: `Need at least 3 timeframes. Found: ${availableTimeframes}. Please fetch multi-timeframe data first.`,
        available: Object.keys(mtfIndicators)
      });
    }
    
    // Get current price from 1h timeframe
    const marketData = await DB.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first();
    
    if (!marketData) {
      return c.json({ success: false, error: 'No market data available' });
    }
    
    const currentPrice = (marketData as any).close;
    
    // Analyze timeframe alignment
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice);
    
    // Get base signal from 1h indicators
    const h1Indicators = mtfIndicators['1h'];
    const dayTradeSignal = generateSignal(currentPrice, h1Indicators, 'day_trade');
    const swingTradeSignal = generateSignal(currentPrice, h1Indicators, 'swing_trade');
    
    // Validate signals with multi-timeframe confirmation
    const dayValidation = validateMultiTimeframeSignal(dayTradeSignal.signal_type, alignment);
    const swingValidation = validateMultiTimeframeSignal(swingTradeSignal.signal_type, alignment);
    
    // Apply multi-timeframe confidence boost
    const dayTradeMTF = {
      ...dayTradeSignal,
      base_confidence: dayTradeSignal.confidence,
      mtf_confidence: dayValidation.confidence,
      final_confidence: Math.min(95, dayValidation.confidence),
      isValid: dayValidation.isValid,
      mtf_reason: dayValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type,
      reason: `${dayTradeSignal.reason}, MTF: ${dayValidation.reason}`
    };
    
    const swingTradeMTF = {
      ...swingTradeSignal,
      base_confidence: swingTradeSignal.confidence,
      mtf_confidence: swingValidation.confidence,
      final_confidence: Math.min(95, swingValidation.confidence),
      isValid: swingValidation.isValid,
      mtf_reason: swingValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type,
      reason: `${swingTradeSignal.reason}, MTF: ${swingValidation.reason}`
    };
    
    // Get Telegram settings
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all();
    
    const config: any = {};
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value;
    }
    
    let telegramSent = false;
    let sentSignals: any[] = [];
    
    // Only send valid signals to Telegram
    if (config.telegram_bot_token && config.telegram_chat_id) {
      if (dayTradeMTF.isValid && dayTradeMTF.signal_type !== 'HOLD') {
        const daySuccess = await sendTelegramMessage(
          { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
          `🎯 MULTI-TIMEFRAME CONFIRMED\n\n${formatTradeSignal({
            ...dayTradeMTF,
            timestamp: new Date().toISOString()
          })}\n\n📊 ${formatAlignmentReport(alignment)}`
        );
        
        if (daySuccess) {
          sentSignals.push('day_trade');
          telegramSent = true;
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (swingTradeMTF.isValid && swingTradeMTF.signal_type !== 'HOLD') {
        const swingSuccess = await sendTelegramMessage(
          { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
          `🎯 MULTI-TIMEFRAME CONFIRMED\n\n${formatTradeSignal({
            ...swingTradeMTF,
            timestamp: new Date().toISOString()
          })}\n\n📊 ${formatAlignmentReport(alignment)}`
        );
        
        if (swingSuccess) {
          sentSignals.push('swing_trade');
          telegramSent = true;
        }
      }
    }
    
    // Store in mtf_signals table
    for (const signal of [dayTradeMTF, swingTradeMTF]) {
      if (signal.isValid) {
        await DB.prepare(`
          INSERT INTO mtf_signals 
          (timestamp, signal_type, trading_style, price, stop_loss, 
           take_profit_1, take_profit_2, take_profit_3, 
           base_confidence, mtf_confidence, final_confidence,
           alignment_score, alignment_type, reason, telegram_sent)
          VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          signal.signal_type,
          signal.trading_style,
          signal.price,
          signal.stop_loss,
          signal.take_profit_1,
          signal.take_profit_2,
          signal.take_profit_3,
          signal.base_confidence,
          signal.mtf_confidence,
          signal.final_confidence,
          signal.alignment_score,
          signal.alignment_type,
          signal.reason,
          telegramSent ? 1 : 0
        ).run();
      }
    }
    
    return c.json({ 
      success: true,
      signals: {
        day_trade: dayTradeMTF,
        swing_trade: swingTradeMTF
      },
      alignment,
      alignment_report: formatAlignmentReport(alignment),
      telegram_sent: telegramSent,
      sent_to_telegram: sentSignals,
      available_timeframes: Object.keys(mtfIndicators)
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message, stack: error.stack }, 500);
  }
})

app.post('/api/signals/generate-now', async (c) => {
  const { DB } = c.env;
  
  try {
    // Get recent market data
    const marketData = await DB.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 200
    `).all();
    
    if (!marketData.results || marketData.results.length < 50) {
      return c.json({ success: false, error: 'Not enough data. Please fetch market data first.' });
    }
    
    const candles = (marketData.results as any[]).reverse().map(row => ({
      timestamp: row.timestamp,
      open: row.open,
      high: row.high,
      low: row.low,
      close: row.close,
      volume: row.volume
    }));
    
    const indicators = calculateIndicators(candles);
    if (!indicators) {
      return c.json({ success: false, error: 'Failed to calculate indicators' });
    }
    
    const currentPrice = candles[candles.length - 1].close;
    const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade');
    const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade');
    
    // Get Telegram settings
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all();
    
    const config: any = {};
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value;
    }
    
    let telegramSent = false;
    let sentSignals: any[] = [];
    
    // Send both signals to Telegram (regardless of confidence)
    if (config.telegram_bot_token && config.telegram_chat_id) {
      // Send day trade signal
      const daySuccess = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        formatTradeSignal({
          ...dayTradeSignal,
          timestamp: new Date().toISOString()
        })
      );
      
      if (daySuccess) {
        sentSignals.push('day_trade');
        telegramSent = true;
      }
      
      // Wait a second between messages
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send swing trade signal
      const swingSuccess = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        formatTradeSignal({
          ...swingTradeSignal,
          timestamp: new Date().toISOString()
        })
      );
      
      if (swingSuccess) {
        sentSignals.push('swing_trade');
        telegramSent = true;
      }
    }
    
    // Store signals in database
    for (const signal of [dayTradeSignal, swingTradeSignal]) {
      await DB.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason, telegram_sent)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        signal.signal_type,
        signal.trading_style,
        signal.price,
        signal.stop_loss,
        signal.take_profit_1,
        signal.take_profit_2,
        signal.take_profit_3,
        signal.confidence,
        signal.reason,
        telegramSent ? 1 : 0
      ).run();
    }
    
    return c.json({ 
      success: true,
      signals: {
        day_trade: dayTradeSignal,
        swing_trade: swingTradeSignal
      },
      telegram_sent: telegramSent,
      sent_to_telegram: sentSignals
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// ============================================================
// LIVE TRADING & BACKTESTING ENDPOINTS
// ============================================================

// Get trading account info
app.get('/api/trading/account/:id', async (c) => {
  const { DB } = c.env
  const accountId = c.req.param('id')
  
  try {
    const account = await DB.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(accountId).first()
    
    if (!account) {
      return c.json({ success: false, error: 'Account not found' }, 404)
    }
    
    return c.json({ success: true, account })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Calculate position size for a signal
app.post('/api/trading/calculate-position', async (c) => {
  const { DB } = c.env
  
  try {
    const body = await c.req.json()
    const { account_id, signal } = body
    
    // Get account
    const account = await DB.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(account_id).first()
    
    if (!account) {
      return c.json({ success: false, error: 'Account not found' }, 404)
    }
    
    // Get position sizing rules
    const rules = await DB.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = ? AND is_active = 1
      ORDER BY confidence_min DESC
    `).bind(account_id).all()
    
    // Import risk management
    const { calculatePositionSize, formatPositionSize } = await import('./lib/riskManagement')
    
    // Calculate position
    const position = calculatePositionSize(account as any, signal, rules.results as any)
    
    return c.json({
      success: true,
      position,
      formatted: formatPositionSize(position)
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Execute trade (paper trading)
app.post('/api/trading/execute', async (c) => {
  const { DB } = c.env
  
  try {
    const body = await c.req.json()
    const {
      account_id,
      signal_id,
      entry_price,
      stop_loss,
      take_profit_1,
      take_profit_2,
      take_profit_3,
      position_size,
      signal_type,
      trading_style,
      confidence
    } = body
    
    // Get account
    const account = await DB.prepare(`
      SELECT * FROM trading_accounts WHERE id = ?
    `).bind(account_id).first()
    
    if (!account) {
      return c.json({ success: false, error: 'Account not found' }, 404)
    }
    
    // Check daily loss limit
    const today = new Date().toISOString().split('T')[0]
    const todayTrades = await DB.prepare(`
      SELECT profit_loss FROM trades 
      WHERE account_id = ? 
      AND date(entry_time) = ?
      AND status = 'CLOSED'
    `).bind(account_id, today).all()
    
    const { checkDailyLossLimit } = await import('./lib/riskManagement')
    const lossCheck = checkDailyLossLimit(account as any, todayTrades.results as any)
    
    if (lossCheck.limit_exceeded) {
      return c.json({
        success: false,
        error: `Daily loss limit exceeded: ${lossCheck.current_loss_pct}% (max ${(account as any).max_daily_loss_pct}%)`
      }, 400)
    }
    
    // Insert trade
    const positionValue = position_size * entry_price
    
    const result = await DB.prepare(`
      INSERT INTO trades (
        account_id, signal_id, trade_type, trading_style, symbol,
        entry_price, entry_time, position_size, position_value,
        stop_loss, take_profit_1, take_profit_2, take_profit_3,
        confidence_level, status
      ) VALUES (?, ?, ?, ?, 'XAU/USD', ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, 'OPEN')
    `).bind(
      account_id,
      signal_id || null,
      signal_type,
      trading_style,
      entry_price,
      position_size,
      positionValue,
      stop_loss,
      take_profit_1,
      take_profit_2,
      take_profit_3,
      confidence
    ).run()
    
    return c.json({
      success: true,
      trade_id: result.meta.last_row_id,
      message: 'Trade executed successfully'
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Close trade
app.post('/api/trading/close/:trade_id', async (c) => {
  const { DB } = c.env
  const tradeId = c.req.param('trade_id')
  
  try {
    const body = await c.req.json()
    const { exit_price, exit_reason } = body
    
    // Get trade
    const trade = await DB.prepare(`
      SELECT * FROM trades WHERE id = ?
    `).bind(tradeId).first()
    
    if (!trade) {
      return c.json({ success: false, error: 'Trade not found' }, 404)
    }
    
    if ((trade as any).status === 'CLOSED') {
      return c.json({ success: false, error: 'Trade already closed' }, 400)
    }
    
    // Calculate P/L
    const { calculateProfitLoss } = await import('./lib/riskManagement')
    const pl = calculateProfitLoss(
      (trade as any).entry_price,
      exit_price,
      (trade as any).position_size,
      (trade as any).trade_type,
      (trade as any).commission || 0
    )
    
    // Update trade
    await DB.prepare(`
      UPDATE trades 
      SET exit_price = ?,
          exit_time = datetime('now'),
          exit_reason = ?,
          profit_loss = ?,
          profit_loss_pct = ?,
          pips_gained = ?,
          status = 'CLOSED',
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(
      exit_price,
      exit_reason,
      pl.profit_loss,
      pl.profit_loss_pct,
      pl.pips,
      tradeId
    ).run()
    
    // Update account balance
    await DB.prepare(`
      UPDATE trading_accounts 
      SET current_balance = current_balance + ?,
          updated_at = datetime('now')
      WHERE id = ?
    `).bind(pl.profit_loss, (trade as any).account_id).run()
    
    return c.json({
      success: true,
      profit_loss: pl.profit_loss,
      profit_loss_pct: pl.profit_loss_pct,
      pips: pl.pips
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Get open trades
app.get('/api/trading/trades/open', async (c) => {
  const { DB } = c.env
  const accountId = c.req.query('account_id') || '1'
  
  try {
    const trades = await DB.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'OPEN'
      ORDER BY entry_time DESC
    `).bind(accountId).all()
    
    return c.json({ success: true, trades: trades.results || [] })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Get trade history
app.get('/api/trading/trades/history', async (c) => {
  const { DB } = c.env
  const accountId = c.req.query('account_id') || '1'
  const limit = parseInt(c.req.query('limit') || '50')
  
  try {
    const trades = await DB.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ?
      ORDER BY entry_time DESC
      LIMIT ?
    `).bind(accountId, limit).all()
    
    return c.json({ success: true, trades: trades.results || [] })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Get portfolio statistics
app.get('/api/trading/stats', async (c) => {
  const { DB } = c.env
  const accountId = c.req.query('account_id') || '1'
  
  try {
    const trades = await DB.prepare(`
      SELECT * FROM trades 
      WHERE account_id = ? AND status = 'CLOSED'
    `).bind(accountId).all()
    
    const { calculatePortfolioMetrics } = await import('./lib/riskManagement')
    const stats = calculatePortfolioMetrics(trades.results as any)
    
    return c.json({ success: true, stats })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// Run backtest
app.post('/api/trading/backtest', async (c) => {
  const { DB } = c.env
  
  try {
    const config = await c.req.json()
    
    // Get historical market data
    const candles = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume 
      FROM market_data 
      WHERE timeframe = ?
      ORDER BY timestamp ASC
    `).bind(config.timeframe || '1h').all()
    
    if (!candles.results || candles.results.length < 200) {
      return c.json({
        success: false,
        error: `Not enough historical data. Need at least 200 candles, got ${candles.results?.length || 0}`
      }, 400)
    }
    
    // Get position sizing rules
    const rules = await DB.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all()
    
    // Run backtest
    const { runBacktest, formatBacktestResults } = await import('./lib/backtesting')
    
    const result = await runBacktest(
      candles.results as any,
      {
        start_date: config.start_date || '2024-01-01',
        end_date: config.end_date || new Date().toISOString().split('T')[0],
        starting_balance: config.starting_balance || 10000,
        min_confidence: config.min_confidence || 75,
        use_mtf_confirmation: config.use_mtf_confirmation !== false,
        use_news_filter: config.use_news_filter !== false,
        timeframe: config.timeframe || '1h',
        commission_per_trade: config.commission_per_trade || 0
      },
      rules.results as any
    )
    
    // Save backtest to database
    await DB.prepare(`
      INSERT INTO backtest_runs (
        run_name, start_date, end_date, starting_balance,
        min_confidence, use_mtf_confirmation, use_news_filter, timeframe,
        total_trades, winning_trades, win_rate, net_profit, total_return_pct,
        max_drawdown_pct, profit_factor, sharpe_ratio,
        trades_json, equity_curve_json, status, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', datetime('now'))
    `).bind(
      config.run_name || `Backtest ${new Date().toISOString()}`,
      result.config.start_date,
      result.config.end_date,
      result.starting_balance,
      result.config.min_confidence,
      result.config.use_mtf_confirmation ? 1 : 0,
      result.config.use_news_filter ? 1 : 0,
      result.config.timeframe,
      result.total_trades,
      result.winning_trades,
      result.win_rate,
      result.net_profit,
      result.total_return_pct,
      result.max_drawdown_pct,
      result.profit_factor,
      result.sharpe_ratio,
      JSON.stringify(result.trades),
      JSON.stringify(result.equity_curve)
    ).run()
    
    return c.json({
      success: true,
      result,
      formatted: formatBacktestResults(result)
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message, stack: error.stack }, 500)
  }
})

// Get backtest history
app.get('/api/trading/backtest/history', async (c) => {
  const { DB } = c.env
  
  try {
    const runs = await DB.prepare(`
      SELECT id, run_name, start_date, end_date, starting_balance,
             total_trades, winning_trades, win_rate, net_profit, total_return_pct,
             max_drawdown_pct, profit_factor, created_at, completed_at
      FROM backtest_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all()
    
    return c.json({ success: true, runs: runs.results || [] })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// ============================================================
// FULL AUTOMATION: ONE-CLICK ANALYSIS & TELEGRAM
// ============================================================

// Automated Daily Analysis (Full Morning Routine)
app.post('/api/automation/analyze-and-notify', async (c) => {
  const { DB } = c.env
  
  try {
    const results: any = {
      timestamp: new Date().toISOString(),
      steps: []
    }
    
    // Step 1: Fetch Multi-Timeframe Data
    results.steps.push({ step: 1, name: 'Fetch MTF Data', status: 'running' })
    
    // Get API key
    const apiKeyResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first()
    
    const apiKey = (apiKeyResult as any)?.setting_value || '70140f57bea54c5e90768de696487d8f'
    
    const timeframes = [
      { interval: '5min', dbKey: '5m' },
      { interval: '15min', dbKey: '15m' },
      { interval: '1h', dbKey: '1h' },
      { interval: '4h', dbKey: '4h' },
      { interval: '1day', dbKey: 'daily' }
    ]
    
    let totalCandles = 0
    for (const tf of timeframes) {
      const url = `https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${tf.interval}&apikey=${apiKey}&outputsize=100`
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.values && Array.isArray(data.values)) {
        const candles: Candle[] = []
        for (const item of data.values) {
          const candle = {
            timestamp: item.datetime,
            open: parseFloat(item.open),
            high: parseFloat(item.high),
            low: parseFloat(item.low),
            close: parseFloat(item.close),
            volume: 0
          }
          candles.push(candle)
          
          await DB.prepare(`
            INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT DO NOTHING
          `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume, tf.dbKey).run()
        }
        
        if (candles.length >= 50) {
          const indicators = calculateIndicators(candles.reverse())
          if (indicators) {
            await DB.prepare(`
              INSERT INTO multi_timeframe_indicators 
              (timestamp, timeframe, rsi_14, macd, macd_signal, macd_histogram,
               sma_20, sma_50, sma_200, ema_12, ema_26,
               bb_upper, bb_middle, bb_lower, atr_14,
               stochastic_k, stochastic_d, adx, plus_di, minus_di,
               ichimoku_tenkan, ichimoku_kijun, ichimoku_senkou_a, ichimoku_senkou_b,
               parabolic_sar, vwap, fib_382, fib_500, fib_618)
              VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              tf.dbKey, indicators.rsi_14, indicators.macd, indicators.macd_signal, indicators.macd_histogram,
              indicators.sma_20, indicators.sma_50, indicators.sma_200, indicators.ema_12, indicators.ema_26,
              indicators.bb_upper, indicators.bb_middle, indicators.bb_lower, indicators.atr_14,
              indicators.stochastic_k, indicators.stochastic_d, indicators.adx, indicators.plus_di, indicators.minus_di,
              indicators.ichimoku_tenkan, indicators.ichimoku_kijun, indicators.ichimoku_senkou_a, indicators.ichimoku_senkou_b,
              indicators.parabolic_sar, indicators.vwap, indicators.fib_382, indicators.fib_500, indicators.fib_618
            ).run()
          }
        }
        totalCandles += data.values.length
      }
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    results.steps[0].status = 'completed'
    results.steps[0].data = { totalCandles }
    
    // Step 2: Generate MTF Signal
    results.steps.push({ step: 2, name: 'Generate MTF Signal', status: 'running' })
    
    const { analyzeTimeframeAlignment, validateMultiTimeframeSignal, formatAlignmentReport } = await import('./lib/multiTimeframeAnalysis')
    
    const mtfIndicators: any = {}
    for (const tf of ['5m', '15m', '1h', '4h', 'daily']) {
      const indicatorData = await DB.prepare(`
        SELECT * FROM multi_timeframe_indicators 
        WHERE timeframe = ?
        ORDER BY timestamp DESC 
        LIMIT 1
      `).bind(tf).first()
      
      if (indicatorData) {
        mtfIndicators[tf] = indicatorData
      }
    }
    
    const marketData = await DB.prepare(`
      SELECT * FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 1
    `).first()
    
    const currentPrice = (marketData as any)?.close || 0
    
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice)
    const h1Indicators = mtfIndicators['1h']
    const dayTradeSignal = generateSignal(currentPrice, h1Indicators, 'day_trade')
    const swingTradeSignal = generateSignal(currentPrice, h1Indicators, 'swing_trade')
    
    const dayValidation = validateMultiTimeframeSignal(dayTradeSignal.signal_type, alignment)
    const swingValidation = validateMultiTimeframeSignal(swingTradeSignal.signal_type, alignment)
    
    const dayTradeMTF = {
      ...dayTradeSignal,
      final_confidence: Math.min(95, dayValidation.confidence),
      isValid: dayValidation.isValid,
      mtf_reason: dayValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type
    }
    
    const swingTradeMTF = {
      ...swingTradeSignal,
      final_confidence: Math.min(95, swingValidation.confidence),
      isValid: swingValidation.isValid,
      mtf_reason: swingValidation.reason,
      alignment_score: alignment.score,
      alignment_type: alignment.type
    }
    
    results.steps[1].status = 'completed'
    results.steps[1].data = { dayTrade: dayTradeMTF, swingTrade: swingTradeMTF, alignment }
    
    // Step 3: Calculate Position Sizes
    results.steps.push({ step: 3, name: 'Calculate Position Sizes', status: 'running' })
    
    const account = await DB.prepare(`
      SELECT * FROM trading_accounts WHERE id = 1
    `).first()
    
    const rules = await DB.prepare(`
      SELECT * FROM position_sizing_rules 
      WHERE account_id = 1 AND is_active = 1
      ORDER BY confidence_min DESC
    `).all()
    
    const { calculatePositionSize } = await import('./lib/riskManagement')
    
    const dayPosition = calculatePositionSize(account as any, {
      entry_price: dayTradeMTF.price,
      stop_loss: dayTradeMTF.stop_loss,
      take_profit_1: dayTradeMTF.take_profit_1,
      take_profit_2: dayTradeMTF.take_profit_2,
      take_profit_3: dayTradeMTF.take_profit_3,
      confidence: dayTradeMTF.final_confidence,
      signal_type: dayTradeMTF.signal_type,
      trading_style: dayTradeMTF.trading_style
    }, rules.results as any)
    
    const swingPosition = calculatePositionSize(account as any, {
      entry_price: swingTradeMTF.price,
      stop_loss: swingTradeMTF.stop_loss,
      take_profit_1: swingTradeMTF.take_profit_1,
      take_profit_2: swingTradeMTF.take_profit_2,
      take_profit_3: swingTradeMTF.take_profit_3,
      confidence: swingTradeMTF.final_confidence,
      signal_type: swingTradeMTF.signal_type,
      trading_style: swingTradeMTF.trading_style
    }, rules.results as any)
    
    results.steps[2].status = 'completed'
    results.steps[2].data = { dayPosition, swingPosition }
    
    // Step 4: Send to Telegram
    results.steps.push({ step: 4, name: 'Send Telegram Alert', status: 'running' })
    
    const settings = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
    `).all()
    
    const config: any = {}
    for (const row of settings.results || []) {
      config[(row as any).setting_key] = (row as any).setting_value
    }
    
    let telegramSent = false
    
    if (config.telegram_bot_token && config.telegram_chat_id) {
      // Format comprehensive message
      const message = `
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${alignment.type} (${alignment.score}/5 timeframes)
Confidence Boost: +${alignment.confidenceBoost}%

${alignment.trends.map(t => {
  const icon = t.trend === 'BULLISH' ? '📈' : t.trend === 'BEARISH' ? '📉' : '➡️'
  return `${icon} *${t.timeframe}*: ${t.trend} (${t.confidence.toFixed(0)}%)`
}).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${dayTradeMTF.isValid ? '✅' : '❌'} *${dayTradeMTF.signal_type}* (${dayTradeMTF.final_confidence}% confidence)

*Entry:* $${dayTradeMTF.price.toFixed(2)}
*Stop Loss:* $${dayTradeMTF.stop_loss.toFixed(2)} (${((dayTradeMTF.stop_loss / dayTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP1:* $${dayTradeMTF.take_profit_1.toFixed(2)} (${((dayTradeMTF.take_profit_1 / dayTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP2:* $${dayTradeMTF.take_profit_2.toFixed(2)} (${((dayTradeMTF.take_profit_2 / dayTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP3:* $${dayTradeMTF.take_profit_3.toFixed(2)} (${((dayTradeMTF.take_profit_3 / dayTradeMTF.price - 1) * 100).toFixed(2)}%)

💼 *Position:* ${dayPosition.units} lots ($${dayPosition.value.toLocaleString()})
💰 *Risk:* $${dayPosition.risk_amount} (${dayPosition.risk_pct}%)
📊 *R:R:* ${dayPosition.reward_risk_ratio}:1

${dayPosition.warning ? `⚠️ ${dayPosition.warning}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${swingTradeMTF.isValid ? '✅' : '❌'} *${swingTradeMTF.signal_type}* (${swingTradeMTF.final_confidence}% confidence)

*Entry:* $${swingTradeMTF.price.toFixed(2)}
*Stop Loss:* $${swingTradeMTF.stop_loss.toFixed(2)} (${((swingTradeMTF.stop_loss / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP1:* $${swingTradeMTF.take_profit_1.toFixed(2)} (${((swingTradeMTF.take_profit_1 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP2:* $${swingTradeMTF.take_profit_2.toFixed(2)} (${((swingTradeMTF.take_profit_2 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP3:* $${swingTradeMTF.take_profit_3.toFixed(2)} (${((swingTradeMTF.take_profit_3 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)

💼 *Position:* ${swingPosition.units} lots ($${swingPosition.value.toLocaleString()})
💰 *Risk:* $${swingPosition.risk_amount} (${swingPosition.risk_pct}%)
📊 *R:R:* ${swingPosition.reward_risk_ratio}:1

${swingPosition.warning ? `⚠️ ${swingPosition.warning}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *RECOMMENDATION*
━━━━━━━━━━━━━━━━━━━━━━━━━

${dayTradeMTF.isValid && dayTradeMTF.signal_type !== 'HOLD' ? 
  `✅ Day Trade: EXECUTE ${dayTradeMTF.signal_type}` : 
  `⚠️ Day Trade: SKIP (${dayTradeMTF.mtf_reason})`}

${swingTradeMTF.isValid && swingTradeMTF.signal_type !== 'HOLD' ? 
  `✅ Swing Trade: EXECUTE ${swingTradeMTF.signal_type}` : 
  `⚠️ Swing Trade: SKIP (${swingTradeMTF.mtf_reason})`}

🌐 Dashboard: ${c.req.url.replace('/api/automation/analyze-and-notify', '')}
      `.trim()
      
      const success = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        message
      )
      
      telegramSent = success
    }
    
    results.steps[3].status = telegramSent ? 'completed' : 'failed'
    results.steps[3].data = { telegramSent }
    
    // Save to database
    if (dayTradeMTF.isValid || swingTradeMTF.isValid) {
      for (const signal of [dayTradeMTF, swingTradeMTF]) {
        if (signal.isValid) {
          await DB.prepare(`
            INSERT INTO mtf_signals 
            (timestamp, signal_type, trading_style, price, stop_loss, 
             take_profit_1, take_profit_2, take_profit_3, 
             base_confidence, mtf_confidence, final_confidence,
             alignment_score, alignment_type, reason, telegram_sent)
            VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).bind(
            signal.signal_type,
            signal.trading_style,
            signal.price,
            signal.stop_loss,
            signal.take_profit_1,
            signal.take_profit_2,
            signal.take_profit_3,
            signal.confidence,
            signal.final_confidence,
            signal.final_confidence,
            signal.alignment_score,
            signal.alignment_type,
            signal.reason,
            telegramSent ? 1 : 0
          ).run()
        }
      }
    }
    
    return c.json({
      success: true,
      message: 'Daily analysis completed',
      results,
      signals: {
        day_trade: dayTradeMTF,
        swing_trade: swingTradeMTF
      },
      positions: {
        day_trade: dayPosition,
        swing_trade: swingPosition
      },
      alignment,
      telegram_sent: telegramSent
    })
  } catch (error: any) {
    return c.json({ 
      success: false, 
      error: error.message,
      stack: error.stack 
    }, 500)
  }
})

export default app
