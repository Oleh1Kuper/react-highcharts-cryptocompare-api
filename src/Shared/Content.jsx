import React from 'react';
import { useAppContext } from '../App/AppProvider';

const Content = ({ children }) => {
  const { coins } = useAppContext();

  if (!coins) {
    return <p>Loading coins...</p>;
  }

  return <div>{children}</div>;
};

export default Content;
