import {Box, Typography} from '@mui/material';
import styled from 'styled-components';

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
