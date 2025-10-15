import React from 'react'

const Btn = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Btn;
