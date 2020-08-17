import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  Salad: 0.4,
  Meat: 1.3,
  Cheese: 0.7,
  Bacon: 0.1,
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        Salad: 1,
        Bacon: 1,
        Cheese: 0,
        Meat: 1,
      },
      totalPrice: 4,
    };
  }

  addIngredientsHandler(type) {
    //Update the ingredients count
    console.log(this.state);
    const addCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = addCount;

    //Update the price
    const oldPrice = this.state.totalPrice;
    const addPrice = INGREDIENTS_PRICE[type];
    const currentPrice = oldPrice + addPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: currentPrice,
    });
  }
  removeIngredientHandler(type) {
    //Update the ingredients count
    console.log(this.state);
    const removeCount = this.state.ingredients[type] - 1;
    if(removeCount<0){
        return
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = removeCount;

    //Update the price
    const oldPrice = this.state.totalPrice;
    const removePrice = INGREDIENTS_PRICE[type];
    const currentPrice = oldPrice + removePrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: currentPrice,
    });
  }

  render() {
      let disabledInfo = {
          ...this.state.ingredients
      }
      for (let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key]<=0? true : false
      }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientsHandler.bind(this)}
          ingredientsRemoved={this.removeIngredientHandler.bind(this)}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
