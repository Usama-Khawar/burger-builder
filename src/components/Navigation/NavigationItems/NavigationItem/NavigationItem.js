import React from 'react'
import style from './navigationItem.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ link, children, exact }) => {
  return (
    <li className={style.NavigationItem}>
      <NavLink
        to={link}
        exact={exact}
        className={({ isActive }) => (isActive ? style.active : undefined)}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
