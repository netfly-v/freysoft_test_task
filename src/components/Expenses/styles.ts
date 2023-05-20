import {Box} from '@mui/material';
import styled from 'styled-components';
import {Section} from '../styles';

export const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalBalanceSection = styled(Box)`
  &.MuiBox-root {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ExpensesSection = Section;
