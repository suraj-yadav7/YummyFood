import mongoose from "mongoose";

const userOrderSchema = new mongoose.Schema({
    
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    orderTotal:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const UserOrder = mongoose.model("UserOrder", userOrderSchema)