import React from 'react'
import './About.css'

const Button = (props) => {
  return (
    <button className='All-btns' onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button
