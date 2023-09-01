import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 4,
  meat: 13,
  bacon: 7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      salad: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]

    if (oldCount <= 0) {
      return
    } else {
      const updatedCount = oldCount - 1
      const updatedIngredients = {
        ...this.state.ingredients,
      }
      updatedIngredients[type] = updatedCount
      const priceReduction = INGREDIENT_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceReduction
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      })
    }
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls
            price={this.state.totalPrice}
            onMore={this.addIngredientHandler}
            onLess={this.removeIngredientHandler}
            disabledInfo = {disabledInfo}
          />
        </div>
      </Aux>
    )
  }
}

export default BurgerBuilder
