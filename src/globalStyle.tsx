import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*:before{
    margin: 0;
    padding: 0;
	font-size: 100%;
    box-sizing: border-box;
}
body {
	line-height: 1;
  font-family: "Changa", sans-serif;
}
section {
    display: block;
}
input{
    border: none;
    outline: none;
      /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    [type="number"] {
      -moz-appearance: textfield;
    }
}
a {
    text-decoration: none;
    color: inherit;
}
button{
    border: none;
    background-color: inherit;
}
li {
    list-style: none;
}
ul {
    padding: 0; 
}
section {
    padding: 0;
}


::-webkit-scrollbar {
  width: 15px;
  z-index: 1;
}
::-webkit-scrollbar-track {
  background: inherit; 
  border-radius: 5px;
  z-index: 1;
  :hover {
  background: #f1f1f1; 
  }
}
::-webkit-scrollbar-thumb {
  background: #88f; 
  border-radius: 5px;
  z-index: 1;
  :hover{
  background: #55f; 
  }
}
`;
