import styled from 'styled-components'

export const FooterContainer = styled.section`
  background: #85a2d6;
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0 !important;
  left: 0 !important;
`

export const FooterContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  p {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`

export const SocialMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;
  @media screen and (max-width: 768px) {
    margin-right: 0%;
  }
`

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-right: 5%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
