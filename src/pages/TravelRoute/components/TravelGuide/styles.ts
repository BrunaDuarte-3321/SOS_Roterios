import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  h1 {
    font-family: Poppins;
    margin-top: 3.25rem;
    margin-bottom: 2.5rem;
    font-size: 3.375rem;
    color: ${({ theme }) => theme.color['primary-green-light']};
  }
`

export const TravelGuideContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.5rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const TravelGuideImage = styled.div`
  height: 26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 22.75rem;
    border-radius: 0.75rem;
  }
`

export const TravelGuideContentInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const TravelGuideDetails = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  gap: 2.37rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    size: 1.5rem;
    color: ${({ theme }) => theme.color['primary-green-light']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
export const TravelGuideDetailsTime = styled.div`
  margin-top: 1.31rem;
  margin-bottom: 1rem;
`
