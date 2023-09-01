import React from 'react'
import style from './toolbar.module.css'
import Logo from '../../Logo/Logo'

const Toolbar = () => {
  return (
    <header className={style.Toolbar}>
      <div>MENU</div>
      <div>
        <Logo />
      </div>
      <nav>...</nav>
    </header>
  )
}

export default Toolbar
