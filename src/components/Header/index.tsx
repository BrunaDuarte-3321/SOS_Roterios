import { Link } from 'react-router-dom'

import logo from '../../assets/logosos.svg'

import { HeaderContainer, NavLinkContainer } from './styles.'

export function Header() {
  return (
    <HeaderContainer className="container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <NavLinkContainer>
        <a href="">Nossa proposta</a>
        <Link to="/registerLogin">Cadastrar/Logar</Link>
      </NavLinkContainer>
    </HeaderContainer>
  )
}
