import React from 'react'
import logo from "../assets/yummy-logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='' style={{borderBottom:"1px solid #cfcfcf"}}>
        <nav className='flex justify-between'>
          <img src={logo} className='h-16 px-2' alt="Yummy Food"/>
          <ul className='flex gap-3 px-6 justify-center items-center text-md bold	 hover:cursor-pointer'>
            <Link to="/"><li className='hover:text-redlava'>Home</li></Link>
            <Link to="/login" ><li className='hover:text-redlava'>Login</li> </Link>
            <Link to="/signup"><li className='hover:text-redlava'>Signup</li></Link>
            <Link to="/cart"><li className='hover:text-redlava'>Cart</li></Link>
          </ul>
        </nav>
      </header>
      
    </>
  )
};

export default Navbar;