import {
  HeaderItinerary,
  ImageItinerary,
  InfoItinerary,
  ItineraryContainer,
  ItineraryContent,
} from './styles'
import praia from '../../../../assets/praia.svg'

export const Itinerary = () => {
  return (
    <ItineraryContainer>
      <HeaderItinerary>Rotas</HeaderItinerary>
      <ItineraryContent>
        <ImageItinerary>
          <img src={praia} alt="" />
        </ImageItinerary>
        <InfoItinerary>
          <h3>Horas</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            et temporibus earum eum, consequatur facere porro cupiditate aliquam
            molestiae praesentium enim saepe, reiciendis eligendi tenetur iste?
            Qui, ipsa vero. Eveniet?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            et temporibus earum eum, consequatur facere porro cupiditate aliquam
            molestiae praesentium enim saepe, reiciendis eligendi tenetur iste?
            Qui, ipsa vero. Eveniet?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            et temporibus earum eum, consequatur facere porro cupiditate aliquam
            molestiae praesentium enim saepe, reiciendis eligendi tenetur iste?
            Qui, ipsa vero. Eveniet?
          </p>
          <div>
            <h4>Duração: 1h</h4>
            <span>Endereço: Praça Rio Branco, Recife Antigo, Recife - PE</span>
          </div>
        </InfoItinerary>
      </ItineraryContent>
    </ItineraryContainer>
  )
}
