import React, {PropsWithChildren} from 'react';
import {Footer} from './Footer';
import {Header} from './Header';
import {StyledLayout, Main} from './styles';

export const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
};
