import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  html, body {
    background: #000;
    color: #fff;
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: fixed;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    height: 100%;
    background: #000;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default GlobalStyle; 