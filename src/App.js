import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

// import AppCycle from "./Components/AppLifeCycle/containers/AppCycle";

// import Assignment1 from './Components/Assignment1/Assignment1';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>   
      </Layout>
    );
  }
}


