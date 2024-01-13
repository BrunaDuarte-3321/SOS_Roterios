import { Outlet } from 'react-router-dom'

import { Banner } from '../../components/Banner'
import { FormSearch } from '../../components/FormSearch'
import { Header } from '../../components/Header'
import { HomeContent } from '../../pages/Home/styles'

import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Banner slogan="Os melhores roteiros para você" />
      <HomeContent>
        <FormSearch />
      </HomeContent>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
