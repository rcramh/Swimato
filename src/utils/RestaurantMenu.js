import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";



function RestaurantMenu(){

    const [restName , setRestName] = useState("");
    const [restDetail , setRestDetail] = useState([]);


    //get the dynamic resId (route param)
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4107978&lng=78.341552&restaurantId=" + resId
      );
  
       const json = await data.json();
        
       setRestName(json?.data?.cards[0]?.card?.card?.info?.name);
       setRestDetail(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    };
    //json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card?.name
    //console.log(restDetail);
    



    return (
      <div>
        <h1> {restName} </h1>
        <h2>Menu</h2>
        <ul>
        {restDetail.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <button>+</button>
          </li>
        ))}
      </ul>

      </div> 
    );
}

export default RestaurantMenu;