import React from 'react';
import styled from 'styled-components';
import { Tile } from '../Shared/Tile';
import { useAppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => {
  const { currentFavorite, coins } = useAppContext();
  return (
    <Tile>
      <SpotlightName>{coins[currentFavorite].CoinName}</SpotlightName>
      <CoinImage spotLight coin={coins[currentFavorite]} />
    </Tile>
  );
};

export default CoinSpotlight;
