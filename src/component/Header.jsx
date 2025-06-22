import React from 'react'
import img from './pictures/my-pics.jpg'
import './General.css'
import Pix from './Pix'

const Header = (props) => {
  return (
    
        <div className='header'>
            
            <Pix img={img} />

            <div className='titleH1'>
                <h1 className='title'>{props.title}</h1>
            </div>
        </div>
    
  )
}

export default Header
