import { ITesteRotas } from '../../../../interfaces'

import { TravelRouteNavbarContainer } from './styles'

interface ITravelRouteNavbar {
  itinerary: ITesteRotas[]
  handleDay: (day: number) => void
}
export function TravelRouteNavbar({
  itinerary,
  handleDay,
}: ITravelRouteNavbar) {
  return (
    <TravelRouteNavbarContainer>
      {itinerary.map(({ day }) => (
        <button
          onClick={() => handleDay(day)}
          value={day}
          type="button"
          key={day}
        >
          {day}
        </button>
      ))}
    </TravelRouteNavbarContainer>
  )
}
