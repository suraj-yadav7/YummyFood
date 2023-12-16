import "dotenv/config"
import express from 'express';
import connectDb from './db.js';
import router from "./Route/userRouter.js"
import foodRouter from"./Route/userRouter.js"
import { fData } from "./models/food.models.js";
import mongoose from "mongoose";
import cors from "cors"
const app = express()
const PORT = process.env.PORT;

// calling Db file function to connect Db
connectDb()
.then(()=>{
    app.listen(PORT || 4000,()=>{
        console.log(`Server at localhost:: ${PORT}`)
    });
})
.catch((err)=>{
    console.log("MongoDb connection FAILED!!", err)
})

// sample get response method
app.get("/", (req,res)=>{
    res.send("<h1>Your Choice of Yummy Food will be get ready in few minutes please wait..!</h1>")
})

// app.use is mainly used for middlewears and configuration.
//express.json() allow to upload json file in the backend, it has other properties which used to limit the size of json file.
app.use(express.json())

// cors allow to handle CORS policy and don't allow other url to interact with backend.
app.use(cors());
app.use('/api', router);

// app.use('/api',foodRouter);

app.get('/api/food-details', async(req,res)=>{
   let collectionList= await mongoose.connection.db.collections()
   console.log(collectionList)
    const result = await fData.find()
    res.send(result)
});


