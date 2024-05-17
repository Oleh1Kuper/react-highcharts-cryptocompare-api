import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { useAppContext } from '../App/AppProvider';

const formatNumber = (num) => {
  return String(num).slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
  ${(props) => props.compact && css`
    display: grid;
    ${fontSize3};
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: right;
  `}

  ${(props) => props.currentfavorite && css`
    ${greenBoxShadow};
    pointer-events: none;
  `}
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: ${(props) => (props.red ? '#FC4100' : '#16FF00')};
`;

const PriceTileComponent = ({ price }) => {
  const { currentFavorite, setFavoriteCoin } = useAppContext();
  const symbol = Object.keys(price)[0];
  const data = price[symbol].USD;
  const handleClick = () => {
    setFavoriteCoin(symbol);
  };

  return (
    <PriceTileStyled
      onClick={handleClick}
      currentfavorite={+(currentFavorite === symbol)}
    >
      <CoinHeaderGridStyled>
        <div>{symbol}</div>
        <ChangePct red={+(data.CHANGEPCT24HOUR < 0)}>
          {`${formatNumber(data.CHANGEPCT24HOUR)}%`}
        </ChangePct>
      </CoinHeaderGridStyled>

      <TickerPrice>{`$${formatNumber(data.PRICE)}`}</TickerPrice>
    </PriceTileStyled>
  );
};

export default PriceTileComponent;
