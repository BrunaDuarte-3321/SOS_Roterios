import { Itinerary } from './components/Itinerary'
import {
  HeaderDownload,
  HeaderItineraryContainer,
  HeaderNavigate,
  HeaderTitle,
  ListButtonItinerary,
  TravelItineraryContainer,
  TravelItineraryContent,
} from './styles'

export const TravelItinerary = () => {
  return (
    <TravelItineraryContainer>
      <TravelItineraryContent>
        <HeaderItineraryContainer>
          <HeaderNavigate>
            <h2>Guia de Recife para 03 dias</h2>
            <ListButtonItinerary>
              <li>
                <a href="#">Dia 01</a>
              </li>
              <li>
                <a href="#">Dia 02</a>
              </li>
              <li>
                <a href="#">Dia 03</a>
              </li>
            </ListButtonItinerary>
            <HeaderTitle>DIA 1</HeaderTitle>
          </HeaderNavigate>
          <HeaderDownload>Roteiro Completo</HeaderDownload>
        </HeaderItineraryContainer>

        <Itinerary />
        <Itinerary />
        <Itinerary />
        <Itinerary />
      </TravelItineraryContent>
    </TravelItineraryContainer>
  )
}
