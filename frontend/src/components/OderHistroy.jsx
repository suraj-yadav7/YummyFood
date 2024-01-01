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
      <div className="w-full px-4 flex justify-center items-center" style={{ minHeight: "80vh" }}>
        <div className=" flex flex-col justify-center items-center "  style={{maxWidth:"42vw"}} >
          <h1 className="font-roboto text-2xl text-center max-sm:text-sm max-sm:font-semibold">Order History</h1>
          {
            prevList.length>0 && prevList.map((elem,index)=> (
            <div className="py-4 font-lora max-sm:text-sm  " key={elem._id} >
              <h3 className="font-lora text-l font-bold"> Order No: {index+1}</h3>
                <table className="border border-1-black" >
                  <tr className="border-b">
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">S.No</th>
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">Name</th>
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">Qnty</th>
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">Option</th>
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">Price</th>
                    <th className="px-2 py-1 max-sm:px-2 max-sm:text-sm max-sm:font-medium">Amount</th>
                  </tr>
                  {elem.items &&
                    elem.items.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{index + 1}</td>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{item.name}</td>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{item.quant}</td>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{item.portion}</td>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">{item.pric}</td>
                        <td className="px-4 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm">
                          <span>&#8377;</span> {parseInt(item.quant) * parseInt(item.pric)}
                        </td>
                      </tr>
                    ))}
                </table>
                    <div className="flex justify-end border border-1-black py-1"><h4>Order Total: <span>&#8377;</span> {elem.orderTotal}/-</h4></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default OderHistroy;

