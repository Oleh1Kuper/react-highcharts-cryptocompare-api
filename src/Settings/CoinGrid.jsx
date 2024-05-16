import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

const CoinGrid = () => {
  const { coins } = useAppContext();

  return (
    <Grid>
      {Object.keys(coins).map((coinKey) => (
        <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
      ))}
    </Grid>
  );
};

export default CoinGrid;
