import styled from 'styled-components'

export const PaginateContainer = styled.div`
  width: 70%;
  height: 5vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PaginateNumbers = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`
