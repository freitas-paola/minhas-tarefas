import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  width: 100%;
`

export const Button = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${variables.verde};
`

export default GlobalStyle
