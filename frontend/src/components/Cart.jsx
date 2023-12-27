import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeItem} from "../store/foodSlice"

const Cart = ()=>{
    const [itemsList, setItemsList] = useState([])
    const [btnInfo, setBtnInfo] = useState(false)
    const [total,setTotal]=useState(0)
    
 const allCartItem = useSelector((state)=>state.food.cartData)
const dispatch= useDispatch()

 const handleDelete = (elem)=>{
    dispatch(removeItem(elem))
 }

 const orderCreation = async()=>{
    const userid = sessionStorage.getItem("loginUserId")
    console.log("session id user ",userid)
    const data = await fetch("http://localhost:3000/api/order-history",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify({items:itemsList, userId:userid})
    })
    const response = await data.json()
    if(response.status){
        setBtnInfo(true)
        // this will empty state userData once order is placed successfully 
        setTimeout(()=>{
            dispatch(removeItem([]))
        },2000)
    }
 }

useEffect(()=>{
    setItemsList(allCartItem)
    
    // Total calculation of all products in the carts
    const sumOfQuantity=allCartItem.reduce((accumulator,elem)=> accumulator+(elem.quant*elem.pric),0)
    setTotal(sumOfQuantity)
    

 },[allCartItem])
    return(
        <>
            <div className="cart" style={{height:"80vh"}}>
                <div className="flex justify-center items-center flex-col">
                    
                    <h3 className="text-2xl p-4 ">Cart Items</h3>
                    {
                        itemsList.length>0?
                        <div>
                        <table>
                        <tr>
                            <th  className="px-5">Serial No</th>
                            <th className="px-5">Item Name</th>
                            <th className="px-5">Quantity</th>
                            <th className="px-5">Option</th>
                            <th className="px-5">Price</th>
                            <th className="px-5">Amount</th>
                            <th className="px-5">Remove Item</th>
                        </tr>
                        {
                            itemsList.length>0 && itemsList.map((elem,index) =>(
                                <tr key={elem.id}>
                            <td className="px-8 py-2">{index+1}</td>
                            <td className="px-8 py-2">{elem.name}</td>
                            <td className="px-8 py-2">{elem.quant}</td>
                            <td className="px-8 py-2">{elem.portion}</td>
                            <td className="px-8 py-2">{elem.pric}</td>
                            <td className="px-8 py-2"><span>&#8377;</span> {elem.quant*elem.pric}</td>
                            <td className="px-8 py-2 "><button className="hover:text-redlava border border-y-orange-600 rounded-md px-5" onClick={()=>handleDelete(elem)}>Delete</button></td>
                            </tr>
                                ))
                            }   
                          
                    </table> 
                    <div className="flex justify-center items-center gap-8 py-3">
                                <button disabled={btnInfo} onClick={orderCreation}>Check Out</button>
                                <h3>Total: <span>&#8377;</span> {total}</h3>
                            </div>
                            { btnInfo && 
                                <div className="py-4 text-center">
                                    <h3>Order is placed Successfull !!</h3>
                                </div>
                            }
                    </div>
                 
                     : <div className="text-center ">
                                    <h3 className="text-3xl border-1 bg-redlight py-4 px-8">Cart is Empty</h3>
                                </div>
                    }
                </div>
            </div>
        </>
                )
};

export default Cart;