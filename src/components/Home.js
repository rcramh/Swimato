import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


function Home(){

    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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
    
    const onlineStatus = useOnlineStatus();

    console.log(onlineStatus);
    if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

    function filterRestaurant()
    {
      const searched_rest = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
      setFilteredRestaurants(searched_rest);
    }

    function topRatedRestuarants()
    {
      const searched_rest = listOfRestaurants.filter((res) =>
              res.data.avgRating > 4
              );
      setFilteredRestaurants(searched_rest);
    }

    return (listOfRestaurants.length === 0) ? <Shimmer /> :
    (<div className = "Home">
        <div className="search">
            <h2>Order Food Online From Your Favourite Restaurants</h2>

            <div>
              <input 
                type="text"
                className="filter"
                placeholder="Seach for restaurants" 
                name="restaurant" 
                value={searchText}
                onChange={(event)=> setSearchText(event.target.value)} 
              />
              <button onClick={filterRestaurant}>Search</button>
            </div>

            <div>
                <button onClick={topRatedRestuarants}>Top Rated Restaurants</button>
            </div>
        </div>

        
        

        {
          filteredRestaurants.map( (restaurantDoc) => (
            <Link 
            className="link"
            key={restaurantDoc.data.id}
            to={"/restaurants/" + restaurantDoc.data.id}
            > 
                <RestaurantCard res_data = {restaurantDoc} />
             </Link>
          ))
        }
      </div>
    );
}

export default Home;



