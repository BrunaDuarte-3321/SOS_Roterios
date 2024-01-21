import { Link } from 'react-router-dom'

import { ITesteRotas } from '../../../../interfaces'

import { TravelRouteNavbarContainer } from './styles'

interface ITravelRoutenavbar {
  itinerary: ITesteRotas[]
}
export function TravelRouteNavbar({ itinerary }: ITravelRoutenavbar) {
  return (
    <TravelRouteNavbarContainer>
      {itinerary.map(({ day }) => (
        <Link to="/">{day}</Link>
      ))}
    </TravelRouteNavbarContainer>
  )
}
