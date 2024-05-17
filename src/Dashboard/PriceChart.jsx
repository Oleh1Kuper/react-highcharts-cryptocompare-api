import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import styled from 'styled-components';
import { highcartsConfig } from './highchartsConfig';
import { Tile } from '../Shared/Tile';
import { theme } from './chartTheme';
import { useAppContext } from '../App/AppProvider';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';

Highcharts.setOptions(theme);

const ChartSelect = styled.select`
  ${backgroundColor2};
  ${fontSize2};
  color: #1163c9;
  border: 1px solid;
  margin: 5px;
  height: 25px;
  float: right;
`;

const PriceChart = () => {
  const {
    historyPrices,
    setHistoryPrices,
    isFirstVisit,
    setTimeInterval,
    timeInterval,
  } = useAppContext();

  const changeChartSelect = (e) => {
    setTimeInterval(e.target.value);
    setHistoryPrices(null);
  };

  return (
    <Tile>
      {isFirstVisit && <div>Plese confirm your favirites coins</div>}
      <ChartSelect defaultValue={timeInterval} onChange={changeChartSelect}>
        <option value="months">Months</option>
        <option value="weeks">Weeks</option>
        <option value="days">Days</option>
      </ChartSelect>
      {historyPrices && (
        <HighchartsReact
          highcharts={Highcharts}
          options={highcartsConfig(historyPrices)}
        />
      )}
      {!historyPrices && !isFirstVisit && <div>Loading data...</div>}
    </Tile>
  );
};

export default PriceChart;
