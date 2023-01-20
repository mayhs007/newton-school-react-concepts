import React from "react"

import { ButtonContainer, MyButton, Button } from "../../styles/Button"
export const StyledComponents = () => {
  return (
    <div>
      <MyButton.ButtonContainer>
        <MyButton.Button>Hello I am a Button</MyButton.Button>
        <MyButton.Button primary>I am Primary Button</MyButton.Button>
      </MyButton.ButtonContainer>
      <ButtonContainer>
        <Button>Hello I am a Button</Button>
      </ButtonContainer>
    </div>
  )
}
