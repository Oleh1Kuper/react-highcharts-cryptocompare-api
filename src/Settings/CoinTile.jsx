import React from 'react';
import { useAppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

const CoinTile = ({ coinKey, topSection }) => {
  const { coins } = useAppContext();
  const coin = coins[coinKey];
  const TileStyle = topSection ? DeletableTile : SelectableTile;

  return (
    <TileStyle>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileStyle>
  );
};

export default CoinTile;
