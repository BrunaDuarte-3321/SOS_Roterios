import styled from 'styled-components'

export const FormSearchContainer = styled.form`
  width: 100%;
  max-width: 62rem;
  height: 11.5rem;
  background: white;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: -6.25rem;
  gap: 0.625rem;
  box-shadow: 0px 0px 70px rgba(63, 145, 148, 0.1);
  border-radius: 30px;
  svg {
    position: relative;
    right: 2.12rem;
    color: ${({ theme }) => theme.color['primary-green-dark']};
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    height: 14rem;
  }
`

export const FormInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  input {
    width: 21.5rem;
    height: 3.5rem;
    background: white;
    border: 0.5px solid ${({ theme }) => theme.color['primary-green-dark']};
    border-radius: 12px;
    padding-left: 1.25rem;

    &:focus {
      border-color: ${({ theme }) => theme.color['primary-green-light']};
    }
  }
  button {
    width: 11rem;
    height: 3.5rem;
    background: ${({ theme }) => theme.color['primary-green-dark']};
    border-radius: 6.25rem;
    border: none;
    font-family: ${({ theme }) => theme.fonts.title};
    color: white;
    font-size: 1rem;
    line-height: 1.25rem;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.color['primary-green-light']};
    }
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;

    input {
      width: 90%;
    }
    button {
      width: 7rem;
    }
  }
`
