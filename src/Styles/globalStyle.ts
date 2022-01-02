import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #14181E;
  overflow-x: hidden;

}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul, li{
  list-style: none;
}

.react-modal-overlay{
     background:rgba(14, 14, 14, 0.9);
     position: fixed;
     z-index: 1;
     top: 0;
     left: 0;
     bottom:0;
     right: 0;
     display: flex;
     align-items: center;
     justify-content: center;
   }


   .react-modal-content{
      position:relative;
      z-index:1;
      width: 100%;
      height: 500px;
      max-width:800px;
      padding: 3rem;
   }
   .react-modal-close{
       position: absolute;
       right:-400px;
       top:0;
       border: 0;
       background: transparent;
       transition: filter 0.2s;
       color: white;
       font-size: 16px;
       cursor: pointer;

       &:hover{
           filter: brightness(0.8);
       }
   }

`;
