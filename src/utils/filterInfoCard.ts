import { ICard, ITravel } from '../interfaces'

export const filterInfoCards = (
  travelGuide: ITravel[],
  id: number,
  quantity_days: number,
): ICard[] => {
  if (id && quantity_days) {
    const filterCard = travelGuide
      ?.filter((card) => Number(card.id) === id)
      .flatMap((card) =>
        card.infoCard.filter((item) => item.quantity_days === quantity_days),
      )

    return filterCard
  }
  return []
}
