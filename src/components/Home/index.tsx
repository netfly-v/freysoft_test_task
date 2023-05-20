import {Button, MenuItem, SelectChangeEvent} from '@mui/material';
import React, {useEffect} from 'react';
import {balance, cardNum, chartData, transactionsData} from '../../mockData/common';
import {AnalyticsChart} from '../../ui-kit/Chart';
import {CreditCard} from '../../ui-kit/CreditCard';
import {Statement} from '../../ui-kit/Statement';
import {PageWrapper, TitleHeader, Title, ButtonText} from '../styles';
import {AnalyticsSection, BalanceCardSection, CardMiniature, StyledSelect, TransactionSection} from './styles';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [year, setYear] = React.useState('2022');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setYear(event.target.value as string);
  };
  return (
    <PageWrapper>
      <BalanceCardSection>
        <CardMiniature />
        <CreditCard balance={balance} cardNum={cardNum} />
      </BalanceCardSection>

      <AnalyticsSection>
        <TitleHeader>
          <Title variant="h2">Analytics</Title>
          <StyledSelect id="analytics-select-year" value={year} label="Year" onChange={handleChange}>
            <MenuItem value={2022}>Year - 2022</MenuItem>
          </StyledSelect>
        </TitleHeader>
        <AnalyticsChart data={chartData} />
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
