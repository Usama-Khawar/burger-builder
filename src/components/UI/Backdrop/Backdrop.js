import React from 'react'
import style from './backDrop.module.css'

const Backdrop = ({show , clicked}) => {
  return (
    show ? <div className={style.Backdrop} onClick={clicked}></div> : null
  )
}

export default Backdrop