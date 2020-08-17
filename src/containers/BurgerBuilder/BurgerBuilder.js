import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state ={
            ingredients :{
                Salad : 0,
                Bacon :0,
                Cheese :0,
                Meat : 0    
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