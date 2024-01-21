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

export interface ITravelGuide {
  id: number
  title: string
  hours: string
  description: string
  image: string
  distance?: string
  duration: string
  address: string
}
export interface IGuide {
  day: number
  itinerary: ITravelGuide[]
}

export interface ITesteRotas {
  day: number
  tours: ITravelGuide[]
}

export interface ITesteitinerary {
  id: number
  quantity_days: number
  description: string
  itinerary: ITesteRotas[]
}
