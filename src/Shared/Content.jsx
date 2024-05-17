import React from 'react';
import { useAppContext } from '../App/AppProvider';

const Content = ({ children }) => {
  const { coins, prices, isFirstVisit } = useAppContext();

  if (!coins) {
    return <p>Loading coins...</p>;
  }

  if (!prices && !isFirstVisit) {
    return <p>Loading prices...</p>;
  }

  return <div>{children}</div>;
};

export default Content;
