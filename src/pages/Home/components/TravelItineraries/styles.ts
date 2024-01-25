import styled from 'styled-components'

export const TravelItinerariesContainer = styled.section`
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ItineraryContainer = styled.div`
  width: 100%;
`

export const ItineraryHeader = styled.header`
  width: 100%;
  max-width: 6.25rem;
  height: 3rem;

  display: flex;
  align-items: center;
`

export const ItineraryCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5.6rem;
  height: 31.5rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 5rem;
`

export const CardTravel = styled.div`
  box-shadow: 0px 0px 70px rgba(63, 145, 148, 0.1);
  border-radius: 20px 20px 0 0;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
export const ImageTravel = styled.div`
  flex: 1;
  flex-direction: column;
  border-radius: 20px 20px 0 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
export const CardTravelInfo = styled.div`
  padding: 1.8rem;
`
