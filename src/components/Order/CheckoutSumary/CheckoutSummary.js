import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import style from './checkoutSummary.module.css'

const CheckoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued,
}) => {
  return (
    <div className={style.Checkout}>
      <h1>We hope it tastes well !!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType='Danger' value='Cancel' clicked={checkoutCancelled} />
      <Button btnType='Success' value='Continue' clicked={checkoutContinued} />
    </div>
  )
}

export default CheckoutSummary
