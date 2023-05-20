import {Box, Typography} from '@mui/material';
import styled from 'styled-components';

export const BalanceCardWrapper = styled(Box)<{variant: 'primary' | 'secondary'}>`
  &.MuiBox-root {
    max-width: 170px;
    border-radius: 6px;
    background: ${({theme, variant}) =>
      variant === 'primary' ? theme.palette.background.violet : theme.palette.background.orange};
  }
`;

export const BalanceCardContainer = styled(Box)`
  &.MuiBox-root {
    padding: 23px 23px 0;
  }
`;

export const BalanceTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16.4214px;
    line-height: 19px;
    color: ${({theme}) => theme.palette.text.lightGray};
  }
`;

export const BalanceSum = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 700;
    font-size: 27.369px;
    line-height: 32px;
    margin-top: 14.6px;
    color: ${({theme}) => theme.palette.text.white};
  }
`;

export const BalanceCardFooter = styled(Box)`
  &.MuiBox-root {
    margin-top: 27px;
    padding: 14.5px 21px;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.palette.background.gray};
  }
`;

export const BalanceCardFooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 14px;
    line-height: 16px;
    color: ${({theme}) => theme.palette.text.black};
  }
`;

export const HiddenAccountNum = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: ${({theme}) => theme.palette.text.gray};
  }
`;
