import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Banner />
    </HomeContainer>
  )
}
