import React from 'react'
import burgerLogo from '../../assets/images/27.1 burger-logo.png.png'
import style from './logo.module.css'

const Logo = () => {
  return (
    <div className={style.Logo}>
      <img src={burgerLogo} alt='burger-Logo' />
    </div>
  )
}

export default Logo
