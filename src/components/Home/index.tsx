import {Button, MenuItem, SelectChangeEvent} from '@mui/material';
import React from 'react';
import {balance, cardNum, chartData, transactionsData} from '../../mockData/common';
import {IconSvg} from '../../ui-kit/icons';
import {Statement} from '../../ui-kit/Statement';
import {PageWrapper, TitleHeader, Title, ButtonText} from '../styles';
import {
  AnalyticsSection,
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
  MoreIconWrapper,
  StyledMasterCardIcon,
  StyledSelect,
  TransactionSection,
} from './styles';

export const Home: React.FC = () => {
  const [year, setYear] = React.useState('2022');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setYear(event.target.value as string);
  };
  return (
    <PageWrapper>
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
          <Title variant="h2">Transactions</Title>
          <Button variant="text" sx={{textTransform: 'none'}}>
            <ButtonText variant="body1">View All</ButtonText>
          </Button>
        </TitleHeader>
        {transactionsData.map((el) => (
          <Statement key={el.name} data={el} type="transactions" />
        ))}
      </TransactionSection>
    </PageWrapper>
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
