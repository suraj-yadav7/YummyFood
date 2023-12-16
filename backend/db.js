import mongoose from 'mongoose'
import {fData} from './models/food.models.js' 
import foodData from "./foodData.json" assert {type: 'json'}

const mongoURI=process.env.MONGO_URI

// connecting monngoDb 
const connectDb=async()=>{
    try{
       let connectionInstance = await mongoose.connect(mongoURI)
        console.log("MongoDb Connected :: ", connectionInstance.connection.host);
        // calling function to initiate import json data
        importData()
    }
    catch(error){
        console.log("mongoDb Not connected", error);
    }
};

//creating collection and sending json file to the collection
const importData=async()=>{
    try{
        await fData.create(foodData)
    }
    catch(err){
        console.log("Failed to upload data in MongoDb atlas",err)
    }
};

export default connectDb;
