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

  .MuiMenu-paper {
    top: 430px!important;
    left: 1068px!important;
  }

  .MuiSwitch-colorPrimary.Mui-checked {
    color: ${(props) => props.theme.primary}!important;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: #fafafa!important;
  }

  .MuiInputBase-root, .MuiSelect-icon {
    color: ${(props) => props.theme.black}!important;
  }

  .MuiInput-underline::before {
    border-bottom: ${(props) => `2px solid ${props.theme.black}`}!important;
  }
`;