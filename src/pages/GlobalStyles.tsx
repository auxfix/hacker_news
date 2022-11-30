import { backgroundColor } from 'modules/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, sans-serif;
    font-size: 10px;
  }

  body {
    align-items: center;
    background-color: ${backgroundColor};
    display: flex;
    justify-content: center;
    padding: 0, 1.5rem;
    width: 100%;

    #root {
      width: 100%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default function GlobalStyles() {
  return <GlobalStyle />;
}
