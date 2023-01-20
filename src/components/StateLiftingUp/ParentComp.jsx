import { useState } from "react"
import { ChildComp } from "./ChildComp"
import { Verdict } from "./Verdict"

export const ParentComp = () => {
  const [price, setPrice] = useState("")
  const handleChange = newText => {
    setPrice(newText)
  }
  console.log(price)
  return (
    <div>
      <h2>Price of this foot ball is 200 INR</h2>
      <Verdict price={price}></Verdict>
      <ChildComp handleChange={handleChange} price={price}></ChildComp>
    </div>
  )
}
