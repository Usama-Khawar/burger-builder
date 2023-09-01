import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = ({
  ingredients,
  purchaseContinue,
  purchaseCancel,
  price,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: 'capitalize' }}>{igkey}:</span>
        {'  '}
        {ingredients[igkey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients : </p>
      <ul style={{ marginLeft: '40px' }}>{ingredientSummary}</ul>
      <p>
        <strong>Total Payable :</strong> {price}Rs.
      </p>
      <p>continue to Checkout?</p>
      <Button clicked={purchaseContinue} value='CONTINUE' btnType='Success' />
      <Button clicked={purchaseCancel} value='CANCEL' btnType='Danger' />
    </Aux>
  )
}

export default OrderSummary
