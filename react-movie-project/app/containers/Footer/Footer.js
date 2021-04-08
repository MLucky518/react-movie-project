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
        <p style={{ color: 'white' }}>&#169; HES</p>
        <button
        onClick={() =>
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }>
        UP
      </button>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
