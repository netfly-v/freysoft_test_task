import {Select} from '@mui/material';
import styled from 'styled-components';
import {Section} from '../styles';

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

export const AnalyticsSection = Section;

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

export const TransactionSection = Section;
