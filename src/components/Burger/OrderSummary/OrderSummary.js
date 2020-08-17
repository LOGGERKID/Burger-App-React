import React from 'react';
import Aux from '../../../hoc/Aux';

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
            <h3>Total Price : {props.price.toFixed(2)}</h3>
        </Aux>
    )
}

export default OrderSummary;