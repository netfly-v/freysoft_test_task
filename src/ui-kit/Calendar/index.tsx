import React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import locale from 'date-fns/locale/en-GB';
import {StyledCalendar} from './styles';

export const Calendar: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      <StyledCalendar />
    </LocalizationProvider>
  );
};
