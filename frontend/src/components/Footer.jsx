import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className=" text-black font-lora mt-4 p-2 " style={{borderTop:"1px solid #cfcfcf"}}>
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between max-sm:text-sm">
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-roboto mb-2 max-sm:text-base max-sm:font-semibold">Yummy Food Delivery</h2>
          <p className="mb-4 hover:text-redlava">Satisfy your cravings with our delicious food. And delivering food to your doorstep.</p>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-roboto mb-2 max-sm:text-base max-sm:font-semibold">Contact Info</h3>
          <p className="mb-2 hover:text-redlava hover:cursor-pointer">325/A, Suraram Colony, Hyderabad</p>
          <p className="mb-2 hover:text-redlava hover:cursor-pointer">Email: info@yummyfood.com</p>
          <p className='hover:text-redlava hover:cursor-pointer'>Phone: 040-234 567 890</p>
        </div>
      </div>
      <div className="mt-4 text-center hover:text-redlava max-sm:text-sm">
        <p>&copy; 2023 Yummy Food Delivery. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
};

export default Footer;