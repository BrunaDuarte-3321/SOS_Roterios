import { useEffect } from 'react'

import { travelStore } from '../../store/travelStore'

import { TravelItineraries } from './components/TravelItineraries'
import { HomeContainer } from './styles'

export function Home() {
  const { travel, getCities } = travelStore((store) => ({
    travel: store.travelGuide,
    getCities: store.getCities,
  }))

  useEffect(() => {
    getCities()
  }, [])

  console.log(travel, 'travel')
  return (
    <HomeContainer>
      {travel!.map((item) => (
        <TravelItineraries key={item.id} travel={item} />
      ))}
    </HomeContainer>
  )
}
