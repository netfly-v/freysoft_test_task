import React from 'react';
import {HeaderWrapper, StyledAvatar, HeaderText} from './styles';
import avatar from '../../ui-kit/assets/avatar.png';
import {IconSvg} from '../../ui-kit/icons';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledAvatar alt="avatar" src={avatar} />
      <HeaderText variant="h2">Home</HeaderText>
      <IconSvg type={'bell'} width="20" height="24" />
    </HeaderWrapper>
  );
};
