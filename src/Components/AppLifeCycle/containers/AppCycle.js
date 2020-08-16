import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class AppCycle extends Component {
  constructor(props) {
    super(props);
    console.log(`[AppCycle.js] Constructor ${Math.random()}`);
    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 },
      ],
      otherState: "some other value",
      showPersons: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[AppCycle.js] getDerivedStateFromProps ");
    return state;
  }

  componentDidMount() {
    console.log("[AppCycle.js] componentDidMount ");
  }

  shouldComponentUpdate(prevProp, newProp) {
    console.log("[AppCycle.js] shouldComponentUpdate ");

    return true;
  }

  // getSnapshotBeforeUpdate(snap){
  //   console.log("[AppCycle.js] getSnapshotBeforeUpdate ")
  //   return null
  // }

  // componentDidCatch() {
  //   console.log("[AppCycle.js] componentDidCatchError ");
  // }

  componentDidUpdate() {
    console.log("[AppCycle.js] componentDidUpdate ");
  }

  // componentWillMount(){
  //   console.log("[AppCycle.js] componentWillMount ")
  // }

  // componentWillReceiveProps(){
  //   console.log("[AppCycle.js] componentWillReceiveProps ")
  // }

  // componentWillUnmount(){
  //   console.log("[AppCycle.js] componentWillUnmount ")
  // }

  // componentWillUpdate(){
  //   console.log("[AppCycle.js] componentWillUpdate ")
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[AppCycle.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={"App"}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default AppCycle;
