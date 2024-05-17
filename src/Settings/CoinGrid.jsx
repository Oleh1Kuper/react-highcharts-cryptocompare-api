import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

const CoinGrid = ({ topSection }) => {
  const { coins, favorites, filteredCoins } = useAppContext();

  const getLowerSectionCoins = (coinList, filteredCoins) => {
    return (filteredCoins && Object.keys(filteredCoins))
    || Object.keys(coinList).slice(0, 100);
  };

  const getCoinsToDispaly = (topSection) => {
    return topSection ? favorites : getLowerSectionCoins(coins, filteredCoins);
  };

  return (
    <Grid>
      {getCoinsToDispaly(topSection).map((coinKey) => (
        <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default CoinGrid;
