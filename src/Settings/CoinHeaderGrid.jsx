import React from 'react';
import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';
import { DeletableTile } from '../Shared/Tile';

const CoinHeaderGrid = ({ name, symbol, topSection }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>
          <MdDeleteOutline />
        </DeleteIcon>
      ) : (
        <div>{symbol}</div>
      )}
    </CoinHeaderGridStyled>
  );
};

export const CoinHeaderGridStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DeleteIcon = styled.div`
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default CoinHeaderGrid;
