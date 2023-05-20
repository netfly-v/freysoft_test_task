import React from 'react';
import {StyledSvgIconProps} from './types';
import {Add, Bell, BigCard, Calendar, Card, Home, PrevArrow, MasterCard, More, NextArrow, Settings, Dot} from './paths';

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
  if (type === 'bigCard') {
    return <BigCard fillChildren={fillChildren} />;
  }
  if (type === 'prevArrow') {
    return <PrevArrow />;
  }
  if (type === 'nextArrow') {
    return <NextArrow />;
  }
  if (type === 'dot') {
    return <Dot fillChildren={fillChildren} />;
  }

  return null;
};
