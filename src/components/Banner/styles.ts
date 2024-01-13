import styled from 'styled-components'

import bannerBackground from '../../assets/banner.svg'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  background: url(${bannerBackground}) no-repeat;
  background-size: cover;
`

export const BannerSloganContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 600;
    line-height: 6.5rem;
    color: ${({ theme }) => theme.color.white};
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 600px) {
    width: 95%;
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }
`
