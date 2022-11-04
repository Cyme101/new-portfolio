import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    display: inline-block;
  }

  body {
    font-family: 'Source Sans Pro',sans-serif;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
  }
`;

export default GlobalStyle;
