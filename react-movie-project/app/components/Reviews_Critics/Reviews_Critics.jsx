import styled from "styled-components";

//////   STYLES FOR THE LIST CONTAINERS ///////

export const ListWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 4rem;
  padding-bottom: 10rem;
  h1 {
    font-family: 'Train One', cursive;
    font-size: 5rem;
    color: #587fc3;
    

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-top: 20%;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const CardImage = styled.img`
  height: 250px;
  width: 100%;
  filter: contrast(120%);
`
export const Card = styled.div`
  width: 19%;
  line-height: 1.4;
  margin: 9px;
  margin-bottom: 2%;
  box-shadow: 0 0 30px #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-7px);
  }
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/////// STYLES FOR INDIVIDUAL REVIEW/CRITIC CONTAINERS //////////////////////////////////

export const InfoWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem;
  padding-bottom: 10rem;

  h1 {
    font-family: 'Train One', cursive;
    font-size: 2rem;
    color: #587fc3;
    margin-bottom: 6%;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-top: 20%;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const Input = styled.input`
    width: 20%;
    border-bottom: 2px solid black !important;
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    @media screen and (max-width: 768px) {
     width:40%;
  }
`;
