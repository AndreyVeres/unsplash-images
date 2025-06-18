import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    typograph: {
      light: string;
      dark: string;
    };
    bg: {
      light: string;
      dark: string;
    };
    colors: {
      primary: string;
      overlay: string;
    };
    border: {
      radius: string;
      color:string
    };
  }
}

export const defaultTheme: DefaultTheme = {
  typograph: {
    light: '#fff',
    dark: '#000',
  },

  bg: {
    light: '#fff',
    dark: '#000',
  },
  colors: {
    primary: '#FFF200',
    overlay: '#000000a3',
  },
  border: {
    radius: '8px',
    color:'#fff'
  },
};
