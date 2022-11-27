import { createGlobalStyle } from 'styled-components';

import { backgroundColor } from 'modules/theme';

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
}

body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  padding: 0, 1.5rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function GlobalStyles() {
  return <GlobalStyle />;
}
