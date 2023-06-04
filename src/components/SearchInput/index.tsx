import { CaretDown } from 'phosphor-react'
import { SearchInputContainer } from './styles'

export const SearchInput = () => {
  return (
    <SearchInputContainer>
      <input type="text" placeholder="Selecione seu destino" />
      <CaretDown size={16} />
      <input type="number" placeholder="Quantos dias?" />
      <CaretDown size={16} />
      <button>Buscar</button>
    </SearchInputContainer>
  )
}
