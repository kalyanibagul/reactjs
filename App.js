import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component{
  constructor(props){
    super(props);
    console.log("App - Constructor called");
    console.log(props);
    this.state = {
      roll :"111"
    };
  }
     static getDerivedStateFromProps(state , props){
    console.log("App - Get Derived State From Props");
    console.log(props,state);
    return null;
     }
     componentDidMount(){
            console.log("App - componentDidMount - Mounted");
     }
  render(){
    console.log("App-Rendered")
    return <div>
      <Student  name = "Reva"/>
    </div>;
  }
}

