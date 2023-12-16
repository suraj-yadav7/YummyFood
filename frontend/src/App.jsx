import React from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoodItem from './components/FoodItem';
import Home  from './components/Home';

function App() {

  return (
    <>
      {/* <FoodItem /> */}
      <Home/>
    </>
  )
};

export default App;
