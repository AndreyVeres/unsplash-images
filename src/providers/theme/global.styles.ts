import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

*::before,
*::after {
  box-sizing: border-box;
}

body , html {
  height: 100vh;
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
}

html {
    background-color: ${({ theme }) => theme.bg.light};
    color: ${({ theme }) => theme.typograph.light};
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

li {
    list-style-type: none;
}

input,button,textarea,select {
  font: inherit;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
`;
