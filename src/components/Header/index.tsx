import { Link } from 'react-router-dom'

import logo from '../../assets/logosos.svg'

import { HeaderContainer, HeaderContent, NavbarContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <NavbarContainer>
          <Link to="/proposta">Nossa proposta</Link>
          <Link to="/registerLogin">Cadastrar/Logar</Link>
        </NavbarContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
