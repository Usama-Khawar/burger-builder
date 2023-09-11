import React, { useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import style from './contactData.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

const ContactData = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  const orderHandler = (event) => {
    event.preventDefault()
    setLoading(true)
    const order = {
      ingredients: location.state.ingredients,
      price: location.state.totalPrice,
      customer: {
        name: 'usama',
        address: {
          street: 'testStreet 1',
          zipCode: '1234',
          country: 'Pakistan',
        },
        email: 'xyz@gmail.com',
      },
      deliveryMethod: 'Fastest',
    }
    axios
      .post('/orders.json', order)
      .then((resp) => {
        setLoading(false)
        navigate('/', { replace: true })
      })
      .catch((error) => {
        setLoading(false)
      })
  }

  let form = (
    <form>
      <input
        className={style.Input}
        type='text'
        name='name'
        placeholder='Your name'
      />
      <input
        className={style.Input}
        type='email'
        name='email'
        placeholder='Your Mail'
      />
      <input
        className={style.Input}
        type='text'
        name='street'
        placeholder='Street'
      />
      <input
        className={style.Input}
        type='text'
        name='postal'
        placeholder='Your Postal Code'
      />
      <Button
        btnType='Success'
        type='submit'
        value='ORDER'
        clicked={orderHandler}
      />
    </form>
  )

  if (loading) {
    form = <Spinner />
  }

  return (
    <div className={style.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  )
}

export default ContactData
