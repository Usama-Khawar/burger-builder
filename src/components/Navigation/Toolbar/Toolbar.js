import React from 'react'
import style from './toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = ({ clicked }) => {
  return (
    <header className={style.Toolbar}>
      <DrawerToggle clicked={clicked} />
      <div style={{ height: '100%' }}>
        <Logo />
      </div>
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
