import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner slogan="Os melhores roteiros para você" />
    </HomeContainer>
  )
}
