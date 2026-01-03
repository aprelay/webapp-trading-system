import { Hono } from 'hono'
import { sendTelegramMessage } from '../lib/telegram'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// Helper: Check if monitoring tables exist
async function checkIfTablesExist(DB: D1Database): Promise<boolean> {
  try {
    await DB.prepare(`SELECT 1 FROM monitoring_config LIMIT 1`).first()
    return true
  } catch (error) {
    return false
  }
}

// Helper: Get monitoring config
async function getMonitoringConfig(DB: D1Database): Promise<Record<string, string>> {
  try {
    const result = await DB.prepare(`
      SELECT config_key, config_value FROM monitoring_config
    `).all()
    
    const config: Record<string, string> = {}
    for (const row of result.results || []) {
      config[(row as any).config_key] = (row as any).config_value
    }
    
    return config
  } catch (error) {
    // Table doesn't exist yet, return defaults
    return {
      data_stale_threshold_minutes: '30',
      endpoint_timeout_ms: '30000',
      slow_response_threshold_ms: '5000',
      max_failure_count: '3',
      monitoring_interval_minutes: '5',
      telegram_alerts_enabled: '1',
      auto_recovery_enabled: '1'
    }
  }
}

// Helper: Check endpoint health
async function checkEndpointHealth(
  DB: D1Database,
  endpointName: string,
  endpointUrl: string,
  baseUrl: string
): Promise<{ status: string; responseTime: number; error?: string }> {
  const startTime = Date.now()
  
  try {
    const fullUrl = baseUrl + endpointUrl
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout
    
    const response = await fetch(fullUrl, { 
      signal: controller.signal,
      method: endpointUrl.includes('fetch-mtf') || endpointUrl.includes('analyze-and-notify') ? 'POST' : 'GET'
    })
    
    clearTimeout(timeoutId)
    const responseTime = Date.now() - startTime
    
    if (!response.ok) {
      return { status: 'degraded', responseTime, error: `HTTP ${response.status}` }
    }
    
    // Try to parse JSON
    try {
      const data = await response.json()
      if (data.success === false) {
        return { status: 'degraded', responseTime, error: data.error || 'API returned success: false' }
      }
    } catch (e) {
      // Non-JSON response, still ok if HTTP status is good
    }
    
    return { status: 'healthy', responseTime }
  } catch (error: any) {
    const responseTime = Date.now() - startTime
    return { 
      status: 'down', 
      responseTime, 
      error: error.message || 'Unknown error' 
    }
  }
}

// Helper: Check data freshness
async function checkDataFreshness(
  DB: D1Database,
  config: Record<string, string>
): Promise<Array<{ source: string; timeframe?: string; ageMinutes: number; isStale: boolean; lastTimestamp?: string }>> {
  const staleThreshold = parseInt(config.data_stale_threshold_minutes || '30')
  const results: Array<any> = []
  
  // Check 1: market_data (1h timeframe from auto-fetch)
  const marketData1h = await DB.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM market_data
    WHERE timeframe = '1h'
  `).first()
  
  if (marketData1h) {
    const lastTimestamp = (marketData1h as any).last_timestamp
    const count = (marketData1h as any).count
    const ageMinutes = lastTimestamp 
      ? Math.floor((Date.now() - new Date(lastTimestamp).getTime()) / 60000)
      : 9999
    
    results.push({
      source: 'market_data',
      timeframe: '1h',
      ageMinutes,
      isStale: ageMinutes > staleThreshold,
      lastTimestamp,
      count
    })
  }
  
  // Check 2: multi_timeframe_indicators
  const timeframes = ['5m', '15m', '1h', '4h', 'daily']
  for (const tf of timeframes) {
    const mtfData = await DB.prepare(`
      SELECT MAX(timestamp) as last_timestamp
      FROM multi_timeframe_indicators
      WHERE timeframe = ?
    `).bind(tf).first()
    
    if (mtfData) {
      const lastTimestamp = (mtfData as any).last_timestamp
      const ageMinutes = lastTimestamp
        ? Math.floor((Date.now() - new Date(lastTimestamp).getTime()) / 60000)
        : 9999
      
      results.push({
        source: 'multi_timeframe_indicators',
        timeframe: tf,
        ageMinutes,
        isStale: ageMinutes > staleThreshold,
        lastTimestamp
      })
    }
  }
  
  // Check 3: signals table
  const signalsData = await DB.prepare(`
    SELECT MAX(timestamp) as last_timestamp, COUNT(*) as count
    FROM signals
  `).first()
  
  if (signalsData) {
    const lastTimestamp = (signalsData as any).last_timestamp
    const count = (signalsData as any).count
    const ageMinutes = lastTimestamp
      ? Math.floor((Date.now() - new Date(lastTimestamp).getTime()) / 60000)
      : 9999
    
    results.push({
      source: 'signals',
      ageMinutes,
      isStale: ageMinutes > staleThreshold,
      lastTimestamp,
      count
    })
  }
  
  return results
}

// Helper: Send monitoring alert
async function sendMonitoringAlert(
  DB: D1Database,
  alertType: string,
  severity: string,
  source: string,
  message: string,
  telegramEnabled: boolean
): Promise<boolean> {
  try {
    // Try to save alert to database (optional - skip if tables don't exist)
    try {
      await DB.prepare(`
        INSERT INTO monitoring_alerts (alert_type, severity, source, message, telegram_sent)
        VALUES (?, ?, ?, ?, ?)
      `).bind(alertType, severity, source, message, telegramEnabled ? 1 : 0).run()
    } catch (error) {
      console.log('[MONITORING] Could not save alert to database:', error)
    }
    
    // Send Telegram alert if enabled
    if (telegramEnabled) {
      // Get Telegram settings
      const settings = await DB.prepare(`
        SELECT setting_key, setting_value FROM user_settings
        WHERE setting_key IN ('telegram_bot_token', 'telegram_chat_id')
      `).all()
      
      let botToken = ''
      let chatId = ''
      
      for (const row of settings.results || []) {
        if ((row as any).setting_key === 'telegram_bot_token') {
          botToken = (row as any).setting_value
        }
        if ((row as any).setting_key === 'telegram_chat_id') {
          chatId = (row as any).setting_value
        }
      }
      
      if (botToken && chatId && botToken !== 'your_bot_token_here') {
        const severityEmoji = {
          low: '🟡',
          medium: '🟠',
          high: '🔴',
          critical: '🚨'
        }[severity] || '⚠️'
        
        const alertTypeEmoji = {
          endpoint_down: '🔻',
          data_stale: '⏰',
          slow_response: '🐌',
          high_failure_rate: '❌'
        }[alertType] || '⚠️'
        
        const telegramMessage = `${severityEmoji} ${alertTypeEmoji} MONITORING ALERT\n\n` +
          `Type: ${alertType.toUpperCase()}\n` +
          `Severity: ${severity.toUpperCase()}\n` +
          `Source: ${source}\n\n` +
          `${message}\n\n` +
          `⏰ ${new Date().toUTCString()}`
        
        await sendTelegramMessage(telegramMessage, botToken, chatId)
        return true
      }
    }
    
    return false
  } catch (error) {
    console.error('[MONITORING] Failed to send alert:', error)
    return false
  }
}

// GET /health-check - Comprehensive system health check
app.get('/health-check', async (c) => {
  const { DB } = c.env
  
  try {
    const config = await getMonitoringConfig(DB)
    const baseUrl = c.req.url.replace('/api/monitoring/health-check', '')
    const timestamp = new Date().toISOString()
    const tablesExist = await checkIfTablesExist(DB)
    
    console.log('[MONITORING] Starting comprehensive health check...')
    console.log('[MONITORING] Tables exist:', tablesExist)
    
    // Define endpoints to monitor
    const endpoints = [
      { name: 'auto-fetch', url: '/api/cron/auto-fetch' },
      { name: 'mtf-fetch', url: '/api/market/fetch-mtf' },
      { name: 'ai-analysis', url: '/api/ai/auto-ai-scan' },
      { name: 'scanner', url: '/api/scanner/scan' },
      { name: 'signals-recent', url: '/api/signals/recent' },
      { name: 'indicators-latest', url: '/api/indicators/latest' }
    ]
    
    const endpointResults: any[] = []
    const telegramEnabled = config.telegram_alerts_enabled === '1'
    const slowThreshold = parseInt(config.slow_response_threshold_ms || '5000')
    const maxFailures = parseInt(config.max_failure_count || '3')
    
    // Check each endpoint
    for (const endpoint of endpoints) {
      const health = await checkEndpointHealth(DB, endpoint.name, endpoint.url, baseUrl)
      
      let prevFailureCount = 0
      let prevStatus = 'unknown'
      let newFailureCount = health.status === 'down' ? 1 : 0
      
      // Get previous failure count if tables exist
      if (tablesExist) {
        try {
          const prevCheck = await DB.prepare(`
            SELECT failure_count, status FROM system_health
            WHERE endpoint_name = ?
            ORDER BY last_check_at DESC
            LIMIT 1
          `).bind(endpoint.name).first()
          
          prevFailureCount = (prevCheck as any)?.failure_count || 0
          prevStatus = (prevCheck as any)?.status || 'unknown'
          newFailureCount = health.status === 'down' ? prevFailureCount + 1 : 0
        } catch (error) {
          console.log('[MONITORING] Could not read previous health check:', error)
        }
      }
      
      // Save health check result if tables exist
      if (tablesExist) {
        try {
          await DB.prepare(`
            INSERT INTO system_health 
            (endpoint_name, endpoint_url, status, response_time_ms, last_check_at, 
             last_success_at, last_failure_at, failure_count, error_message)
            VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
          `).bind(
            endpoint.name,
            endpoint.url,
            health.status,
            health.responseTime,
            health.status === 'healthy' ? new Date().toISOString() : null,
            health.status === 'down' ? new Date().toISOString() : null,
            newFailureCount,
            health.error || null
          ).run()
        } catch (error) {
          console.log('[MONITORING] Could not save health check:', error)
        }
      }
      
      endpointResults.push({
        name: endpoint.name,
        url: endpoint.url,
        status: health.status,
        response_time_ms: health.responseTime,
        failure_count: newFailureCount,
        error: health.error
      })
      
      // Alert if endpoint is down and failure count exceeds threshold
      if (health.status === 'down' && newFailureCount >= maxFailures && prevStatus !== 'down') {
        if (tablesExist) {
          await sendMonitoringAlert(
            DB,
            'endpoint_down',
            'critical',
            endpoint.name,
            `Endpoint ${endpoint.name} is DOWN after ${newFailureCount} consecutive failures. Error: ${health.error}`,
            telegramEnabled
          )
        }
      }
      
      // Alert if response is slow
      if (health.status === 'healthy' && health.responseTime > slowThreshold) {
        if (tablesExist) {
          await sendMonitoringAlert(
            DB,
            'slow_response',
            'medium',
            endpoint.name,
            `Endpoint ${endpoint.name} is responding slowly: ${health.responseTime}ms (threshold: ${slowThreshold}ms)`,
            telegramEnabled
          )
        }
      }
    }
    
    // Check data freshness
    console.log('[MONITORING] Checking data freshness...')
    const freshnessResults = await checkDataFreshness(DB, config)
    
    // Save freshness results and send alerts
    for (const freshness of freshnessResults) {
      if (tablesExist) {
        try {
          await DB.prepare(`
            INSERT INTO data_freshness 
            (data_source, timeframe, last_data_timestamp, last_fetch_at, data_age_minutes, is_stale, record_count)
            VALUES (?, ?, ?, datetime('now'), ?, ?, ?)
          `).bind(
            freshness.source,
            freshness.timeframe || null,
            freshness.lastTimestamp || null,
            freshness.ageMinutes,
            freshness.isStale ? 1 : 0,
            freshness.count || null
          ).run()
        } catch (error) {
          console.log('[MONITORING] Could not save freshness check:', error)
        }
      }
      
      // Alert if data is stale
      if (freshness.isStale && tablesExist) {
        const sourceDesc = freshness.timeframe 
          ? `${freshness.source} (${freshness.timeframe})` 
          : freshness.source
        
        await sendMonitoringAlert(
          DB,
          'data_stale',
          'high',
          sourceDesc,
          `Data source ${sourceDesc} is STALE. Last update: ${freshness.lastTimestamp || 'unknown'}, Age: ${freshness.ageMinutes} minutes (threshold: ${config.data_stale_threshold_minutes} minutes)`,
          telegramEnabled
        )
      }
    }
    
    // Calculate overall health
    const healthyCount = endpointResults.filter(e => e.status === 'healthy').length
    const degradedCount = endpointResults.filter(e => e.status === 'degraded').length
    const downCount = endpointResults.filter(e => e.status === 'down').length
    const staleCount = freshnessResults.filter(f => f.isStale).length
    
    const overallStatus = downCount > 0 
      ? 'critical' 
      : degradedCount > 0 || staleCount > 0 
        ? 'degraded' 
        : 'healthy'
    
    // Save metrics if tables exist
    if (tablesExist) {
      try {
        await DB.prepare(`
          INSERT INTO system_metrics (metric_name, metric_value, metric_unit)
          VALUES 
            ('endpoints_healthy', ?, 'count'),
            ('endpoints_degraded', ?, 'count'),
            ('endpoints_down', ?, 'count'),
            ('data_sources_stale', ?, 'count'),
            ('avg_response_time', ?, 'ms')
        `).bind(
          healthyCount,
          degradedCount,
          downCount,
          staleCount,
          endpointResults.reduce((sum, e) => sum + e.response_time_ms, 0) / endpointResults.length
        ).run()
      } catch (error) {
        console.log('[MONITORING] Could not save metrics:', error)
      }
    }
    
    console.log(`[MONITORING] Health check complete: ${overallStatus}`)
    console.log(`[MONITORING] Tables exist: ${tablesExist}, Alerts enabled: ${telegramEnabled}`)
    
    return c.json({
      success: true,
      timestamp,
      overall_status: overallStatus,
      summary: {
        endpoints: {
          healthy: healthyCount,
          degraded: degradedCount,
          down: downCount,
          total: endpointResults.length
        },
        data: {
          fresh: freshnessResults.length - staleCount,
          stale: staleCount,
          total: freshnessResults.length
        }
      },
      endpoints: endpointResults,
      data_freshness: freshnessResults,
      config: {
        stale_threshold_minutes: config.data_stale_threshold_minutes,
        slow_response_threshold_ms: config.slow_response_threshold_ms,
        max_failure_count: config.max_failure_count,
        telegram_alerts_enabled: telegramEnabled
      }
    })
  } catch (error: any) {
    console.error('[MONITORING] Health check failed:', error)
    return c.json({ 
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// GET /status - Quick status overview
app.get('/status', async (c) => {
  const { DB } = c.env
  
  try {
    // Get latest health check for each endpoint
    const endpointStatus = await DB.prepare(`
      SELECT 
        endpoint_name,
        status,
        response_time_ms,
        failure_count,
        last_check_at
      FROM system_health
      WHERE id IN (
        SELECT MAX(id) FROM system_health GROUP BY endpoint_name
      )
      ORDER BY endpoint_name
    `).all()
    
    // Get data freshness status
    const dataStatus = await DB.prepare(`
      SELECT 
        data_source,
        timeframe,
        data_age_minutes,
        is_stale,
        last_fetch_at
      FROM data_freshness
      WHERE id IN (
        SELECT MAX(id) FROM data_freshness GROUP BY data_source, timeframe
      )
      ORDER BY data_source, timeframe
    `).all()
    
    // Get unresolved alerts
    const unresolvedAlerts = await DB.prepare(`
      SELECT 
        alert_type,
        severity,
        source,
        message,
        created_at
      FROM monitoring_alerts
      WHERE resolved = 0
      ORDER BY created_at DESC
      LIMIT 10
    `).all()
    
    const overallHealthy = (endpointStatus.results || []).every((row: any) => row.status === 'healthy')
    const overallFresh = (dataStatus.results || []).every((row: any) => row.is_stale === 0)
    
    return c.json({
      success: true,
      overall_status: overallHealthy && overallFresh ? 'healthy' : 'degraded',
      endpoints: endpointStatus.results,
      data_sources: dataStatus.results,
      unresolved_alerts: unresolvedAlerts.results,
      alert_count: (unresolvedAlerts.results || []).length
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// GET /alerts - Get monitoring alerts
app.get('/alerts', async (c) => {
  const { DB } = c.env
  const resolved = c.req.query('resolved') === 'true'
  
  try {
    const alerts = await DB.prepare(`
      SELECT * FROM monitoring_alerts
      WHERE resolved = ?
      ORDER BY created_at DESC
      LIMIT 50
    `).bind(resolved ? 1 : 0).all()
    
    return c.json({
      success: true,
      alerts: alerts.results,
      count: (alerts.results || []).length
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// POST /alerts/:id/resolve - Mark alert as resolved
app.post('/alerts/:id/resolve', async (c) => {
  const { DB } = c.env
  const alertId = c.req.param('id')
  
  try {
    await DB.prepare(`
      UPDATE monitoring_alerts
      SET resolved = 1, resolved_at = datetime('now')
      WHERE id = ?
    `).bind(alertId).run()
    
    return c.json({ success: true, message: 'Alert resolved' })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// GET /metrics - Get system metrics
app.get('/metrics', async (c) => {
  const { DB } = c.env
  const hours = parseInt(c.req.query('hours') || '24')
  
  try {
    const metrics = await DB.prepare(`
      SELECT 
        metric_name,
        AVG(metric_value) as avg_value,
        MIN(metric_value) as min_value,
        MAX(metric_value) as max_value,
        metric_unit,
        COUNT(*) as data_points
      FROM system_metrics
      WHERE timestamp > datetime('now', '-${hours} hours')
      GROUP BY metric_name, metric_unit
      ORDER BY metric_name
    `).all()
    
    return c.json({
      success: true,
      period_hours: hours,
      metrics: metrics.results
    })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// GET /config - Get monitoring configuration
app.get('/config', async (c) => {
  const { DB } = c.env
  
  try {
    const config = await getMonitoringConfig(DB)
    return c.json({ success: true, config })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

// POST /config - Update monitoring configuration
app.post('/config', async (c) => {
  const { DB } = c.env
  const body = await c.req.json()
  
  try {
    for (const [key, value] of Object.entries(body)) {
      await DB.prepare(`
        UPDATE monitoring_config
        SET config_value = ?, updated_at = datetime('now')
        WHERE config_key = ?
      `).bind(value, key).run()
    }
    
    return c.json({ success: true, message: 'Configuration updated' })
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500)
  }
})

export default app
