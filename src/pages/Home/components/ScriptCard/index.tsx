import img from '../../../../assets/praia.svg'
import { CardContainer, CardTravel, ScriptCardContainer } from './styles'
import { Link } from 'react-router-dom'

export const ScriptCard = () => {
  return (
    <ScriptCardContainer className="container">
      <h1>Recife</h1>
      <CardContainer>
        <Link to="/travelItinerary">
          <CardTravel>
            <img src={img} alt="" />
            <div>
              <h3>3 dias</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                sapiente maiores, reiciendis reprehenderit quae eveniet animi
                fugit perspiciatis eligendi
              </p>
            </div>
          </CardTravel>
        </Link>
        <CardTravel>
          <img src={img} alt="" />
          <div>
            <h3>3 dias</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              sapiente maiores, reiciendis reprehenderit quae eveniet animi
              fugit perspiciatis eligendi
            </p>
          </div>
        </CardTravel>
        <CardTravel>
          <img src={img} alt="" />
          <div>
            <h3>3 dias</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              sapiente maiores, reiciendis reprehenderit quae eveniet animi
              fugit perspiciatis eligendi
            </p>
          </div>
        </CardTravel>
      </CardContainer>
    </ScriptCardContainer>
  )
}
