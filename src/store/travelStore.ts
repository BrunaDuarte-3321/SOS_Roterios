import { create } from 'zustand'

import { api } from '../server/axios'
import { filterInfoCards } from '../utils/filterInfoCard'

import { TravelStore } from './store'

export const travelStore = create<TravelStore>((set, get) => ({
  travelGuide: [],
  teste: null,
  infoCard: undefined,
  getCities: async () => {
    const showTravelGuide = await api.get('/cities').then((data) => data)

    if (showTravelGuide) {
      set({
        travelGuide: showTravelGuide.data,
      })
      return showTravelGuide
    }

    return null
  },

  directionCard: (id: number, quantity_days: number) => {
    const { travelGuide } = get()

    if (travelGuide) {
      const ver = filterInfoCards(travelGuide, id, quantity_days)
      set({
        infoCard: ver[0],
      })
    }
  },
  getItineraries: async () => {
    try {
      const { infoCard } = get()

      if (infoCard) {
        const { id, quantity_days } = infoCard

        const response = await api.get(
          `itineraries?id=${id}&quantity_days=${quantity_days}`,
        )

        console.log(response.data)
      }
    } catch (error) {
      console.error('Erro ao obter itinerários:', error)
    }
  },
}))
