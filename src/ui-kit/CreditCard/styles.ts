import {Box, Typography} from '@mui/material';
import styled from 'styled-components';
import {IconSvg} from '../icons';

export const CreditCardWrapper = styled(Box)`
  &.MuiBox-root {
    margin-top: -115px;
    padding: 9px 30px 23px 29px;
    border-radius: 24px;
    background: ${({theme}) => theme.palette.background.darkViolet};
    display: flex;
    flex-direction: column;
  }
`;

export const MoreIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -11px;
`;

export const BalaceCardTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 18px;
    line-height: 21px;
    color: ${({theme}) => theme.palette.text.lightGray};
  }
`;

export const BalaceText = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    margin-top: 16px;
    color: ${({theme}) => theme.palette.text.white};
  }
`;

export const BalanceCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const CardNumWrapper = styled.div`
  display: flex;
`;

export const CardNumber = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${({theme}) => theme.palette.text.gray};
    margin-right: 16px;
  }
`;

export const StyledMasterCardIcon = styled(IconSvg)`
  margin-left: 26px;
`;
