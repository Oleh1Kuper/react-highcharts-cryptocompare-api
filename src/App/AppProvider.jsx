import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import _ from 'lodash';
import cc from 'cryptocompare';
import { enumObj, MAX_FAVORITES } from '../constants';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  const [page, setPage] = useState(cryptoDashData?.page || enumObj.SETTINGS);
  const [isFirstVisit, setIsFirstVisit] = useState(cryptoDashData?.firstVisit ?? true);
  const [coins, setCoins] = useState(null);
  const [favorites, setFavorites] = useState(cryptoDashData?.favorites || ['BTC', 'ETH', 'XMR', 'DOGE']);

  const addCoin = (key) => {
    const copyFavorites = [...favorites];

    if (favorites.length < MAX_FAVORITES) {
      copyFavorites.push(key);
      setFavorites(copyFavorites);
    }
  };

  const removeCoin = (key) => {
    const copyFavorites = [...favorites];

    setFavorites(_.pull(copyFavorites, key));
  };

  const isInFavorites = (key) => _.includes(favorites, key);

  const fetchCoins = async () => {
    try {
      cc.setApiKey(import.meta.env.VITE_CC_API_KEY);

      const coinList = await cc.coinList();

      setCoins(coinList.Data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ firstVisit: false, page: enumObj.DASHBOARD, favorites }),
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
  };

  console.log(coins);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
