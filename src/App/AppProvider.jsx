import React, { createContext, useContext, useEffect, useState } from 'react';
import cc from 'cryptocompare';
import { enumObj } from '../constants';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  const [page, setPage] = useState(cryptoDashData?.page || enumObj.SETTINGS);
  const [isFirstVisit, setIsFirstVisit] = useState(cryptoDashData?.firstVisit ?? true);
  const [coins, setCoins] = useState(null);

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

  const handleClick = () => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ firstVisit: false, page: enumObj.DASHBOARD }),
    );
    setPage('Dashboard');
    setIsFirstVisit(false);
  };

  const contextValue = {
    page,
    setPage,
    handleClick,
    isFirstVisit,
    coins,
  };

  console.log(coins);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
