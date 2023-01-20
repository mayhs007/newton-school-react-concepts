import React from "react"

export const Verdict = Props => {
  if (Props.price >= 200) {
    return <p>Congrants you can buy the football</p>
  } else {
    return <p>Sorry! Get some more money</p>
  }
}
