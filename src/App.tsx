import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export const Teste = (props: any) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>{props.children}</p>
    </div>
  )
}
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Teste name="candiate" children="caditate">
        <p>testando</p>
      </Teste>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
