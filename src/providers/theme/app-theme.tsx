import { ThemeProvider } from 'styled-components';

import type { FC, PropsWithChildren } from 'react';
import { GlobalStyles } from './global.styles';
import { defaultTheme } from './theme';

export const AppTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
