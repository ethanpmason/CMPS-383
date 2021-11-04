import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-white text-black' : 'hidden'}
        onClick={toggle}>
            <Link className="p-4" to="/">Home</Link>   
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/contact">Contact</Link>
            <Link className="p-4" to="/login">Log In</Link> 
        </div>
    )
}

export default Dropdown;
