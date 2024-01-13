import { IBanner } from '../../interfaces'

import { BannerContainer, BannerSloganContainer } from './styles'

export function Banner({ slogan }: IBanner) {
  return (
    <BannerContainer>
      <BannerSloganContainer>
        <h1>{slogan}</h1>
      </BannerSloganContainer>
    </BannerContainer>
  )
}
