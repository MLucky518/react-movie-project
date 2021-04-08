import styled from 'styled-components'

export const FooterContainer = styled.section`
  background: #f68431;
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

  p {
    font-size: 0.6rem;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
      margin-left: 44%;

      font-size: 0.5rem;
    }
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
