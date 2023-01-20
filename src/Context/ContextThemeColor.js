import React from "react"
export const buttonTheme = {
  primary: {
    color: "white",
    backgroundColor: "#45c496",
  },
  secondary: {
    color: "whitesmoke",
    backgroundColor: "#d91b42",
  },
}
export const ContextThemeColor = React.createContext(buttonTheme.primary)
