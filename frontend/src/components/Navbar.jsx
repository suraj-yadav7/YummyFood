import React, { useEffect, useState } from 'react'
import logo from "../assets/yummy-logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast, {Toaster} from "react-hot-toast";


const Navbar = () => {
  const itemInCart= useSelector((state)=> state.food.cartData)

  
  const navigate = useNavigate()
  useEffect(()=>{
   
  },[navigate])
  return (
    <>
      <header className='font-roboto' style={{borderBottom:"1px solid #cfcfcf"}}>
        <nav className='flex justify-between max-sm:text-sm'>
          <Link to="/"><img src={logo} className='h-16 px-2' alt="Yummy Food"/></Link>
          <ul className='flex gap-3 px-6 justify-center items-center text-md bold	 hover:cursor-pointer max-sm:gap-2 max-sm:px-2'>
            <Link to="/"><li className='hover:text-redlava'>Home</li></Link>
            <Link to="/cart"><li className='flex'>
              <li className='hover:text-redlava  rounded-md px-1 '>Cart 
            </li>
            <li className='text-white bg-redlight rounded-md  px-3 '>{itemInCart.length}</li>
              </li>
            </Link>
            {
              sessionStorage.getItem('jwttoken')?
              <div className='flex gap-2 justify-center items-center'>
                <Link to="/order-history" className='hover:text-redlava text-center'><li>My Order</li></Link>
                <Link to="/login" className='hover:text-redlava border border-1 px-2 rounded-md max-sm:px-1' onClick={()=>{sessionStorage.clear(), toast.error("User Logged Out")}  }><li>Logout</li></Link>
              </div>
                
              : <div className='flex gap-3' >
              <Link to="/login" ><li className='hover:text-redlava'>Login</li> </Link>
              <Link to="/signup"><li className='hover:text-redlava'>Signup</li></Link>
            </div>
            }
          </ul>
        </nav>
        <Toaster />
      </header>
      
    </>
  )
};

export default Navbar;