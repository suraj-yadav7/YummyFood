import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/foodSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";


const Cart = () => {
  const [itemsList, setItemsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [btnInfo, setBtnInfo] = useState(false);
  const [infoUser,setInfoUser] = useState(false)

  const allCartItem = useSelector((state) => state.food.cartData);
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleDelete = (elem) => {
    toast.error("Item Deleted")
    dispatch(removeItem(elem));
  };

//   onClick 'checkout' it initiate
  const orderCreation = async () => {
    const userid = sessionStorage.getItem("loginUserId");
    console.log("session id user ", userid);
    if(userid){
      const data = await fetch("http://localhost:3000/api/order-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: itemsList, userId: userid, orderTotal:total }),
      });
      const response = await data.json();
      if (response.status) {
        setBtnInfo(true);
        // this will empty state userData once order is placed successfully
        setTimeout(() => {
          dispatch(removeItem([]));
          navigate("/order-history")
        }, 2500);
      }
    }
    else{
      setInfoUser(true)
      setTimeout(()=>{
        setInfoUser(false)
      },2000)
    }
    };

  useEffect(() => {
    setItemsList(allCartItem);

    // Total calculation of all products in the carts
    const sumOfQuantity = allCartItem.reduce(
      (accumulator, elem) => accumulator + elem.quant * elem.pric,
      0
    );
    setTotal(sumOfQuantity);
  }, [allCartItem]);
  return (
    <>
        <div className="cart font-lora  text-black" style={{ minHeight: "80vh" }}>
            <div className="flex justify-center items-center flex-col ">
                <h3 className="text-2xl p-4 font-roboto font-semibold">Cart Items</h3>
                {itemsList.length > 0 ? (
                    <div>
                        <table className="border ">
                            <tr>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">S.No</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Name</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Qty</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Option</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Price</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Amt</th>
                            <th className="px-5 max-sm:px-1 max-sm:text-sm max-sm:font-medium">Remove</th>
                            </tr>
                            {itemsList.length > 0 &&
                            itemsList.map((elem, index) => (
                            <tr key={elem.id}>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{index + 1}</td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{elem.name}</td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{elem.quant}</td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{elem.portion}</td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{elem.pric}</td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">
                                <span>&#8377;</span> {elem.quant * elem.pric}
                                </td>
                                <td className="px-8 py-2 max-sm:px-1 max-sm:py-1 ">
                                <button
                                className="bg-redlava text-white border border-gray rounded-md  hover:text-redlight  px-5 max-sm:px-1"
                                onClick={() => handleDelete(elem)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </table>
                    <div className="flex justify-center items-center gap-8 py-3 max-sm:gap-4 max-sm:py-2 ">
                        <button className=" bg-green px-3 py-2 rounded-md text-white border border-gray  hover:bg-greenlight max-sm:px-2 max-sm:py-1"  disabled={infoUser} onClick={orderCreation}>
                        Check Out
                        </button>
                        <h3 className="text-2xl font-semibold max-sm:text-xl">Total= <span>&#8377;</span> {total}/-</h3>
                    </div>
                    {btnInfo && (
                        <div className="py-4 text-center">
                            <h3 className="font-lora text-xl bg-greenlight rounded-md px-6 py-1">Order is placed Successfull !!</h3>
                        </div>
                    )}
                    {infoUser &&(
                      <div className="py-4 text-center">
                      <h3 className="font-lora text-white text-xl bg-redlight rounded-md px-6 py-1">Login to place your order !!</h3>
                  </div>
                    )}
                </div>) 
                : (
                    <div className="text-center ">
                        <h3 className="text-3xl border-1 bg-redlight py-4 px-8">
                            Cart is Empty
                        </h3>
                    </div>
                )}
            </div>
        </div>
    </>
)};

export default Cart;
