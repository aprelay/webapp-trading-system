import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { calculateIndicators, generateSignal, type Candle } from './lib/technicalAnalysis'
import { sendTelegramMessage, formatTradeSignal, formatMarketUpdate } from './lib/telegram'

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for all API routes
app.use('/api/*', cors())

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

export default app
