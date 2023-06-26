import styled from 'styled-components'

export const ItineraryContainer = styled.div`
  margin-bottom: 1rem;
`

export const HeaderItinerary = styled.h2`
  margin-bottom: 1.375rem;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 600;
  background-color: red;
`

export const ItineraryContent = styled.div`
  display: flex;
`

export const ImageItinerary = styled.div`
  width: 100%;
  max-width: 36.5rem;
`
export const InfoItinerary = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.color['primary-green-light']};
    margin-bottom: 2.187rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  div {
    margin-top: 1.875rem;
  }
`
