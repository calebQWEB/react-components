import React from 'react'
import './Button.css'

const Button = ({text, hoverColor, border}) => {
  return (
    <button style={{ border: `1px solid ${border}`}}>
        {text}
        <div className='cover' style={{backgroundColor: hoverColor}}></div>
    </button>
  )
}

export default Button