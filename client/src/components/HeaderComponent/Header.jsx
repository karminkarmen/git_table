import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../configs/theme';
import {
  SecondaryHeaderTextStyleComponent,
  HeaderTextStyleComponent,
} from './HeaderStyleComponent';

const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderTextStyleComponent>git table</HeaderTextStyleComponent>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <SecondaryHeaderTextStyleComponent>
          of repositories
        </SecondaryHeaderTextStyleComponent>
      </ThemeProvider>
    </>
  );
};

export default Header;
