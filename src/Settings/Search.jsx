import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const Input = styled.input`
  height: 25px;
  border: 1px solid;
  ${fontSize2};
  ${backgroundColor2};
  color: #1163c9;
  place-self: center left;
`;

const Search = () => {
  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <Input />
    </SearchGrid>
  );
};

export default Search;
