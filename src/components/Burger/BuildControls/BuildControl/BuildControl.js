import React from 'react'
import style from './BuildControl.module.css'
const BuildControl = ({ label, onLess, onMore, disabled }) => {
  return (
    <div className={style.BuildControl}>
      <div className={style.Label}>{label}</div>
      <button disabled={disabled} onClick={onLess} className={style.Less}>
        Less
      </button>
      <button onClick={onMore} className={style.More}>
        More
      </button>
    </div>
  )
}

export default BuildControl
