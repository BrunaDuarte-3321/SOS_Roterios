import { Download } from 'phosphor-react'
import { useEffect } from 'react'

import { travelStore } from '../../store/travelStore'

import { TravelGuide } from './components/TravelGuide'
import { TravelRouteNavbar } from './components/TravelRouteNavbar'
import { TravelRouteContainer, TravelRouteContent } from './styles'

export function TravelRoute() {
  const { teste, guide } = travelStore((store) => ({
    teste: store.getItineraries,
    guide: store.itinerary,
  }))
  useEffect(() => {
    teste()
  }, [])
  return (
    <TravelRouteContainer>
      {guide.map(({ id, description, itinerary }) => (
        <TravelRouteContent className="container" key={id}>
          <header>
            <h2>{description}</h2>
            <button type="submit">
              Roteiro completo
              <Download />
            </button>
          </header>
          <TravelRouteNavbar itinerary={itinerary} />
          <TravelGuide itinerary={itinerary} />
        </TravelRouteContent>
      ))}
    </TravelRouteContainer>
  )
}
