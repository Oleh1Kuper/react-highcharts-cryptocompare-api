import React from 'react';
import styled from 'styled-components';

const CoinImageStyle = styled.img`
  display: block;
  margin: ${(props) => (props.spotlight ? 'auto' : '0')};
  height: ${(props) => (props.spotlight ? '200px' : '50px')};
`;

const CoinImage = ({ coin, spotLight }) => {
  return (
    <CoinImageStyle
      spotlight={+spotLight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
