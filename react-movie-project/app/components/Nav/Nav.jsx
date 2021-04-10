import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  height: 55px;
  border: none;
  background: none;
  display: flex;
  justify-content: space-around;
  position: fixed;
  padding: 1rem 2rem;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  position: relative;
  bottom: 30%;
  padding: 0 1rem;
  height: 40px;
  width: 140px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 30px;
    bottom: 10%;
    right: 20%;
  }
`

export const MenuBars = styled.i`
  display: none;
  color: #587fc3;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuLinks = styled(Link)`
  font-weight: 600;
  color: ${({ primary }) => (primary ? '#587FC3' : 'white')};
  font-size: ${({ big }) => (big ? '1.5rem' : '1rem')};
  display: flex;
  align-items: center;
  padding: ${({ footer }) => (footer ? '0 0rem ' : '0 2rem')};
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`
