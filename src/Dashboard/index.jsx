import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import { enumObj } from '../constants';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const Dashboard = () => {
  return (
    <Page name={enumObj.DASHBOARD}>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
};

export default Dashboard;
