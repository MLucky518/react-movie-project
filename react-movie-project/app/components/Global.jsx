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
            font-family:"Caveat",cursive;
        }
    }

    .ashoka-pic{
        border-radius:50%;
        height:200px;
        width:250px;
        padding:2%;
        margin-right:5%;
    }

    .scrollIcon{
    position: fixed; 
    width: 50px;
    bottom: 70px;
    right:100px;
    align-items: center;
    height: 50px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    color:#CF6920;
    }


   

    

`

export default GlobalStyle
