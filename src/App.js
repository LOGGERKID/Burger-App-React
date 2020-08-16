import React, { Component } from "react";
import "./App.css";
import AppCycle from "./Components/AppLifeCycle/containers/AppCycle";

// import Assignment1 from './Components/Assignment1/Assignment1';

export default class App extends Component {
  constructor(props){
    super(props)
    console.log("[App.js] Constructor")
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1>Assignment 1</h1>
          <AppCycle />
        </div>
      </div>
    );
  }
}


