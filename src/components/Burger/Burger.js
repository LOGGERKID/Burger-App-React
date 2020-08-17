import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        })
    });
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="BreadTop"></BurgerIngredients>
            {transformedIngredients}
            <BurgerIngredients type="BreadBottom"></BurgerIngredients>
        </div>
    )
}

export default burger;