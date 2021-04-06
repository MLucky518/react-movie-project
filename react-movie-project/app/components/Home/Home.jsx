import styled from 'styled-components'

export const HomeImage = styled.div`
  width: 100%;
  height: 600px;
  object-fit: cover;
  margin-bottom: 5%;
  background-image: url('https://cdn.cjr.org/wp-content/uploads/2019/08/cjr-rottentomatoes-1.jpg');
  background-attachment: fixed;
  background-position: top;
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
    background-size:100% auto;
    background-attachment:local;
    background-position: center;
    height:150px;
    
  }
`
