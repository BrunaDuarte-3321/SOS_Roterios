import { Timer } from 'phosphor-react'

import praia from '../../../../assets/recife5-1-1.png'

import {
  TravelGuideContainer,
  TravelGuideContent,
  TravelGuideContentInfo,
  TravelGuideDetails,
  TravelGuideDetailsTime,
  TravelGuideImage,
} from './styles'

export function TravelGuide() {
  return (
    <TravelGuideContainer>
      <h1>DIA 1</h1>
      <TravelGuideContent>
        <TravelGuideImage>
          <h3>Praça do Marco Zero</h3>
          <img src={praia} alt="" />
        </TravelGuideImage>
        <TravelGuideContentInfo>
          <TravelGuideDetails>
            <span>
              <Timer /> 9:00
            </span>
            <div>
              <p>
                O Marco Zero, na Praça Rio Branco, é conhecido como local de
                fundação da cidade do Recife e também como ponto inicial de
                contagem das distâncias calculadas a partir da cidade.
              </p>
              <p>
                O lugar é um dos pontos mais importantes na capital
                Pernambucana, pois é também uma região de forte movimento
                durante o Carnaval.{' '}
              </p>
              <p>
                Aproveite sua visita para tirar uma foto com os dois marcos (o
                antigo e o novo), observar a vista para o Parque de Esculturas e
                os edifícios do Centro Cultural da Caixa e da Associação
                Comercial de Pernambuco. Se quiser fazer compras, vale a pena
                visitar o novo Mercado de Artesanato, que também fica no local.
              </p>
            </div>
            <TravelGuideDetailsTime>
              <span>Duração: 1h</span>
              <span>
                Endereço: Praça do Arsenal da Marinha, s/n, Recife Antigo,
                Recife - PE
              </span>
            </TravelGuideDetailsTime>
          </TravelGuideDetails>
        </TravelGuideContentInfo>
      </TravelGuideContent>
    </TravelGuideContainer>
  )
}
