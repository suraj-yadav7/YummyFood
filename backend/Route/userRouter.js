import  express  from "express";
import {User} from "../models/user.models.js"
import { body,validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
const userRouter = express.Router()

// Create user router 
userRouter.post('/create-user',
[
    body("name").isLength({min:4}),
    body("email").isEmail(),
    body("password").isLength({min:5})
],
async (req,res)=>{
    // validating user input value by using express-validator
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    else{
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)
        try{
            let email = req.body.email
            // Checing if user already exist with same mail_id
            let userData = await User.findOne({email})
            // Here 'model.create' method used to create user details
            if(!userData){
                await  User.create({ 
                    "name":req.body.name,
                    "email":req.body.email,
                    "password":securePassword,
                })
                return res.status(200).json({status:true, message:"User is created successfully"})
                }
            else{
                   res.status(400).json({status:false,message:"Already User with same 'Mail Id' Exist" })
                }
            }
        catch(error){
            console.log("Error while creating user:: ", error)
           return res.json({status:false, message:"Failed to create user"})
        }
    }
})


// $$$$$$$$$$$$$$$$$
// Login User Router
// $$$$$$$$$$$$$$$$$

const jwtSecretStr="thisisAsceretstringforJWT"

userRouter.post("/login-user", async(req,res)=>{
    let email=req.body.email
    try{
        let userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({status:false,errors:"Try login with correct credentials"})
        }
        const comparePassword= await bcrypt.compare(req.body.password, userData.password) 
        if(!comparePassword){
            return res.status(400).json({errors:"Invalid Credential. Try again...."})
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const JWTToken=  jwt.sign(data,jwtSecretStr)
        // console.log("token :: ", JWTToken)
        return res.status(200).json({status:true,message:"User found",jwtToken:JWTToken, userid:userData._id})
    }
    catch(err){
        console.log("error while login user :: ", err)
    }
})



export default userRouter;