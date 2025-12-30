// Telegram Bot Integration for Trade Alerts

export interface TelegramConfig {
  botToken: string;
  chatId: string;
}

export async function sendTelegramMessage(config: TelegramConfig, message: string): Promise<boolean> {
  if (!config.botToken || !config.chatId || config.botToken === 'your_bot_token_here') {
    console.log('Telegram not configured, skipping notification');
    return false;
  }
  
  const url = `https://api.telegram.org/bot${config.botToken}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    
    const data = await response.json();
    
    if (!data.ok) {
      console.error('[Telegram] Send failed:', JSON.stringify(data));
    }
    
    return data.ok === true;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function formatTradeSignal(signal: any): string {
  const emoji = signal.signal_type === 'BUY' ? '🟢' : signal.signal_type === 'SELL' ? '🔴' : '⚪';
  const style = signal.trading_style === 'day_trade' ? '📊 Day Trade' : '📈 Swing Trade';
  
  return `
${emoji} <b>GOLD/USD ${signal.signal_type} SIGNAL</b> ${emoji}

${style}
💰 <b>Price:</b> $${signal.price.toFixed(2)}
📊 <b>Confidence:</b> ${signal.confidence}%

🎯 <b>Take Profits:</b>
   TP1: $${signal.take_profit_1.toFixed(2)}
   TP2: $${signal.take_profit_2.toFixed(2)}
   TP3: $${signal.take_profit_3.toFixed(2)}

🛡️ <b>Stop Loss:</b> $${signal.stop_loss.toFixed(2)}

📝 <b>Reason:</b>
${escapeHtml(signal.reason)}

⏰ ${new Date().toLocaleString()}
  `.trim();
}

export function formatMarketUpdate(data: any): string {
  const trend = data.price_change >= 0 ? '📈' : '📉';
  const change = data.price_change >= 0 ? '+' : '';
  
  return `
${trend} <b>Gold/USD Market Update</b>

💰 <b>Current Price:</b> $${data.current_price.toFixed(2)}
📊 <b>Change:</b> ${change}${data.price_change.toFixed(2)} (${change}${data.price_change_percent.toFixed(2)}%)

📈 <b>High:</b> $${data.high.toFixed(2)}
📉 <b>Low:</b> $${data.low.toFixed(2)}

<b>Technical Indicators:</b>
RSI(14): ${data.rsi?.toFixed(1) || 'N/A'}
MACD: ${data.macd?.toFixed(2) || 'N/A'}
SMA(50): $${data.sma_50?.toFixed(2) || 'N/A'}

⏰ ${new Date().toLocaleString()}
  `.trim();
}
