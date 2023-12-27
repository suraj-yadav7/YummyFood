import React, { useEffect, useState } from 'react'

const OderHistroy = () => {
  const [prevList, setPrevList] = useState([])
  const userid= sessionStorage.getItem("loginUserId")

  const getUserOrderDetails = async()=>{
        const response= await fetch("http://localhost:3000/api/user-order-history",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({userId:userid})
        }) ;
        const prevOrders = await response.json()
        setPrevList(prevOrders[0].items)
        console.log("user prev order response ", prevOrders[0].items)
  }
useEffect(()=>{
  getUserOrderDetails()
},[])

  return (
    <>
      <table>
            <tr>
                <th  className="px-5">Serial No</th>
                <th className="px-5">Item Name</th>
                <th className="px-5">Quantity</th>
                <th className="px-5">Option</th>
                <th className="px-5">Price</th>
                <th className="px-5">Amount</th>
            </tr>
            {
                prevList.length>0 && prevList.map((elem,index) =>(
                    <tr key={elem.id}>
                <td className="px-8 py-2">{index+1}</td>
                <td className="px-8 py-2">{elem.name}</td>
                <td className="px-8 py-2">{elem.quant}</td>
                <td className="px-8 py-2">{elem.portion}</td>
                <td className="px-8 py-2">{elem.pric}</td>
                <td className="px-8 py-2"><span>&#8377;</span> {(parseInt(elem.quant))*elem.pric}</td>
                </tr>
                    ))
                }   
                          
        </table> 
    </>
  )
}

export default OderHistroy;