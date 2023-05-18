import React from 'react';
import 'modern-normalize';
import {BrowserRouter} from 'react-router-dom';
import {AppLayout} from './components/Layout';
import {AppRouter} from './Router';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './ui-kit/theme/theme';

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
