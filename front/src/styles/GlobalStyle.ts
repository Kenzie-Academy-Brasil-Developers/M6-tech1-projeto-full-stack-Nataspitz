// use client
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
  --grey-100: #f2f2f7;
  --grey-200: #f9f7fe;
  --grey-300: #d6d6e4;
  --grey-400: #bcbcc5;
  --grey-500: #a8a8aa;
  --grey-600: #4c4c53;
  --grey-700: #3a3a3c;

  --brand-1: #3C2CED;
  --brand-1-hover: #191970;


  /* Gradientes de cinzas */
  --gradient-gray-light: linear-gradient(to bottom, #e5e5ea, #d1d1d6);
  --gradient-gray-dark: linear-gradient(to bottom, #a8a8aa, #6e6e70);

  /* Tamanhos */
  --font-size-small: 0.75rem;
  --font-size-medium: 0.875rem;
  --font-size-large: 1rem;
  --font-title: 1.25rem;
  --font-title-two: 1.125rem;

  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
}

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    min-height: 100vh;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Additional resets or global styles can be added here */

`