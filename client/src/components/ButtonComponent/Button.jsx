import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  GITHUB_CLIENT_ID,
  REDERICT_URI,
} from '../../configs/githubApiConstants';
import theme from '../../configs/theme';
import ButtonStyleComponent from './ButtonStyleComponent';

const Button = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyleComponent
        href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDERICT_URI}`}
      >
        Log in to github
      </ButtonStyleComponent>
    </ThemeProvider>
  );
};

export default Button;
