import styled from 'styled-components'

export const TravelItineraryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7.5rem;
`
export const TravelItineraryContent = styled.div`
  width: 100%;
  max-width: calc(100% - 240px);
  display: flex;
  flex-direction: column;
`
export const HeaderItineraryContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderNavigate = styled.div`
  width: 100%;
  max-width: 443px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-family: Poppins;
    font-weight: 600;
    line-height: 48px;
  }
`

export const ListButtonItinerary = styled.ul`
  display: flex;
  gap: 1.125rem;
  align-items: center;
  width: 100%;
  max-width: 27.25rem;
  list-style: none;
  margin-top: 2rem;

  li {
    display: flex;
    width: 132px;
    height: 40px;

    a {
      color: ${({ theme }) => theme.color.white};
      text-decoration: none;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      background: ${({ theme }) => theme.color['primary-green-dark']};
      width: 100%;
      height: 100%;
    }
  }
`
export const HeaderDownload = styled.button`
  color: ${({ theme }) => theme.color['gray-500']};
  font-weight: 700;
  font: ${({ theme }) => theme.fonts.title};
  font-size: 1rem;
  width: 11.375rem;
  height: 3.75rem;
  border-radius: 100px;
  box-shadow: 0px 0px 24px 0px rgba(63, 108, 111, 0.1);
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
`
export const HeaderTitle = styled.h1`
  margin-top: 3.25rem;
  font-size: 3.375rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color['primary-green-light']};
`
