import  express  from "express";
import {User} from "../models/user.models.js"

const router = express.Router()

router.post('/create-user', async (req,res)=>{
    try{
       await  User.create({ 
            name:"suraj yadav",
            email:"suraj@gmail.com",
            password:12356,
            location:"Hyderbad"
        })
        res.json({status:true, message:"User is created successfully"})
    }
    catch(error){
        console.log("Error while creating user:: ", error)
        res.json({status:false, message:"Failed to create user"})
    }

})

export default router;
