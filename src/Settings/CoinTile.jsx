import React from 'react';
import { useAppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

function clickCoinHAndler(topSection, addCoin, removeCoin, coinKey) {
  return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
}

const CoinTile = ({ coinKey, topSection }) => {
  const { coins, addCoin, removeCoin, isInFavorites } = useAppContext();
  const coin = coins[coinKey];
  const TileStyle = topSection
    ? DeletableTile
    : isInFavorites(coinKey)
      ? DisabledTile
      : SelectableTile;

  return (
    <TileStyle
      onClick={clickCoinHAndler(topSection, addCoin, removeCoin, coinKey)}
    >
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
