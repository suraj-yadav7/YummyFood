import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    {/* <!-- component --> */}
    {/* <!-- Container --> */}
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      
      {/* <!-- Login component --> */}
      <div className="flex flex-wrap shadow-md">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{"width": "24rem", "height": "32rem"}}>
          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* <!-- Form --> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <Link to="/signup" className="text-xs font-semibold text-purple-700">Sign up</Link>
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
}

export default Login