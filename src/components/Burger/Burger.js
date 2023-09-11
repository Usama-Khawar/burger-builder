import React from 'react'
import style from './burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = ({ ingredients }) => {
  console.log(ingredients);
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((acc, el) => {
      return acc.concat(el)
    }, [])
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients !</p>
  }
  return (
    <div className={style.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
