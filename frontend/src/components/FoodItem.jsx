import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addItemCart,updateItem } from '../store/foodSlice';
import {toast} from "react-hot-toast";


const FoodItem = ({details}) => {
const [price, setPrice] = useState(details.options[0].half)
const [quantity, setQuantity] = useState(1)
const [totalPrice, setTotalPrice] = useState(0)
const [portionType, setPortionType] = useState('half')
const itemOfCart = useSelector((state)=>state.food.cartData)

const dispatch = useDispatch()

const priceHandle = (quantity,price)=>{
let totalPriceVal = quantity*price
setTotalPrice(totalPriceVal)
}

const handleCartChange = (e)=>{
    toast.success("Item Added to Cart")
    if(itemOfCart.length>0){
        for(let elem of itemOfCart){
            if(elem.id == details._id && portionType !=='full'){
                dispatch(updateItem({id:details._id,name:details.name, quant:quantity}))
            }

            // this code will add exiting cart item as new item in cart because portion is changed from half -> full
            if(elem.id == details._id && portionType == "full" && elem.portion=="half"){
            dispatch(addItemCart({id:details._id,name:details.name, img:details.img,quant:quantity,pric:price,portion:portionType}))
            setPortionType("half")
            }
            
        }

        // below code will check wheter item is present in existing array. If not it will add itme init.
        const indexVal = itemOfCart.map((elem)=> elem.id).indexOf(details._id)
        if(indexVal == -1){
            dispatch(addItemCart({id:details._id,name:details.name, img:details.img,quant:quantity,pric:price,portion:portionType}))
        }
    }
    else{
        dispatch(addItemCart({id:details._id,name:details.name, img:details.img,quant:quantity,pric:price,portion:portionType}))
    }
}


useEffect(()=>{
    priceHandle(price, quantity)
},[quantity,price]);

  return (
    <>{ details &&

        <div className='w-60 max-sm:w-50 flex flex-col justify-center items-center p-4 border  border-gray-400 rounded-lg shadow'>  
            <div className='w-48 h-48 mb-4 rounded-md'>
                <img className='w-full h-full bg-cover bg-center bg-no-repeat  rounded-lg' src={details.img} />
            </div>
            <hr/>
                <h3 className='mt-3 font-lora  text-lg' value={details.name} name="itemName">{details.name}</h3>
            <div className='flex my-3    '>
                <div className='font-carrois' >
                    <label>Quantity</label>
                    <select className='rounded border border-gray-500' onChange={(e)=>{setQuantity(e.target.value)}}>
                        <option value={1} name="quantity">1</option>
                        <option value={2} name="quantity">2</option>
                        <option value={3} name="quantity">3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className='font-carrois' >
                    <label>Portion</label>
                    <select className=' rounded border border-gray-500' onChange={(e)=>{ {const selectedOption = e.target.options[e.target.selectedIndex];
                         const portionTypeName = selectedOption.getAttribute('name');
    setPortionType(portionTypeName);} setPrice(e.target.value)
  }}>
                        <option value={details.options[0].half} name="half" >Half <span>&#8377;</span>{details.options[0].half}/-</option>
                        <option value={details.options[0].full} name="full" >Full <span>&#8377;</span>{details.options[0].full}/-</option>
                    </select>
                </div>
            </div>
            <h4 className='p-2 font-lora ' >Total: <span>&#8377;</span> {totalPrice}/-</h4>
            <div className='flex gap-3 '>
                <button className='text-white font-raleway font-medium text-sm p-2 rounded-lg bg-redlava border-1 border-black hover:bg-redlight' onClick={(e)=>handleCartChange(e)}>Add to cart</button>
            </div>
        </div>
}
    </>
  )
};

export default FoodItem;