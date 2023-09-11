import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSumary/CheckoutSummary'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'

const Checkout = () => {
  const data = useLocation()
  console.log(data?.state?.ingredients)
  const navigate = useNavigate()

  const checkoutCancelHandler = () => {
    navigate(-1)
  }

  const checkoutContinueHandler = () => {
    if (data && data?.state?.ingredients) {
      navigate('contact-data', {
        state: {
          ingredients: data.state.ingredients,
          totalPrice: data.state.totalPrice,
        },
        replace: true,
      })
    } else {
      console.error('Data state is undefined or null')
    }
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={data.state.ingredients}
        checkoutCancelled={checkoutCancelHandler}
        checkoutContinued={checkoutContinueHandler}
      />
      <Outlet />
    </div>
  )
}

export default Checkout
