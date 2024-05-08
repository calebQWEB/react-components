import React from 'react'
import './Cards.css'
import { GoArrowRight } from "react-icons/go";

const Cards = ({header, text}) => {
  return (
    <div className='card'>
        <h1>IMG</h1>
        <h2>{header}</h2>
        <p>{text}</p>
        <div className='icon-cotainer'>
            <GoArrowRight size={30} color='#000000' />
        </div>
    </div>
  )
}

export default Cards