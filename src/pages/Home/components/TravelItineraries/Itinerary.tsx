import { Link } from 'react-router-dom'

import { IItinerary } from '../../../../interfaces'
import { travelStore } from '../../../../store/travelStore'

import {
  CardTravel,
  CardTravelInfo,
  ImageTravel,
  ItineraryCard,
  ItineraryContainer,
  ItineraryHeader,
} from './styles'

export function Itinerary({ city, infoCard, link }: IItinerary) {
  const { directionCard } = travelStore((store) => ({
    directionCard: store.directionCard,
  }))
  return (
    <ItineraryContainer className="container">
      <ItineraryHeader>
        <h3>{city}</h3>
      </ItineraryHeader>
      <ItineraryCard>
        {infoCard.map(({ description, image, quantity_days, id }) => (
          <CardTravel key={quantity_days}>
            <Link to={link} onClick={() => directionCard(id, quantity_days)}>
              <ImageTravel>
                <img src={image} alt="" />

                <CardTravelInfo>
                  <h3>{quantity_days} dias</h3>
                  <p>{description}</p>
                </CardTravelInfo>
              </ImageTravel>
            </Link>
          </CardTravel>
        ))}
      </ItineraryCard>
    </ItineraryContainer>
  )
}
