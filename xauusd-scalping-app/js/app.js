// Initialize TradingView Widget
new TradingView.widget({
    "width": "100%",
    "height": "100%",
    "symbol": "OANDA:XAUUSD",
    "interval": "1",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#1e293b",
    "enable_publishing": false,
    "hide_side_toolbar": false,
    "allow_symbol_change": false,
    "details": true,
    "hotlist": true,
    "calendar": true,
    "container_id": "tradingview_widget",
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650",
    "studies": [
        "RSI@tv-basicstudies",
        "MACD@tv-basicstudies"
    ],
    "overrides": {
        "mainSeriesProperties.candleStyle.upColor": "#26a69a",
        "mainSeriesProperties.candleStyle.downColor": "#ef5350",
        "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
        "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350"
    }
});

// Trading signals tracking
let signals = [];
let totalSignals = 0;
let winningTrades = 0;

// Function to generate signal based on TradingView widget data
const generateSignal = () => {
    const timestamp = new Date().toLocaleTimeString();
    
    // Note: In a real implementation, you would use TradingView's API
    // to get real-time values of RSI and MACD indicators.
    // For demonstration, we'll generate signals periodically
    
    if (Math.random() > 0.8) { // Reduce signal frequency
        totalSignals++;
        const signal = Math.random() > 0.5 ? 'BUY' : 'SELL';
        const isWinningTrade = Math.random() < 0.75; // Maintain 75% win rate for demo
        if (isWinningTrade) winningTrades++;
        
        const signalHTML = `
            <div class="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                <div>
                    <span class="text-${signal === 'BUY' ? 'green' : 'red'}-400 font-bold">${signal}</span>
                    <span class="text-gray-400 ml-2">${timestamp}</span>
                </div>
                <div class="text-${isWinningTrade ? 'green' : 'red'}-400">
                    <i class="fas fa-${isWinningTrade ? 'check' : 'times'}-circle"></i>
                </div>
            </div>
        `;
        
        const signalsList = document.getElementById('signalsList');
        signalsList.insertAdjacentHTML('afterbegin', signalHTML);
        
        // Keep only last 5 signals
        if (signalsList.children.length > 5) {
            signalsList.removeChild(signalsList.lastChild);
        }
        
        // Update statistics
        document.querySelector('.text-green-400').textContent = 
            Math.round((winningTrades / totalSignals) * 100) + '%';
        document.querySelector('.text-blue-400').textContent = totalSignals;
        document.querySelector('.text-yellow-400').textContent = signal;
    }
};

// Check for signals every 5 seconds
setInterval(generateSignal, 5000);
