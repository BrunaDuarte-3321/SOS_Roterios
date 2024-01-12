import styled from 'styled-components'

export const RegisterContainer = styled.div`
  width: 100%;
  height: 31.437rem;
  display: flex;
  justify-content: center;
`
export const RegisterFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    max-width: 35rem;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.color['primary-green-dark']};
      font-family: ${({ theme }) => theme.fonts.regular};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;

      input {
        height: 3.5rem;
        border-radius: 10px;
      }
    }
  }
`

export const ButtonRegister = styled.button`
  background: ${({ theme }) => theme.color['primary-green-dark']};
  width: 8.25rem;
  height: 1rem;

  padding: 20px 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;

  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.color['primary-green-light']};
  }
`
