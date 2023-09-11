import React from 'react'
import style from './button.module.css'

const Button = ({ value, clicked, btnType , type }) => {
  return (
    <button
      className={[style.Button, style[btnType]].join(' ')}
      onClick={clicked}
      type={type}
    >
      {value}
    </button>
  )
}

export default Button
