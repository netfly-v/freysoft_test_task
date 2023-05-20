import {Box, Typography} from '@mui/material';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 36px;
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

export const ButtonText = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({theme}) => theme.palette.text.gray};
  }
`;

export const Section = styled(Box)`
  &.MuiBox-root {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
