import { Banner } from '../../components/Banner'
import { FormSearch } from '../../components/FormSearch'
import { Header } from '../../components/Header'

import { TravelItineraries } from './components/TravelItineraries'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner slogan="Os melhores roteiros para você" />
      <HomeContent>
        <FormSearch />
      </HomeContent>
      <TravelItineraries />
    </HomeContainer>
  )
}
