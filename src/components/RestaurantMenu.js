import React,{useState,useEffect} from "react";


function RestaurantMenu(){

    const [restName , setRestName] = useState("");

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&page_type=DESKTOP_WEB_LISTING"
      );
  
       json = await data.json();
        
       setRestName(json?.data?.cards[2]?.data?.data?.cards[0]?.data?.name);
    //   setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      
    };

    //data.cards[2].data.data.cards[0].data.name




    return (
        <h1>Restaurant {restName} menu will be displayed here</h1>
    );
}

export default RestaurantMenu;