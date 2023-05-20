import React, {useEffect} from 'react';
import {ButtonText, PageWrapper, Title, TitleHeader} from '../styles';
import {ExpensesSection, TotalBalanceSection} from './styles';
import {BalanceCard} from '../../ui-kit/BalanceCard';
import {Calendar} from '../../ui-kit/Calendar';
import {accNumber, balance, transactionsData} from '../../mockData/common';
import {Button} from '@mui/material';
import {Statement} from '../../ui-kit/Statement';

export const Expenses: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Calendar />
      <TotalBalanceSection>
        <BalanceCard variant="primary" sum={balance} accountNum={accNumber} />
        <BalanceCard variant="secondary" sum={balance} accountNum={accNumber} />
      </TotalBalanceSection>

      <ExpensesSection>
        <TitleHeader>
          <Title variant="h2">Expenses</Title>
          <Button variant="text" sx={{textTransform: 'none'}}>
            <ButtonText variant="body1">View All</ButtonText>
          </Button>
        </TitleHeader>
        <Statement type="expenses" data={transactionsData[0]} />
      </ExpensesSection>
    </PageWrapper>
  );
};
