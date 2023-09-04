import React from 'react'
import style from './navigationItem.module.css'

const NavigationItem = ({ link, children , active }) => {
  return (
    <li className={style.NavigationItem}>
      <a className={active ? style.active : null} href={link}>
        {children}
      </a>
    </li>
  )
}

export default NavigationItem
