import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";


export const Home = () => {
  const [foodData, setFoodData] = useState("");
  const [loading, setLoading] = useState(true);
  // fetching data from backend
  const fetchFoodData = async () => {
    let response = await fetch("http://localhost:3000/api/food-details");
    let data = await response.json();
    let newData = data.slice(0, 16);
    setFoodData(newData);
    setLoading(false)
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="px-28 ">
          <section className="starter ">
            <div className="p-2 ">
              <h3 className="font-roboto text-2xl font-bold max-sm:text-center max-sm:text-xl ">Starter</h3>
            </div>
            <div className="flex flex-wrap gap-4 max-sm:justify-center text-center ">
              {foodData &&
                foodData
                  .filter((elem) => elem.categoryName === "Starter")
                  .map((elem) => <FoodItem key={elem._id} details={elem} />)}
            </div>
          </section>
          <section className="maincourse max-sm:mt-5">
            <div className="p-2">
              <h3 className="font-roboto text-2xl font-bold max-sm:text-center max-sm:text-xl ">Main course</h3>
            </div>
            <div className="flex flex-wrap gap-4 max-sm:justify-center text-center ">
              {foodData &&
                foodData
                  .filter((elem) => elem.categoryName === "Biryani/Rice")
                  .map((elem) => <FoodItem key={elem._id} details={elem} />)}
            </div>
          </section>
          <section className="desert max-sm:mt-5">
            <div className="p-2">
              <h3 className="font-roboto text-2xl font-bold max-sm:text-center max-sm:text-xl ">Desert</h3>
            </div>
            <div className="flex flex-wrap gap-4 max-sm:justify-center text-center ">
              {foodData &&
                foodData
                  .filter((elem) => elem.categoryName === "Desert")
                  .map((elem) => <FoodItem key={elem._id} details={elem} />)}
            </div>
          </section>
        </div>
      ) : (
        <div className=" spinner flex justify-center py-32" style={{ minHeight: "80vh" }}> 
            <article></article>
            <p className="text-black opacity-75 mt-5 font-carrois text-lg px-4">
              Data is loading.... Please Wait....!
            </p>
        </div>
      )}
    </>
  );
};

export default Home;
