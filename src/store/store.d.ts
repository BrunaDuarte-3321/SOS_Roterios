import { ICard, IItinerary, ITravel } from '../interfaces'

export type TravelStore = {
  travelGuide: ITravel[]
  infoCard: ICard | undefined
  itinerary: IItinerary[] | []

  getCities: () => void
  getItineraries: () => void

  directionCard: (id: number, quantity_days: number) => void
}
