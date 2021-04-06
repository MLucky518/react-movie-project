import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, MenuBars, Nav } from '../../components/Nav/Nav';
import { IoMenu } from "react-icons/io5";
import hesImg from 'images/hes.png'


const Navbar = () => {
    return (
        <Nav>
            <NavLink to = "/">
                <Logo src = {hesImg}/>
            </NavLink>
            <MenuBars>
                <IoMenu style = {{color:"white"}}/>
            </MenuBars>
        </Nav>
    )
}

export default Navbar
