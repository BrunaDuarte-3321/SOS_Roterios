import { ICard, ITeste, ITesteitinerary } from '../interfaces'

export type TravelStore = {
  travelGuide: ITeste[]
  infoCard: ICard | undefined
  itinerary: ITesteitinerary[] | []

  getCities: () => void
  getItineraries: () => void

  directionCard: (id: number, quantity_days: number) => void
}
