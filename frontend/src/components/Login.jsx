import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginData, setLoginData] = useState({email:"",password:""})
  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault()
    try{
      let response = await fetch('http://localhost:3000/api/login-user',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:loginData.email, password:loginData.password})
      });
      let result = await response.json()
      console.log("login :: ", result)
      if(result.status){
        toast.success("User Logged In")
        sessionStorage.setItem("jwttoken",result.jwtToken)
        sessionStorage.setItem("loginUserId",result.userid)
        setLoginData({email:"", password:""})
        navigate("/")
      }
      if(!result.status){
        toast.error(result.errors)
      }
      console.log("Post login response:: ", result)
    }
    catch(error){
      console.log("Error while login:: ", error)
    }
  };

  return (
    <>
    {/* <!-- Container --> */}
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-600 py-10">
      
      {/* <!-- Login component --> */}
      <div className="flex flex-wrap shadow-xl border border-1-black max-sm:justify-center max-sm:items-center ">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white " style={{minWidth: "20vw"}} >
          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* <!-- Form --> */}
            <form className="mt-4" onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" name="email" value={loginData.email} onChange={(e)=>{setLoginData({...loginData,[e.target.name]:e.target.value})}}  placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input type="password" name="password" value={loginData.password} onChange={(e=>setLoginData({...loginData,[e.target.name]:e.target.value}))} placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-redlava hover:bg-purple-900 px-2 py-1.5 rounded-md hover:bg-redlight">Sign in</button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center max-sm:pb-2">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <Link to="/signup" className="text-xs font-semibold text-purple-700 hover:text-redlight">Sign up</Link>
            </div>
          </div>
        </div>

        {/* <!-- Login banner --> */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md"  style={{"width": "24rem", "height": "32rem"}}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="http://tinyurl.com/5bkkks7h" />
        </div>

      </div>
    </div>
    </>
  )
};

export default Login;