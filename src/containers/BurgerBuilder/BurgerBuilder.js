import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICE = {
  Salad: 0.4,
  Meat: 1.3,
  Cheese: 0.7,
  Bacon: 0.2,
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0,
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
    };
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientsHandler(type) {
    //Update the ingredients count
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
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    //Update the ingredients count
    const removeCount = this.state.ingredients[type] - 1;
    if (removeCount < 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = removeCount;

    //Update the price
    const oldPrice = this.state.totalPrice;
    const removePrice = INGREDIENTS_PRICE[type];
    const currentPrice = oldPrice - removePrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: currentPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchasingHandler() {
    this.setState({ purchasing: true });
  }
  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };
  continuePurchase = () => {
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer:{
        name:"Revanth MS",
        age: 34,
        address: {
          street: "17th A Cross",
          region: "Laggere Main Road",
          district: "BA",
          country: "IN"
        }
      },
      deliveryMode: "fastest",
      paymentMethod: "COD"
    }
    axios.post('/orders.json',order).then(res =>{
      console.log(res)
    }).catch(e =>{
      console.log(e)
    })
    this.cancelPurchase();
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          clicked={this.cancelPurchase}
        >
          <OrderSummary
            canceled={this.cancelPurchase}
            continue={this.continuePurchase}
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientsHandler.bind(this)}
          ingredientsRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler.bind(this)}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default withErrorHandler( BurgerBuilder, axios);
