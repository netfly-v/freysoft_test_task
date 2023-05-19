import React from 'react';
import {StyledSvgIconProps} from './types';
import {Add, Bell, Calendar, Card, Home, MasterCard, More, Settings} from './paths';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type, fillChildren}) => {
  if (type === 'bell') {
    return <Bell />;
  }
  if (type === 'more') {
    return <More />;
  }
  if (type === 'masterCard') {
    return <MasterCard />;
  }
  if (type === 'home') {
    return <Home fillChildren={fillChildren} />;
  }
  if (type === 'card') {
    return <Card fillChildren={fillChildren} />;
  }
  if (type === 'add') {
    return <Add />;
  }
  if (type === 'calendar') {
    return <Calendar fillChildren={fillChildren} />;
  }
  if (type === 'settings') {
    return <Settings fillChildren={fillChildren} />;
  }
  return null;
};