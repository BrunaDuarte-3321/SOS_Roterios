import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logosos.svg'

import {
  FooterContainer,
  FooterContent,
  FooterNavbar,
  FooterNavbarPages,
  FooterNavbarPagesContent,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent className="container">
        <header>
          <img src={logo} alt="" />
          <FooterNavbar>
            <Link to="/">
              <InstagramLogo size={32} />
            </Link>
            <Link to="/">
              <FacebookLogo size={32} />
            </Link>
            <Link to="/">
              <TwitterLogo size={32} />
            </Link>
            <Link to="/">
              <WhatsappLogo size={32} />
            </Link>
          </FooterNavbar>
        </header>
        <FooterNavbarPages>
          <div />
          <FooterNavbarPagesContent>
            <div>
              <Link to="/">Nossa Proposta</Link>
              <Link to="/">Cadastro/Login</Link>
            </div>
            <span>© 2022 SOS Roteiros. All rights reserved </span>
          </FooterNavbarPagesContent>
        </FooterNavbarPages>
      </FooterContent>
    </FooterContainer>
  )
}
