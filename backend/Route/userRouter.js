import  express  from "express";
import {User} from "../models/user.models.js"
import { body,validationResult } from "express-validator";

const router = express.Router()

router.post('/create-user',
[
    body("name").isLength({min:5}),
    body("email").isEmail(),
    body("password").isLength({min:5})
], 
async (req,res)=>{
    // validating user input value by using express-validator
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        // Here 'model.create' method used to create user details
       await  User.create({ 
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location
        })
        res.json({status:true, message:"User is created successfully"})
    }
    catch(error){
        console.log("Error while creating user:: ", error)
        res.json({status:false, message:"Failed to create user"})
    }
})

export default router;
