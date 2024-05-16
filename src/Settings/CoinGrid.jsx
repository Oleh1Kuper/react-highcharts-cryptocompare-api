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

const CoinGrid = () => {
  const { coins } = useAppContext();

  const getCoinsToDispaly = () => {
    return Object.keys(coins).slice(0, 100);
  };

  return (
    <Grid>
      {getCoinsToDispaly().map((coinKey) => (
        <CoinTile key={coinKey} coinKey={coinKey} />
      ))}
    </Grid>
  );
};

export default CoinGrid;
