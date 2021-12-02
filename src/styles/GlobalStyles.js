import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,400;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }

  :root {
    --color-third: #F5DB13;
    --color-primary: #F2B807;
    --color-secondary: #F28F16;
    --color-danger: #D93E30;
    --color-white: #F6F7F9;
    --color-dark: #212121;
    
    
    //pokemon colors:
    
    --poke-color-stile-dark-rock: #A1A1A1;
    --poke-color-grass-bug: #70A83B;
    --poke-color-ice-water: #A2CFF0;
    --poke-color-fire-fighting-dragon: #F76545;
    --poke-color-normal-ghost: #76AADB;
    --poke-color-poison-psychic-fairty: #A974BC;
    --poke-color-ground: #9B897B;
    --poke-color-eletric: #F7C545;
  }

  /* img {
    width: 100%;
    height: auto;
  } */
`

export { GlobalStyles };