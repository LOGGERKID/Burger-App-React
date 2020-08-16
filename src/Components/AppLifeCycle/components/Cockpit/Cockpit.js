import React, { useEffect, useState } from "react";

import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const [dummy, setDummy] = useState(0);
  
  useEffect(() => {
    console.log(`Use Effect ${dummy}`);
    return console.log("Returned")
  },[]);

  const assignedClasses = [];
  let btnClass = "";
  console.log(`classes are ${classes.red}`)
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  const handleClick = () => {
    props.clicked();
    setDummy(dummy + 1); 
  };

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h2>{dummy}</h2>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={handleClick}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
