import React from "react"
import { ContextThemeColor } from "../../../../Context/ContextThemeColor"
export default class Button extends React.Component {
  render() {
    console.log(this.context)
    return (
      <button
        style={{
          backgroundColor: this.context.backgroundColor,
          color: this.context.color,
        }}
      >
        Context Button
      </button>
    )
  }
}
Button.contextType = ContextThemeColor
