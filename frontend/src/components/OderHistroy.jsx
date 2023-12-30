import React, { useEffect, useState } from "react";

const OderHistroy = () => {
  const [prevList, setPrevList] = useState([]);
  const [ amount, setAmount] = useState(0)
  const userid = sessionStorage.getItem("loginUserId");

  const getUserOrderDetails = async () => {
    const response = await fetch(
      "http://localhost:3000/api/user-order-history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userid }),
      }
    );
    const prevOrders = await response.json();
    setPrevList(prevOrders);
    console.log("user prev order response ", prevOrders);
  };

  useEffect(() => {
    getUserOrderDetails();
  }, []);

  return (
    <>
      <div style={{ minHeight: "80vh" }}>
        <div className=" flex flex-col justify-center items-center py-2" >
          <h1 className="font-roboto text-2xl ">Order History</h1>
          {
            prevList.length>0 && prevList.map((elem,index)=> (
            <div className="py-4" style={{maxWidth:"34vw" }} key={elem._id} >
              <h3 className="font-lora text-l font-bold"> Order No: {index+1}</h3>
                <table className="border border-1-black" >
                  <tr className="border-b">
                    <th className="px-5">Serial No</th>
                    <th className="px-5">Item Name</th>
                    <th className="px-5">Quantity</th>
                    <th className="px-5">Option</th>
                    <th className="px-5">Price</th>
                    <th className="px-5">Amount</th>
                  </tr>
                  {elem.items &&
                    elem.items.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-8 py-2">{index + 1}</td>
                        <td className="px-8 py-2">{item.name}</td>
                        <td className="px-8 py-2">{item.quant}</td>
                        <td className="px-8 py-2">{item.portion}</td>
                        <td className="px-8 py-2">{item.pric}</td>
                        <td className="px-8 py-2">
                          <span>&#8377;</span> {parseInt(item.quant) * parseInt(item.pric)}
                        </td>
                      </tr>
                    ))}
                </table>
                    <div className="flex justify-end border border-1-black"><h4>Order Total: <span>&#8377;</span> {elem.orderTotal}/-</h4></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default OderHistroy;

