import React from 'react'
import { Button } from '../../components/Buttons/Button'
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownContent,
  DropMenu,
} from '../../components/Nav/DropDown'
import { MenuLinks } from '../../components/Nav/Nav'
import { menuData } from '../../helpers/data'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownContent>
        <DropMenu>
          {menuData.map((item, idx) => {
            return (
              <MenuLinks primary="true" big="true" to={item.link} key={idx}>
                {item.title}
              </MenuLinks>
            )
          })}
        </DropMenu>
        <Button primary="true">Contact Us</Button>
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown
