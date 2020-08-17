import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import BackDrop from "../Backdrop/BackDrop";

const Modal = (props) => (
  <Aux>
    <BackDrop show={props.show} canceled={props.cancelPurchase}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
