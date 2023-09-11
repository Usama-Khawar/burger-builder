import React from 'react'
import style from './order.module.css'

const Order = ({ price, ingredients }) => {
  const ingredient = []
  for (let ingredientName in ingredients) {
    ingredient.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    })
  }
  const ingredientOutput = ingredient.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '5px 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    )
  })
  return (
    <div className={style.Order}>
      <p>Ingredients : {ingredientOutput}</p>
      <p>
        Price : <strong>USD {price}</strong>
      </p>
    </div>
  )
}

export default Order
