import React from 'react';
import {IconSvg} from '../icons';
import {defaultTheme} from '../theme/theme';
import {
  BalanceCardWrapper,
  BalanceCardContainer,
  BalanceTitle,
  BalanceSum,
  BalanceCardFooter,
  BalanceCardFooterContentWrapper,
  AccountTitle,
  HiddenAccountNum,
} from './styles';

type BalanceCardProps = {
  variant: 'primary' | 'secondary';
  sum: string;
  accountNum: string;
};

export const BalanceCard: React.FC<BalanceCardProps> = ({variant, sum, accountNum}) => {
  return (
    <BalanceCardWrapper variant={variant}>
      <BalanceCardContainer>
        <BalanceTitle variant="h6">Total Balance</BalanceTitle>
        <BalanceSum>${sum}</BalanceSum>
      </BalanceCardContainer>
      <BalanceCardFooter>
        <IconSvg
          type={'bigCard'}
          width="33"
          height="26"
          fillChildren={variant === 'secondary' ? defaultTheme.palette.common.lightOrange : undefined}
        />
        <BalanceCardFooterContentWrapper>
          <AccountTitle variant="subtitle1">Bank Account</AccountTitle>
          <HiddenAccountNum variant="caption">{accountNum}</HiddenAccountNum>
        </BalanceCardFooterContentWrapper>
      </BalanceCardFooter>
    </BalanceCardWrapper>
  );
};
