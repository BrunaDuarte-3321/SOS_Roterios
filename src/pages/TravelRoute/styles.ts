import styled from 'styled-components'

export const TravelRouteContainer = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 7.5rem;
`

export const TravelRouteContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      background: ${({ theme }) => theme.color.white};

      height: 3.5rem;
      padding: 1.25rem 3.75rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;

      box-shadow: 0px 0px 24px 0px rgba(63, 108, 111, 0.1);
      border-radius: 96px;

      cursor: pointer;
    }
    @media (max-width: 600px) {
      justify-content: center;
      flex-direction: column;
    }
  }
`
