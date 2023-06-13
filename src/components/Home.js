import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";


function Home(){

    const [listOfRestaurants, setListOfRestraunt] = useState(null);
    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&page_type=DESKTOP_WEB_LISTING"
        );
    
        json = await data.json();
         
        setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
        
      };
    
      console.log(listOfRestaurants);
      
      if(listOfRestaurants)
      {
        return (
          <div className = "Home">
              <h1>Hello, Welcome to Swimato Home page</h1>
              {
                  listOfRestaurants.map( (restaurantDoc) => (
                    <RestaurantCard res_data = {restaurantDoc}  />
                  ))
              }
          </div>
        );
      }
      
}

export default Home;

