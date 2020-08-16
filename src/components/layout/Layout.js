import React from "react";
import Aux from "../../hoc/Aux";
import classes from './Layout.css'

const Layout = (props) => (
  <Aux>
    <div className={classes.content}>Toolbar sidebar backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
