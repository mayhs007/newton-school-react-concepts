import React, { useRef } from "react"

export const UnControlledComponents = () => {
  //Stateless Components
  let nameRef = useRef()
  console.log(nameRef.current)
  //UnControlled Component
  return (
    <div>
      <div>
        <input type="text" ref={nameRef}></input>
      </div>
    </div>
  )
}
