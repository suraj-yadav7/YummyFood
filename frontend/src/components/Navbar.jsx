import React, { useEffect, useState } from 'react'
import logo from "../assets/yummy-logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const itemInCart= useSelector((state)=> state.food.cartData)

  
  const navigate = useNavigate()
  useEffect(()=>{
   
  },[navigate])
  return (
    <>
      <header className='' style={{borderBottom:"1px solid #cfcfcf"}}>
        <nav className='flex justify-between'>
          <img src={logo} className='h-16 px-2' alt="Yummy Food"/>
          <ul className='flex gap-3 px-6 justify-center items-center text-md bold	 hover:cursor-pointer'>
            <Link to="/"><li className='hover:text-redlava'>Home</li></Link>
            <Link to="/cart"><li className='hover:text-redlava border border-1 rounded-md px-1'>Cart <span className='text-white bg-redlight rounded-md px-1'>{itemInCart.length}</span></li></Link>
            {
              sessionStorage.getItem('jwttoken')?
              <div className='flex gap-4 justify-center items-center'>
                <Link to="/order-history" className='hover:text-redlava text-center'><li>My Order</li></Link>
                <Link to="/login" className='hover:text-redlava border border-1 px-2 rounded-md' onClick={()=>sessionStorage.clear()}><li>Logout</li></Link>
              </div>
                
              : <div className='flex gap-3' >
              <Link to="/login" ><li className='hover:text-redlava'>Login</li> </Link>
              <Link to="/signup"><li className='hover:text-redlava'>Signup</li></Link>
            </div>
            }
          </ul>
        </nav>
      </header>
    </>
  )
};

export default Navbar;