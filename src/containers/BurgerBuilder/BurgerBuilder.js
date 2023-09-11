import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import { useNavigate } from 'react-router-dom'

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 4,
  meat: 13,
  bacon: 7,
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(null)
  const [totalPrice, setTotalPrice] = useState(4)
  const [show, setShow] = useState(false)
  const [loading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('/ingredients.json')
      .then((resp) => {
        setIngredients(resp.data)
      })
      .catch((error) => {
        setError(true)
      })
  }, [])

  const checkoutHandler = () => {
    setShow(!show)
  }

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = { ...ingredients }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = totalPrice
    const newPrice = oldPrice + priceAddition
    setIngredients(updatedIngredients)
    setTotalPrice(newPrice)
  }

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type]

    if (oldCount <= 0) {
      return
    } else {
      const updatedCount = oldCount - 1
      const updatedIngredients = { ...ingredients }
      updatedIngredients[type] = updatedCount
      const priceReduction = INGREDIENT_PRICES[type]
      const oldPrice = totalPrice
      const newPrice = oldPrice - priceReduction
      setIngredients(updatedIngredients)
      setTotalPrice(newPrice)
    }
  }

  const purchaseCancelhandler = () => {
    setShow(false)
  }

  const purchaseContinueHandler = () => {
    navigate('/checkout', { state: { ingredients, totalPrice } })
  }

  const disabledInfo = { ...ingredients }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  let burger = error ? <p>Website is broken</p> : <Spinner />
  let Order = null

  if (ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={ingredients} />
        <div>
          <BuildControls
            price={totalPrice}
            onMore={addIngredientHandler}
            onLess={removeIngredientHandler}
            disabledInfo={disabledInfo}
            onCheckout={checkoutHandler}
            checkoutState={show}
          />
        </div>
      </Aux>
    )
    Order = (
      <OrderSummary
        purchaseCancel={purchaseCancelhandler}
        purchaseContinue={purchaseContinueHandler}
        ingredients={ingredients}
        price={totalPrice}
      />
    )
  }

  return (
    <Aux>
      <Modal show={show} modalClosed={purchaseCancelhandler}>
        {loading ? <Spinner /> : Order}
      </Modal>
      {burger}
    </Aux>
  )
}

export default withErrorHandler(BurgerBuilder, axios)
