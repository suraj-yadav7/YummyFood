import express from 'express'
import {UserOrder} from "../models/userOrder.models.js"

const orderRouter = express.Router()

orderRouter.post("/order-history", async(req,res)=>{
    console.log("order histroy req body ", req.body)
    try{
        await UserOrder.create(req.body)
        return res.status(200).json({status:true, message:"user order is created"})
    }
    catch(error){
        console.log("Error occured while creating user order :: ", error)
        return res.json({status:false, message:"Failed to create user order"})
    }
});


//  $$$$$$$$$$$$$$
// Getting user details
// $$$$$$$$$$$$$$$

orderRouter.post("/user-order-history", async(req,res)=>{
    try{
        const userOrderData= await UserOrder.find(req.body)
        return res.send(userOrderData)
    }
    catch(error){
        console.log("Error while fetching Previous user order details ::", error)
    }
    
});



export default orderRouter;