import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

h2{
    font-family: 'Abril Fatface',cursive;
    font-size: 3rem;
    font-weight: lighter;
    color: #333;

}

h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0;
}

p{
    font-size:1.2rem;
    line-height:200%;
    color: #696969;
}

a{
    text-decoration:none;
    color: #333;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html{
    &:focus-within {
  scroll-behavior: smooth;
    }
    &::-webkit-scrollbar{
        width:0.5rem
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}




/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Montserrat',sans-serif;
  min-width: 100%;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`;

export default GlobalStyles;
