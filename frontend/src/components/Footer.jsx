import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="bg-gray-800 text-white mt-4 p-2 bg-[#f8f8f8]" style={{borderTop:"1px solid #cfcfcf"}}>
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-bold mb-4">Yummy Food Delivery</h2>
          <p className="mb-4 hover:text-redlava">Satisfy your cravings with our delicious food delivered to your doorstep.</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4 ">Contact Info</h3>
          <p className="mb-2 hover:text-redlava hover:cursor-pointer">123 Street, Cityville</p>
          <p className="mb-2 hover:text-redlava hover:cursor-pointer">Email: info@yummyfood.com</p>
          <p className='hover:text-redlava hover:cursor-pointer'>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="mt-4 text-center hover:text-redlava">
        <p>&copy; 2023 Yummy Food Delivery. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
};

export default Footer;