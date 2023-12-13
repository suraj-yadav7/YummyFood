import "dotenv/config"
import express from 'express';
import connectDb from './db.js';
import router from "./Route/userRouter.js"
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

// use is middlewear to perfom routing.
app.use(express.json())
app.use('/api', router);


