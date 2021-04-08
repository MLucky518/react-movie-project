import styled from 'styled-components'

export const HomeImage = styled.div`
  width: 99%;
  margin-left: 0.5%;
  height: 700px;
  background-image: url(${({ top }) => (top ? 'https://ei.marketwatch.com/Multimedia/2020/05/21/Photos/ZQ/MW-IG985_Movies_20200521113911_ZQ.jpg?uuid=378c769c-9b79-11ea-bd9d-9c8e992d421e' : 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Articles/9+Inspiring+Sports+Movies/family+watching+a+movie-carousel.jpg')});
  background-attachment: fixed;
  background-position: center;
  background-color: #f6f2e8;
  background-size: cover;
  box-shadow: 0 0 30px #333;
  filter: saturate(120%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  h2 {
    color: white;
    font-size: 4rem;
    text-shadow: 2px 2px 0px black;
    font-weight: 400;
    font-family: 'Train One', cursive;
    text-transform: uppercase;
    margin-top: 10%;
    text-align: center !;
    margin-bottom: 0.8rem;
  }
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
    background-attachment: local;
    background-position: center;
    height: 250px;
    justify-content:center;
    align-items: center;
    h2 {
      font-size: 1.5rem;
      
    }
    
  }
`

export const HomeSection = styled.section`
  height: 100%;
  width: 100%;
  
`

export const HomeHeaderWrapper = styled.div`
  height: 40vh;
  text-align: center;
  display: flex;
  justify-content: center;
  h1 {
    font-family: 'Train One', cursive;
    font-size: 3rem;
    color: #587fc3;
    height: 30%;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    color: #CF6920;
  }
`

export const TrophyImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-top: 1rem;
  margin: 2rem;
  filter: contrast(120%);

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }

  &::before {
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`

export const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  height: 100%;
  width: 60%;
  margin-left: 23%;
  margin-top: 5%;
  margin-bottom:5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  @media screen and (max-width: 768px) {
      margin-left: 0% !important;
    }
`

export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;

  h3 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: clamp(0.3rem, 12vw, 1rem);
    text-shadow: 0.3px 0.3px 0.3px black;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    order: 1;
    border: none !important;
  }
`
export const RightSideContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: saturate(120%);
  width: 60%;
  img {
    border-radius:  ${({ round }) => (round ? '50%' : '50px')};
    height: 400px;
    width: 400px;
    padding: 1px;
    background: #5f939a;
    box-shadow: 0 0 30px #333;
  }
  @media screen and (max-width: 768px) {
    order: 2;
    border: none !important;
  }
`


export const AdvisorBoxWrapper = styled.div`
  padding:10rem;
  border:1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const AdvisorBoxContent = styled.div`
  border: 1px solid orange;
  width:800px;
  display:flex;
  justify-content: flex-start;
  align-items: flex-end;

  img{
    margin-left:5%;
  }
  @media screen and (max-width: 768px) {
    width:100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

`