import { Download } from 'phosphor-react'
import { useEffect } from 'react'

import { travelStore } from '../../store/travelStore'

import { TravelGuide } from './components/TravelGuide'
import { TravelRouteNavbar } from './components/TravelRouteNavbar'
import { TravelRouteContainer, TravelRouteContent } from './styles'

export function TravelRoute() {
  const { teste } = travelStore((store) => ({
    teste: store.getItineraries,
  }))
  useEffect(() => {
    teste()
  }, [])
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
