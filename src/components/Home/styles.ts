import {Avatar, Box, Select, Typography} from '@mui/material';
import styled from 'styled-components';
import {IconSvg} from '../../ui-kit/icons';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 36px;
`;

export const BalanceCardSection = styled.div`
  width: 100%;
  max-width: 360px;
`;

export const CardMiniature = styled.div`
  height: 149px;
  width: 285px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin: 0 auto;
  background: ${({theme}) => theme.palette.background.lightViolet2};
`;

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

export const AnalyticsSection = styled(Box)`
  &.MuiBox-root {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    padding: 6px 10px;
    border-radius: 12px;
    background: ${({theme}) => theme.palette.common.orange};
    color: ${({theme}) => theme.palette.text.white};
    height: 36px;
  }
  &.MuiInputBase-root > .MuiSelect-select {
    padding-right: 20px !important;
    padding-left: 10px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
  &.MuiInputBase-root > .MuiOutlinedInput-notchedOutline {
    border: transparent;
  }
  &.MuiInputBase-root > svg {
    color: ${({theme}) => theme.palette.text.white};
  }
`;

export const ChartWrapper = styled(Box)`
  &.MuiBox-root {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }
`;

export const ChartBarWrapper = styled.div<{$isBiggest?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme, $isBiggest}) => ($isBiggest ? theme.palette.text.violet : theme.palette.text.gray)};
`;

export const ChartBar = styled.div<{$isBiggest?: boolean; height: number}>`
  width: 31px;
  height: ${({height}) => `${height}px`};
  border-radius: 6px 6px 0px 0px;
  margin: 4px 0 16px;
  background: ${({theme, $isBiggest}) =>
    $isBiggest ? theme.palette.background.violet : theme.palette.background.gray};
`;

export const ChartBarValue = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const ChartBarName = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
`;

export const TransactionSection = AnalyticsSection;

export const TransactionText = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({theme}) => theme.palette.text.gray};
  }
`;

export const TransactionWrapper = styled(Box)`
  &.MuiBox-root {
    margin-top: 16px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${({theme}) => theme.palette.background.gray};
  }
`;

export const TransactionImg = styled(Avatar)`
  &.MuiAvatar-root {
    width: 39px;
    height: 39px;
  }
`;

export const TransactionInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px 0 16px;
`;

export const TransactionInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const TransactionInfoRight = styled(TransactionInfoLeft)`
  align-items: flex-end;
`;

export const TransactionName = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const TransactionSum = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${({theme}) => theme.palette.text.green};
  }
`;
