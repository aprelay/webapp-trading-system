import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { calculateIndicators, generateSignal, generateSignalWithLiquidity, type Candle } from './lib/technicalAnalysis'
import { sendTelegramMessage, formatTradeSignal, formatMarketUpdate } from './lib/telegram'
import enhancedSignalsRouter from './routes/enhancedSignals'
import simpleSignalsRouter from './routes/simpleSignals'
import autoScannerRouter from './routes/autoScanner'
import tradesRouter from './routes/trades'
import calendarRouter from './routes/calendar'
import backtestRouter from './routes/backtest'
import telegramCommandsRouter from './routes/telegramCommands'
import aiAnalysisRouter from './routes/aiAnalysis'
import monitoringRouter from './routes/monitoring'
import microTradeScannerRouter from './routes/microTradeScanner'

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for all API routes
app.use('/api/*', cors())

// Mount API routers
app.route('/api/signals/enhanced', enhancedSignalsRouter)
app.route('/api/signals/simple', simpleSignalsRouter)
app.route('/api/scanner', autoScannerRouter)
app.route('/api/trades', tradesRouter)
app.route('/api/calendar', calendarRouter)
app.route('/api/backtest', backtestRouter)
app.route('/api/telegram', telegramCommandsRouter)
app.route('/api/ai', aiAnalysisRouter)
app.route('/api/monitoring', monitoringRouter)
app.route('/api/micro', microTradeScannerRouter)

// Homepage - Dashboard
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <title>Gold/USD Trading System (XAU/USD) v2.0</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            // Suppress Tailwind CDN warning in production
            if (window.tailwind) {
                tailwind.config = { corePlugins: { preflight: true } }
            }
        </script>
    </head>
    <body class="bg-gray-900 text-gray-100">
        <div class="min-h-screen">
            <!-- Header -->
            <header class="bg-gray-800 shadow-lg border-b border-yellow-500">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-chart-line text-yellow-500 text-3xl"></i>
                            <div>
                                <h1 class="text-2xl font-bold text-yellow-500">Gold/USD Trading System (XAU/USD)</h1>
                                <p class="text-xs text-gray-400 mt-1">
                                    <i class="fas fa-sync-alt fa-spin text-green-400 mr-1" id="autoRefreshIcon"></i>
                                    Auto-refresh: <span id="lastUpdated" class="text-yellow-400">--</span> 
                                    <span class="text-gray-500 ml-2">(every 30s)</span>
                                </p>
                            </div>
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

                <!-- 5M-Assassin Scanner Panel (NEW!) -->
                <div class="bg-gradient-to-r from-green-900 to-emerald-800 p-6 rounded-lg border-2 border-green-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-crosshairs mr-3"></i>🎯 5M-Assassin Scanner (Every 5 Minutes)
                            </h2>
                            <p class="text-green-100 mb-4">
                                7-Layer Analysis • A/B/C Grading • Instant Telegram Alerts for A-Grade Setups • Auto-running in background
                            </p>
                            <div id="scannerStatus" class="text-sm text-green-200">
                                🤖 Auto-scanning every 5 minutes... Click button to scan NOW →
                            </div>
                        </div>
                        <button 
                            id="scan5mButton"
                            onclick="run5MScan()" 
                            class="bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class="fas fa-bolt mr-2"></i>
                            <span id="scan5mButtonText">Scan 5M NOW!</span>
                        </button>
                    </div>
                    
                    <!-- 5M Scan Results Display -->
                    <div id="scan5mResults" class="mt-6 hidden">
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-lg font-bold text-white mb-3">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>5M Scan Complete
                            </h3>
                            <div id="scan5mDetails" class="space-y-2 text-sm text-green-100">
                                <!-- Results will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Trading Hours Clock (NEW!) -->
                <div class="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg border-2 border-purple-500 mb-6 shadow-xl">
                    <h2 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-clock mr-3"></i>🌍 Global Market Hours
                    </h2>
                    <p class="text-purple-100 mb-4 text-sm">
                        Gold/USD trades 24 hours Monday-Friday. Market opens Sunday 5:00 PM EST, closes Friday 5:00 PM EST.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Asia Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🌏 Asia/Tokyo
                                </h3>
                                <span id="asiaStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="asiaClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">JST (UTC+9)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 00:00 - 09:00 JST</div>
                                <div id="asiaNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- London Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇬🇧 London
                                </h3>
                                <span id="londonStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="londonClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">GMT (UTC+0)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 16:30 GMT</div>
                                <div id="londonNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                        
                        <!-- New York Session -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold text-white">
                                    🇺🇸 New York
                                </h3>
                                <span id="newYorkStatus" class="px-2 py-1 rounded text-xs font-bold bg-gray-700 text-gray-300">
                                    --
                                </span>
                            </div>
                            <div class="text-center mb-2">
                                <div id="newYorkClock" class="text-3xl font-mono font-bold text-white">
                                    --:--:--
                                </div>
                                <div class="text-sm text-purple-200 mt-1">EST (UTC-5)</div>
                            </div>
                            <div class="text-xs text-purple-200 mt-3 space-y-1">
                                <div>Trading: 08:00 - 17:00 EST</div>
                                <div id="newYorkNextOpen" class="font-semibold">--</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Overall Market Status -->
                    <div class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-sm font-bold text-purple-200">Overall Market Status</h3>
                                <div id="marketOverallStatus" class="text-lg font-bold text-white mt-1">
                                    <i class="fas fa-circle-notch fa-spin"></i> Checking...
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-xs text-purple-200">Next Market Event</div>
                                <div id="nextMarketEvent" class="text-sm font-bold text-white mt-1">--</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- System Health Monitoring Panel (NEW!) -->
                <div class="bg-gradient-to-r from-blue-900 to-indigo-800 p-6 rounded-lg border-2 border-blue-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-heartbeat mr-3"></i>🔍 System Health Monitor
                            </h2>
                            <p class="text-blue-100 mb-2">
                                Real-time health checks • 5 Endpoints • 7 Data Sources • Auto-monitoring every 5 minutes
                            </p>
                            <div id="monitoringStatus" class="text-sm text-blue-200">
                                <i class="fas fa-spinner fa-spin mr-2"></i>Loading health status...
                            </div>
                        </div>
                        <button 
                            id="monitorButton"
                            onclick="refreshMonitoring()" 
                            class="bg-white hover:bg-blue-50 text-blue-900 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105">
                            <i class="fas fa-sync mr-2"></i>
                            <span>Check Now</span>
                        </button>
                    </div>
                    
                    <!-- Health Status Display -->
                    <div id="monitoringResults" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Overall Status -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Overall Status</h3>
                            <div id="overallStatus" class="text-2xl font-bold text-white">
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </div>
                        </div>
                        
                        <!-- Endpoints Health -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Endpoints</h3>
                            <div id="endpointsHealth" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Healthy:</span>
                                    <span id="healthyCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Down:</span>
                                    <span id="downCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="totalCount" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Data Freshness -->
                        <div class="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <h3 class="text-sm font-bold text-blue-200 mb-2">Data Freshness</h3>
                            <div id="dataFreshness" class="text-sm text-blue-100">
                                <div class="flex justify-between mb-1">
                                    <span>Fresh:</span>
                                    <span id="freshCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span>Stale:</span>
                                    <span id="staleCount" class="font-bold">--</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total:</span>
                                    <span id="dataTotal" class="font-bold">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Detailed Endpoint Status -->
                    <div id="endpointDetails" class="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm hidden">
                        <h3 class="text-sm font-bold text-blue-200 mb-3">Endpoint Details</h3>
                        <div id="endpointList" class="space-y-2 text-sm">
                            <!-- Will be populated by JavaScript -->
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

                <!-- Micro Trade Panel (NEW!) -->
                <div class="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg border-2 border-cyan-500 mb-6 shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-2xl font-bold text-white">
                                <i class="fas fa-bolt mr-3"></i>⚡ Micro Day Trade System
                            </h2>
                            <p class="text-cyan-100 mt-2">
                                5-Minute Signals • 30-35 Signals/Day • 5 Setup Types • Auto Position Sizing
                            </p>
                        </div>
                        <button onclick="sendMicroTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>Test Alert
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Today's Signals</p>
                            <p id="microSignalsToday" class="text-2xl font-bold text-white">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Win Rate</p>
                            <p id="microWinRate" class="text-2xl font-bold text-green-400">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Daily P&L</p>
                            <p id="microDailyPnL" class="text-2xl font-bold">--</p>
                        </div>
                        <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p class="text-cyan-300 text-sm">Status</p>
                            <p id="microStatus" class="text-sm font-bold text-green-400">ACTIVE</p>
                        </div>
                    </div>
                    <div class="bg-black bg-opacity-30 p-4 rounded-lg">
                        <h3 class="text-white font-bold mb-3">Recent Micro Signals:</h3>
                        <div id="microSignalsList" class="space-y-2 max-h-60 overflow-y-auto">
                            <p class="text-gray-400 text-sm">Loading micro signals...</p>
                        </div>
                    </div>
                </div>

                <!-- Trading Signals -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <!-- Recent Signals -->
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 class="text-xl font-bold mb-4 text-yellow-500">
                            <i class="fas fa-bell mr-2"></i>Recent Day/Swing Signals
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
                        <button id="testAlertBtn" onclick="sendTestAlert()" class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert
                        </button>
                        <button id="fetchBtn" onclick="fetchMarketData()" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-download mr-2"></i>Fetch Market Data
                        </button>
                        <button id="generateBtn" onclick="generateSignalNow()" class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-chart-line mr-2"></i>Generate Signal NOW
                        </button>
                        <button id="enhancedBtn" onclick="generateEnhancedSignal()" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal
                        </button>
                        <button onclick="runBacktest()" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                            <i class="fas fa-history mr-2"></i>📊 Run Backtest
                        </button>
                        <button onclick="runAIAnalysis(event)" class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg" id="aiAnalysisBtn">
                            <i class="fas fa-brain mr-2"></i>🤖 AI Market Analysis
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

                <!-- AI Market Analysis Panel -->
                <div id="aiAnalysisResults" class="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg border-2 border-cyan-400 mt-6 hidden">
                    <h3 class="text-2xl font-bold text-white mb-4">
                        <i class="fas fa-brain mr-2"></i>🤖 AI Market Analysis
                    </h3>
                    <div id="aiAnalysisDetails" class="space-y-4 text-white">
                        <!-- Analysis will be inserted here -->
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
            
            // ⚡ Helper function: Native fetch with timeout
            async function fetchWithTimeout(url, options = {}, timeoutMs = 30000) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
                
                try {
                    const response = await fetch(url, {
                        ...options,
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    return await response.json();
                } catch (error) {
                    clearTimeout(timeoutId);
                    throw error;
                }
            }
            
            // Update trading clocks
            function updateTradingClocks() {
                const now = new Date();
                
                // Asia/Tokyo (UTC+9)
                const asiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
                const asiaHour = asiaTime.getHours();
                const asiaDay = asiaTime.getDay(); // 0=Sunday, 6=Saturday
                document.getElementById('asiaClock').textContent = asiaTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // Asia trading hours: 00:00-09:00 JST (Mon-Fri)
                const asiaOpen = asiaDay >= 1 && asiaDay <= 5 && asiaHour >= 0 && asiaHour < 9;
                const asiaWeekend = asiaDay === 0 || asiaDay === 6;
                
                if (asiaWeekend) {
                    document.getElementById('asiaStatus').textContent = '🔴 CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Monday 00:00 JST';
                } else if (asiaOpen) {
                    document.getElementById('asiaStatus').textContent = '🟢 OPEN';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(asiaTime);
                    closeTime.setHours(9, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - asiaTime) / 60000);
                    document.getElementById('asiaNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('asiaStatus').textContent = '⚪ CLOSED';
                    document.getElementById('asiaStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    const nextOpen = new Date(asiaTime);
                    if (asiaHour >= 9) {
                        nextOpen.setDate(nextOpen.getDate() + 1);
                    }
                    nextOpen.setHours(0, 0, 0, 0);
                    document.getElementById('asiaNextOpen').textContent = 'Opens: Tomorrow 00:00 JST';
                }
                
                // London (UTC+0)
                const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
                const londonHour = londonTime.getHours();
                const londonDay = londonTime.getDay();
                document.getElementById('londonClock').textContent = londonTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // London trading hours: 08:00-16:30 GMT (Mon-Fri)
                const londonOpen = londonDay >= 1 && londonDay <= 5 && 
                    ((londonHour >= 8 && londonHour < 16) || (londonHour === 16 && londonTime.getMinutes() < 30));
                const londonWeekend = londonDay === 0 || londonDay === 6;
                
                if (londonWeekend) {
                    document.getElementById('londonStatus').textContent = '🔴 CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('londonNextOpen').textContent = 'Opens: Monday 08:00 GMT';
                } else if (londonOpen) {
                    document.getElementById('londonStatus').textContent = '🟢 OPEN';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(londonTime);
                    closeTime.setHours(16, 30, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - londonTime) / 60000);
                    document.getElementById('londonNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('londonStatus').textContent = '⚪ CLOSED';
                    document.getElementById('londonStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (londonHour < 8) {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Today 08:00 GMT';
                    } else {
                        document.getElementById('londonNextOpen').textContent = 'Opens: Tomorrow 08:00 GMT';
                    }
                }
                
                // New York (UTC-5)
                const nyTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
                const nyHour = nyTime.getHours();
                const nyDay = nyTime.getDay();
                document.getElementById('newYorkClock').textContent = nyTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
                });
                
                // New York trading hours: 08:00-17:00 EST (Mon-Fri)
                const nyOpen = nyDay >= 1 && nyDay <= 5 && nyHour >= 8 && nyHour < 17;
                const nyWeekend = nyDay === 0 || nyDay === 6;
                
                if (nyWeekend) {
                    document.getElementById('newYorkStatus').textContent = '🔴 CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-red-600 text-white';
                    document.getElementById('newYorkNextOpen').textContent = 'Opens: Monday 08:00 EST';
                } else if (nyOpen) {
                    document.getElementById('newYorkStatus').textContent = '🟢 OPEN';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-green-600 text-white';
                    const closeTime = new Date(nyTime);
                    closeTime.setHours(17, 0, 0, 0);
                    const minutesUntilClose = Math.floor((closeTime - nyTime) / 60000);
                    document.getElementById('newYorkNextOpen').textContent = \`Closes in \${Math.floor(minutesUntilClose / 60)}h \${minutesUntilClose % 60}m\`;
                } else {
                    document.getElementById('newYorkStatus').textContent = '⚪ CLOSED';
                    document.getElementById('newYorkStatus').className = 'px-2 py-1 rounded text-xs font-bold bg-gray-600 text-white';
                    if (nyHour < 8) {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Today 08:00 EST';
                    } else {
                        document.getElementById('newYorkNextOpen').textContent = 'Opens: Tomorrow 08:00 EST';
                    }
                }
                
                // Overall market status
                const anyOpen = asiaOpen || londonOpen || nyOpen;
                const allWeekend = asiaWeekend && londonWeekend && nyWeekend;
                
                if (allWeekend) {
                    document.getElementById('marketOverallStatus').innerHTML = '🔴 <i class="fas fa-calendar-times mr-2"></i>Weekend - All Markets Closed';
                    document.getElementById('nextMarketEvent').textContent = 'Opens: Monday';
                } else if (anyOpen) {
                    const openMarkets = [];
                    if (asiaOpen) openMarkets.push('Asia');
                    if (londonOpen) openMarkets.push('London');
                    if (nyOpen) openMarkets.push('New York');
                    document.getElementById('marketOverallStatus').innerHTML = \`🟢 <i class="fas fa-chart-line mr-2"></i>\${openMarkets.join(' + ')} Open\`;
                    
                    // Find next closing event
                    const events = [];
                    if (asiaOpen) events.push({ name: 'Asia closes', time: new Date(asiaTime).setHours(9, 0, 0, 0) });
                    if (londonOpen) events.push({ name: 'London closes', time: new Date(londonTime).setHours(16, 30, 0, 0) });
                    if (nyOpen) events.push({ name: 'NY closes', time: new Date(nyTime).setHours(17, 0, 0, 0) });
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h \${minutesUntil % 60}m\`;
                    }
                } else {
                    document.getElementById('marketOverallStatus').innerHTML = '⚪ <i class="fas fa-moon mr-2"></i>All Markets Closed';
                    
                    // Find next opening event
                    const events = [];
                    if (!asiaWeekend && asiaHour >= 9) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(24, 0, 0, 0) });
                    } else if (!asiaWeekend) {
                        events.push({ name: 'Asia opens', time: new Date(asiaTime).setHours(0, 0, 0, 0) });
                    }
                    if (!londonWeekend && londonHour < 8) {
                        events.push({ name: 'London opens', time: new Date(londonTime).setHours(8, 0, 0, 0) });
                    }
                    if (!nyWeekend && nyHour < 8) {
                        events.push({ name: 'NY opens', time: new Date(nyTime).setHours(8, 0, 0, 0) });
                    }
                    
                    if (events.length > 0) {
                        events.sort((a, b) => a.time - b.time);
                        const nextEvent = events[0];
                        const minutesUntil = Math.floor((nextEvent.time - now) / 60000);
                        if (minutesUntil > 60) {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${Math.floor(minutesUntil / 60)}h\`;
                        } else {
                            document.getElementById('nextMarketEvent').textContent = \`\${nextEvent.name} in \${minutesUntil}m\`;
                        }
                    } else {
                        document.getElementById('nextMarketEvent').textContent = 'Opens Monday';
                    }
                }
            }
            
            // Initialize on page load
            async function init() {
                await loadSettings();
                await refreshData();
                await refreshMonitoring(); // Load monitoring on startup
                updateTradingClocks(); // Initialize clocks
                setInterval(refreshData, 30000); // Refresh every 30 seconds ⚡ FASTER AUTO-REFRESH
                setInterval(refreshMonitoring, 300000); // Refresh monitoring every 5 minutes
                setInterval(updateTradingClocks, 1000); // Update clocks every second
            }

            async function refreshMonitoring() {
                try {
                    const statusDiv = document.getElementById('monitoringStatus');
                    const button = document.getElementById('monitorButton');
                    
                    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Checking system health...';
                    button.disabled = true;
                    
                    const response = await fetch('/api/monitoring/status');
                    const data = await response.json();
                    
                    if (data.success) {
                        // Update overall status
                        const overallDiv = document.getElementById('overallStatus');
                        const statusColor = data.overall_status === 'healthy' ? 'text-green-400' : 'text-yellow-400';
                        const statusIcon = data.overall_status === 'healthy' ? 'fa-check-circle' : 'fa-exclamation-triangle';
                        overallDiv.innerHTML = '<i class="fas ' + statusIcon + ' ' + statusColor + '"></i> <span class="' + statusColor + '">' + data.overall_status.toUpperCase() + '</span>';
                        
                        // Update endpoints
                        const healthyEndpoints = (data.endpoints || []).filter(e => e.status === 'healthy').length;
                        const downEndpoints = (data.endpoints || []).filter(e => e.status === 'down').length;
                        const totalEndpoints = (data.endpoints || []).length;
                        
                        document.getElementById('healthyCount').textContent = healthyEndpoints;
                        document.getElementById('downCount').textContent = downEndpoints;
                        document.getElementById('totalCount').textContent = totalEndpoints;
                        
                        // Update data freshness
                        const freshSources = (data.data_sources || []).filter(d => d.is_stale === 0).length;
                        const staleSources = (data.data_sources || []).filter(d => d.is_stale === 1).length;
                        const totalSources = (data.data_sources || []).length;
                        
                        document.getElementById('freshCount').textContent = freshSources;
                        document.getElementById('staleCount').textContent = staleSources;
                        document.getElementById('dataTotal').textContent = totalSources;
                        
                        // Update status message
                        const emoji = data.overall_status === 'healthy' ? '✅' : '⚠️';
                        statusDiv.innerHTML = emoji + ' System ' + data.overall_status + ' • ' + healthyEndpoints + '/' + totalEndpoints + ' endpoints healthy • ' + freshSources + '/' + totalSources + ' data fresh • Last checked: ' + new Date().toLocaleTimeString();
                        
                        // Show detailed endpoint status
                        if (data.endpoints && data.endpoints.length > 0) {
                            const detailsDiv = document.getElementById('endpointDetails');
                            const listDiv = document.getElementById('endpointList');
                            
                            let html = '';
                            data.endpoints.forEach(endpoint => {
                                const statusIcon = endpoint.status === 'healthy' ? '✅' : '❌';
                                const statusColor = endpoint.status === 'healthy' ? 'text-green-400' : 'text-red-400';
                                html += '<div class="flex justify-between items-center py-1 border-b border-blue-700">' +
                                    '<span class="' + statusColor + '">' + statusIcon + ' ' + endpoint.endpoint_name + '</span>' +
                                    '<span class="text-blue-200">' + endpoint.response_time_ms + 'ms</span>' +
                                    '</div>';
                            });
                            
                            listDiv.innerHTML = html;
                            detailsDiv.classList.remove('hidden');
                        }
                    } else {
                        statusDiv.innerHTML = '❌ Error loading monitoring data';
                    }
                    
                    button.disabled = false;
                } catch (error) {
                    console.error('Error refreshing monitoring:', error);
                    document.getElementById('monitoringStatus').innerHTML = '❌ Error loading monitoring data';
                    document.getElementById('monitorButton').disabled = false;
                }
            }

            async function refreshData() {
                try {
                    // Flash the refresh icon
                    const refreshIcon = document.getElementById('autoRefreshIcon');
                    if (refreshIcon) {
                        refreshIcon.classList.add('fa-spin');
                    }
                    
                    // Helper function to fetch with timeout
                    const fetchWithTimeout = async (url, timeout = 10000) => {
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), timeout);
                        
                        try {
                            const response = await fetch(url, { signal: controller.signal });
                            clearTimeout(timeoutId);
                            return await response.json();
                        } catch (error) {
                            clearTimeout(timeoutId);
                            console.error('Error fetching ' + url + ':', error.message);
                            throw error;
                        }
                    };
                    
                    // ⚡ OPTIMIZED: Load all data in parallel with 10-second timeout per request
                    // Cron job handles fresh data fetching every minute
                    // Dashboard just displays cached data instantly
                    const [signalsRes, marketRes, indicatorsRes] = await Promise.all([
                        fetchWithTimeout('/api/signals/recent', 10000).catch(() => ({ signals: [] })),
                        fetchWithTimeout('/api/market/latest', 10000).catch(() => ({ data: [] })),
                        fetchWithTimeout('/api/indicators/latest', 10000).catch(() => ({ indicators: null }))
                    ]);
                    
                    // Display all results
                    displayRecentSignals(signalsRes.signals);
                    
                    if (marketRes.data && marketRes.data.length > 0) {
                        updateDashboard(marketRes.data);
                    }

                    if (indicatorsRes.indicators) {
                        displayIndicators(indicatorsRes.indicators);
                    }
                    
                    // Load Micro Trade data
                    await loadMicroTradeData();
                    
                    // Update last refreshed timestamp
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        const now = new Date();
                        lastUpdated.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                        lastUpdated.className = 'text-green-400';
                        setTimeout(() => {
                            if (lastUpdated) lastUpdated.className = 'text-yellow-400';
                        }, 2000);
                    }
                    
                    // Stop spinning icon
                    if (refreshIcon) {
                        setTimeout(() => refreshIcon.classList.remove('fa-spin'), 500);
                    }
                } catch (error) {
                    console.error('Error refreshing data:', error);
                    // Show user-friendly error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50';
                    errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Error loading data. Retrying...';
                    document.body.appendChild(errorDiv);
                    setTimeout(() => errorDiv.remove(), 3000);
                    
                    // Update timestamp to show error
                    const lastUpdated = document.getElementById('lastUpdated');
                    if (lastUpdated) {
                        lastUpdated.textContent = 'Error - retrying...';
                        lastUpdated.className = 'text-red-400';
                    }
                }
            }

            // Manual fetch function for "Fetch Data" button - Using Native Fetch API
            async function fetchMarketData() {
                const startTime = Date.now();
                console.log('[FETCH] Starting at', new Date().toISOString());
                
                try {
                    document.getElementById('fetchBtn').disabled = true;
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching...';
                    
                    console.log('[FETCH] Sending POST request to /api/market/fetch using native fetch()');
                    
                    // Use native fetch with AbortController for timeout
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
                    
                    const response = await fetch('/api/market/fetch', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            symbol: 'XAU/USD',
                            interval: '1h'
                        }),
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) {
                        throw new Error('HTTP ' + response.status + ': ' + response.statusText);
                    }
                    
                    const data = await response.json();
                    
                    const fetchTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.log('[FETCH] Success! Time:', fetchTime, 'seconds');
                    console.log('[FETCH] Response:', data);
                    
                    // Refresh dashboard with new data
                    await refreshData();
                    
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    
                    // Show success message with timing
                    const successMsg = document.createElement('div');
                    successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
                    successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Data fetched in ' + fetchTime + 's!';
                    document.body.appendChild(successMsg);
                    setTimeout(() => successMsg.remove(), 3000);
                    
                } catch (error) {
                    const errorTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    console.error('[FETCH] Error after', errorTime, 'seconds:', error);
                    
                    let errorMsg = 'Error fetching data (after ' + errorTime + 's): ';
                    if (error.name === 'AbortError') {
                        errorMsg += 'Request timed out after 30 seconds. Your network may be slow or the server is overloaded.';
                    } else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
                        errorMsg += 'Network error. Check your internet connection or try disabling VPN/firewall.';
                    } else {
                        errorMsg += error.message;
                    }
                    
                    console.error('[FETCH] Error type:', error.name);
                    console.error('[FETCH] Error message:', error.message);
                    
                    alert(errorMsg);
                    document.getElementById('fetchBtn').innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } finally {
                    document.getElementById('fetchBtn').disabled = false;
                    console.log('[FETCH] Completed at', new Date().toISOString());
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
                    const res = await fetchWithTimeout('/api/settings');
                    const settings = res.settings;
                    
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
                    await fetchWithTimeout('/api/settings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(settings)
                    });
                    alert('Settings saved successfully!');
                } catch (error) {
                    alert('Error saving settings: ' + error.message);
                }
            }

            async function testTelegram() {
                try {
                    const res = await fetchWithTimeout('/api/telegram/test', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    if (res.success) {
                        alert('✅ Telegram test message sent successfully!');
                    } else {
                        alert('❌ Failed to send Telegram message. Check your settings.');
                    }
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                }
            }

            // Send Test A-Grade Alert
            async function sendTestAlert() {
                try {
                    if (!confirm('📱 This will send a SAMPLE A-grade 5M setup alert to your Telegram.\\n\\nThis is NOT a real trade signal - just a test to show you what A-grade alerts look like.\\n\\nContinue?')) {
                        return;
                    }
                    
                    const btn = document.getElementById('testAlertBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/scanner/test-alert', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    
                    if (res.success) {
                        alert('✅ Test A-grade alert sent!\\n\\nCheck your Telegram to see what real alerts will look like.\\n\\n📊 Grade: A (87%)\\n🟢 Signal: BUY\\n💰 Entry: $4386.50\\n🛡️ Stop: $4401.50\\n🎯 TP1: $4356.20\\n\\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\\n\\n' + res.error + '\\n\\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    const btn = document.getElementById('testAlertBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>📱 Send Test A-Grade Alert';
                    }
                }
            }

            // Micro Trade Test Alert Function
            async function sendMicroTestAlert() {
                try {
                    if (!confirm('⚡ This will send a SAMPLE micro-trade alert to your Telegram.\n\nThis is a TEST alert to show you what micro-trade signals look like.\n\nContinue?')) {
                        return;
                    }
                    
                    const btn = event.target.closest('button');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                    
                    const res = await fetchWithTimeout('/api/micro/test-alert');
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Test Alert';
                    
                    if (res.success) {
                        alert('✅ Test micro-trade alert sent!\n\nCheck your Telegram to see what real micro-trade signals will look like.\n\n⚡ MICRO TRADE #999\n🟢 BUY XAU/USD | 79%\nSetup: BREAKOUT 📈\n\n💰 Entry: $4509.88\n🛡️ Stop: $4501.88 (-8 pips)\n🎯 TP1: $4519.88 (+10 pips)\n\nThis is a SAMPLE alert for testing purposes.');
                    } else {
                        alert('❌ Failed to send test alert.\n\n' + res.message + '\n\nMake sure Telegram Bot Token and Chat ID are configured in Settings.');
                    }
                } catch (error) {
                    alert('❌ Error sending test alert: ' + error.message);
                    const btn = event.target.closest('button');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Test Alert';
                    }
                }
            }

            // Load Micro Trade Data
            async function loadMicroTradeData() {
                try {
                    const today = new Date().toISOString().split('T')[0];
                    
                    // Fetch daily stats
                    const statsRes = await fetchWithTimeout('/api/micro/stats/daily?date=' + today);
                    if (statsRes.success && statsRes.stats) {
                        const stats = statsRes.stats;
                        document.getElementById('microSignalsToday').textContent = stats.total_signals || 0;
                        
                        if (stats.total_signals > 0) {
                            const winRate = ((stats.signals_sent / stats.total_signals) * 100).toFixed(0);
                            document.getElementById('microWinRate').textContent = winRate + '%';
                        } else {
                            document.getElementById('microWinRate').textContent = '--';
                        }
                        
                        document.getElementById('microDailyPnL').textContent = '--'; // TODO: Track P&L
                    } else {
                        // No stats yet - show defaults
                        document.getElementById('microSignalsToday').textContent = '0';
                        document.getElementById('microWinRate').textContent = '--';
                        document.getElementById('microDailyPnL').textContent = '--';
                    }
                    
                    // Fetch recent signals
                    const signalsRes = await fetchWithTimeout('/api/micro/signals/recent?limit=10');
                    if (signalsRes.success && signalsRes.signals) {
                        const listDiv = document.getElementById('microSignalsList');
                        if (signalsRes.signals.length === 0) {
                            listDiv.innerHTML = '<p class="text-gray-400 text-sm">No signals yet. System will start generating signals during market hours.</p>';
                        } else {
                            let html = '';
                            signalsRes.signals.forEach(signal => {
                                const emoji = signal.signal_type === 'BUY' ? '🟢' : '🔴';
                                const color = signal.signal_type === 'BUY' ? 'text-green-400' : 'text-red-400';
                                const timeStr = new Date(signal.timestamp).toLocaleString();
                                
                                html += '<div class="bg-gray-800 p-3 rounded border-l-4 ' + (signal.signal_type === 'BUY' ? 'border-green-500' : 'border-red-500') + '">';
                                html += '<div class="flex justify-between items-start mb-1">';
                                html += '<span class="' + color + ' font-bold">' + emoji + ' ' + signal.signal_type + '</span>';
                                html += '<span class="text-xs text-gray-400">' + signal.setup_type + '</span>';
                                html += '</div>';
                                html += '<div class="text-sm text-gray-300">';
                                html += 'Entry: $' + signal.price.toFixed(2) + ' | Stop: $' + signal.stop_loss.toFixed(2);
                                html += '</div>';
                                html += '<div class="text-xs text-gray-400 mt-1">';
                                html += signal.confidence.toFixed(0) + '% | ' + signal.session + ' | ' + timeStr;
                                html += '</div>';
                                html += '</div>';
                            });
                            listDiv.innerHTML = html;
                        }
                    }
                    
                    // Check limits status
                    const limitsRes = await fetchWithTimeout('/api/micro/signals/recent?limit=1');
                    if (limitsRes.success) {
                        document.getElementById('microStatus').textContent = 'ACTIVE';
                        document.getElementById('microStatus').className = 'text-sm font-bold text-green-400';
                    }
                    
                } catch (error) {
                    console.error('Error loading micro trade data:', error);
                    document.getElementById('microSignalsToday').textContent = '--';
                    document.getElementById('microWinRate').textContent = '--';
                    document.getElementById('microDailyPnL').textContent = '--';
                    document.getElementById('microSignalsList').innerHTML = '<p class="text-red-400 text-sm">Error loading data</p>';
                }
            }

            // 5M-Assassin Scanner Function
            async function run5MScan() {
                try {
                    const btn = document.getElementById('scan5mButton');
                    const btnText = document.getElementById('scan5mButtonText');
                    const statusDiv = document.getElementById('scannerStatus');
                    const resultsDiv = document.getElementById('scan5mResults');
                    const detailsDiv = document.getElementById('scan5mDetails');
                    
                    // Disable button and show loading
                    btn.disabled = true;
                    btnText.innerHTML = 'Scanning...';
                    statusDiv.innerHTML = '⏳ Running 7-layer analysis on 5m timeframe...';
                    resultsDiv.classList.add('hidden');
                    
                    // Call the 5M scanner endpoint
                    const res = await fetchWithTimeout('/api/scanner/scan', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const scan = res.scan_result;
                        
                        // Get emoji for grade
                        const gradeEmoji = scan.grade === 'A+' ? '💎' : 
                                         scan.grade === 'A' ? '⭐' : 
                                         scan.grade === 'B' ? '📊' : '❌';
                        
                        // Get signal color
                        const signalColor = scan.signal === 'BUY' ? 'text-green-400' : 
                                          scan.signal === 'SELL' ? 'text-red-400' : 
                                          'text-gray-400';
                        
                        // Build results HTML
                        let html = '<div class="grid grid-cols-2 gap-4">';
                        
                        // Left column: Grade and Signal
                        html += '<div>';
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">GRADE</p>';
                        html += '<p class="text-3xl font-bold text-white">' + gradeEmoji + ' ' + scan.grade + '</p>';
                        html += '<p class="text-sm text-green-300">' + scan.score + '/100 points</p>';
                        html += '</div>';
                        
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">SIGNAL</p>';
                        html += '<p class="text-2xl font-bold ' + signalColor + '">' + scan.signal + '</p>';
                        html += '<p class="text-sm text-green-300">Confidence: ' + scan.confidence + '%</p>';
                        html += '</div>';
                        
                        html += '<div>';
                        html += '<p class="text-xs text-green-300 mb-1">LAYERS PASSED</p>';
                        html += '<p class="text-xl font-bold text-white">' + scan.layers_passed + '/7</p>';
                        html += '</div>';
                        html += '</div>';
                        
                        // Right column: Trade Setup
                        html += '<div>';
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">ENTRY</p>';
                        html += '<p class="text-xl font-bold text-white">$' + scan.entry.toFixed(2) + '</p>';
                        html += '</div>';
                        
                        html += '<div class="mb-3">';
                        html += '<p class="text-xs text-green-300 mb-1">STOP LOSS</p>';
                        html += '<p class="text-lg font-bold text-red-400">$' + scan.stop_loss.toFixed(2) + '</p>';
                        html += '</div>';
                        
                        html += '<div>';
                        html += '<p class="text-xs text-green-300 mb-1">TARGETS</p>';
                        html += '<p class="text-sm text-white">TP1: $' + scan.targets[0].toFixed(2) + '</p>';
                        html += '<p class="text-sm text-white">TP2: $' + scan.targets[1].toFixed(2) + '</p>';
                        html += '<p class="text-sm text-white">TP3: $' + scan.targets[2].toFixed(2) + '</p>';
                        html += '</div>';
                        html += '</div>';
                        
                        html += '</div>';
                        
                        // Add Telegram status
                        if (scan.telegram_sent) {
                            html += '<div class="mt-3 p-2 bg-green-500 bg-opacity-20 rounded border border-green-500">';
                            html += '<p class="text-sm text-green-300"><i class="fab fa-telegram mr-2"></i>Telegram alert sent!</p>';
                            html += '</div>';
                        } else if (scan.grade === 'A' || scan.grade === 'A+') {
                            html += '<div class="mt-3 p-2 bg-yellow-500 bg-opacity-20 rounded border border-yellow-500">';
                            html += '<p class="text-sm text-yellow-300"><i class="fas fa-exclamation-triangle mr-2"></i>Telegram not configured</p>';
                            html += '</div>';
                        }
                        
                        // Add action message
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            html += '<div class="mt-3 p-3 bg-green-500 bg-opacity-30 rounded border border-green-400">';
                            html += '<p class="text-sm font-bold text-green-200">🎯 HIGH PROBABILITY SETUP - CONSIDER TRADING!</p>';
                            html += '</div>';
                        } else if (scan.grade === 'B') {
                            html += '<div class="mt-3 p-3 bg-yellow-500 bg-opacity-30 rounded border border-yellow-400">';
                            html += '<p class="text-sm font-bold text-yellow-200">⚠️ DECENT SETUP - WAIT FOR CONFIRMATION</p>';
                            html += '</div>';
                        } else {
                            html += '<div class="mt-3 p-3 bg-gray-500 bg-opacity-30 rounded border border-gray-400">';
                            html += '<p class="text-sm font-bold text-gray-200">❌ LOW QUALITY SETUP - SKIP</p>';
                            html += '</div>';
                        }
                        
                        detailsDiv.innerHTML = html;
                        resultsDiv.classList.remove('hidden');
                        
                        // Update status
                        statusDiv.innerHTML = '✅ Scan complete at ' + new Date(res.timestamp).toLocaleTimeString() + ' - Grade: ' + gradeEmoji + ' ' + scan.grade;
                        
                        // Show alert for A-grade
                        if (scan.grade === 'A' || scan.grade === 'A+') {
                            alert('🎯 ' + scan.grade + '-GRADE SETUP DETECTED!\\n\\nSignal: ' + scan.signal + '\\nEntry: $' + scan.entry.toFixed(2) + '\\nStop: $' + scan.stop_loss.toFixed(2) + '\\nTP1: $' + scan.targets[0].toFixed(2) + '\\n\\nCheck dashboard for full details!');
                        }
                    } else {
                        alert('❌ Scanner error: ' + res.error);
                        statusDiv.innerHTML = '❌ Scan failed - ' + res.error;
                    }
                    
                    // Re-enable button
                    btn.disabled = false;
                    btnText.innerHTML = 'Scan 5M NOW!';
                    
                } catch (error) {
                    console.error('5M Scanner error:', error);
                    alert('❌ Error running 5M scan: ' + error.message);
                    document.getElementById('scan5mButton').disabled = false;
                    document.getElementById('scan5mButtonText').innerHTML = 'Scan 5M NOW!';
                    document.getElementById('scannerStatus').innerHTML = '❌ Error: ' + error.message;
                }
            }

            async function fetchMarketData() {
                try {
                    const btn = document.getElementById('fetchBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Fetching ALL Data...';
                    
                    // Fetch MULTI-TIMEFRAME data (for both simple AND hedge fund signals)
                    // This fetches 5 timeframes: 5m, 15m, 1h, 4h, daily
                    // Total: 500 candles + all indicators
                    // IMPORTANT: Use 180s timeout - sequential fetch takes 60-90s on slow networks
                    const res = await fetchWithTimeout('/api/market/fetch-mtf', { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' } 
                    }, 180000); // 180 second timeout for slow mobile networks
                    
                    if (res.success) {
                        let message = '✅ Market Data Fetched Successfully!\\n\\n';
                        message += '📊 Fetched ' + res.totalCount + ' candles across 5 timeframes\\n\\n';
                        message += '✅ Ready for:\\n';
                        message += '   • Generate Signal NOW (simple)\\n';
                        message += '   • Hedge Fund Signal (all 10 features)\\n\\n';
                        message += 'Click either button to analyze current market!';
                        alert(message);
                    } else {
                        alert('✅ Partial Success\\n\\nFetched ' + res.totalCount + ' candles\\n\\nSome timeframes may have errors. Check console for details.');
                    }
                    
                    await refreshData();
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                } catch (error) {
                    alert('❌ Error fetching data: ' + error.message);
                    const btn = document.getElementById('fetchBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-download mr-2"></i>Fetch Market Data';
                    }
                }
            }

            async function generateSignalNow() {
                try {
                    const btn = document.getElementById('generateBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    // Call SIMPLE signal endpoint (not hedge fund)
                    const res = await fetchWithTimeout('/api/signals/simple/simple', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const day = res.day_trade;
                        const swing = res.swing_trade;
                        
                        // Format SIMPLE signal (matching Telegram format)
                        const emoji = day.signal_type === 'BUY' ? '🟢' : day.signal_type === 'SELL' ? '🔴' : '⚪';
                        
                        let message = emoji + ' GOLD/USD ' + day.signal_type + ' SIGNAL ' + emoji + '\\n\\n';
                        message += '📊 Day Trade\\n';
                        message += '💰 Price: $' + day.price.toFixed(2) + '\\n';
                        message += '📊 Confidence: ' + day.confidence.toFixed(1) + '%\\n\\n';
                        
                        message += '🎯 Take Profits:\\n';
                        message += '   TP1: $' + day.take_profit_1.toFixed(2) + '\\n';
                        message += '   TP2: $' + day.take_profit_2.toFixed(2) + '\\n';
                        message += '   TP3: $' + day.take_profit_3.toFixed(2) + '\\n\\n';
                        
                        message += '🛡️ Stop Loss: $' + day.stop_loss.toFixed(2) + '\\n\\n';
                        
                        message += '📝 Reason:\\n' + day.reason + '\\n\\n';
                        
                        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
                        message += '⏰ ' + timestamp;
                        
                        if (res.telegram_sent) {
                            message += '\\n\\n📱 Sent to Telegram!';
                        } else {
                            message += '\\n\\n⚠️ Telegram not configured';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('generateBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-chart-line mr-2"></i>Generate Signal NOW';
                    }
                }
            }

            async function generateEnhancedSignal() {
                try {
                    const btn = document.getElementById('enhancedBtn');
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing...';
                    
                    // Call the hedge-fund cron endpoint which includes Telegram integration
                    const res = await fetchWithTimeout('/api/cron/hedge-fund', { method: 'GET' });
                    
                    if (res.success) {
                        // Hedge-fund endpoint returns: message, confidence, telegram_sent
                        const dayConf = res.confidence?.day_trade || 0;
                        const swingConf = res.confidence?.swing_trade || 0;
                        
                        let message = '🏦 HEDGE FUND GRADE SIGNAL\\n\\n';
                        message += res.message + '\\n\\n';
                        
                        message += '📊 CONFIDENCE:\\n';
                        message += '📈 Day Trade: ' + dayConf.toFixed(0) + '%\\n';
                        message += '🌊 Swing Trade: ' + swingConf.toFixed(0) + '%\\n\\n';
                        
                        message += '🎯 THRESHOLD: ≥80% (Hedge Fund Grade)\\n\\n';
                        
                        // Telegram Status
                        if (res.telegram_sent) {
                            message += '📱 ✅ Alert sent to Telegram!\\n';
                            message += '\\nCheck your Telegram for full signal details including:\\n';
                            message += '• Entry price & stop loss\\n';
                            message += '• Take profit levels (TP1, TP2, TP3)\\n';
                            message += '• Risk metrics (VaR, drawdown)\\n';
                            message += '• Market regime analysis\\n';
                            message += '• Multi-timeframe alignment\\n';
                        } else if (dayConf < 80 && swingConf < 80) {
                            message += '⚪ No alert sent\\n';
                            message += '\\nConfidence below 80% threshold.\\n';
                            message += 'Hedge fund signals require ≥80% confidence.\\n';
                        } else {
                            message += '📱 ⚠️ Telegram not configured (check settings)';
                        }
                        
                        alert(message);
                        await refreshData();
                    } else {
                        alert('❌ Error: ' + res.error);
                    }
                    
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                } catch (error) {
                    alert('❌ Error: ' + error.message);
                    const btn = document.getElementById('enhancedBtn');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fas fa-rocket mr-2"></i>🏦 Hedge Fund Signal';
                    }
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
                    const res = await fetchWithTimeout('/api/automation/analyze-and-notify', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    
                    if (res.success) {
                        const { signals, positions, alignment, telegram_sent, results } = res;
                        
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
                        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle text-red-400 mr-2"></i>Error: ' + res.error;
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
                    const res = await fetchWithTimeout('/api/backtest/run', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            min_confidence: 75,
                            use_mtf_confirmation: true,
                            use_news_filter: false,
                            starting_balance: 10000
                        })
                    });
                    const resData = await res.json();
                    
                    if (resData.success) {
                        const r = resData.result;
                        
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
                            '<strong>Error:</strong> ' + (res.error || 'Backtest failed') +
                            '</div>';
                    }
                } catch (error) {
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // AI Market Analysis
            async function runAIAnalysis(event) {
                console.log('🤖 AI Analysis button clicked!', event);
                
                const btn = event.target.closest('button');
                if (!btn) {
                    console.error('Button not found!');
                    alert('Button error - please refresh the page');
                    return;
                }
                
                const originalText = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Analyzing Market...';
                
                const resultsDiv = document.getElementById('aiAnalysisResults');
                const detailsDiv = document.getElementById('aiAnalysisDetails');
                
                if (!resultsDiv || !detailsDiv) {
                    console.error('Required divs not found!', { resultsDiv, detailsDiv });
                    alert('Page error - please refresh');
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    return;
                }
                
                console.log('✅ All elements found, calling API...');
                
                resultsDiv.classList.remove('hidden');
                resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                try {
                    detailsDiv.innerHTML = '<div class="bg-cyan-900 bg-opacity-50 border border-cyan-500 p-4 rounded-lg text-white"><i class="fas fa-brain fa-spin mr-2"></i>AI analyzing market conditions...</div>';
                    
                    console.log('📡 Calling /api/ai/market-analysis...');
                    const res = await fetchWithTimeout('/api/ai/market-analysis', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
                    console.log('✅ API response received:', res.data);
                    
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    
                    if (res.success) {
                        const analysis = res.analysis;
                        
                        let html = '';
                        
                        // Current Market Status
                        html += '<div class="bg-gradient-to-r from-cyan-800 to-blue-800 p-5 rounded-lg border border-cyan-400 mb-4">';
                        html += '<h4 class="text-xl font-bold text-white mb-3"><i class="fas fa-chart-line mr-2"></i>Current Market Status</h4>';
                        html += '<div class="grid grid-cols-2 md:grid-cols-4 gap-4">';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Price</div><div class="text-2xl font-bold text-white">$' + analysis.current_price.toFixed(2) + '</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Signal</div><div class="text-2xl font-bold ' + (analysis.signal === 'BUY' ? 'text-green-400' : analysis.signal === 'SELL' ? 'text-red-400' : 'text-yellow-400') + '">' + analysis.signal + '</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Confidence</div><div class="text-2xl font-bold text-white">' + analysis.confidence + '%</div></div>';
                        html += '<div class="text-center"><div class="text-cyan-300 text-sm">Volatility</div><div class="text-2xl font-bold ' + (analysis.volatility === 'EXTREME' ? 'text-red-400' : analysis.volatility === 'HIGH' ? 'text-orange-400' : 'text-green-400') + '">' + analysis.volatility + '</div></div>';
                        html += '</div></div>';
                        
                        // MTF Analysis
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-layer-group mr-2"></i>Multi-Timeframe Alignment: ' + analysis.mtf_alignment.type + ' (' + analysis.mtf_alignment.score + '/5)</h4>';
                        html += '<div class="space-y-2">';
                        for (const tf of analysis.mtf_alignment.trends) {
                            const icon = tf.trend === 'BULLISH' ? '📈' : tf.trend === 'BEARISH' ? '📉' : '➡️';
                            const color = tf.trend === 'BULLISH' ? 'text-green-400' : tf.trend === 'BEARISH' ? 'text-red-400' : 'text-gray-400';
                            html += '<div class="flex justify-between"><span>' + icon + ' <span class="' + color + ' font-semibold">' + tf.timeframe + '</span>: ' + tf.trend + '</span><span class="text-cyan-300">' + tf.confidence.toFixed(0) + '% confidence</span></div>';
                        }
                        html += '</div></div>';
                        
                        // Key Levels
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-crosshairs mr-2"></i>Key Levels</h4>';
                        html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
                        
                        html += '<div><div class="text-red-300 font-semibold mb-2">🔴 Resistance Levels:</div>';
                        for (const level of analysis.key_levels.resistance) {
                            html += '<div class="text-red-400 ml-4">$' + level.toFixed(2) + '</div>';
                        }
                        html += '</div>';
                        
                        html += '<div><div class="text-green-300 font-semibold mb-2">🟢 Support Levels:</div>';
                        for (const level of analysis.key_levels.support) {
                            html += '<div class="text-green-400 ml-4">$' + level.toFixed(2) + '</div>';
                        }
                        html += '</div>';
                        
                        html += '</div></div>';
                        
                        // 3 Scenarios
                        html += '<div class="bg-white bg-opacity-10 p-4 rounded-lg mb-4">';
                        html += '<h4 class="font-bold text-white mb-3"><i class="fas fa-sitemap mr-2"></i>Market Scenarios</h4>';
                        html += '<div class="space-y-3">';
                        
                        for (const scenario of analysis.scenarios) {
                            const bgColor = scenario.name.includes('BULLISH') ? 'bg-green-900 bg-opacity-30 border-green-500' : scenario.name.includes('BEARISH') ? 'bg-red-900 bg-opacity-30 border-red-500' : 'bg-yellow-900 bg-opacity-30 border-yellow-500';
                            html += '<div class="border ' + bgColor + ' p-3 rounded-lg">';
                            html += '<div class="flex justify-between mb-2">';
                            html += '<div class="font-semibold text-white">' + scenario.name + '</div>';
                            html += '<div class="text-cyan-300">' + scenario.probability + '% Probability</div>';
                            html += '</div>';
                            html += '<div class="text-sm text-gray-300">' + scenario.description + '</div>';
                            if (scenario.trigger) {
                                html += '<div class="text-xs text-cyan-200 mt-2">Trigger: ' + scenario.trigger + '</div>';
                            }
                            html += '</div>';
                        }
                        
                        html += '</div></div>';
                        
                        // Recommendation
                        html += '<div class="p-4 rounded-lg ' + (analysis.recommendation.action === 'BUY' ? 'bg-green-900 bg-opacity-50 border border-green-500' : analysis.recommendation.action === 'SELL' ? 'bg-red-900 bg-opacity-50 border border-red-500' : 'bg-yellow-900 bg-opacity-50 border border-yellow-500') + '">';
                        html += '<h4 class="font-bold text-white mb-2"><i class="fas fa-lightbulb mr-2"></i>AI Recommendation</h4>';
                        html += '<div class="text-lg font-semibold text-white mb-2">' + (analysis.recommendation.action === 'WAIT' ? '⏰ WAIT' : analysis.recommendation.action === 'BUY' ? '📈 BUY' : '📉 SELL') + '</div>';
                        html += '<div class="text-gray-200">' + analysis.recommendation.reason + '</div>';
                        if (analysis.recommendation.entry_range) {
                            html += '<div class="mt-3 grid grid-cols-2 gap-2 text-sm">';
                            html += '<div><span class="text-cyan-300">Entry Range:</span> <span class="text-white">$' + analysis.recommendation.entry_range + '</span></div>';
                            if (analysis.recommendation.stop_loss) {
                                html += '<div><span class="text-cyan-300">Stop Loss:</span> <span class="text-red-400">$' + analysis.recommendation.stop_loss + '</span></div>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        
                        detailsDiv.innerHTML = html;
                    } else {
                        detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                            '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                            '<strong>Error:</strong> ' + (res.error || 'Analysis failed') +
                            '</div>';
                    }
                } catch (error) {
                    console.error('❌ AI Analysis error:', error);
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    detailsDiv.innerHTML = '<div class="bg-red-900 bg-opacity-50 border border-red-500 p-4 rounded-lg text-white">' +
                        '<i class="fas fa-exclamation-triangle mr-2"></i>' +
                        '<strong>Error:</strong> ' + error.message +
                        '</div>';
                }
            }

            // Make functions globally accessible for onclick handlers
            window.runAIAnalysis = runAIAnalysis;
            
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

// GET endpoint for cron jobs (redirects to POST endpoint)
app.get('/api/market/fetch', async (c) => {
  // This endpoint allows GET requests for cron jobs
  // It internally calls the POST logic
  const { DB } = c.env;
  
  try {
    // Get Twelve Data API key from settings
    const settingsResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'twelve_data_api_key'
    `).first();
    
    let apiKey = (settingsResult as any)?.setting_value || '70140f57bea54c5e90768de696487d8f';
    
    // Use real XAU/USD (Gold Spot / US Dollar) from Twelve Data
    const symbol = 'XAU/USD';
    const interval = '1h';
    
    // Fetch data
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}&outputsize=100`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code && data.status === 'error') {
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
    
    // ⚡ OPTIMIZED: Batch insert using D1 batch() for 10x faster performance
    const statements = values.map(item => {
      return DB.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        item.datetime,
        parseFloat(item.open) || 0,
        parseFloat(item.high) || 0,
        parseFloat(item.low) || 0,
        parseFloat(item.close) || 0,
        parseInt(item.volume || '0') || 0,
        '1h'
      );
    });
    
    // Execute all inserts in a single batch (much faster!)
    await DB.batch(statements);
    const count = values.length;
    
    // Generate signals (simplified for GET)
    const latestCandle = values[0];
    const currentPrice = parseFloat(latestCandle.close) || 0;
    
    return c.json({ 
      success: true, 
      count,
      price: currentPrice,
      message: 'Data fetched successfully from cron job'
    });
    
  } catch (error: any) {
    console.error('Cron fetch error:', error);
    return c.json({ 
      success: false, 
      error: error.message,
      count: 0 
    }, 500);
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
    
    // ⚡ OPTIMIZED: Build candles array and batch insert
    const candles: Candle[] = values.map(item => ({
      timestamp: item.datetime,
      open: parseFloat(item.open) || 0,
      high: parseFloat(item.high) || 0,
      low: parseFloat(item.low) || 0,
      close: parseFloat(item.close) || 0,
      volume: 0 // Twelve Data doesn't provide volume for forex
    }));
    
    // Batch insert all candles at once (10x faster than loop)
    const statements = candles.map(candle => 
      DB.prepare(`
        INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, '1h')
        ON CONFLICT DO NOTHING
      `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume)
    );
    
    await DB.batch(statements);
    const count = candles.length;
    
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

// 🚀 LIGHTWEIGHT CRON ENDPOINT - Fast response for cron-job.org
// Returns immediately to avoid 502 timeouts
// Actual data fetching happens via separate manual trigger
app.get('/api/cron/ping', async (c) => {
  const { DB } = c.env;
  
  try {
    // Quick database check to verify system is alive
    const latestData = await DB.prepare(`
      SELECT close, timestamp FROM market_data 
      WHERE timeframe = '1h' 
      ORDER BY timestamp DESC LIMIT 1
    `).first();
    
    const latestSignal = await DB.prepare(`
      SELECT signal_type, confidence, created_at FROM signals 
      ORDER BY created_at DESC LIMIT 1
    `).first();
    
    return c.json({ 
      success: true,
      status: 'operational',
      timestamp: new Date().toISOString(),
      last_data: latestData ? {
        price: (latestData as any).close,
        time: (latestData as any).timestamp
      } : null,
      last_signal: latestSignal ? {
        type: (latestSignal as any).signal_type,
        confidence: (latestSignal as any).confidence,
        time: (latestSignal as any).created_at
      } : null,
      message: 'System operational - Data being fetched by background jobs'
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
})

// 🚀 ENHANCED CRON ENDPOINT - Full automation with Telegram alerts
// This endpoint is specifically designed for cron-job.org
// GET request compatible + Signal generation + Telegram alerts
app.get('/api/cron/auto-fetch', async (c) => {
  const { DB } = c.env;
  
  try {
    console.log('[CRON] Auto-fetch triggered');
    
    // 1. Get API keys and config from settings
    const settingsRows = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all();
    
    const config: any = {};
    for (const row of settingsRows.results) {
      config[(row as any).setting_key] = (row as any).setting_value;
    }
    
    const apiKey = config.twelve_data_api_key || '70140f57bea54c5e90768de696487d8f';
    const telegramBotToken = config.telegram_bot_token;
    const telegramChatId = config.telegram_chat_id;
    
    console.log('[AUTO-FETCH] Settings loaded:', {
      hasApiKey: !!apiKey,
      hasBotToken: !!telegramBotToken,
      botTokenLength: telegramBotToken ? telegramBotToken.length : 0,
      hasChatId: !!telegramChatId,
      chatId: telegramChatId
    });
    
    // 2. Fetch fresh market data
    const symbol = 'XAU/USD';
    const interval = '1h';
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}&outputsize=100`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.code && data.status === 'error') {
      return c.json({ 
        success: false, 
        error: data['message'] || 'API error',
        telegram_sent: false
      });
    }
    
    if (!data['values'] || !Array.isArray(data['values'])) {
      return c.json({ 
        success: false, 
        error: 'No data available',
        telegram_sent: false
      });
    }
    
    const values = data['values'];
    
    // 3. Process and store candles (OPTIMIZED with batch insert)
    const candles = values.map(item => ({
      timestamp: item.datetime,
      open: parseFloat(item.open) || 0,
      high: parseFloat(item.high) || 0,
      low: parseFloat(item.low) || 0,
      close: parseFloat(item.close) || 0,
      volume: parseInt(item.volume || '0') || 0
    }));
    
    // Batch insert for 10x faster performance
    const statements = candles.map(candle =>
      DB.prepare(`
        INSERT OR REPLACE INTO market_data (timestamp, open, high, low, close, volume, timeframe)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        candle.timestamp,
        candle.open,
        candle.high,
        candle.low,
        candle.close,
        candle.volume,
        '1h'
      )
    );
    
    await DB.batch(statements);
    
    // 4. Calculate indicators
    const indicators = calculateIndicators(candles);
    
    if (!indicators) {
      return c.json({ 
        success: true, 
        count: candles.length,
        message: 'Data stored, but insufficient for indicators',
        telegram_sent: false
      });
    }
    
    // 5. Fetch real-time price to avoid stale candle prices
    // NOTE: Twelve Data returns candles in DESCENDING order (newest first)
    // So candles[0] is the NEWEST, candles[length-1] is the OLDEST
    let currentPrice = candles[0].close; // Use FIRST candle (newest)
    let usingRealtimePrice = false;
    
    try {
      console.log('[AUTO-FETCH] Fetching real-time price...');
      const priceResponse = await fetch(
        `https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${apiKey}`,
        { signal: AbortSignal.timeout(5000) }
      );
      const priceData: any = await priceResponse.json();
      
      if (priceData.price) {
        const realtimePrice = parseFloat(priceData.price);
        const lastCandleClose = currentPrice;
        const priceDiff = Math.abs(realtimePrice - lastCandleClose);
        const priceDiffPct = (priceDiff / realtimePrice) * 100;
        
        console.log(`[AUTO-FETCH] Real-time: $${realtimePrice}, Last candle: $${lastCandleClose}, Diff: ${priceDiffPct.toFixed(2)}%`);
        
        // Only use real-time price if difference is reasonable (< 2%)
        if (priceDiffPct < 2.0) {
          currentPrice = realtimePrice;
          usingRealtimePrice = true;
          console.log(`[AUTO-FETCH] ✅ Using real-time price: $${realtimePrice}`);
        } else {
          console.log(`[AUTO-FETCH] ⚠️ Price diff too large (${priceDiffPct.toFixed(2)}%), using candle close`);
        }
      }
    } catch (error: any) {
      console.log('[AUTO-FETCH] Real-time price fetch failed, using candle close:', error.message);
    }
    
    // 6. Generate signals with real-time price
    const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade');
    const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade');
    
    // 5.5 Save signals to database
    try {
      await DB.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        dayTradeSignal.signal_type,
        'day_trade',
        currentPrice,
        dayTradeSignal.stop_loss,
        dayTradeSignal.take_profit_1,
        dayTradeSignal.take_profit_2,
        dayTradeSignal.take_profit_3,
        dayTradeSignal.confidence,
        dayTradeSignal.reason
      ).run();
      
      await DB.prepare(`
        INSERT INTO signals 
        (timestamp, signal_type, trading_style, price, stop_loss, 
         take_profit_1, take_profit_2, take_profit_3, confidence, reason)
        VALUES (datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        swingTradeSignal.signal_type,
        'swing_trade',
        currentPrice,
        swingTradeSignal.stop_loss,
        swingTradeSignal.take_profit_1,
        swingTradeSignal.take_profit_2,
        swingTradeSignal.take_profit_3,
        swingTradeSignal.confidence,
        swingTradeSignal.reason
      ).run();
      
      console.log('[AUTO-FETCH] Signals saved to database');
    } catch (err) {
      console.error('[AUTO-FETCH] Error saving signals:', err);
    }
    
    // 6. Check if we should send Telegram alerts
    const minConfidence = 70;
    let telegramSent = false;
    const alertsSent = [];
    const debugInfo: any = {
      telegram_configured: false,
      day_trade_checked: false,
      day_trade_send_attempted: false,
      day_trade_send_result: null,
      swing_trade_checked: false,
      swing_trade_send_attempted: false,
      swing_trade_send_result: null
    };
    
    console.log('[AUTO-FETCH] Telegram check:', {
      botToken: telegramBotToken ? 'SET' : 'NOT SET',
      chatId: telegramChatId,
      dayConfidence: dayTradeSignal.confidence,
      dayType: dayTradeSignal.signal_type,
      swingConfidence: swingTradeSignal.confidence,
      swingType: swingTradeSignal.signal_type,
      minConfidence
    });
    
    // Only send alerts if Telegram is configured
    if (telegramBotToken && telegramChatId && 
        telegramBotToken !== 'your_bot_token_here') {
      
      debugInfo.telegram_configured = true;
      console.log('[AUTO-FETCH] Telegram is configured, checking signals...');
      console.log('[AUTO-FETCH] Day trade check:', {
        confidence: dayTradeSignal.confidence,
        minConfidence,
        meetsThreshold: dayTradeSignal.confidence >= minConfidence,
        signalType: dayTradeSignal.signal_type,
        notHold: dayTradeSignal.signal_type !== 'HOLD',
        willSend: (dayTradeSignal.confidence >= minConfidence && dayTradeSignal.signal_type !== 'HOLD')
      });
      
      debugInfo.day_trade_checked = true;
      
      // Check Day Trade signal - NOW SENDS FOR ALL SIGNALS (HOLD/BUY/SELL)
      if (dayTradeSignal.confidence >= minConfidence) {
        
        debugInfo.day_trade_send_attempted = true;
        
        console.log('[AUTO-FETCH] ✅ Day trade meets criteria! Sending alert...');
        
        // Escape HTML in reason text
        const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const emoji = dayTradeSignal.signal_type === 'BUY' ? '🟢' : (dayTradeSignal.signal_type === 'SELL' ? '🔴' : '⚪');
        
        // Check if this is a HIGH CONVICTION signal (≥80%)
        const isHighConviction = dayTradeSignal.confidence >= 80;
        const convictionLabel = isHighConviction ? '🔥 <b>HIGH CONVICTION</b> 🔥' : '';
        
        const message = `${emoji} <b>GOLD/USD ${dayTradeSignal.signal_type} SIGNAL</b> ${emoji}
${convictionLabel}

📊 <b>Day Trade</b>
💰 Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${dayTradeSignal.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${dayTradeSignal.take_profit_1.toFixed(2)}
   TP2: $${dayTradeSignal.take_profit_2.toFixed(2)}
   TP3: $${dayTradeSignal.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${dayTradeSignal.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${escapeHtml(dayTradeSignal.reason)}

⏰ ${new Date().toLocaleString()}`;
        
        const success = await sendTelegramMessage({
          botToken: telegramBotToken,
          chatId: telegramChatId
        }, message);
        
        debugInfo.day_trade_send_result = success;
        console.log('[AUTO-FETCH] Day trade alert result:', success);
        
        if (success) {
          telegramSent = true;
          alertsSent.push('Day Trade');
          
          // HIGH CONVICTION: Send reminder alerts
          if (isHighConviction && dayTradeSignal.signal_type !== 'HOLD') {
            console.log('[AUTO-FETCH] 🔥 HIGH CONVICTION signal detected! Sending reminder alerts...');
            
            // Wait 2 minutes, send first reminder
            setTimeout(async () => {
              const reminder1 = `${emoji} <b>⚠️ REMINDER: HIGH CONVICTION SIGNAL</b> ${emoji}

📊 <b>${dayTradeSignal.signal_type} Day Trade</b>
💰 Current Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${dayTradeSignal.confidence.toFixed(1)}%

🎯 Entry: $${currentPrice.toFixed(2)}
🛡️ Stop: $${dayTradeSignal.stop_loss.toFixed(2)}
🎯 TP1: $${dayTradeSignal.take_profit_1.toFixed(2)}

⏰ Don't miss this trade!`;
              
              await sendTelegramMessage({
                botToken: telegramBotToken,
                chatId: telegramChatId
              }, reminder1);
              
              console.log('[AUTO-FETCH] First reminder sent');
            }, 2 * 60 * 1000); // 2 minutes
            
            // Wait 5 minutes, send second reminder
            setTimeout(async () => {
              const reminder2 = `${emoji} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${emoji}

📊 <b>${dayTradeSignal.signal_type} Signal Still Valid</b>
💰 Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${dayTradeSignal.confidence.toFixed(1)}%

🔥 Last chance to enter this trade!

🎯 TP1: $${dayTradeSignal.take_profit_1.toFixed(2)}
🛡️ Stop: $${dayTradeSignal.stop_loss.toFixed(2)}`;
              
              await sendTelegramMessage({
                botToken: telegramBotToken,
                chatId: telegramChatId
              }, reminder2);
              
              console.log('[AUTO-FETCH] Final reminder sent');
            }, 5 * 60 * 1000); // 5 minutes
            
            alertsSent.push('High Conviction Reminders (2+5min)');
          }
        } else {
          console.error('[AUTO-FETCH] Failed to send day trade alert!');
        }
      }
      
      // Check Swing Trade signal (higher threshold) - NOW SENDS FOR ALL SIGNALS (HOLD/BUY/SELL)
      debugInfo.swing_trade_checked = true;
      console.log('[AUTO-FETCH] Checking swing trade...', {
        confidence: swingTradeSignal.confidence,
        type: swingTradeSignal.signal_type,
        threshold: 80
      });
      
      if (swingTradeSignal.confidence >= 80) {
        
        debugInfo.swing_trade_send_attempted = true;
        console.log('[AUTO-FETCH] Swing trade meets criteria! Sending alert...');
        
        // Escape HTML in reason text
        const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const emoji = swingTradeSignal.signal_type === 'BUY' ? '🟢' : (swingTradeSignal.signal_type === 'SELL' ? '🔴' : '⚪');
        
        // Check if this is a HIGH CONVICTION signal (≥85% for swing)
        const isHighConviction = swingTradeSignal.confidence >= 85;
        const convictionLabel = isHighConviction ? '🔥 <b>HIGH CONVICTION</b> 🔥' : '';
        
        const message = `${emoji} <b>GOLD/USD ${swingTradeSignal.signal_type} SIGNAL</b> ${emoji}
${convictionLabel}

📈 <b>Swing Trade</b>
💰 Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${swingTradeSignal.confidence.toFixed(1)}%

🎯 <b>Take Profits:</b>
   TP1: $${swingTradeSignal.take_profit_1.toFixed(2)}
   TP2: $${swingTradeSignal.take_profit_2.toFixed(2)}
   TP3: $${swingTradeSignal.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${swingTradeSignal.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${escapeHtml(swingTradeSignal.reason)}

⏰ ${new Date().toLocaleString()}`;
        
        const success = await sendTelegramMessage({
          botToken: telegramBotToken,
          chatId: telegramChatId
        }, message);
        
        debugInfo.swing_trade_send_result = success;
        
        if (success) {
          telegramSent = true;
          alertsSent.push('Swing Trade');
          
          // HIGH CONVICTION: Send reminder alerts
          if (isHighConviction && swingTradeSignal.signal_type !== 'HOLD') {
            console.log('[AUTO-FETCH] 🔥 HIGH CONVICTION swing signal! Sending reminder alerts...');
            
            // Wait 3 minutes, send first reminder
            setTimeout(async () => {
              const reminder1 = `${emoji} <b>⚠️ REMINDER: HIGH CONVICTION SWING</b> ${emoji}

📈 <b>${swingTradeSignal.signal_type} Swing Trade</b>
💰 Current Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${swingTradeSignal.confidence.toFixed(1)}%

🎯 Entry: $${currentPrice.toFixed(2)}
🛡️ Stop: $${swingTradeSignal.stop_loss.toFixed(2)}
🎯 TP1: $${swingTradeSignal.take_profit_1.toFixed(2)}

⏰ Don't miss this swing trade!`;
              
              await sendTelegramMessage({
                botToken: telegramBotToken,
                chatId: telegramChatId
              }, reminder1);
              
              console.log('[AUTO-FETCH] Swing first reminder sent');
            }, 3 * 60 * 1000); // 3 minutes
            
            // Wait 7 minutes, send second reminder
            setTimeout(async () => {
              const reminder2 = `${emoji} <b>⚠️ FINAL REMINDER: HIGH CONVICTION</b> ${emoji}

📈 <b>${swingTradeSignal.signal_type} Swing Still Valid</b>
💰 Price: $${currentPrice.toFixed(2)}
📊 Confidence: ${swingTradeSignal.confidence.toFixed(1)}%

🔥 Last chance for this swing trade!

🎯 TP1: $${swingTradeSignal.take_profit_1.toFixed(2)}
🛡️ Stop: $${swingTradeSignal.stop_loss.toFixed(2)}`;
              
              await sendTelegramMessage({
                botToken: telegramBotToken,
                chatId: telegramChatId
              }, reminder2);
              
              console.log('[AUTO-FETCH] Swing final reminder sent');
            }, 7 * 60 * 1000); // 7 minutes
            
            alertsSent.push('High Conviction Swing Reminders (3+7min)');
          }
        }
      }
    } else {
      console.log('[AUTO-FETCH] Telegram NOT configured or invalid token');
    }
    
    console.log(`[CRON] Processed ${candles.length} candles, Telegram: ${telegramSent ? 'SENT' : 'NOT SENT'}, Alerts: ${alertsSent.join(', ')}`);
    
    // 7. Return comprehensive status
    return c.json({ 
      success: true,
      timestamp: new Date().toISOString(),
      data_fetched: {
        candles: candles.length,
        latest_price: currentPrice,
        data_timestamp: candles[0].timestamp
      },
      signals: {
        day_trade: {
          type: dayTradeSignal.signal_type,
          confidence: dayTradeSignal.confidence,
          price: currentPrice
        },
        swing_trade: {
          type: swingTradeSignal.signal_type,
          confidence: swingTradeSignal.confidence,
          price: currentPrice
        }
      },
      telegram: {
        configured: !!(telegramBotToken && telegramChatId),
        bot_token_set: !!telegramBotToken,
        chat_id_set: !!telegramChatId,
        bot_token_valid: telegramBotToken !== 'your_bot_token_here',
        sent: telegramSent,
        alerts: alertsSent
      },
      debug: {
        ...debugInfo,
        day_trade_check: {
          confidence: dayTradeSignal.confidence,
          min_confidence: minConfidence,
          meets_threshold: dayTradeSignal.confidence >= minConfidence,
          signal_type: dayTradeSignal.signal_type,
          sends_all_signals: true,
          should_alert: dayTradeSignal.confidence >= minConfidence
        },
        swing_trade_check: {
          confidence: swingTradeSignal.confidence,
          min_confidence: 80,
          meets_threshold: swingTradeSignal.confidence >= 80,
          signal_type: swingTradeSignal.signal_type,
          sends_all_signals: true,
          should_alert: swingTradeSignal.confidence >= 80
        }
      },
      message: telegramSent ? 
        `✅ Alerts sent: ${alertsSent.join(', ')}` : 
        '⚪ No alerts sent (signals below confidence threshold)'
    });
    
  } catch (error: any) {
    console.error('[CRON] Error:', error);
    return c.json({ 
      success: false, 
      error: error.message,
      telegram_sent: false
    }, 500);
  }
})

// 🧪 TEST ENDPOINT - Debug auto-fetch settings
app.get('/api/test/auto-fetch-settings', async (c) => {
  const { DB } = c.env;
  
  try {
    const settingsRows = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings 
      WHERE setting_key IN ('twelve_data_api_key', 'telegram_bot_token', 'telegram_chat_id')
    `).all();
    
    const config: any = {};
    for (const row of settingsRows.results) {
      config[(row as any).setting_key] = (row as any).setting_value;
    }
    
    const apiKey = config.twelve_data_api_key || '70140f57bea54c5e90768de696487d8f';
    const telegramBotToken = config.telegram_bot_token;
    const telegramChatId = config.telegram_chat_id;
    
    return c.json({
      success: true,
      raw_results: settingsRows.results,
      config_object: config,
      extracted: {
        apiKey: apiKey ? `${apiKey.substring(0, 10)}...` : null,
        telegramBotToken: telegramBotToken ? `${telegramBotToken.substring(0, 10)}...` : null,
        telegramChatId,
        is_configured: !!(telegramBotToken && telegramChatId && telegramBotToken !== 'your_bot_token_here')
      }
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// 🤖 AI AUTO-SCAN CRON ENDPOINT
// Automatic AI Market Analysis with Telegram alerts (≥65% confidence)
// Runs AI analysis and sends alerts for both BUY and SELL signals
app.get('/api/cron/auto-ai-scan', async (c) => {
  const { DB } = c.env;
  
  try {
    console.log('[AI-AUTO-SCAN] Starting automatic AI market analysis');
    
    // Check if AI auto-scan is enabled
    const settingResult = await DB.prepare(`
      SELECT setting_value FROM user_settings 
      WHERE setting_key = 'ai_auto_scan_enabled'
    `).first();
    
    const aiAutoScanEnabled = (settingResult as any)?.setting_value === '1' || 
                               (settingResult as any)?.setting_value === 'true';
    
    if (!aiAutoScanEnabled) {
      console.log('[AI-AUTO-SCAN] Disabled in settings');
      return c.json({ 
        success: true, 
        message: 'AI auto-scan is disabled',
        ai_scan_enabled: false
      });
    }
    
    // Call the AI analysis endpoint
    const aiResponse = await c.env.app?.fetch?.(
      new Request(new URL('/api/ai/market-analysis', c.req.url).toString(), {
        method: 'POST'
      })
    );
    
    if (aiResponse) {
      const result = await aiResponse.json();
      console.log('[AI-AUTO-SCAN] Analysis complete:', result.success ? 'Success' : 'Failed');
      return c.json({
        success: true,
        ai_scan_enabled: true,
        analysis: result,
        message: result.analysis?.telegram_sent ? 
          '🤖 AI analysis complete - Telegram alert sent' : 
          '🤖 AI analysis complete - No alert (confidence < 65% or HOLD)'
      });
    }
    
    return c.json({ 
      success: false, 
      error: 'Failed to run AI analysis' 
    }, 500);
    
  } catch (error: any) {
    console.error('[AI-AUTO-SCAN] Error:', error);
    return c.json({ 
      success: false, 
      error: error.message 
    }, 500);
  }
})

// 🏦 HEDGE FUND CRON ENDPOINT
// GET-compatible endpoint for Cloudflare Cron Triggers
// Calls enhanced signals endpoint and sends Telegram alerts for high-confidence signals (≥80%)
app.get('/api/cron/hedge-fund', async (c) => {
  const startTime = Date.now()
  
  try {
    console.log('[HEDGE-FUND-CRON] Starting hedge fund analysis')
    
    // Call the enhanced signals endpoint (POST)
    const enhancedResponse = await fetch(
      `${c.req.url.replace('/api/cron/hedge-fund', '/api/signals/enhanced/enhanced')}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!enhancedResponse.ok) {
      throw new Error(`Enhanced endpoint returned ${enhancedResponse.status}`)
    }
    
    const result = await enhancedResponse.json()
    
    if (!result.success) {
      return c.json({
        success: false,
        error: result.error || 'Enhanced signal generation failed',
        execution_time_ms: Date.now() - startTime
      })
    }
    
    // Check if we should send Telegram alert (≥80% confidence for hedge fund grade)
    const dayTrade = result.day_trade
    const swingTrade = result.swing_trade
    const shouldAlert = (dayTrade?.enhanced_confidence >= 80) || (swingTrade?.enhanced_confidence >= 80)
    
    console.log('[HEDGE-FUND-CRON] Signal confidence:', {
      day: dayTrade?.enhanced_confidence,
      swing: swingTrade?.enhanced_confidence,
      shouldAlert
    })
    
    // If confidence is high enough, send Telegram alert
    let telegramSent = false
    if (shouldAlert) {
      const { DB } = c.env
      
      // Get Telegram credentials
      const settings = await DB.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all()
      
      const config: any = {}
      for (const row of settings.results || []) {
        config[(row as any).setting_key] = (row as any).setting_value
      }
      
      if (config.telegram_bot_token && config.telegram_chat_id) {
        // Format hedge fund message
        const message = `
🏦 *HEDGE FUND GRADE SIGNAL*
⏰ ${new Date().toISOString().replace('T', ' ').substring(0, 19)} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📈 *DAY TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${dayTrade.signal_type} (${dayTrade.enhanced_confidence}% confidence)

*Entry:* $${dayTrade.price.toFixed(2)}
*Stop Loss:* $${dayTrade.stop_loss.toFixed(2)}
*TP1:* $${dayTrade.take_profit_1.toFixed(2)}
*TP2:* $${dayTrade.take_profit_2.toFixed(2)}
*TP3:* $${dayTrade.take_profit_3.toFixed(2)}

📊 *Advanced Metrics:*
• VaR(95%): $${dayTrade.var_95?.toFixed(2) || 0}
• Drawdown: ${dayTrade.current_drawdown_pct?.toFixed(1) || 0}%
• Portfolio Heat: ${dayTrade.portfolio_heat_pct?.toFixed(1) || 0}%
• Profit Probability: ${result.profit_probability?.tp1 || 0}%

🌊 *Market Regime:* ${result.regime?.volatility || 'UNKNOWN'}
💧 *Liquidity:* ${result.liquidity?.score || 0}/100 ${result.liquidity?.recommendation || ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE*
━━━━━━━━━━━━━━━━━━━━━━━━━

${swingTrade.signal_type} (${swingTrade.enhanced_confidence}% confidence)

*Entry:* $${swingTrade.price.toFixed(2)}
*Stop Loss:* $${swingTrade.stop_loss.toFixed(2)}
*TP1:* $${swingTrade.take_profit_1.toFixed(2)}
*TP2:* $${swingTrade.take_profit_2.toFixed(2)}
*TP3:* $${swingTrade.take_profit_3.toFixed(2)}

📊 *Risk Metrics:*
• VaR(99%): $${swingTrade.var_99?.toFixed(2) || 0}
• Max Drawdown: ${swingTrade.current_drawdown_pct?.toFixed(1) || 0}%

${result.regime?.should_trade === false ? '⚠️ *WARNING: Extreme volatility detected*' : ''}

🌐 Dashboard: ${c.req.url.replace('/api/cron/hedge-fund', '')}
        `.trim()
        
        // Send via Telegram
        const { sendTelegramMessage } = await import('./lib/telegram')
        telegramSent = await sendTelegramMessage(
          { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
          message
        )
        
        console.log('[HEDGE-FUND-CRON] Telegram alert sent:', telegramSent)
      }
    }
    
    const executionTime = Date.now() - startTime
    
    return c.json({
      success: true,
      message: shouldAlert 
        ? `Hedge fund signal generated and ${telegramSent ? 'sent' : 'failed to send'} to Telegram`
        : 'Signal confidence below 80% threshold - no alert sent',
      confidence: {
        day_trade: dayTrade?.enhanced_confidence || 0,
        swing_trade: swingTrade?.enhanced_confidence || 0
      },
      telegram_sent: telegramSent,
      threshold: 80,
      execution_time_ms: executionTime,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('[HEDGE-FUND-CRON] Error:', error)
    return c.json({
      success: false,
      error: error.message,
      execution_time_ms: Date.now() - startTime
    }, 500)
  }
})

// Micro Trade Scanner Cron - runs every 5 minutes
// Generates high-frequency micro trades (30-35 signals/day, 5-minute timeframe)
app.get('/api/cron/micro-trade', async (c) => {
  const startTime = Date.now()
  
  try {
    console.log('[MICRO-CRON] Starting micro trade scan')
    
    // Call the micro trade scanner
    const scanResponse = await fetch(
      `${c.req.url.replace('/api/cron/micro-trade', '/api/micro/scan')}`,
      { method: 'GET' }
    )
    
    if (!scanResponse.ok) {
      throw new Error(`Micro scanner returned ${scanResponse.status}`)
    }
    
    const result = await scanResponse.json()
    const executionTime = Date.now() - startTime
    
    return c.json({
      ...result,
      execution_time_ms: executionTime,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('[MICRO-CRON] Error:', error)
    return c.json({
      success: false,
      error: error.message,
      execution_time_ms: Date.now() - startTime
    }, 500)
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
          open: parseFloat(item.open) || 0,
          high: parseFloat(item.high) || 0,
          low: parseFloat(item.low) || 0,
          close: parseFloat(item.close) || 0,
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
    console.log('[GENERATE-NOW] Step 1: Fetching FRESH data from Twelve Data API')
    
    // ============================================================
    // STEP 1: FETCH FRESH DATA (like Auto Scanner does)
    // ============================================================
    const settingsResult = await DB.prepare(`
      SELECT setting_key, setting_value FROM user_settings
      WHERE setting_key IN ('twelve_data_api_key')
    `).all();
    
    let apiKey = '';
    for (const row of settingsResult.results || []) {
      if ((row as any).setting_key === 'twelve_data_api_key') {
        apiKey = (row as any).setting_value;
      }
    }
    
    let candles: Candle[];
    let usedFreshData = false;
    
    if (apiKey && apiKey !== 'your_api_key_here') {
      // Fetch fresh data from Twelve Data API
      console.log('[GENERATE-NOW] Fetching FRESH data from Twelve Data API')
      try {
        const url = `https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=1h&outputsize=100&apikey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.values && data.values.length >= 50) {
          // Convert API data to candles
          candles = data.values.reverse().map((item: any) => ({
            timestamp: item.datetime,
            open: parseFloat(item.open) || 0,
            high: parseFloat(item.high) || 0,
            low: parseFloat(item.low) || 0,
            close: parseFloat(item.close) || 0,
            volume: parseFloat(item.volume) || 0
          }));
          usedFreshData = true;
          console.log('[GENERATE-NOW] ✅ Fresh data fetched! Price:', candles[candles.length - 1].close)
        } else {
          console.log('[GENERATE-NOW] ⚠️ API returned insufficient data, falling back to database')
        }
      } catch (apiError: any) {
        console.error('[GENERATE-NOW] API fetch failed:', apiError.message)
      }
    }
    
    // Fallback to database if no fresh data
    if (!candles || candles.length === 0) {
      console.log('[GENERATE-NOW] Using database data (may be stale)')
      const marketData = await DB.prepare(`
        SELECT * FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 200
      `).all();
      
      if (!marketData.results || marketData.results.length < 50) {
        return c.json({ success: false, error: 'Not enough data. Please configure Twelve Data API key or fetch market data first.' });
      }
      
      candles = (marketData.results as any[]).reverse().map(row => ({
        timestamp: row.timestamp,
        open: row.open,
        high: row.high,
        low: row.low,
        close: row.close,
        volume: row.volume
      }));
    }
    
    // ============================================================
    // STEP 2: CALCULATE INDICATORS AND GENERATE SIGNALS
    // ============================================================
    const indicators = calculateIndicators(candles);
    if (!indicators) {
      return c.json({ success: false, error: 'Failed to calculate indicators' });
    }
    
    // Fetch real-time price to avoid stale candle prices
    let currentPrice = candles[candles.length - 1].close;
    let usingRealtimePrice = false;
    
    if (apiKey && apiKey !== 'your_api_key_here') {
      try {
        console.log('[GENERATE-NOW] Fetching real-time price...');
        const priceResponse = await fetch(
          `https://api.twelvedata.com/price?symbol=XAU/USD&apikey=${apiKey}`,
          { signal: AbortSignal.timeout(5000) }
        );
        const priceData: any = await priceResponse.json();
        
        if (priceData.price) {
          const realtimePrice = parseFloat(priceData.price);
          const lastCandleClose = currentPrice;
          const priceDiff = Math.abs(realtimePrice - lastCandleClose);
          const priceDiffPct = (priceDiff / realtimePrice) * 100;
          
          console.log(`[GENERATE-NOW] Real-time: $${realtimePrice}, Last candle: $${lastCandleClose}, Diff: ${priceDiffPct.toFixed(2)}%`);
          
          // Use real-time price if available
          currentPrice = realtimePrice;
          usingRealtimePrice = true;
        }
      } catch (error: any) {
        console.log('[GENERATE-NOW] Real-time price fetch failed, using candle close:', error.message);
      }
    }
    
    const dayTradeSignal = generateSignal(currentPrice, indicators, 'day_trade');
    const swingTradeSignal = generateSignal(currentPrice, indicators, 'swing_trade');
    
    console.log('[GENERATE-NOW] Signals generated - Day:', dayTradeSignal.signal_type, 'Swing:', swingTradeSignal.signal_type)
    
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
    
    // ============================================================
    // CALCULATE SUPPORT & RESISTANCE LEVELS
    // ============================================================
    // Use last 20 x 1h candles for S/R calculation
    const last20Candles = candles.slice(-20);
    const highs = last20Candles.map(c => c.high).sort((a, b) => b - a); // Descending
    const lows = last20Candles.map(c => c.low).sort((a, b) => a - b);   // Ascending
    
    // Safety check: ensure we have enough data points
    const resistance = highs.length >= 3 ? [highs[0], highs[1], highs[2]] : 
                      highs.length >= 1 ? [highs[0]] : [];
    const support = lows.length >= 3 ? [lows[0], lows[1], lows[2]] : 
                   lows.length >= 1 ? [lows[0]] : [];
    
    console.log('[GENERATE-NOW] S/R calculated - Resistance:', resistance, 'Support:', support);
    
    // Send both signals to Telegram (regardless of confidence)
    if (config.telegram_bot_token && config.telegram_chat_id) {
      // Send day trade signal
      const daySuccess = await sendTelegramMessage(
        { botToken: config.telegram_bot_token, chatId: config.telegram_chat_id },
        formatTradeSignal({
          ...dayTradeSignal,
          timestamp: new Date().toISOString(),
          resistance,
          support
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
          timestamp: new Date().toISOString(),
          resistance,
          support
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
    const body = await c.req.json().catch(() => ({}))
    const forceFresh = body.force_fresh || false
    
    const results: any = {
      timestamp: new Date().toISOString(),
      steps: []
    }
    
    // Step 1: Fetch All 5 Timeframes × 100 Candles
    results.steps.push({ step: 1, name: 'Fetching All 5 Timeframes (100 candles each)', status: 'running' })
    
    // Check if we have recent data (last 5 minutes)
    const recentData = await DB.prepare(`
      SELECT COUNT(*) as count FROM multi_timeframe_indicators 
      WHERE timestamp > datetime('now', '-5 minutes')
    `).first()
    
    const hasRecentData = !forceFresh && (recentData as any)?.count > 0
    let totalCandles = 0
    
    if (!hasRecentData) {
      // Fetch fresh data from TwelveData API
      results.steps[0].name = 'Fetching Fresh MTF Data (5 timeframes \u00d7 100 candles)'
      results.steps[0].fetching = true
      
      // Get API key
      const apiKeyResult = await DB.prepare(`
        SELECT setting_value FROM user_settings 
        WHERE setting_key = 'twelve_data_api_key'
      `).first()
      
      const apiKey = (apiKeyResult as any)?.setting_value || '70140f57bea54c5e90768de696487d8f'
      
      // Fetch all 5 timeframes with 100 candles for accurate signals
      const timeframes = [
        { interval: '5min', dbKey: '5m' },
        { interval: '15min', dbKey: '15m' },
        { interval: '1h', dbKey: '1h' },
        { interval: '4h', dbKey: '4h' },
        { interval: '1day', dbKey: 'daily' }
      ]
      
      for (const tf of timeframes) {
        try {
          const url = `https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${tf.interval}&apikey=${apiKey}&outputsize=100`
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
          
          const response = await fetch(url, { signal: controller.signal })
          clearTimeout(timeoutId)
          const data = await response.json()
          
          if (data.values && Array.isArray(data.values)) {
            const candles: Candle[] = []
            for (const item of data.values) {
              candles.push({
                timestamp: item.datetime,
                open: parseFloat(item.open) || 0,
                high: parseFloat(item.high) || 0,
                low: parseFloat(item.low) || 0,
                close: parseFloat(item.close) || 0,
                volume: 0
              })
            }
            
            // Batch insert candles (faster)
            for (const candle of candles) {
              await DB.prepare(`
                INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT DO NOTHING
              `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume, tf.dbKey).run()
            }
            
            // Calculate and save indicators
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
          
          // Reduced delay (100ms instead of 500ms)
          await new Promise(resolve => setTimeout(resolve, 100))
        } catch (error) {
          console.error(`[MTF] Error fetching ${tf.dbKey}:`, error)
          // Continue with other timeframes even if one fails
        }
      }
    } else {
      // Using cached data (instant!)
      totalCandles = 0
      results.steps[0].cached = true
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
    
    // Fetch candles for liquidity analysis
    const candlesForLiquidity = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all()
    
    const formattedCandles = (candlesForLiquidity.results || []).map((c: any) => ({
      timestamp: c.timestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume || 1
    })).reverse() // Reverse to get chronological order
    
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice)
    const h1Indicators = mtfIndicators['1h']
    const dayTradeSignal = generateSignalWithLiquidity(currentPrice, h1Indicators, formattedCandles, 'day_trade')
    const swingTradeSignal = generateSignalWithLiquidity(currentPrice, h1Indicators, formattedCandles, 'swing_trade')
    
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
      // Calculate Support & Resistance Levels from last 20 x 1h candles
      const candles1h = await DB.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all()
      
      let resistanceLevels: number[] = []
      let supportLevels: number[] = []
      
      if (candles1h.results && candles1h.results.length >= 20) {
        const highs = (candles1h.results as any[]).map(c => c.high).sort((a: number, b: number) => b - a)
        const lows = (candles1h.results as any[]).map(c => c.low).sort((a: number, b: number) => a - b)
        resistanceLevels = highs.slice(0, 3) // Top 3 highs
        supportLevels = lows.slice(0, 3) // Bottom 3 lows
      }
      
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

${resistanceLevels.length > 0 ? `📊 *Key Levels:*
🔴 *Resistance:* ${resistanceLevels.map(r => `$${r.toFixed(2)}`).join(', ')}
🟢 *Support:* ${supportLevels.map(s => `$${s.toFixed(2)}`).join(', ')}

` : ''}💼 *Position:* ${dayPosition.units} lots ($${dayPosition.value.toLocaleString()})
💰 *Risk:* $${dayPosition.risk_amount} (${dayPosition.risk_pct}%)
📊 *R:R:* ${dayPosition.reward_risk_ratio}:1

${dayPosition.warning ? `⚠️ ${dayPosition.warning}` : ''}

💧 *LIQUIDITY ANALYSIS:*
${dayTradeSignal.liquidity_score >= 70 ? '🟢' : dayTradeSignal.liquidity_score >= 50 ? '🟡' : '🔴'} *Score:* ${dayTradeSignal.liquidity_score}/100
🌐 *Session:* ${dayTradeSignal.session} (${dayTradeSignal.time_zone} LIQUIDITY)
📊 *Volume:* ${dayTradeSignal.volume_trend} (${dayTradeSignal.volume_percentile}%ile)
💰 *Spread:* ~${dayTradeSignal.estimated_spread_pips} pips
📉 *Impact:* ~${dayTradeSignal.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${dayTradeSignal.position_size_multiplier >= 1.0 ? '🟢' : dayTradeSignal.position_size_multiplier >= 0.75 ? '🟡' : '🔴'} *Recommended:* ${(dayTradeSignal.position_size_multiplier * 100).toFixed(0)}% of normal size
${dayTradeSignal.optimal_for_trading ? '✅ *Status:* Optimal for trading' : '⚠️ *Status:* Sub-optimal liquidity'}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${swingTradeMTF.isValid ? '✅' : '❌'} *${swingTradeMTF.signal_type}* (${swingTradeMTF.final_confidence}% confidence)

*Entry:* $${swingTradeMTF.price.toFixed(2)}
*Stop Loss:* $${swingTradeMTF.stop_loss.toFixed(2)} (${((swingTradeMTF.stop_loss / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP1:* $${swingTradeMTF.take_profit_1.toFixed(2)} (${((swingTradeMTF.take_profit_1 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP2:* $${swingTradeMTF.take_profit_2.toFixed(2)} (${((swingTradeMTF.take_profit_2 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP3:* $${swingTradeMTF.take_profit_3.toFixed(2)} (${((swingTradeMTF.take_profit_3 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)

${resistanceLevels.length > 0 ? `📊 *Key Levels:*
🔴 *Resistance:* ${resistanceLevels.map(r => `$${r.toFixed(2)}`).join(', ')}
🟢 *Support:* ${supportLevels.map(s => `$${s.toFixed(2)}`).join(', ')}

` : ''}💼 *Position:* ${swingPosition.units} lots ($${swingPosition.value.toLocaleString()})
💰 *Risk:* $${swingPosition.risk_amount} (${swingPosition.risk_pct}%)
📊 *R:R:* ${swingPosition.reward_risk_ratio}:1

${swingPosition.warning ? `⚠️ ${swingPosition.warning}` : ''}

💧 *LIQUIDITY ANALYSIS:*
${swingTradeSignal.liquidity_score >= 70 ? '🟢' : swingTradeSignal.liquidity_score >= 50 ? '🟡' : '🔴'} *Score:* ${swingTradeSignal.liquidity_score}/100
🌐 *Session:* ${swingTradeSignal.session} (${swingTradeSignal.time_zone} LIQUIDITY)
📊 *Volume:* ${swingTradeSignal.volume_trend} (${swingTradeSignal.volume_percentile}%ile)
💰 *Spread:* ~${swingTradeSignal.estimated_spread_pips} pips
📉 *Impact:* ~${swingTradeSignal.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${swingTradeSignal.position_size_multiplier >= 1.0 ? '🟢' : swingTradeSignal.position_size_multiplier >= 0.75 ? '🟡' : '🔴'} *Recommended:* ${(swingTradeSignal.position_size_multiplier * 100).toFixed(0)}% of normal size
${swingTradeSignal.optimal_for_trading ? '✅ *Status:* Optimal for trading' : '⚠️ *Status:* Sub-optimal liquidity'}

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

// GET wrapper for analyze-and-notify (for cron jobs that only support GET)
// This allows cron services to call the same endpoint via GET method
app.get('/api/automation/analyze-and-notify', async (c) => {
  // Forward to POST endpoint with empty body
  const { DB } = c.env
  
  try {
    const body = {}
    const skipDataFetch = body.skipDataFetch === true
    
    const results: any = {
      timestamp: new Date().toISOString(),
      steps: []
    }
    
    // Step 1: Fetch all 5 timeframes (or use cached data)
    results.steps.push({ step: 1, name: 'Fetching All 5 Timeframes (100 candles each)', status: 'running' })
    
    let totalCandles = 0
    
    if (!skipDataFetch) {
      // Check if data is recent (within last 30 minutes)
      const latestData = await DB.prepare(`
        SELECT MAX(timestamp) as latest_timestamp FROM market_data WHERE timeframe = '1h'
      `).first()
      
      const dataAge = latestData?.latest_timestamp 
        ? Date.now() - new Date(latestData.latest_timestamp as string).getTime()
        : Infinity
      
      // Only fetch if data is older than 30 minutes
      if (dataAge > 30 * 60 * 1000) {
        const settings = await DB.prepare(`
          SELECT setting_value FROM user_settings WHERE setting_key = 'twelve_data_api_key'
        `).first()
        
        const apiKey = (settings as any)?.setting_value || '70140f57bea54c5e90768de696487d8f'
        
        const timeframes = [
          { interval: '5min', dbKey: '5m' },
          { interval: '15min', dbKey: '15m' },
          { interval: '1h', dbKey: '1h' },
          { interval: '4h', dbKey: '4h' },
          { interval: '1day', dbKey: 'daily' }
        ]
        
        for (const tf of timeframes) {
          try {
            const url = `https://api.twelvedata.com/time_series?symbol=XAU/USD&interval=${tf.interval}&apikey=${apiKey}&outputsize=100`
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 10000)
            
            const response = await fetch(url, { signal: controller.signal })
            clearTimeout(timeoutId)
            const data = await response.json()
            
            if (data.values && Array.isArray(data.values)) {
              const candles: any[] = []
              for (const item of data.values) {
                candles.push({
                  timestamp: item.datetime,
                  open: parseFloat(item.open) || 0,
                  high: parseFloat(item.high) || 0,
                  low: parseFloat(item.low) || 0,
                  close: parseFloat(item.close) || 0,
                  volume: 0
                })
              }
              
              for (const candle of candles) {
                await DB.prepare(`
                  INSERT INTO market_data (timestamp, open, high, low, close, volume, timeframe)
                  VALUES (?, ?, ?, ?, ?, ?, ?)
                  ON CONFLICT DO NOTHING
                `).bind(candle.timestamp, candle.open, candle.high, candle.low, candle.close, candle.volume, tf.dbKey).run()
              }
              
              if (candles.length >= 50) {
                const { calculateIndicators } = await import('./lib/technicalAnalysis')
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
            
            await new Promise(resolve => setTimeout(resolve, 100))
          } catch (error) {
            console.error(`[MTF] Error fetching ${tf.dbKey}:`, error)
          }
        }
      } else {
        totalCandles = 0
        results.steps[0].cached = true
      }
    } else {
      totalCandles = 0
      results.steps[0].cached = true
    }
    
    results.steps[0].status = 'completed'
    results.steps[0].data = { totalCandles }
    
    // Step 2: Generate MTF Signal
    results.steps.push({ step: 2, name: 'Generate MTF Signal', status: 'running' })
    
    const { analyzeTimeframeAlignment, validateMultiTimeframeSignal } = await import('./lib/multiTimeframeAnalysis')
    const { generateSignal } = await import('./lib/technicalAnalysis')
    
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
    
    // Fetch candles for liquidity analysis
    const candlesForLiquidity = await DB.prepare(`
      SELECT timestamp, open, high, low, close, volume FROM market_data 
      WHERE timeframe = '1h'
      ORDER BY timestamp DESC 
      LIMIT 20
    `).all()
    
    const formattedCandles = (candlesForLiquidity.results || []).map((c: any) => ({
      timestamp: c.timestamp,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
      volume: c.volume || 1
    })).reverse() // Reverse to get chronological order
    
    const alignment = analyzeTimeframeAlignment(mtfIndicators, currentPrice)
    const h1Indicators = mtfIndicators['1h']
    const dayTradeSignal = generateSignalWithLiquidity(currentPrice, h1Indicators, formattedCandles, 'day_trade')
    const swingTradeSignal = generateSignalWithLiquidity(currentPrice, h1Indicators, formattedCandles, 'swing_trade')
    
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
      // Calculate Support & Resistance Levels from last 20 x 1h candles
      const candles1h = await DB.prepare(`
        SELECT high, low FROM market_data 
        WHERE timeframe = '1h'
        ORDER BY timestamp DESC 
        LIMIT 20
      `).all()
      
      let resistanceLevels: number[] = []
      let supportLevels: number[] = []
      
      if (candles1h.results && candles1h.results.length >= 20) {
        const highs = (candles1h.results as any[]).map(c => c.high).sort((a: number, b: number) => b - a)
        const lows = (candles1h.results as any[]).map(c => c.low).sort((a: number, b: number) => a - b)
        resistanceLevels = highs.slice(0, 3)
        supportLevels = lows.slice(0, 3)
      }
      
      const message = `
🤖 *AUTOMATED DAILY ANALYSIS*
⏰ ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC

━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *MULTI-TIMEFRAME ALIGNMENT*
━━━━━━━━━━━━━━━━━━━━━━━━━

${alignment.type} (${alignment.score}/5 timeframes)
Confidence Boost: +${alignment.confidenceBoost}%

${alignment.trends.map((t: any) => {
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

${resistanceLevels.length > 0 ? `📊 *Key Levels:*
🔴 *Resistance:* ${resistanceLevels.map(r => `$${r.toFixed(2)}`).join(', ')}
🟢 *Support:* ${supportLevels.map(s => `$${s.toFixed(2)}`).join(', ')}

` : ''}💼 *Position:* ${dayPosition.units} lots ($${dayPosition.value.toLocaleString()})
💰 *Risk:* $${dayPosition.risk_amount} (${dayPosition.risk_pct}%)
📊 *R:R:* ${dayPosition.reward_risk_ratio}:1

${dayPosition.warning ? `⚠️ ${dayPosition.warning}` : ''}

💧 *LIQUIDITY ANALYSIS:*
${dayTradeSignal.liquidity_score >= 70 ? '🟢' : dayTradeSignal.liquidity_score >= 50 ? '🟡' : '🔴'} *Score:* ${dayTradeSignal.liquidity_score}/100
🌐 *Session:* ${dayTradeSignal.session} (${dayTradeSignal.time_zone} LIQUIDITY)
📊 *Volume:* ${dayTradeSignal.volume_trend} (${dayTradeSignal.volume_percentile}%ile)
💰 *Spread:* ~${dayTradeSignal.estimated_spread_pips} pips
📉 *Impact:* ~${dayTradeSignal.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${dayTradeSignal.position_size_multiplier >= 1.0 ? '🟢' : dayTradeSignal.position_size_multiplier >= 0.75 ? '🟡' : '🔴'} *Recommended:* ${(dayTradeSignal.position_size_multiplier * 100).toFixed(0)}% of normal size
${dayTradeSignal.optimal_for_trading ? '✅ *Status:* Optimal for trading' : '⚠️ *Status:* Sub-optimal liquidity'}

━━━━━━━━━━━━━━━━━━━━━━━━━
🌊 *SWING TRADE SIGNAL*
━━━━━━━━━━━━━━━━━━━━━━━━━

${swingTradeMTF.isValid ? '✅' : '❌'} *${swingTradeMTF.signal_type}* (${swingTradeMTF.final_confidence}% confidence)

*Entry:* $${swingTradeMTF.price.toFixed(2)}
*Stop Loss:* $${swingTradeMTF.stop_loss.toFixed(2)} (${((swingTradeMTF.stop_loss / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP1:* $${swingTradeMTF.take_profit_1.toFixed(2)} (${((swingTradeMTF.take_profit_1 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP2:* $${swingTradeMTF.take_profit_2.toFixed(2)} (${((swingTradeMTF.take_profit_2 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)
*TP3:* $${swingTradeMTF.take_profit_3.toFixed(2)} (${((swingTradeMTF.take_profit_3 / swingTradeMTF.price - 1) * 100).toFixed(2)}%)

${resistanceLevels.length > 0 ? `📊 *Key Levels:*
🔴 *Resistance:* ${resistanceLevels.map(r => `$${r.toFixed(2)}`).join(', ')}
🟢 *Support:* ${supportLevels.map(s => `$${s.toFixed(2)}`).join(', ')}

` : ''}💼 *Position:* ${swingPosition.units} lots ($${swingPosition.value.toLocaleString()})
💰 *Risk:* $${swingPosition.risk_amount} (${swingPosition.risk_pct}%)
📊 *R:R:* ${swingPosition.reward_risk_ratio}:1

${swingPosition.warning ? `⚠️ ${swingPosition.warning}` : ''}

💧 *LIQUIDITY ANALYSIS:*
${swingTradeSignal.liquidity_score >= 70 ? '🟢' : swingTradeSignal.liquidity_score >= 50 ? '🟡' : '🔴'} *Score:* ${swingTradeSignal.liquidity_score}/100
🌐 *Session:* ${swingTradeSignal.session} (${swingTradeSignal.time_zone} LIQUIDITY)
📊 *Volume:* ${swingTradeSignal.volume_trend} (${swingTradeSignal.volume_percentile}%ile)
💰 *Spread:* ~${swingTradeSignal.estimated_spread_pips} pips
📉 *Impact:* ~${swingTradeSignal.price_impact_bps} bps ($100K)

💼 *POSITION SIZING:*
${swingTradeSignal.position_size_multiplier >= 1.0 ? '🟢' : swingTradeSignal.position_size_multiplier >= 0.75 ? '🟡' : '🔴'} *Recommended:* ${(swingTradeSignal.position_size_multiplier * 100).toFixed(0)}% of normal size
${swingTradeSignal.optimal_for_trading ? '✅ *Status:* Optimal for trading' : '⚠️ *Status:* Sub-optimal liquidity'}

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
      
      const { sendTelegramMessage } = await import('./lib/telegram')
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
    console.error('[ANALYZE-NOTIFY-GET] Error:', error)
    return c.json({ 
      success: false, 
      error: error.message,
      stack: error.stack 
    }, 500)
  }
})

export default app
