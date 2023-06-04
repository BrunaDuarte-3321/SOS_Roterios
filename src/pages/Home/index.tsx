import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <SearchInput />
    </HomeContainer>
  )
}
