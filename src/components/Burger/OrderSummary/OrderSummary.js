import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey)=>{
        return (
        <li key={igKey}> {igKey} : {props.ingredients[igKey]}</li>
        )
    })

    return(
        <Aux>
            <h3>Your Order Details</h3>
            <p>Your Burger contains the following Ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <h3><strong>Total Price : {props.price.toFixed(2)}</strong></h3>
            <Button btnType={"Danger"} clicked={props.canceled}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;