import React from 'react';
import 'modern-normalize';
import './ui-kit/fonts/fonts.css';
import {BrowserRouter} from 'react-router-dom';
import {AppLayout} from './components/Layout';
import {AppRouter} from './Router';
import {defaultTheme} from './ui-kit/theme/theme';
import {ThemeProvider} from 'styled-components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
