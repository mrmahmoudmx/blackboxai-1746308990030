# XAUUSD Scalping Signals App

A real-time trading signals application for XAUUSD (Gold) on 1-minute timeframe, featuring live TradingView charts and technical analysis.

## Features

- Live XAUUSD price chart from TradingView
- Technical indicators:
  - RSI (Relative Strength Index)
  - MACD (Moving Average Convergence Divergence)
- Real-time trading signals
- Signal history with win/loss tracking
- Performance statistics
- Modern, responsive dark theme UI

## Strategy

The application uses a combination of technical indicators to generate trading signals:

1. RSI (Relative Strength Index)
   - Identifies overbought/oversold conditions
   - Helps time entry and exit points

2. MACD (Moving Average Convergence Divergence)
   - Identifies trend direction and momentum
   - Signals potential reversals

## Usage

1. Open the application in your web browser
2. Monitor the live XAUUSD chart with technical indicators
3. Watch for trading signals in the "Latest Signals" panel
4. Track performance metrics in the "Strategy Information" section

## Installation

### Local Development
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Hosting Options

You can host this application on any static web hosting service:

1. **GitHub Pages** (Free)
   - Create a GitHub repository
   - Upload all files
   - Enable GitHub Pages in repository settings

2. **Netlify** (Free)
   - Sign up at netlify.com
   - Drag and drop the project folder
   - Your site will be live instantly

3. **Vercel** (Free)
   - Sign up at vercel.com
   - Import your project
   - Automatic deployment

## Files Structure

- `index.html` - Main application interface
- `js/app.js` - Trading logic and TradingView integration
- `README.md` - Documentation

## Technical Notes

- Uses TradingView's Widget API for real-time charts
- Implements RSI and MACD for technical analysis
- Built with modern web technologies:
  - Tailwind CSS for styling
  - Font Awesome for icons
  - Chart.js for statistics

## Disclaimer

This application is for educational purposes only. Trading involves risk, and past performance does not guarantee future results. Always do your own research and never trade with money you cannot afford to lose.
