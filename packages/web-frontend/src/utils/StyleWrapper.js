import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

const combinedTheme = createTheme({
  theme,
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(','),
  },
});

const StyleWrapper = ({ children }) => (
  <MuiThemeProvider theme={combinedTheme}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>{children}</>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default StyleWrapper;
