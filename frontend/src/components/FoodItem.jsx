import React, { useEffect, useState } from 'react'

const FoodItem = ({details,val}) => {
const [price, setPrice] = useState(details.options[0].half)
const [quantity, setQuantity] = useState(1)
const [totalPrice, setTotalPrice] = useState(0)

const priceHandle = (quantity,price)=>{
let totalPriceVal = quantity*price
setTotalPrice(totalPriceVal)
}

useEffect(()=>{
    priceHandle(price, quantity)
},[quantity,price])

  return (
    <>{ details &&

        <div className='w-60 max-sm:w-50 flex flex-col justify-center items-center p-4 border  border-gray-400 rounded-lg shadow'>  
            <div className='w-48 h-48 mb-4 rounded-md'>
                <img className='w-full h-full bg-cover bg-center bg-no-repeat  rounded-lg' src={details.img} />
            </div>
            <hr/>
                <h3 className='mt-3 font-bold text-lg'>{details.name}</h3>
            <div className='flex my-3    '>
                <div >
                    <label>Quantity</label>
                    <select className='rounded border border-gray-500' onChange={(e)=>setQuantity(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <label>Portion</label>
                    <select className=' rounded border border-gray-500' onChange={(e)=>setPrice(e.target.value)}>
                 
                        <option value={details.options[0].half}>Half <span>&#8377;</span>{details.options[0].half}/-</option>
                        <option value={details.options[0].full}>Full <span>&#8377;</span>{details.options[0].full}/-</option>
                    </select>
                </div>
            </div>
            <h4 className='p-2 font-medium' >Total:{totalPrice}</h4>
            <div className='flex gap-3'>
                <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-300'>Add to cart</button>
            </div>
        </div>
}
    </>
  )
}

export default FoodItem;