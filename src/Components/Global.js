import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

*,
*::after,
*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html { 
  font-size: 25%; //1 rem will equal 4px; 
}

body{
  font-family: 'Open Sans', sans-serif;
}
`
export default GlobalStyles
