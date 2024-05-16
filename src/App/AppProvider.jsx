import React, { createContext, useContext, useEffect, useState } from 'react';
import cc from 'cryptocompare';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  const [page, setPage] = useState(cryptoDashData?.page || 'Settings');
  const [isFirstVisit, setIsFirstVisit] = useState(
    cryptoDashData?.firstVisit ?? true,
  );

  const fetchCoins = async () => {
    cc.setApiKey(import.meta.env.VITE_CC_API_KEY);
    const coinList = await cc.coinList();

    console.log(coinList);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleClick = () => {
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ firstVisit: false, page: 'Dashboard' }),
    );
    setPage('Dashboard');
    setIsFirstVisit(false);
  };

  const contextValue = {
    page,
    setPage,
    handleClick,
    isFirstVisit,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
