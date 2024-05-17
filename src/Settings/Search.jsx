import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { useAppContext } from '../App/AppProvider';

const handleFilter = _.debounce((query, coinsList, setCoinsToFilter) => {
  const coinSymbols = Object.keys(coinsList);
  const coinNames = coinSymbols.map((coin) => coinsList[coin].CoinName);
  const allStringsToSearch = [...coinSymbols, ...coinNames];
  const results = fuzzy
    .filter(query, allStringsToSearch)
    .map((result) => result.string);

  const filteredCoins = _.pickBy(coinsList, (result, symbolKey) => {
    const coinName = result.CoinName;

    return _.includes(results, symbolKey) || _.includes(results, coinName);
  });

  setCoinsToFilter(filteredCoins);
}, 1000);

const Search = () => {
  const { coins, setCoinsToFilter } = useAppContext();

  const handleChange = (e) => {
    const query = e.target.value;

    if (!query) {
      setCoinsToFilter(null);

      return;
    }

    handleFilter(query, coins, setCoinsToFilter);
  };

  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <Input onChange={handleChange} />
    </SearchGrid>
  );
};

const SearchGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Input = styled.input`
  height: 25px;
  border: 1px solid;
  ${fontSize2};
  ${backgroundColor2};
  color: #1163c9;
`;

export default Search;
