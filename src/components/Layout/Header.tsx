import React from 'react';
import {HeaderWrapper, StyledAvatar, HeaderText} from './styles';
import avatar from '../../ui-kit/assets/avatar.png';
import {IconSvg} from '../../ui-kit/icons';
import {useLocation} from 'react-router-dom';
import {route} from '../../constants/route';

export const Header: React.FC = () => {
  const {pathname} = useLocation();
  const getHeaderText = () => {
    switch (pathname) {
      case route.main:
        return 'Home';
      case route.expenses:
        return 'Expenses';
      case route.add:
        return 'Add';
      case route.calendar:
        return 'Calendar';
      case route.settings:
        return 'Settings';
      default:
        return 'Home';
    }
  };

  return (
    <HeaderWrapper>
      <StyledAvatar alt="avatar" src={avatar} />
      <HeaderText variant="h2">{getHeaderText()}</HeaderText>
      <IconSvg type={'bell'} width="20" height="24" />
    </HeaderWrapper>
  );
};
