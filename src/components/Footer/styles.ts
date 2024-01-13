import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 25rem;
  background-color: #eff7f8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color['primary-green-dark']};
`

export const FooterContent = styled.div`
  width: 100%;
  height: 15rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      width: 9rem;
      height: 3rem;
    }
  }
`

export const FooterNavbar = styled.nav`
  display: flex;
  gap: 2.5rem;

  a {
    svg {
      color: ${({ theme }) => theme.color['primary-green-dark']};
    }
  }
`

export const FooterNavbarPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const FooterNavbarPagesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.5rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color['primary-green-dark']};
    }
  }
`
