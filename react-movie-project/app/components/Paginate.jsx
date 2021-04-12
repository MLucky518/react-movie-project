import styled from 'styled-components'

export const PaginateContainer = styled.div`
  width: 100%;
  height: 5vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PaginateNumbers = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  a {
    color: #f68431;
    font-size: 1rem;
    margin:30px;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    a{
      margin:0px;
    }
  }

`
