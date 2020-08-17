import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state ={
            ingredients :{
                Salad : 1,
                Cheese :2,
                Meat : 1,
                Bacon :1
            }
        }
    }
    render() {
        return (
           <Aux>
               <Burger ingredients={this.state.ingredients} />
               <div>Builder controls</div>
           </Aux>
        )
    }
}

export default BurgerBuilder;