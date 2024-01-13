import { Link } from 'react-router-dom'

import { TravelRouteNavbarContainer } from './styles'

export function TravelRouteNavbar() {
  const lit = [1, 2, 3]
  return (
    <TravelRouteNavbarContainer>
      {lit.map((item) => (
        <Link key={item} to="/">
          {item}
        </Link>
      ))}
    </TravelRouteNavbarContainer>
  )
}
