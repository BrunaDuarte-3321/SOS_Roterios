import { Link } from 'react-router-dom'

import { IItinerary } from '../../../../interfaces'

import {
  CardTravel,
  CardTravelInfo,
  ImageTravel,
  ItineraryCard,
  ItineraryContainer,
  ItineraryHeader,
} from './styles'

export function Itinerary({
  city,
  img,
  numberOfDay,
  description,
  link,
}: IItinerary) {
  return (
    <ItineraryContainer className="container">
      <ItineraryHeader>
        <h3>{city}</h3>
      </ItineraryHeader>
      <ItineraryCard>
        {img.map((item) => (
          <CardTravel>
            <Link to={link}>
              <ImageTravel>
                <img src={item} alt="" />
                <CardTravelInfo>
                  <h3>{numberOfDay} dias</h3>
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
