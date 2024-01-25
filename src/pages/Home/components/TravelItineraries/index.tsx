import { ITravel } from '../../../../interfaces'

import { Itinerary } from './Itinerary'
import { TravelItinerariesContainer } from './styles'

interface ITravelItineraries {
  travel: ITravel
}
export function TravelItineraries({ travel }: ITravelItineraries) {
  return (
    <TravelItinerariesContainer>
      <Itinerary
        link="travelRoute"
        city={travel.name}
        infoCard={travel.infoCard}
      />
    </TravelItinerariesContainer>
  )
}
