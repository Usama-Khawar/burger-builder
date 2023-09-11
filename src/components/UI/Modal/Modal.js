import React from 'react'
import style from './modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = React.memo(
  (props) => {
    return (
      <Aux>
        <Backdrop show={props.show} clicked={props.closeModal} />
        <div
          className={style.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
          }}
        >
          {props.children}
        </div>
      </Aux>
    )
  },
  (prevProps, nextProps) =>
    prevProps.show === nextProps.show &&
    prevProps.children === nextProps.children
)
export default Modal
