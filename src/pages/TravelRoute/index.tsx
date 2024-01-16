import { Download } from 'phosphor-react'

import { TravelGuide } from './components/TravelGuide'
import { TravelRouteNavbar } from './components/TravelRouteNavbar'
import { TravelRouteContainer, TravelRouteContent } from './styles'

export function TravelRoute() {
  return (
    <TravelRouteContainer>
      <TravelRouteContent className="container">
        <header>
          <h2>{}</h2>
          <button type="submit">
            Roteiro completo
            <Download />
          </button>
        </header>
        <TravelRouteNavbar />
        <TravelGuide />
      </TravelRouteContent>
    </TravelRouteContainer>
  )
}
