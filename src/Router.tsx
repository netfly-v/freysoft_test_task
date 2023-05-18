import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Expenses} from './components/Expenses';
import {Home} from './components/Home';
import {route} from './constants/route';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={route.main} element={<Home />} />
      <Route path={route.expenses} element={<Expenses />} />
    </Routes>
  );
};
