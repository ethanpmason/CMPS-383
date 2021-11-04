import React from 'react';
import { Link } from 'react-router-dom';
//import { createPopper } from "@popperjs/core";


const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black
        relative shadow-sm font-mono' 
        role='navigation'
        >
            <Link to='/' className="pl-8"> Collegiate Events LLC </Link>
            <div className='px-4 cursor-pointer md:hidden'
            onClick={toggle}>
                <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
                />
                </svg>        
            </div>  
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>   
                <Link className="p-4" to="/about">About</Link>
                <Link className="p-4" to="/contact">Contact</Link> 
                <button class="rounded shadow "><Link className="p-4 font-medium text-indigo-600 hover:text-indigo-500" to="/login">Log In</Link></button>
            </div>     
        </nav>
    )
}

export default Navbar
