import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

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

const PriceGrid = () => {
  const { prices } = useAppContext();
  return (
    <Grid>
      {prices?.map((price, i) => (
        <PriceTile key={Object.keys(price)[0]} index={i} price={price} />
      ))}
    </Grid>
  );
};

export default PriceGrid;
