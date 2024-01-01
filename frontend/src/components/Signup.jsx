import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";


const Signup = () => {
    const [formData, setFormData] = useState({fullName:"", email:"", password:""})
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(formData.password === confirmPassword){
            try{
                const response = await fetch("http://localhost:3000/api/create-user",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({name:formData.fullName, email:formData.email, password:formData.password})
                })
                let result = await response.json()
                console.log("post response", result)
                if(result.status){
                    setFormData({fullName:"", email:"", password:""})
                    setConfirmPassword("")
                    toast.success(result.message)
                    setTimeout(()=>{
                        navigate("/login")
                    },1500)
                }
                if(!result.status){
                    toast.error(result.message)
                }
                if(result.errors){
                    toast.error("Enter valid 'Mail Id' or 'Name' must be 4 letter")
                }
            }
            catch(err){
                console.log("Error while user creation :: ", err)
            }
        }
        else{
            alert("Password don't match")
        }
    }

  return (
    <>
        <div className="bg-grey-lighter min-h-screen flex flex-col max-sm:text-base">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                <div className=" px-6 py-8 rounded shadow-md text-black w-full border border-1-black" style={{backgroundColor:'#DBB657'}}>
                    <form onSubmit={handleSubmit}>
                        <h1 className="mb-8 text-3xl text-center max-sm:xl">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullName"
                            placeholder="Full Name" 
                            value={formData.fullName}
                            onChange={(e)=> setFormData({...formData,[e.target.name]:e.target.value})}
                            />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Email" 
                            name="email"
                            value={formData.email}
                            onChange={(e)=> setFormData({...formData,[e.target.name]:e.target.value})}
                            
                            />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password" 
                            name="password"
                            value={formData.password}
                            onChange={(e)=> setFormData({...formData, [e.target.name]:e.target.value})}
                            />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Confirm Password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                            />

                        <button
                            type="submit"
                            className="bg-green-500 w-full text-center py-3 rounded-md bg-redlava text-white hover:bg-green-200 focus:outline-none my-1 hover:bg-redlight"
                            >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue hover:text-redlight" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    
    </>
  )
};

export default Signup;