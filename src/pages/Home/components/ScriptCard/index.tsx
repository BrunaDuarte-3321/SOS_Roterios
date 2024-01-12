import { Link } from 'react-router-dom'

import img from '../../../../assets/praia.svg'

import {
  CardContainer,
  CardTravel,
  HeaderScriptCard,
  ScriptCardContainer,
} from './styles'

export function ScriptCard() {
  return (
    <ScriptCardContainer>
      <HeaderScriptCard>Recife</HeaderScriptCard>
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
