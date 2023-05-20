import React, {useState} from 'react';
import {format, startOfWeek, addDays, isSameDay, lastDayOfWeek, addWeeks, subWeeks} from 'date-fns';
import {
  CalendarCells,
  CalendarDays,
  CalendarHeader,
  CalendarHeaderText,
  CalendarNavButton,
  CalendarRow,
  CalendarText,
  DateCell,
  WeekCalendarWrapper,
} from './styles';
import {IconSvg} from '../icons';
import {defaultTheme} from '../theme/theme';

type WeekCalendarProps = {
  daysWithSpents: string[];
};

export const WeekCalendar: React.FC<WeekCalendarProps> = ({daysWithSpents}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeWeekHandle = (btnType: 'prev' | 'next') => {
    if (btnType === 'prev') {
      setCurrentMonth(subWeeks(currentMonth, 1));
    }
    if (btnType === 'next') {
      setCurrentMonth(addWeeks(currentMonth, 1));
    }
  };

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = 'MMM yyyy';
    return (
      <CalendarHeader>
        <CalendarNavButton
          variant="text"
          sx={{textTransform: 'none'}}
          onClick={() => changeWeekHandle('prev')}
          position="prev">
          <IconSvg type={'prevArrow'} width="8" height="14" />
        </CalendarNavButton>
        <CalendarHeaderText variant="h6">{format(currentMonth, dateFormat)}</CalendarHeaderText>
        <CalendarNavButton
          variant="text"
          sx={{textTransform: 'none'}}
          onClick={() => changeWeekHandle('next')}
          position="next">
          <IconSvg type={'nextArrow'} width="8" height="14" />
        </CalendarNavButton>
      </CalendarHeader>
    );
  };

  const renderDays = () => {
    const dateFormat = 'EEE';
    const days = [];
    const startDate = startOfWeek(currentMonth, {weekStartsOn: 1});
    for (let i = 0; i < 7; i++) {
      days.push(
        <CalendarText variant="body1" key={i}>
          {format(addDays(startDate, i), dateFormat)[0]}
        </CalendarText>,
      );
    }
    return <CalendarDays>{days}</CalendarDays>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, {weekStartsOn: 1});
    const endDate = lastDayOfWeek(currentMonth, {weekStartsOn: 1});
    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const isDateWithSpents = daysWithSpents.some((el) => el === formattedDate);
        const cloneDay = day;
        days.push(
          <DateCell
            $isActive={isSameDay(day, selectedDate)}
            key={day.toString()}
            onClick={() => {
              onDateClickHandle(cloneDay);
            }}>
            <CalendarText variant="body1" $isSelected={isSameDay(day, selectedDate)}>
              {formattedDate}
            </CalendarText>
            {isDateWithSpents && (
              <IconSvg
                type={'dot'}
                width="6"
                height="6"
                fillChildren={isSameDay(day, selectedDate) ? defaultTheme.palette.common.white : undefined}
              />
            )}
          </DateCell>,
        );
        day = addDays(day, 1);
      }

      rows.push(<CalendarRow key={day.toString()}>{days}</CalendarRow>);
      days = [];
    }
    return <CalendarCells>{rows}</CalendarCells>;
  };

  return (
    <WeekCalendarWrapper>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </WeekCalendarWrapper>
  );
};
