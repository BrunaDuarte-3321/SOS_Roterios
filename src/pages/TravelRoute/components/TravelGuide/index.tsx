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
  currentDay: number
}

export function TravelGuide({ itinerary, currentDay }: IProps) {
  return (
    <>
      {itinerary.map(({ day, tours }) => (
        <TravelGuideContainer key={day}>
          {currentDay === day && (
            <>
              <h1>DIA {day}</h1>

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
                  <TravelGuideContent key={id}>
                    <TravelGuideImage>
                      <h3>{title}</h3>
                      <img src={image} alt="" />
                    </TravelGuideImage>
                    <TravelGuideContentInfo>
                      <TravelGuideDetails>
                        <span>
                          <Timer /> {hours}
                        </span>
                        <div>
                          <p>{description}</p>
                        </div>
                        <TravelGuideDetailsTime>
                          <span>Duração: {duration}</span>
                          <span>{address}</span>
                        </TravelGuideDetailsTime>
                      </TravelGuideDetails>
                    </TravelGuideContentInfo>
                    <TravelGuideDetailsTime>
                      <img src={distance} alt="" />
                    </TravelGuideDetailsTime>
                  </TravelGuideContent>
                ),
              )}
            </>
          )}
        </TravelGuideContainer>
      ))}
    </>
  )
}
