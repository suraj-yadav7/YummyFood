import React, { useState,useEffect } from 'react'
import FoodItem from './FoodItem'

export const Home = () => {
  const [foodData, setFoodData]=useState("")
  const fetchFoodData = async()=>{
    let response= await fetch("http://localhost:3000/api/food-details")
    let data = await response.json()
    let newData = data.slice(0,15)
    setFoodData(newData)
    console.log("food datata:: ", newData )
  }

  useEffect(()=>{
    fetchFoodData()
  },[])
    
  return (
    <>
        <section className='starter'>
        <div className='p-2'><h3 className='bold text-2xl font-bold'>The starter</h3></div>
        <div className='flex flex-wrap gap-4 max-sm:justify-center text-center '>
          {
            foodData&& foodData.filter((elem)=> elem.categoryName === "Starter").map((elem)=>(
              <FoodItem details={elem}/>
            ))
          }
        </div>
        </section>
        <section className='maincourse'>
        <div className='p-2'>
          <h3 className='bold text-2xl font-bold'>Main course</h3>
          </div>
        <div className='flex flex-wrap gap-4 max-sm:justify-center text-center '>
          {
            foodData&& foodData.filter((elem)=> elem.categoryName === "Biryani/Rice").map((elem)=>(
              <FoodItem details={elem}/>
            ))
          }
        </div>
        </section>
        <section className='desert'>
        <div className='p-2'>
          <h3 className='bold text-2xl font-bold'>Desert</h3></div>
        <div className='flex flex-wrap gap-4 max-sm:justify-center text-center '>
          {
            foodData&& foodData.filter((elem)=> elem.categoryName === "Desert").map((elem)=>(
              <FoodItem details={elem} />
            ))
          }
        </div>
        </section>
    </>
  )
};  

export default Home;