import {Button, MenuItem, SelectChangeEvent} from '@mui/material';
import React from 'react';
import {balance, cardNum, chartData, transactionsData} from '../../mockData/common';
import {IconSvg} from '../../ui-kit/icons';
import {
  TitleHeader,
  AnalyticsSection,
  Title,
  BalaceCardTitle,
  BalaceText,
  BalanceCardFooter,
  BalanceCardSection,
  BalanceWrapper,
  CardMiniature,
  CardNumber,
  CardNumWrapper,
  ChartBar,
  ChartBarName,
  ChartBarValue,
  ChartBarWrapper,
  ChartWrapper,
  CreditCardWrapper,
  HomeWrapper,
  MoreIconWrapper,
  StyledMasterCardIcon,
  StyledSelect,
  TransactionSection,
  TransactionText,
  TransactionWrapper,
  TransactionImg,
  TransactionInfoWrapper,
  TransactionInfoLeft,
  TransactionInfoRight,
  TransactionName,
  TransactionSum,
} from './styles';
import {TransactionProps} from './types';

export const Home: React.FC = () => {
  const [year, setYear] = React.useState('2022');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setYear(event.target.value as string);
  };
  return (
    <HomeWrapper>
      <BalanceCardSection>
        <CardMiniature />
        <CreditCard />
      </BalanceCardSection>

      <AnalyticsSection>
        <TitleHeader>
          <Title variant="h2">Analytics</Title>
          <StyledSelect id="analytics-select-year" value={year} label="Year" onChange={handleChange}>
            <MenuItem value={2022}>Year - 2022</MenuItem>
          </StyledSelect>
        </TitleHeader>
        <AnalyticsChart />
      </AnalyticsSection>

      <TransactionSection>
        <TitleHeader>
          <Title variant="h2">Analytics</Title>
          <Button variant="text">
            <TransactionText variant="body1">View All</TransactionText>
          </Button>
        </TitleHeader>
        {transactionsData.map((el) => (
          <Transaction key={el.name} data={el} />
        ))}
      </TransactionSection>
    </HomeWrapper>
  );
};

const CreditCard: React.FC = () => {
  return (
    <CreditCardWrapper>
      <MoreIconWrapper>
        <IconSvg type={'more'} width="24" height="24" />
      </MoreIconWrapper>
      <BalanceWrapper>
        <BalaceCardTitle variant="h6">Total Balance</BalaceCardTitle>
        <BalaceText variant="h1">{`$${balance}`}</BalaceText>
      </BalanceWrapper>
      <BalanceCardFooter>
        <CardNumWrapper>
          {cardNum.split(' ').map((card) => (
            <CardNumber key={card} variant="body1">
              {card}
            </CardNumber>
          ))}
        </CardNumWrapper>
        <StyledMasterCardIcon type={'masterCard'} width="47" height="29" />
      </BalanceCardFooter>
    </CreditCardWrapper>
  );
};

const AnalyticsChart: React.FC = () => {
  const biggestSum = Math.max.apply(
    null,
    chartData.map((el) => el.sum),
  );

  const calcHeight = (num: number) => Math.round((num / biggestSum) * 113);

  return (
    <ChartWrapper>
      {chartData.map((el) => (
        <ChartBarWrapper $isBiggest={el.sum === biggestSum} key={el.month}>
          <ChartBarValue>{`$${el.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</ChartBarValue>
          <ChartBar $isBiggest={el.sum === biggestSum} height={calcHeight(el.sum)} />
          <ChartBarName>{el.month}</ChartBarName>
        </ChartBarWrapper>
      ))}
    </ChartWrapper>
  );
};

export const Transaction: React.FC<TransactionProps> = ({data}) => {
  return (
    <TransactionWrapper>
      <TransactionImg alt={data.name} src={data.img} />
      <TransactionInfoWrapper>
        <TransactionInfoLeft>
          <TransactionName variant="h6">{data.name}</TransactionName>
          <TransactionText variant="body1">{data.account}</TransactionText>
        </TransactionInfoLeft>
        <TransactionInfoRight>
          <TransactionSum>${data.sum}</TransactionSum>
          <TransactionText variant="body1">{data.date}</TransactionText>
        </TransactionInfoRight>
      </TransactionInfoWrapper>
    </TransactionWrapper>
  );
};
