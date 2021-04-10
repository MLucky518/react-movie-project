import React from 'react'
import {
  FooterContainer,
  FooterContent,
  FooterMenu,
  SocialMenu,
} from '../../components/Footer/Footer'
import { MenuLinks } from '../../components/Nav/Nav'
import { footerData } from '../../helpers/data'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMenu>
          {footerData.map((item, idx) => {
            return (
              <MenuLinks
                footer="true"
                style={{ margin: '0.7rem' }}
                to={item.link}
                key={idx}>
                {item.title}
              </MenuLinks>
            )
          })}
        </FooterMenu>
        <p style={{ color: 'white' }}>&#169; 2021 Health Enhancement Systems</p>
        <SocialMenu>
          <a href="https://facebook.com">
            <FaFacebookSquare
              style={{
                color: 'white',
                fontSize: '2rem',
                margin: '20px',
              }}
            />
          </a>
          <a href="https://instagram.com">
            <FaInstagram style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter
              style={{
                color: 'white',
                fontSize: '2rem',
                margin: '20px',
              }}
            />
          </a>
        </SocialMenu>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
