import React, { Component } from "react";
import classes from "./App.css";
// import AppCycle from "./Components/AppLifeCycle/containers/AppCycle";

// import Assignment1 from './Components/Assignment1/Assignment1';

export default class App extends Component {
  constructor(props){
    super(props)
    console.log("[App.js] Constructor")
  }
  render() {
    return (
      <div>
        <div className={classes.App}>
          <h1>Burger King</h1>

        </div>
      </div>
    );
  }
}


