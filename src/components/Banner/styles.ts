import styled from 'styled-components'
import bannerBackground from '../../assets/baneer.svg'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  background: url(${bannerBackground}) no-repeat;
  background-size: cover;
`

export const BannerTitleContainer = styled.div`
  width: 60rem;
  height: 13.5rem;
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
`
