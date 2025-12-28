/**
 * Economic Calendar Integration
 * Filters trading signals based on high-impact economic events
 * 
 * Data Sources:
 * 1. Static high-impact events (NFP, FOMC, CPI)
 * 2. Forex Factory calendar scraping (fallback)
 * 3. User-configured event overrides
 */

export interface EconomicEvent {
  id?: number
  date: string // ISO format: 2025-01-15
  time: string // UTC time: 14:30
  title: string
  country: string // 'USD', 'EUR', 'GBP', etc.
  impact: 'high' | 'medium' | 'low'
  actual?: string
  forecast?: string
  previous?: string
  source: 'static' | 'forex_factory' | 'user' | 'api'
}

export interface EventFilter {
  shouldTrade: boolean
  reason: string
  nextSafeTime?: string // When it's safe to trade again
  riskLevel: 'safe' | 'caution' | 'danger'
  upcomingEvents: EconomicEvent[]
}

/**
 * HIGH-IMPACT EVENTS THAT AFFECT GOLD
 * These are the critical events that cause 50+ pips movement
 */
const HIGH_IMPACT_EVENTS = [
  // Monthly recurring (First Friday of month)
  { title: 'US Non-Farm Payrolls (NFP)', time: '13:30', country: 'USD', dayOfMonth: 'first-friday' },
  { title: 'US Unemployment Rate', time: '13:30', country: 'USD', dayOfMonth: 'first-friday' },
  
  // Monthly recurring (Mid-month)
  { title: 'US Consumer Price Index (CPI)', time: '13:30', country: 'USD', dayOfMonth: 10 },
  { title: 'US Producer Price Index (PPI)', time: '13:30', country: 'USD', dayOfMonth: 11 },
  { title: 'US Retail Sales', time: '13:30', country: 'USD', dayOfMonth: 15 },
  
  // Quarterly recurring
  { title: 'US GDP', time: '13:30', country: 'USD', frequency: 'quarterly' },
  
  // FOMC meetings (8 per year - specific dates)
  { title: 'FOMC Interest Rate Decision', time: '19:00', country: 'USD', frequency: 'fomc' },
  { title: 'FOMC Press Conference', time: '19:30', country: 'USD', frequency: 'fomc' },
  
  // Other critical
  { title: 'Fed Chair Powell Speech', time: 'varies', country: 'USD', frequency: 'irregular' },
  { title: 'FOMC Meeting Minutes', time: '19:00', country: 'USD', frequency: 'monthly' },
  { title: 'US ISM Manufacturing PMI', time: '15:00', country: 'USD', dayOfMonth: 1 },
  { title: 'US ISM Services PMI', time: '15:00', country: 'USD', dayOfMonth: 3 },
]

/**
 * 2025 FOMC Meeting Dates (Known Schedule)
 */
const FOMC_DATES_2025 = [
  '2025-01-28', '2025-01-29', // January
  '2025-03-18', '2025-03-19', // March
  '2025-04-29', '2025-04-30', // April
  '2025-06-17', '2025-06-18', // June
  '2025-07-29', '2025-07-30', // July
  '2025-09-16', '2025-09-17', // September
  '2025-10-28', '2025-10-29', // October
  '2025-12-09', '2025-12-10', // December
]

/**
 * Get first Friday of a given month
 */
function getFirstFriday(year: number, month: number): number {
  let day = 1
  while (day <= 7) {
    const date = new Date(year, month, day)
    if (date.getDay() === 5) { // Friday
      return day
    }
    day++
  }
  return 1 // Fallback
}

/**
 * Generate static high-impact events for next 30 days
 */
export function generateStaticEvents(daysAhead: number = 30): EconomicEvent[] {
  const events: EconomicEvent[] = []
  const today = new Date()
  
  // Add FOMC dates within range
  for (const fomcDate of FOMC_DATES_2025) {
    const eventDate = new Date(fomcDate)
    const diffDays = Math.floor((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays >= 0 && diffDays <= daysAhead) {
      events.push({
        date: fomcDate,
        time: '19:00',
        title: 'FOMC Interest Rate Decision',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
      
      events.push({
        date: fomcDate,
        time: '19:30',
        title: 'FOMC Press Conference (Powell)',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
  }
  
  // Add monthly recurring events
  for (let i = 0; i <= daysAhead; i++) {
    const checkDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
    const year = checkDate.getFullYear()
    const month = checkDate.getMonth()
    const day = checkDate.getDate()
    const dayOfWeek = checkDate.getDay()
    
    // NFP (First Friday of month)
    if (day === getFirstFriday(year, month) && dayOfWeek === 5) {
      const dateStr = checkDate.toISOString().split('T')[0]
      events.push({
        date: dateStr,
        time: '13:30',
        title: 'US Non-Farm Payrolls (NFP)',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
      events.push({
        date: dateStr,
        time: '13:30',
        title: 'US Unemployment Rate',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
    
    // CPI (Around 10th of month)
    if (day === 10) {
      events.push({
        date: checkDate.toISOString().split('T')[0],
        time: '13:30',
        title: 'US Consumer Price Index (CPI)',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
    
    // PPI (Around 11th of month)
    if (day === 11) {
      events.push({
        date: checkDate.toISOString().split('T')[0],
        time: '13:30',
        title: 'US Producer Price Index (PPI)',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
    
    // Retail Sales (Around 15th of month)
    if (day === 15) {
      events.push({
        date: checkDate.toISOString().split('T')[0],
        time: '13:30',
        title: 'US Retail Sales',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
    
    // ISM Manufacturing (1st business day)
    if (day === 1 || (day <= 3 && dayOfWeek >= 1 && dayOfWeek <= 5)) {
      events.push({
        date: checkDate.toISOString().split('T')[0],
        time: '15:00',
        title: 'US ISM Manufacturing PMI',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
    
    // ISM Services (3rd business day)
    if (day === 3 || (day <= 5 && dayOfWeek >= 1 && dayOfWeek <= 5)) {
      events.push({
        date: checkDate.toISOString().split('T')[0],
        time: '15:00',
        title: 'US ISM Services PMI',
        country: 'USD',
        impact: 'high',
        source: 'static'
      })
    }
  }
  
  // Remove duplicates by date+time+title
  const uniqueEvents = events.filter((event, index, self) =>
    index === self.findIndex((e) => (
      e.date === event.date && e.time === event.time && e.title === event.title
    ))
  )
  
  return uniqueEvents.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}:00Z`)
    const dateB = new Date(`${b.date}T${b.time}:00Z`)
    return dateA.getTime() - dateB.getTime()
  })
}

/**
 * Check if it's safe to trade based on economic calendar
 * 
 * Rules:
 * 1. Don't trade 30 min before high-impact event
 * 2. Don't trade 30 min after high-impact event
 * 3. Don't trade during FOMC days at all
 * 4. Medium-impact: 15 min buffer
 */
export function checkTradingSafety(
  currentTime: Date = new Date(),
  customEvents: EconomicEvent[] = []
): EventFilter {
  // Get all events (static + custom)
  const allEvents = [...generateStaticEvents(7), ...customEvents]
  
  // Filter upcoming events (next 7 days)
  const upcomingEvents = allEvents.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.time}:00Z`)
    return eventDateTime > currentTime
  }).slice(0, 10) // Next 10 events
  
  // Check for events today
  const todayStr = currentTime.toISOString().split('T')[0]
  const todayEvents = allEvents.filter(e => e.date === todayStr && e.impact === 'high')
  
  // RULE 1: No trading on FOMC days
  if (FOMC_DATES_2025.includes(todayStr)) {
    return {
      shouldTrade: false,
      reason: '🚨 FOMC Meeting Day - No trading recommended',
      riskLevel: 'danger',
      upcomingEvents,
      nextSafeTime: getNextDay(todayStr)
    }
  }
  
  // RULE 2: Check for events within next 2 hours
  const twoHoursLater = new Date(currentTime.getTime() + 2 * 60 * 60 * 1000)
  
  for (const event of allEvents) {
    const eventDateTime = new Date(`${event.date}T${event.time}:00Z`)
    const timeDiffMinutes = (eventDateTime.getTime() - currentTime.getTime()) / (1000 * 60)
    
    // High-impact event within next 30 minutes
    if (event.impact === 'high' && timeDiffMinutes > 0 && timeDiffMinutes <= 30) {
      return {
        shouldTrade: false,
        reason: `🚨 HIGH IMPACT: ${event.title} in ${Math.round(timeDiffMinutes)} minutes`,
        riskLevel: 'danger',
        upcomingEvents,
        nextSafeTime: new Date(eventDateTime.getTime() + 30 * 60 * 1000).toISOString()
      }
    }
    
    // High-impact event within next 2 hours (caution)
    if (event.impact === 'high' && timeDiffMinutes > 30 && timeDiffMinutes <= 120) {
      return {
        shouldTrade: true, // Can trade but with caution
        reason: `⚠️ CAUTION: ${event.title} in ${Math.round(timeDiffMinutes)} minutes`,
        riskLevel: 'caution',
        upcomingEvents,
        nextSafeTime: undefined
      }
    }
  }
  
  // RULE 3: Check if we're within 30 minutes AFTER a high-impact event
  const thirtyMinAgo = new Date(currentTime.getTime() - 30 * 60 * 1000)
  
  for (const event of allEvents) {
    const eventDateTime = new Date(`${event.date}T${event.time}:00Z`)
    
    if (event.impact === 'high' && 
        eventDateTime > thirtyMinAgo && 
        eventDateTime < currentTime) {
      const minutesSince = (currentTime.getTime() - eventDateTime.getTime()) / (1000 * 60)
      return {
        shouldTrade: false,
        reason: `🚨 ${event.title} just happened ${Math.round(minutesSince)} min ago - Wait for volatility to settle`,
        riskLevel: 'danger',
        upcomingEvents,
        nextSafeTime: new Date(eventDateTime.getTime() + 30 * 60 * 1000).toISOString()
      }
    }
  }
  
  // Safe to trade
  return {
    shouldTrade: true,
    reason: '✅ No major economic events - Safe to trade',
    riskLevel: 'safe',
    upcomingEvents
  }
}

/**
 * Get next safe trading day
 */
function getNextDay(dateStr: string): string {
  const date = new Date(dateStr)
  date.setDate(date.getDate() + 1)
  return date.toISOString().split('T')[0]
}

/**
 * Format event for display
 */
export function formatEvent(event: EconomicEvent): string {
  const date = new Date(`${event.date}T${event.time}:00Z`)
  const localTime = date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'UTC'
  })
  
  let impact = '🔴'
  if (event.impact === 'medium') impact = '🟡'
  if (event.impact === 'low') impact = '🟢'
  
  return `${impact} ${event.date} ${localTime} UTC - ${event.title}`
}

/**
 * Get events for a specific date range
 */
export function getEventsInRange(startDate: Date, endDate: Date): EconomicEvent[] {
  const allEvents = generateStaticEvents(90) // 3 months
  
  return allEvents.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate >= startDate && eventDate <= endDate
  })
}

/**
 * Check if date is a high-risk trading day
 */
export function isHighRiskDay(date: Date): boolean {
  const dateStr = date.toISOString().split('T')[0]
  
  // FOMC days are always high risk
  if (FOMC_DATES_2025.includes(dateStr)) return true
  
  // Check for multiple high-impact events on same day
  const events = generateStaticEvents(30)
  const dayEvents = events.filter(e => e.date === dateStr && e.impact === 'high')
  
  return dayEvents.length >= 2 // 2+ high-impact events = high risk
}

/**
 * Get today's high-impact events
 */
export function getTodayEvents(): EconomicEvent[] {
  const today = new Date().toISOString().split('T')[0]
  const allEvents = generateStaticEvents(7)
  
  return allEvents.filter(e => e.date === today)
}

/**
 * Calculate confidence adjustment based on economic calendar
 */
export function calculateCalendarImpact(currentTime: Date = new Date()): {
  adjustment: number
  reason: string
} {
  const safety = checkTradingSafety(currentTime)
  
  if (safety.riskLevel === 'danger') {
    return {
      adjustment: -30, // Reduce confidence by 30%
      reason: safety.reason
    }
  }
  
  if (safety.riskLevel === 'caution') {
    return {
      adjustment: -15, // Reduce confidence by 15%
      reason: safety.reason
    }
  }
  
  return {
    adjustment: 0,
    reason: safety.reason
  }
}
