import "./App.css"
import "semantic-ui-css/semantic.min.css"
import { DynamicCSS } from "./components/DynamicCSS/DynamicCSS"
import { StyledComponents } from "./components/StyledComponents/StyledComponents"
import { Cards } from "./components/Props/Cards"
import { MultipleState } from "./components/MultipleState/MultipleState"
import MultipleStateClass from "./components/MultipleState/MultipleClassState"
import { ParentComp } from "./components/StateLiftingUp/ParentComp"
import { UnControlledComponents } from "./components/UncontrolledComponents/UnControlledComponents"
import { Validation } from "./components/Validation/Validation"
import ClassComponent from "./components/ClassComponents/ClassComponent"
import React from "react"
import { MainContext } from "./Context/ContextThemeColor"
import ContextDemo from "./components/ContextDemo/ContextDemo"
import { Reducer } from "./components/Reducer/Reducer"

//Normal
export default class App extends React.Component {
  state = {
    profile: "",
    setProfile: this.setProfile,
  }
  //This is the method to set the  context data
  setProfile = profile => {
    this.setState({ profile })
  }
  render() {
    return (
      <div>
        {/* <StyledComponents></StyledComponents> */}
        {/* <DynamicCSS></DynamicCSS> */}
        {/* <Cards></Cards> */}
        {/* <MultipleState></MultipleState> */}
        {/* <MultipleStateClass></MultipleStateClass> */}
        {/* <ParentComp></ParentComp> */}
        {/* <UnControlledComponents></UnControlledComponents> */}
        {/* <Validation></Validation> */}
        {/* <ClassComponent></ClassComponent> */}
        {/* <ContextDemo></ContextDemo> */}
        <Reducer></Reducer>
      </div>
    )
  }
}
