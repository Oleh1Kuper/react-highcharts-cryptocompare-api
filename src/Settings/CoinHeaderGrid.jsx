import React from 'react';
import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGridStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CoinSymbol = styled.div`
  /* justify-self: right; */
`;

const DeleteIcon = styled.div`
  /* justify-self: right; */
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

const CoinHeaderGrid = ({ name, symbol, topSection }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>
          <MdDeleteOutline />
        </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
