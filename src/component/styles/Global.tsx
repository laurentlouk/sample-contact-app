import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;
