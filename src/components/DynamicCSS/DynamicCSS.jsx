import React from "react"
import { useState } from "react"
import "./DynamicCSS.css"
export const DynamicCSS = () => {
  const [isRed, setIsRed] = useState(true)
  return (
    <div>
      <h1 className={isRed ? "text-red" : "text-blue"}>Hello World</h1>
      <h2 className={isRed ? "text-red" : "text-blue"}>Welcome to Newton School</h2>
      <br></br>
      <button
        className="font-lg"
        onClick={() => {
          setIsRed(!isRed)
        }}
      >
        Click on me to change color!
      </button>
    </div>
  )
}
