import img from '../../../../assets/praia.svg'

import { Itinerary } from './Itinerary'
import { TravelItinerariesContainer } from './styles'

export function TravelItineraries() {
  return (
    <TravelItinerariesContainer>
      <Itinerary
        city="REcife"
        img={img}
        numberOfDay={3}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sapiente maiores, reiciendis reprehenderit quae eveniet animi
                fugit perspiciatis eligendi"
      />
    </TravelItinerariesContainer>
  )
}
