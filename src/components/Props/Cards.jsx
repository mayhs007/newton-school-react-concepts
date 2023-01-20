import React from "react"
// import { Card } from "./Card"
import Card from "./Card"
export const Cards = () => {
  const cards = [
    {
      title: "Feeney LLC",
      description: "Balanced next generation array",
      image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
      price: "$22.15",
    },
    {
      title: "Hoeger LLC",
      description: "Seamless empowering toolset",
      image: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
      price: "$83.83",
    },
    {
      title: "Huel, Deckow and Funk",
      description: "Profound 24/7 emulation",
      image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
      price: "$49.42",
    },
    {
      title: "Kuhic - Thompson",
      description: "Synergized bifurcated paradigm",
      image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      price: "$99.45",
    },
    {
      title: "Molly",
      description: "Multi-channelled non-volatile framework",
      image: "https://react.semantic-ui.com/images/avatar/large/molly.png",
      price: "$86.36",
    },
  ]
  return (
    <div>
      {cards.map((card, index) => (
        <Card data={card} key={index}></Card>
      ))}
    </div>
  )
}
