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
    console.log(props)
  return (
    <div className={classes.BuilldControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={()=>{props.ingredientsAdded(control.type)}}
            removed={()=>{props.ingredientsRemoved(control.type)}}
            disable={props.disabled[control.type]}
          />
        );
      })}
      <button disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
