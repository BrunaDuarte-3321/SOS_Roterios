import { useEffect, useState } from 'react'

import { ICity } from '../../interfaces'
import { api } from '../../server/axios'

import { TravelItineraries } from './components/TravelItineraries'
import { HomeContainer } from './styles'

export function Home() {
  const [travel, setTravel] = useState<ICity[]>([])

  useEffect(() => {
    const getCities = async () => {
      const teste = await api.get('/cities').then((data) => data)

      if (teste) {
        setTravel(teste.data)
      }
    }
    getCities()
  }, [])

  console.log(travel)
  return (
    <HomeContainer>
      {travel.map((item) => (
        <TravelItineraries key={item.id} teste={item} />
      ))}
    </HomeContainer>
  )
}
