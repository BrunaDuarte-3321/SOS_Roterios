import styled from 'styled-components'

export const ScriptCardContainer = styled.div`
  width: 100%;
  max-width: calc(100% - 240px);
  height: 36rem;
  margin-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderScriptCard = styled.h1`
  margin-bottom: 1.875rem;
`
export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;
  gap: 5rem;

  a {
    text-decoration: none;
  }
`
export const CardTravel = styled.div`
  box-shadow: 0px 0px 70px rgba(63, 145, 148, 0.1);
  height: 31.5rem;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.687rem;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  div {
    max-width: 19.25rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
