import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

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

const CoinGrid = ({ topSection }) => {
  const { coins, favorites } = useAppContext();

  const getCoinsToDispaly = (topSection) => {
    return topSection ? favorites : Object.keys(coins).slice(0, 100);
  };

  return (
    <Grid>
      {getCoinsToDispaly(topSection).map((coinKey) => (
        <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey} />
      ))}
    </Grid>
  );
};

export default CoinGrid;
