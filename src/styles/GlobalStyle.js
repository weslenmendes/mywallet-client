import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};

  :root {
    --primary: #8C11BE;
    --primary-light: #A328D6;
    --text: #fff;
    --text-input: #000;
  }

  body {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
  }

  *::selection {
    background: var(--primary);
    color: var(--text);
  }

  h1, h2 {
    color: var(--text);
  }

  h1 {
    font-family: "Saira Stencil One", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 3.148rem;
  }

  h2 {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1.625rem;
    line-height: 1.938rem;
  }

  body, input, button {
    font: 400 1rem sans-serif;
    background: var(--primary);
    color: var(--text);
  }

  input {
    color: var(--text-input);
  }
  
  input, button {
    all: unset;
    cursor: pointer;
    border-radius: 5px;
  }
  
  input, select, option {
    text-align: left;
    padding-left: 3vh;
    border-radius: 5px;
  }

  input::placeholder {
    color: var(--text-input);
  }

  iframe {
    pointer-events: none;
  }
`;
