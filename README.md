# Cryptocurrency Dashboard

A modern, responsive web application built with React and Vite that displays real-time cryptocurrency data, price charts, and portfolio tracking using the CryptoCompare API and Highcharts visualization.

## 🚀 Features

- **Real-time Price Data**: Fetch live cryptocurrency prices from the CryptoCompare API
- **Interactive Charts**: Visualize price trends over time using Highcharts
- **Favorite Coins**: Add/remove cryptocurrencies to your personal watchlist
- **Price Grid**: View current prices for all selected cryptocurrencies
- **Coin Spotlight**: Detailed information about the selected cryptocurrency
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Persist user preferences and favorite coins
- **Search Functionality**: Easily search and filter cryptocurrencies

## 📋 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Charting Library**: Highcharts 11.4.1
- **Styling**: Styled Components 6.1.11
- **API**: CryptoCompare API
- **Additional Libraries**:
  - `react-icons` - Icon library for UI elements
  - `moment` - Date/time manipulation
  - `fuzzy` - Fuzzy search functionality
  - `lodash` - Utility functions

## 📁 Project Structure

```
src/
├── App/                      # Main application component
│   ├── AppBar.jsx           # Navigation bar
│   ├── AppLayout.js         # Layout wrapper
│   ├── AppProvider.jsx      # Context API provider for global state
│   └── index.jsx            # App entry point
├── Dashboard/               # Dashboard page with charts and data
│   ├── CoinSpotlight.jsx    # Detailed coin information
│   ├── PriceChart.jsx       # Interactive price chart
│   ├── PriceGrid.jsx        # Grid of current prices
│   ├── PriceTile.jsx        # Individual price tile component
│   ├── chartTheme.js        # Highcharts theme configuration
│   ├── highchartsConfig.js  # Highcharts chart settings
│   └── index.jsx            # Dashboard entry point
├── Settings/                # Settings page for managing favorites
│   ├── CoinGrid.jsx         # Grid of available coins
│   ├── CoinHeaderGrid.jsx   # Header for coin grid
│   ├── CoinTile.jsx         # Individual coin tile
│   ├── ConfirmButton.jsx    # Confirm selection button
│   ├── Search.jsx           # Search component
│   ├── Welcome.jsx          # Welcome message
│   └── index.jsx            # Settings entry point
├── Shared/                  # Reusable components
│   ├── CoinImage.jsx        # Coin logo display
│   ├── Content.jsx          # Content wrapper
│   ├── Page.jsx             # Page wrapper component
│   ├── Styles.js            # Common styled components
│   └── Tile.jsx             # Tile component base
├── constants/               # Application constants
│   └── index.js            # Enum and constant definitions
├── assets/                  # Static assets
├── index.css               # Global styles
└── main.jsx                # React DOM entry point
```

## 🔧 Getting Started

### Prerequisites

- CryptoCompare API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-highcharts-cryptocompare-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the project root:
   ```
   VITE_CC_API_KEY=your_cryptocompare_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (default Vite port).

## 📚 Available Scripts

- `npm run dev` - Start development server with hot module reloading
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
