import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {route} from '../../constants/route';
import {IconSvg} from '../../ui-kit/icons';
import {defaultTheme} from '../../ui-kit/theme/theme';
import {FooterWrapper} from './styles';

export const Footer: React.FC = () => {
  const [value, setValue] = useState<string>('main');
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(route[newValue as keyof typeof route]);
  };
  const fillIcon = (v: string) => (pathname.includes(v) ? defaultTheme.palette.background.orange : undefined);

  return (
    <FooterWrapper>
      <BottomNavigation sx={{width: '100%'}} value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="main"
          icon={
            <IconSvg
              type={'home'}
              width="21"
              height="26"
              fillChildren={pathname === '/' ? defaultTheme.palette.background.orange : undefined}
            />
          }
        />
        <BottomNavigationAction
          value="expenses"
          icon={<IconSvg type={'card'} width="29" height="23" fillChildren={fillIcon('expenses')} />}
        />
        <BottomNavigationAction value="add" icon={<IconSvg type={'add'} width="50" height="49" />} />
        <BottomNavigationAction
          value="calendar"
          icon={<IconSvg type={'calendar'} width="25" height="25" fillChildren={fillIcon('calendar')} />}
        />
        <BottomNavigationAction
          value="settings"
          icon={<IconSvg type={'settings'} width="25" height="25" fillChildren={fillIcon('settings')} />}
        />
      </BottomNavigation>
    </FooterWrapper>
  );
};
