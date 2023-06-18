import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



function Home(){

    const [listOfRestaurants, setListOfRestraunt] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&page_type=DESKTOP_WEB_LISTING"
      );
  
      json = await data.json();
        
      setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      
    };
  
    console.log(listOfRestaurants);
    
    function filterRestaurant()
    {
      const searched_rest = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
      setListOfRestraunt(searched_rest);
    }

    function topRatedRestuarants()
    {
      const searched_rest = listOfRestaurants.filter((res) =>
              res.data.avgRating > 4
              );
      setListOfRestraunt(searched_rest);
    }

    return (!listOfRestaurants) ? <Shimmer /> :
    (<div className = "Home">
        <div className="search">
            <h2>Order Food Online From Your Favourite Restaurants</h2>
            <input 
            onChange={(event)=> setSearchText(event.target.value)} 
            type="text"
            className="filter"
            placeholder="Seach for restaurants" 
            name="restaurant" 
            value={searchText}
            />

            <button onClick={filterRestaurant}>Search</button>

        </div>

        <div>
        <button onClick={topRatedRestuarants}>Top Rated Restaurants</button>
        </div>
        

        {
          listOfRestaurants.map( (restaurantDoc) => (
            <RestaurantCard res_data = {restaurantDoc}  />
          ))
        }
      </div>
    );
}

export default Home;



