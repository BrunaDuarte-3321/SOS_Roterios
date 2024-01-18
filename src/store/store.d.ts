import { ICard, ITeste } from '../interfaces'

export type TravelStore = {
  travelGuide: ITeste[]
  infoCard: ICard | undefined

  getCities: () => void
  getItineraries: () => void

  directionCard: (id: number, quantity_days: number) => void
}
