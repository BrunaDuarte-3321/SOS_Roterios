import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:  0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
     max-width: calc(100% - 240px);
  }
`
