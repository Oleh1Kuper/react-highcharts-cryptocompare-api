import React from 'react';
import { useAppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

const CoinTile = ({ coinKey }) => {
  const { coins } = useAppContext();
  const coin = coins[coinKey];

  return (
    <SelectableTile>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </SelectableTile>
  );
};

export default CoinTile;
