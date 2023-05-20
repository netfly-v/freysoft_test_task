import {Box, Avatar, Typography} from '@mui/material';
import styled from 'styled-components';

export const StatementWrapper = styled(Box)`
  &.MuiBox-root {
    margin-top: 16px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({theme}) => theme.palette.background.gray};
  }
`;

export const StatementMainWrapper = styled(Box)`
  &.MuiBox-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StatementText = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({theme}) => theme.palette.text.gray};
  }
`;

export const StatementImg = styled(Avatar)`
  &.MuiAvatar-root {
    width: 39px;
    height: 39px;
  }
`;

export const StatementInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px 0 16px;
`;

export const StatementInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const StatementInfoRight = styled(StatementInfoLeft)`
  align-items: flex-end;
`;

export const StatementName = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const StatementSum = styled(Typography)<{type?: 'primary' | 'secondary'}>`
  &.MuiTypography-root {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${({theme, type}) => (type === 'secondary' ? theme.palette.text.black : theme.palette.text.green)};
  }
`;

export const StatementBottom = styled.div`
  margin: 24px 0 7px;
`;

export const StatementBottomContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatementBottomInfo = styled.div`
  display: flex;
`;

export const StatementBottomInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

export const StatementBottomTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 16px;
    color: ${({theme}) => theme.palette.text.darkGray};
  }
`;

export const SumPercentWrapper = styled.div``;

export const PercentFrame = styled.div<{width: string}>`
  height: 13px;
  width: ${({width}) => `${width}%`};
  border-radius: 13px;
  margin-top: 16px;
  background: ${({theme}) => theme.palette.background.violet};
`;
