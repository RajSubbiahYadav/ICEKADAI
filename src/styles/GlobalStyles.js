import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6{
margin: 0;
padding: 0;
}
button,a{
  -webkit-tap-highlight-color: transparent;
}
body{
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);
  overflow-x: hidden;
}
section {
  border: 0.2px solid transparent;
}
a{
  color: inherit;
  text-decoration: none;
}
::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
   background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);

  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    /* border-radius: 6px; */
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`
export default GlobalStyles
