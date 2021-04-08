import styled from 'styled-components'

export const HomeImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('http://analyticsindiamag.com/wp-content/uploads/2014/10/cine.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 30px #333;
  
  &::before {
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  @media screen and (max-width: 768px) {
    background-size: 100% auto;
    background-attachment: local;
    background-position: center;
    height: 150px;
    margin-top:10rem;
  }
`

export const HomeSection = styled.section`
  height: 100%;
  width: 100%;
`

export const HomeContentWrapper = styled.div`
  height: 40vh;
  text-align: center;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  h1 {
    font-family: 'Train One', cursive;
    font-size: 3rem;
    color: #5f939a;
    height:30%;
    @media screen and (max-width: 768px) {
        font-size:2rem;
  }
  }
  blockquote {
    margin-top: 1rem;
    font-size: 1rem;
    color: black;
  }
  span {
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    color: #364547;
  }

  
`

export const TrophyImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-top:1rem;
  margin:2rem;

  @media screen and (max-width: 768px) {
    height:50px;
    width:50px;
  }
`

export const HomeContent = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
