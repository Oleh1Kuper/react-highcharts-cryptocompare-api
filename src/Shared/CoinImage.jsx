import React from 'react';
import styled from 'styled-components';

const CoinImageStyle = styled.img`
  height: 50px;
`;

const CoinImage = ({ coin }) => {
  return (
    <CoinImageStyle
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
