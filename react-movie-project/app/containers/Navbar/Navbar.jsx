import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Logo,
  MenuBars,
  Nav,
  NavMenu,
  MenuLinks,
} from '../../components/Nav/Nav'
import { IoMenu } from 'react-icons/io5'
import hesImg from 'images/hes.png'
import { menuData } from '../../helpers/data'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={hesImg} />
      </NavLink>
      <MenuBars onClick={toggle} >
        <IoMenu />
      </MenuBars>
      <NavMenu>
        {menuData.map((item, idx) => {
          return (
            <MenuLinks primary="true" to={item.link} key={idx}>
              {item.title}
            </MenuLinks>
          )
        })}
      </NavMenu>
    </Nav>
  )
}

export default Navbar
