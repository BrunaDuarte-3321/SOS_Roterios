export interface IBanner {
  slogan: string
}

export interface IItinerary {
  city: string
  img: string[]
  numberOfDay: number
  description: string
  link: string
}

interface ITour {
  id: number
  title: string
  description: string
  image: string
  distance: string
}

interface IItineraryDay {
  day: number
  tours: ITour[]
}

interface IItinerary1 {
  days: number
  description: string
  itinerary: IItineraryDay[]
}

export interface ICity {
  id: number
  name: string
  images: string[]
  description: string
  itineraries: {
    id: number
    name: string
    itineraries: IItinerary1[]
  }[]
}
