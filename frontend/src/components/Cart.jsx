import React, { useState } from "react";

const Cart = ()=>{
 const [itemsList, setItemsList] = useState([])
    return(
        <>
            <div className="cart">
                <div>
                    <hr/>
                    <h3 className="text-2xl py-4">Cart Items</h3>
                    <table>
                        <tr>
                            <th  className="px-5">Serial No</th>
                            <th className="px-5">Item Name</th>
                            <th className="px-5">Quantity</th>
                            <th className="px-5">Option</th>
                            <th className="px-5">Amount</th>
                            <th className="px-5">Remove Item</th>
                        </tr>
                        {itemsList.length>0 && itemsList.map((elem,index) =>(
                            <tr>
                            <td className="px-8 py-2">{index+1}</td>
                            <td className="px-8 py-2">{elem.name}</td>
                            <td className="px-8 py-2">2</td>
                            <td className="px-8 py-2">Full</td>
                            <td className="px-8 py-2">400</td>
                            <td className="px-8 py-2"><button className="hover:text-red-400 border border-y-orange-600 rounded-md px-5">Delete</button></td>
                        </tr>
                                ))
                        }
                        
                    </table>
                </div>
            </div>
        </>
    )
};

export default Cart;