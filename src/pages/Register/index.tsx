import {
  ButtonRegister,
  RegisterContainer,
  RegisterFormContainer,
} from './styles'

export function Register() {
  return (
    <RegisterContainer>
      <RegisterFormContainer className="container">
        <form action="">
          <h3>Cadastro</h3>
          <span>Todos os campos são obrigatórios.</span>

          <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <ButtonRegister>Cadastrar</ButtonRegister>
          </div>
        </form>
      </RegisterFormContainer>
    </RegisterContainer>
  )
}
