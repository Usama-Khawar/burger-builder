import React from 'react'
import style from './modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({children , show , modalClosed}) => {
  return (
    <Aux>
    <Backdrop show={show} clicked={modalClosed}/>
      <div className={style.Modal}>{children}</div>
    </Aux>
  )
}

export default Modal
