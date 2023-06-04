import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    width: 11.187rem;
    height: 4.5rem;
  }
`

export const NavLinkContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 4.375rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color['primary-green-dark']};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.color['primary-green-light']};
    }
  }
`
