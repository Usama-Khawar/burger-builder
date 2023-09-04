import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './sideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const SideDrawer = ({ open, close }) => {
  let attachedClasses = [style.SideDrawer , style.Close];
  if(open)
    attachedClasses = [style.SideDrawer, style.Open]
  return (
    <Aux>
      <Backdrop show={open} clicked={close} />
      <div className={attachedClasses.join(" ")}>
        <div style={{ height: '11%' }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer
