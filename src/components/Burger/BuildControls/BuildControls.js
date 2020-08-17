import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuilldControls}>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={()=>{props.ingredientsAdded(control.type)}}
            removed={()=>{props.ingredientsRemoved(control.type)}}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
