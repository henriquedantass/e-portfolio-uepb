import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    background-color: #151B2B;
    color: #f1f1f1;
    font-size: 16px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: 'Roboto Regular', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
  }

  #root {
    overflow-y: hidden;
    overflow-x: hidden;

  }
`;

export default GlobalStyle;
