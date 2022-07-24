
import { createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins' , sans-serif;
        font-weight: 500;
    }

    html,body{
        overflow-x:hidden;
        font-size: 62.5%;
        @media screen and (max-width: 768px){
            font-size: 8px;
        }

    }
    

`;

export default GlobalStyle;