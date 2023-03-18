import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: "arial";
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "arial";
    background-color: ${(props) => props.theme.primaryBackground};
  }

  body > div:first-child,
  div#__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  .Toastify__toast-container {
    margin-top: 50px;
  }
`;