import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 40px;
`;

const CoinGrid = ({ topSection }) => {
  const { coins } = useAppContext();

  const getCoinsToDispaly = (topSection) => {
    return Object.keys(coins).slice(0, topSection ? 10 : 100);
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
