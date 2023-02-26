import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
box-sizing: border-box;
}

body {
  margin: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  padding: 30px 10px;
  min-height:100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button {
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  cursor: pointer;
  border: none
}


h1,
h2 {
  padding: 20px;
  font-size: 30px;
  margin: 0;
}

`;

export default GlobalStyles;
