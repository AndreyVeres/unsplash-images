import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto'; 
    src: url('/fonts/Roboto-Regular.ttf') format('truetype'); 
    font-weight: 400; 
    font-style: normal;
    font-display: swap; 
  }

  @font-face {
    font-family: 'Roboto'; 
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

`;
