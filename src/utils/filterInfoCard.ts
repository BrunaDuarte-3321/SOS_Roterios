import { ICard, ITeste } from '../interfaces'

export const filterInfoCards = (
  travelGuide: ITeste[],
  id: number,
  quantity_days: number,
): ICard[] => {
  console.log(id, quantity_days, 'dados de filtro id')
  if (id && quantity_days) {
    const teste = travelGuide
      ?.filter((card) => Number(card.id) === id)
      .flatMap((card) =>
        card.infoCard.filter((item) => item.quantity_days === quantity_days),
      )

    console.log(teste, 'teste do filtro')
    return teste
  }
  return []
}
