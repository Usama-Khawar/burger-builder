import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import style from './buildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
]

const BuildControls = ({
  onLess,
  onMore,
  price,
  disabledInfo,
  onCheckout,
  checkoutState,
}) => {
  const isOrderDisabled = Object.values(disabledInfo).every((value) => value)

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
      <button
        onClick={onCheckout}
        className={style.OrderButton}
        disabled={isOrderDisabled}
      >
        ORDER NOW
      </button>
    </div>
  )
}

export default BuildControls
