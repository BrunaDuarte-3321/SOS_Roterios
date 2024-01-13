import { FormInputContent, FormSearchContainer } from './styles'

export function FormSearch() {
  return (
    <FormSearchContainer className="container">
      <FormInputContent>
        <input type="text" placeholder="Selecione seu destino" />
        <input type="number" placeholder="Quantos dias?" />
        <button type="submit">Buscar</button>
      </FormInputContent>
    </FormSearchContainer>
  )
}
