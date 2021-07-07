import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: 100%; /* 16px base font */
    overflow-x: hidden;
    background-color: #fff;
  }

  a {
  text-decoration: none;
  }
`;

export default GlobalStyles;
