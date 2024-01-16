import { ICity } from '../../../../interfaces'

import { Itinerary } from './Itinerary'
import { TravelItinerariesContainer } from './styles'

interface ITeste {
  teste: ICity
}
export function TravelItineraries({ teste }: ITeste) {
  return (
    <TravelItinerariesContainer>
      <Itinerary
        link="travelRoute"
        city={teste.name}
        img={teste.images}
        numberOfDay={3}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          sapiente maiores, reiciendis reprehenderit quae eveniet animi
          fugit perspiciatis eligendi"
      />
    </TravelItinerariesContainer>
  )
}
