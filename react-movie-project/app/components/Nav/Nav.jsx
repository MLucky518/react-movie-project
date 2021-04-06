import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  height: 60px;
  background: #bdc3c7; /* fallback for old browsers */
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  margin-left: 6%;
  width: 90%;
`

export const Logo = styled.img`
  position: relative;
  bottom: 5%;
  right: 30%;
  padding: 0 1rem;
  height: 50px;
  width: 210px;
  cursor: pointer;
`

export const MenuBars = styled.i`
  display: none;

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuLinks = styled(Link)`
  font-weight: bold;
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: ${({ footer }) => (footer ? '0 0rem ' : '0 2rem')};
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`
