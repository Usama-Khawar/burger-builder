import React from 'react'
import style from './drawerToggle.module.css'

const DrawerToggle = ({ clicked }) => {
  return (
    <div className={style.DrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle
