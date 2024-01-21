import { Timer } from 'phosphor-react'

import { ITesteRotas } from '../../../../interfaces'

import {
  TravelGuideContainer,
  TravelGuideContent,
  TravelGuideContentInfo,
  TravelGuideDetails,
  TravelGuideDetailsTime,
  TravelGuideImage,
} from './styles'

interface IProps {
  itinerary: ITesteRotas[]
}
export function TravelGuide({ itinerary }: IProps) {
  return (
    <>
      {itinerary.map(({ day, tours }) => (
        <TravelGuideContainer key={day}>
          <h1>DIA {day} </h1>

          {tours.map(
            ({
              description,
              id,
              image,
              title,
              hours,
              distance,
              address,
              duration,
            }) => (
              <>
                <TravelGuideContent key={id}>
                  <TravelGuideImage>
                    <h3> {title}</h3>
                    <img src={image} alt="" />
                  </TravelGuideImage>
                  <TravelGuideContentInfo>
                    <TravelGuideDetails>
                      <span>
                        <Timer /> {hours}
                      </span>
                      <div>
                        <p>{description} </p>
                      </div>
                      <TravelGuideDetailsTime>
                        <span>Duração: {duration}</span>
                        <span>{address}</span>
                      </TravelGuideDetailsTime>
                    </TravelGuideDetails>
                  </TravelGuideContentInfo>
                </TravelGuideContent>
                <TravelGuideDetailsTime>
                  <img src={distance} alt="" />
                </TravelGuideDetailsTime>
              </>
            ),
          )}
        </TravelGuideContainer>
      ))}
    </>
  )
}
