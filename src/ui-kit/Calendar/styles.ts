import {DateCalendar} from '@mui/x-date-pickers';
import styled from 'styled-components';

export const StyledCalendar = styled(DateCalendar)`
  &.MuiDateCalendar-root {
    width: 100%;
    background: ${({theme}) => theme.palette.background.gray};
    border-radius: 21px;
  }
  .MuiPickersCalendarHeader-labelContainer {
    position: absolute;
    left: 170px;
  }
  .MuiPickersCalendarHeader-labelContainer > button {
    display: none;
  }
  .MuiPickersArrowSwitcher-root {
    width: 100%;
    justify-content: space-between;
  }
  .MuiPickersCalendarHeader-root {
    padding: 0;
  }
  .MuiDayCalendar-header,
  .MuiDayCalendar-weekContainer {
    justify-content: space-between;
  }
  .MuiTypography-root,
  .MuiButtonBase-root {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.palette.text.darkGray};
  }
  .Mui-selected {
    background: ${({theme}) => theme.palette.background.orange}!important;
    border-radius: 8px;
  }
  .MuiPickersDay-root:not(.Mui-selected) {
    border: none;
  }

  .MuiIconButton-root {
    font-size: 24px;
    color: ${({theme}) => theme.palette.text.lightBlack};
  }
  .MuiPickersSlideTransition-root {
    min-height: 200px;
  }
`;
