import React from "react"

export const ChildComp = Props => {
  const handleChange = event => {
    Props.handleChange(event.target.value)
  }
  return (
    <div>
      <label>Input field in child</label>
      <input
        value={Props.price}
        placeholder="Enter your amount"
        onChange={handleChange}
      ></input>
    </div>
  )
}
