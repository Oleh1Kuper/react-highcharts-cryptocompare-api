import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import _ from 'lodash';
import cc from 'cryptocompare';
import moment from 'moment';
import { enumObj, MAX_FAVORITES } from '../constants';

cc.setApiKey(import.meta.env.VITE_CC_API_KEY);

const AppContext = createContext();
const TIME_UNITS = 10;

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  const [page, setPage] = useState(cryptoDashData?.page || enumObj.SETTINGS);
  const [isFirstVisit, setIsFirstVisit] = useState(
    cryptoDashData?.firstVisit ?? true,
  );
  const [coins, setCoins] = useState(null);
  const [favorites, setFavorites] = useState(
    cryptoDashData?.favorites || ['BTC', 'ETH', 'XMR', 'DOGE'],
  );
  const [filteredCoins, setFilteredCoins] = useState(null);
  const [prices, setPrices] = useState(null);
  const [currentFavorite, setCurrentFavorite] = useState(
    cryptoDashData?.currentFavorite || favorites[0],
  );
  const [historyPrices, setHistoryPrices] = useState(null);
  const [timeInterval, setTimeInterval] = useState('months');

  const setCoinsToFilter = (filteredCoins) => {
    setFilteredCoins(filteredCoins);
  };

  const setFavoriteCoin = (symbol) => {
    setCurrentFavorite(symbol);
    setHistoryPrices(null);
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ ...cryptoDashData, currentFavorite: symbol }),
    );
  };

  const addCoin = (key) => {
    const copyFavorites = [...favorites];

    if (favorites.length < MAX_FAVORITES) {
      copyFavorites.push(key);
      setFavorites(copyFavorites);
    }
  };

  const removeCoin = (key) => {
    if (key === currentFavorite) {
      setCurrentFavorite(favorites[1]);
    }

    const copyFavorites = [...favorites];

    setFavorites(_.pull(copyFavorites, key));
  };

  const isInFavorites = (key) => _.includes(favorites, key);

  const fetchCoins = async () => {
    try {
      const coinList = await cc.coinList();

      setCoins(coinList.Data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPrices = useCallback(async () => {
    if (isFirstVisit) {
      return;
    }

    const prices = [];

    for (const coinKey of favorites) {
      try {
        const priceData = await cc.priceFull(coinKey, 'USD');
        prices.push(priceData);
      } catch (error) {
        console.error(error);
      }
    }

    setPrices(prices.filter((price) => Object.keys(price).length));
  }, [favorites, isFirstVisit]);

  const fetchHistorical = useCallback(async () => {
    if (isFirstVisit) {
      return;
    }

    const promises = [];

    for (let units = TIME_UNITS; units > 0; units -= 1) {
      promises.push(
        cc.priceHistorical(
          currentFavorite,
          ['USD'],
          moment().subtract({ [timeInterval]: units }).toDate(),
        ),
      );
    }

    try {
      const results = await Promise.all(promises);
      const historical = [
        {
          name: currentFavorite,
          data: results.map((ticker, i) => [
            moment().subtract({ [timeInterval]: TIME_UNITS - i }).valueOf(),
            ticker.USD,
          ]),
        },
      ];

      setHistoryPrices(historical);
    } catch (error) {
      console.error(error);
    }
  }, [currentFavorite, isFirstVisit, timeInterval]);

  useEffect(() => {
    fetchCoins();
    fetchPrices();
    fetchHistorical();
  }, [fetchPrices, fetchHistorical]);

  const handleConfirm = () => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        firstVisit: false,
        page: enumObj.DASHBOARD,
        favorites,
        currentFavorite,
      }),
    );
    setPage('Dashboard');
    setIsFirstVisit(false);
  };

  const contextValue = {
    page,
    setPage,
    handleConfirm,
    isFirstVisit,
    coins,
    favorites,
    setFavorites,
    addCoin,
    removeCoin,
    isInFavorites,
    setCoinsToFilter,
    filteredCoins,
    prices,
    currentFavorite,
    setFavoriteCoin,
    historyPrices,
    setTimeInterval,
    timeInterval,
    setHistoryPrices,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
