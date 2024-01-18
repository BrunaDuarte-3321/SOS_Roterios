export interface IBanner {
  slogan: string
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
  itineraries: IItinerary1[]
}

export interface ICard {
  id: number
  quantity_days: number
  description: string
  image: string
}

export interface ITeste {
  id: number
  name: string
  infoCard: ICard[]
}

export interface IItinerary {
  city: string
  infoCard: ICard[]
  link: string
}
