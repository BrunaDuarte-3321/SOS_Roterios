import logo from '../../assets/logosos.svg'
import { HeaderContainer, NavLinkContainer } from './styles.'

export const Header = () => {
  return (
    <HeaderContainer className="container">
      <img src={logo} alt="" />
      <NavLinkContainer>
        <a href="">Nossa proposta</a>
        <a href="">Cadastrar/Logar</a>
      </NavLinkContainer>
    </HeaderContainer>
  )
}
