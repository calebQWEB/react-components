import React from 'react'
import './Hamburger.css'
import Button from '../Button/Button'

const Hamburger = () => {
    return (
        <div className='hamburger'>
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Services</li>
                <li><a href=""></a>About</li>
            </ul>

            <Button text='Contact' hoverColor='#0f4c81' border='#0f4c81'/>
        </div>
    )
}

export default Hamburger