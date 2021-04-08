import React from 'react'
import { FooterContainer, FooterContent } from '../../components/Footer/Footer'
import { MenuLinks } from '../../components/Nav/Nav'
import { footerData } from '../../helpers/data'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {footerData.map((item, idx) => {
          return (
            <MenuLinks
              footer="true"
              style={{ fontSize: '0.8rem', margin: '0.7rem' }}
              primary="true"
              to={item.link}
              key={idx}>
              {item.title}
            </MenuLinks>
          )
        })}
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
