// News and Sentiment Analysis Library for Gold Trading
// Phase 2: 85% Accuracy Target

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  sentiment?: 'bullish' | 'bearish' | 'neutral';
  score?: number;
}

export interface NewsSentiment {
  overall: 'bullish' | 'bearish' | 'neutral';
  score: number; // -100 to +100 (negative = bearish, positive = bullish)
  bullishCount: number;
  bearishCount: number;
  neutralCount: number;
  articles: NewsArticle[];
}

export interface EconomicEvent {
  title: string;
  date: string;
  impact: 'high' | 'medium' | 'low';
  actual?: number;
  forecast?: number;
  previous?: number;
  currency: string;
}

// Bullish keywords for gold
const BULLISH_KEYWORDS = [
  'inflation', 'rate cut', 'dovish', 'stimulus', 'quantitative easing', 'qe',
  'recession', 'crisis', 'uncertainty', 'safe haven', 'hedge', 'geopolitical',
  'war', 'tension', 'dollar weakness', 'dollar decline', 'fed pivot',
  'lower rates', 'monetary easing', 'gold rally', 'gold surge', 'gold demand',
  'central bank buying', 'reserve accumulation', 'currency devaluation'
];

// Bearish keywords for gold
const BEARISH_KEYWORDS = [
  'rate hike', 'hawkish', 'strong dollar', 'dollar strength', 'tightening',
  'rate increase', 'yield rise', 'bond surge', 'economic growth', 'recovery',
  'gold decline', 'gold drop', 'sell gold', 'gold weakness', 'profit taking',
  'risk on', 'stock rally', 'equity surge', 'fed hawkish', 'inflation cooling'
];

// Neutral/noise words to filter out
const NEUTRAL_KEYWORDS = [
  'trading', 'market', 'price', 'analyst', 'forecast', 'prediction',
  'technical', 'chart', 'level', 'support', 'resistance'
];

/**
 * Analyze sentiment of a single news article
 */
export function analyzeSentiment(text: string): {
  sentiment: 'bullish' | 'bearish' | 'neutral';
  score: number;
} {
  const lowerText = text.toLowerCase();
  
  let bullishScore = 0;
  let bearishScore = 0;
  
  // Count bullish keywords
  for (const keyword of BULLISH_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      bullishScore += 1;
      // Double weight for critical keywords
      if (['inflation', 'rate cut', 'crisis', 'war'].includes(keyword)) {
        bullishScore += 1;
      }
    }
  }
  
  // Count bearish keywords
  for (const keyword of BEARISH_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      bearishScore += 1;
      // Double weight for critical keywords
      if (['rate hike', 'hawkish', 'strong dollar'].includes(keyword)) {
        bearishScore += 1;
      }
    }
  }
  
  // Calculate net sentiment score (-100 to +100)
  const totalScore = bullishScore + bearishScore;
  let score = 0;
  
  if (totalScore > 0) {
    score = ((bullishScore - bearishScore) / totalScore) * 100;
  }
  
  // Determine sentiment
  let sentiment: 'bullish' | 'bearish' | 'neutral' = 'neutral';
  if (score > 20) sentiment = 'bullish';
  else if (score < -20) sentiment = 'bearish';
  
  return { sentiment, score };
}

/**
 * Analyze overall market sentiment from multiple news articles
 */
export function analyzeNewsSentiment(articles: NewsArticle[]): NewsSentiment {
  let bullishCount = 0;
  let bearishCount = 0;
  let neutralCount = 0;
  let totalScore = 0;
  
  const analyzedArticles = articles.map(article => {
    const text = `${article.title} ${article.description || ''}`;
    const analysis = analyzeSentiment(text);
    
    // Count by sentiment
    if (analysis.sentiment === 'bullish') bullishCount++;
    else if (analysis.sentiment === 'bearish') bearishCount++;
    else neutralCount++;
    
    totalScore += analysis.score;
    
    return {
      ...article,
      sentiment: analysis.sentiment,
      score: analysis.score
    };
  });
  
  // Calculate overall sentiment
  const avgScore = articles.length > 0 ? totalScore / articles.length : 0;
  let overall: 'bullish' | 'bearish' | 'neutral' = 'neutral';
  
  if (avgScore > 20) overall = 'bullish';
  else if (avgScore < -20) overall = 'bearish';
  
  return {
    overall,
    score: Math.round(avgScore),
    bullishCount,
    bearishCount,
    neutralCount,
    articles: analyzedArticles.slice(0, 10) // Return top 10 most recent
  };
}

/**
 * Fetch gold-related news from NewsAPI (Free Tier: 100 calls/day)
 */
export async function fetchGoldNews(apiKey: string): Promise<NewsArticle[]> {
  if (!apiKey || apiKey === 'your_key_here') {
    console.log('No NewsAPI key configured, skipping news fetch');
    return [];
  }
  
  try {
    // Search for gold AND (federal reserve OR inflation OR dollar)
    const query = 'gold AND (federal reserve OR inflation OR dollar OR interest rate)';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status !== 'ok') {
      console.error('NewsAPI error:', data.message);
      return [];
    }
    
    return data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
      source: article.source.name
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

/**
 * Check for upcoming high-impact economic events
 */
export async function getEconomicEvents(): Promise<EconomicEvent[]> {
  // For now, return hardcoded high-impact events
  // In production, integrate with Trading Economics API or similar
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  // Major economic events that affect gold
  const upcomingEvents: EconomicEvent[] = [
    {
      title: 'Federal Reserve Interest Rate Decision',
      date: '2025-01-29',
      impact: 'high',
      currency: 'USD'
    },
    {
      title: 'US CPI (Consumer Price Index)',
      date: '2025-01-15',
      impact: 'high',
      currency: 'USD'
    },
    {
      title: 'US Non-Farm Payrolls (NFP)',
      date: '2025-01-10',
      impact: 'high',
      currency: 'USD'
    },
    {
      title: 'US PPI (Producer Price Index)',
      date: '2025-01-16',
      impact: 'medium',
      currency: 'USD'
    },
    {
      title: 'Fed Chair Powell Speech',
      date: '2025-01-12',
      impact: 'high',
      currency: 'USD'
    }
  ];
  
  // Filter events within next 7 days
  return upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today && eventDate <= nextWeek;
  });
}

/**
 * Calculate news impact on signal confidence
 */
export function calculateNewsImpact(
  sentiment: NewsSentiment,
  signalType: 'BUY' | 'SELL' | 'HOLD'
): {
  boost: number;
  reason: string;
} {
  let boost = 0;
  let reason = '';
  
  // Strong bullish news + BUY signal = boost confidence
  if (sentiment.overall === 'bullish' && signalType === 'BUY') {
    boost = Math.min(sentiment.score / 5, 15); // Max +15 points
    reason = `Bullish news sentiment (+${Math.round(boost)} confidence)`;
  }
  
  // Strong bearish news + SELL signal = boost confidence
  else if (sentiment.overall === 'bearish' && signalType === 'SELL') {
    boost = Math.min(Math.abs(sentiment.score) / 5, 15); // Max +15 points
    reason = `Bearish news sentiment (+${Math.round(boost)} confidence)`;
  }
  
  // News contradicts signal = reduce confidence
  else if (sentiment.overall === 'bullish' && signalType === 'SELL') {
    boost = -10;
    reason = `Bullish news contradicts SELL signal (-10 confidence)`;
  }
  else if (sentiment.overall === 'bearish' && signalType === 'BUY') {
    boost = -10;
    reason = `Bearish news contradicts BUY signal (-10 confidence)`;
  }
  
  return { boost, reason };
}

/**
 * Check if there's a major economic event today
 */
export function hasMajorEventToday(events: EconomicEvent[]): {
  hasEvent: boolean;
  event?: EconomicEvent;
  warning: string;
} {
  const today = new Date().toISOString().split('T')[0];
  
  const todayEvent = events.find(event => 
    event.date === today && event.impact === 'high'
  );
  
  if (todayEvent) {
    return {
      hasEvent: true,
      event: todayEvent,
      warning: `Major event today: ${todayEvent.title} - Increased volatility expected`
    };
  }
  
  return {
    hasEvent: false,
    warning: ''
  };
}
