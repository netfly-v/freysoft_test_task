import React from 'react';
import {ChartWrapper, ChartBarWrapper, ChartBarValue, ChartBar, ChartBarName} from './styles';

type AnalyticsChartProps = {
  data: {month: string; sum: number}[];
};

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({data}) => {
  const biggestSum = Math.max.apply(
    null,
    data.map((el) => el.sum),
  );

  const calcHeight = (num: number) => Math.round((num / biggestSum) * 113);

  return (
    <ChartWrapper>
      {data.map((el) => (
        <ChartBarWrapper $isBiggest={el.sum === biggestSum} key={el.month}>
          <ChartBarValue>{`$${el.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</ChartBarValue>
          <ChartBar $isBiggest={el.sum === biggestSum} height={calcHeight(el.sum)} />
          <ChartBarName>{el.month}</ChartBarName>
        </ChartBarWrapper>
      ))}
    </ChartWrapper>
  );
};
