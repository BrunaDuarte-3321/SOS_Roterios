import styled from 'styled-components'

export const TravelRouteNavbarContainer = styled.nav`
  display: flex;
  gap: 0.78rem;
  margin-top: 1.88rem;

  flex-direction: row;

  button {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: ${({ theme }) => theme.color['primary-green-dark']};
    width: 8.5rem;
    height: 2.75rem;
    border: none;
    cursor: pointer;
  }
`
