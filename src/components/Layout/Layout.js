import React from 'react'
import Aux from '../../hoc/Aux'
import style from './Layout.module.css'
const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar , SideBar , BackDrop</div>
      <main className={style.content}>{children}</main>
    </Aux>
  )
}

export default Layout
