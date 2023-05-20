import React from 'react';
import {IconSvg} from '../icons';
import {
  CreditCardWrapper,
  MoreIconWrapper,
  BalanceWrapper,
  BalaceCardTitle,
  BalaceText,
  BalanceCardFooter,
  CardNumWrapper,
  CardNumber,
  StyledMasterCardIcon,
} from './styles';

type CreditCardProps = {
  cardNum: string;
  balance: string;
};

export const CreditCard: React.FC<CreditCardProps> = ({cardNum, balance}) => {
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
