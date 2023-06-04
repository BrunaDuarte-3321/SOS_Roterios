import img from '../../../../assets/praia.svg'
import { CardContainer, CardTravel, ScriptCardContainer } from './styles'

export const ScriptCard = () => {
  return (
    <ScriptCardContainer className="container">
      <h1>Recife</h1>
      <CardContainer>
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
