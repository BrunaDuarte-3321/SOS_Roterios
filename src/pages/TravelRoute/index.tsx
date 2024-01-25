import { Download } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { travelStore } from '../../store/travelStore'

import { TravelGuide } from './components/TravelGuide'
import { TravelRouteNavbar } from './components/TravelRouteNavbar'
import { TravelRouteContainer, TravelRouteContent } from './styles'

export function TravelRoute() {
  const [currentDay, setCurrentDay] = useState(1)

  const handleDay = (day: number) => {
    setCurrentDay(day)
  }

  const { getItineraries, guide } = travelStore((store) => ({
    getItineraries: store.getItineraries,
    guide: store.itinerary,
  }))

  useEffect(() => {
    getItineraries()
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
          <TravelRouteNavbar itinerary={itinerary} handleDay={handleDay} />
          <TravelGuide itinerary={itinerary} currentDay={currentDay} />
        </TravelRouteContent>
      ))}
    </TravelRouteContainer>
  )
}
