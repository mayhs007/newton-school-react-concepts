import { buttonTheme, ContextThemeColor } from "../../Context/ContextThemeColor"
import ButtonHolder from "./ButtonHolder/ButtonHolder"
import React from "react"
export default class ContextDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    buttonTheme: buttonTheme.primary,
  }
  changeButtonTheme = () => {
    this.setState(state => ({
      ...state,
      buttonTheme:
        state.buttonTheme === buttonTheme.primary
          ? buttonTheme.secondary
          : buttonTheme.primary,
    }))
  }
  render() {
    return (
      <ContextThemeColor.Provider value={this.state.buttonTheme}>
        <ButtonHolder></ButtonHolder>
        <button onClick={this.changeButtonTheme}>Change Theme</button>
      </ContextThemeColor.Provider>
    )
  }
}
