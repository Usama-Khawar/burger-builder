import React from 'react'
import style from './button.module.css'

const Button = ({ value, clicked, btnType }) => {
  return (
    <button
      className={[style.Button, style[btnType]].join(' ')}
      onClick={clicked}
    >
      {value}
    </button>
  )
}

export default Button
