import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "../src/store/store.js"
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { Home } from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import OderHistroy from './components/OderHistroy.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/order-history",
        element:<OderHistroy/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
