import React from 'react';
import {
  StatementMainWrapper,
  StatementImg,
  StatementInfoWrapper,
  StatementInfoLeft,
  StatementName,
  StatementInfoRight,
  StatementSum,
  StatementText,
  StatementWrapper,
  StatementBottom,
  StatementBottomContentWrapper,
  StatementBottomInfo,
  StatementBottomInfoColumn,
  StatementBottomTitle,
  SumPercentWrapper,
  PercentFrame,
} from './styles';

export type StatementProps = {
  data: {
    name: string;
    account: string;
    sum: number;
    date: string;
    img: string;
    totalSpent: number;
    totalBudget: number;
  };
  type: 'transactions' | 'expenses';
};

export const Statement: React.FC<StatementProps> = ({data, type}) => {
  const spentPercent = ((data.totalSpent * 100) / data.totalBudget).toFixed(2);

  return (
    <StatementWrapper>
      <StatementMainWrapper>
        <StatementImg alt={data.name} src={data.img} />
        <StatementInfoWrapper>
          <StatementInfoLeft>
            <StatementName variant="h6">{data.name}</StatementName>
            <StatementText variant="body1">{data.account}</StatementText>
          </StatementInfoLeft>
          {type === 'transactions' ? (
            <StatementInfoRight>
              <StatementSum>${data.sum}</StatementSum>
              <StatementText variant="body1">{data.date}</StatementText>
            </StatementInfoRight>
          ) : (
            <StatementInfoRight>
              <StatementText variant="body1">{data.date}</StatementText>
            </StatementInfoRight>
          )}
        </StatementInfoWrapper>
      </StatementMainWrapper>
      {type === 'expenses' && (
        <StatementBottom>
          <StatementBottomContentWrapper>
            <StatementBottomInfo>
              <StatementBottomInfoColumn>
                <StatementBottomTitle variant="subtitle1">Total Spend</StatementBottomTitle>
                <StatementSum>{`$${data.totalSpent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</StatementSum>
              </StatementBottomInfoColumn>
              <StatementBottomInfoColumn>
                <StatementBottomTitle variant="subtitle1">Total Budget</StatementBottomTitle>
                <StatementSum type="secondary">{`$${data.totalBudget
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</StatementSum>
              </StatementBottomInfoColumn>
            </StatementBottomInfo>
            <SumPercentWrapper>
              <StatementSum>{`${spentPercent}%`}</StatementSum>
            </SumPercentWrapper>
          </StatementBottomContentWrapper>
          <PercentFrame width={spentPercent} />
        </StatementBottom>
      )}
    </StatementWrapper>
  );
};
