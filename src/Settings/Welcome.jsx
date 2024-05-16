import React from 'react';
import { useAppContext } from '../App/AppProvider';

const Welcome = () => {
  const { isFirstVisit } = useAppContext();

  return isFirstVisit ? (
    <h1>Welcome to CryptoDash, please select your favorite coins to begin</h1>
  ) : null;
};

export default Welcome;
