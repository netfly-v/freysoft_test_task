import {Avatar, Typography} from '@mui/material';
import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 83px);
  padding: 0 27px;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 39px;
`;

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 43px;
    height: 43px;
    background: ${({theme}) => theme.palette.background.lightViolet1};
    padding: 3px 3px 0 4px;
    border-radius: 6px;
  }
`;

export const HeaderText = styled(Typography)`
  &.MuiTypography-root {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.09);
  padding: 13px 0 14px;
  background: ${({theme}) => theme.palette.background.white};
`;
