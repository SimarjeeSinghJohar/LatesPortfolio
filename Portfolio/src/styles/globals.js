import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /* Scroll Animation Classes */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Parallax effect */
  .parallax {
    transition: transform 0.3s ease-out;
  }

  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color */
  ::selection {
    background: rgba(0, 230, 255, 0.3);
    color: #FFFFFF;
  }

  ::-moz-selection {
    background: rgba(0, 230, 255, 0.3);
    color: #FFFFFF;
  }
`;

export default GlobalStyles;