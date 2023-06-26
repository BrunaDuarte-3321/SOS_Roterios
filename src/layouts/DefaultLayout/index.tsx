import { Outlet } from 'react-router-dom'
import { AlignDefault, LayoutDefaultContainer } from './styles'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'
import { Banner } from '../../components/Banner'

export const LayoutDefault = () => {
  return (
    <LayoutDefaultContainer>
      <AlignDefault className="container">
        <Header />
      </AlignDefault>
      <Banner />
      <AlignDefault>
        <SearchInput />
      </AlignDefault>
      <Outlet />
    </LayoutDefaultContainer>
  )
}
