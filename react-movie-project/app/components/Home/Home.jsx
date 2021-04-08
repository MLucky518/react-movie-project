import styled from 'styled-components'

export const HomeImage = styled.div`
  width: 99%;
  margin-left:0.3%;
  height: 700px;
  background-image: url('https://rdcnewscdn.realtor.com/wp-content/uploads/2015/02/iStock_000002787011_Small.jpg');
  background-attachment: fixed;
  background-position: center;
  background-color: #f6f2e8;
  background-size: cover;
  box-shadow: 0 0 30px #333;
  filter: saturate(120%);

  h2{
    color:white
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
    background-size: 100% auto;
    background-attachment: local;
    background-position: center;
    height: 150px;
    margin-top: 10rem;
  }
`

export const HomeSection = styled.section`
  height: 100%;
  width: 100%;
`

export const HomeHeaderWrapper = styled.div`
  height: 40vh;
  text-align: center;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  h1 {
    font-family: 'Train One', cursive;
    font-size: 3rem;
    color: #587FC3;
    height: 30%;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
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
    color: #D09F25;
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
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: clamp(0.3rem, 12vw, 1rem);
    text-shadow: 0.3px 0.3px 0.3px black;
    font-weight: 600;
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
  img {
    border-radius: 50px;
    height: 500px;
    width: 700px;
    padding: 1px;
    background: #5f939a;
    box-shadow: 1px 1px 80px 2px #5f939a;
  }
  @media screen and (max-width: 768px) {
    order: 2;
    border: none !important;
  }
`
