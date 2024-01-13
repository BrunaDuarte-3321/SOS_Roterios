import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  max-height: 8.25rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const HeaderContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  align-items: center;
  height: 100%;

  img {
    width: 11.187rem;
    height: 4.5rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    img {
      width: 7rem;
      height: 4rem;
    }
  }
`
export const NavbarContainer = styled.nav`
  display: flex;
  gap: 4.375rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color['primary-green-dark']};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.color['primary-green-light']};
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`
