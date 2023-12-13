import mongoose from "mongoose";

const foodDataSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        categoryName:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        options:[{
            half:Number,
            full:Number
        }],
        description:{
            type:String,
            required:true
        }
    })

    export const fData= mongoose.model("FData", foodDataSchema)