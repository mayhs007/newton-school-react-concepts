import styled from "styled-components"
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  margin: 5%;
`
export const Button = styled.button`
  align-self: center;
  font-size: 14px;
  background-color: ${props => (props.primary ? "#000" : "#f2f2f2")};
  color: ${props => (props.primary ? "#fff" : "#000")};
  border: none;
  border-radius: 5%;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin-left: 5%;
`
export const MyButton = {
  ButtonContainer,
  Button,
}
