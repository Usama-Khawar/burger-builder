import React from 'react'
import Aux from '../../hoc/Aux'
import style from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <main className={style.content}>{children}</main>
    </Aux>
  )
}

export default Layout
