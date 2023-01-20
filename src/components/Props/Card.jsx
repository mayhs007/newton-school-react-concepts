import React from "react"
// export const Card = Props => {
//   return <div>{Props.data.title}</div>
// }

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return <div>{this.props.data.title}</div>
  }
}
