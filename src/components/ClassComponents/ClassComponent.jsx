import React from "react"

export default class ClassComponent extends React.Component {
  state = {
    count: 0,
    sum: 0,
  }
  constructor() {
    super()
    console.log("I am from constructor")
  }
  //   componentWillMount() {
  //     console.log("I am from component will mount")
  //   }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("###########################################")
    console.log("I am should component Update")
    console.log(nextState, "->New Value")
    console.log(this.state, "->CurrentValue")
    if (nextState.count % 2 === 0) {
      return true
    }
    return false
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("###########################################")
    console.log("I am component Will Update")
    console.log(nextState, "->New Value")
    console.log(this.state, "->CurrentValue")
  }
  render() {
    console.log("###########################################")
    console.log("I am from render")
    console.log(this.state)
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ ...this.state, count: this.state.count + 1 })
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, sum: this.state.sum + 2 })
          }}
        >
          Sum
        </button>
        <h1>Count:{this.state.count}</h1>
      </div>
    )
  }
  componentDidMount() {
    console.log("I am from component did mount")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("###########################################")
    console.log("I am from component did update")
    console.log(prevState, "->Previous Value")
    console.log(this.state, "->Current Value")
  }
  componentWillUnmount() {
    console.log("I am from component will unmount")
  }
}
