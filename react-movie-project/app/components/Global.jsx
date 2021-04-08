import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"Montserrat",sans-serif;
    }
    
    html,body{
        overflow-x:hidden;
        
    }

    .home-content-header{
        margin-top:3%;
        text-align:center;
        font-family: 'Train One', cursive;
        font-size: 3rem;
        color: #587fc3;

        span{
            color:#CF6920;
            font-size:4rem;
        }
    }


    

`

export default GlobalStyle
