import {Button, Typography} from '@mui/material';
import {Box} from '@mui/system';
import styled from 'styled-components';

export const WeekCalendarWrapper = styled(Box)`
  &.MuiBox-root {
    display: block;
    position: relative;
    width: 100%;
    background: ${({theme}) => theme.palette.background.gray};
    border-radius: 21px;
    padding: 20px 4px 15px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const CalendarNavButton = styled(Button)<{position: 'prev' | 'next'}>`
  &.MuiButtonBase-root {
    justify-content: ${({position}) => (position === 'prev' ? 'flex-start' : 'flex-end')};
    padding: 0;
  }
`;

export const CalendarHeaderText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.palette.text.black};
  }
`;

export const CalendarText = styled(Typography)<{$isSelected?: boolean}>`
  &.MuiTypography-root {
    font-weight: ${({$isSelected}) => $isSelected && '700'};
    font-size: 16px;
    line-height: 19px;
    color: ${({theme, $isSelected}) => ($isSelected ? theme.palette.text.white : theme.palette.text.darkGray)};
  }
`;

export const CalendarDays = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 10px;
`;

export const CalendarCells = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateCell = styled.div<{$isActive: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 9px;
  border-radius: 8px;
  min-height: 57px;
  cursor: pointer;
  background: ${({theme, $isActive}) => $isActive && theme.palette.background.orange};
`;
