import express from "express"
import {fData} from "../models/food.models"

const foodRouter =express.Router()

foodRouter.get('/food-data', async(req,res)=>{
    try{
       let data2=await fData.find()
        res.send({"fooddata": data2})
        res.json({status:true,message:"Data fetched successfully"})
    }
    catch(error){

    }
});

export default foodRouter;