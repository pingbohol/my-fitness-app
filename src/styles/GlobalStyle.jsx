import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  #root {
    width: 430px; /* iPhone 16 Pro Max width */
    height: 932px; /* iPhone 16 Pro Max height */
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 50px;
    background-color: black; /* Changed to black to match your design */
  }

  /* Hide scrollbar but keep functionality */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* For Firefox */
  * {
    scrollbar-width: none;
  }
`;

export default GlobalStyle; 