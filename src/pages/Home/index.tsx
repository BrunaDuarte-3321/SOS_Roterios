import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'
import { ScriptCard } from './components/ScriptCard'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <SearchInput />
      <ScriptCard />
      <ScriptCard />
      <ScriptCard />
    </HomeContainer>
  )
}
