import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import style from './buildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
]

const BuildControls = ({ onLess, onMore, price, disabledInfo }) => {
  return (
    <div className={style.BuildControls}>
      <p>
        Current Bill : <strong>{price.toFixed(0)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            onLess={() => onLess(control.type)}
            onMore={() => onMore(control.type)}
            key={control.label}
            label={control.label}
            disabled={disabledInfo[control.type]}
          />
        )
      })}
    </div>
  )
}

export default BuildControls
