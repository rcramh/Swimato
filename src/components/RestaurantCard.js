import React from "react";

function RestaurantCard(props){

    

    const {name, cloudinaryImageId, avgRating , costForTwo }= props?.res_data?.data;

    
    
    
    const resImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId;
    
    return (
        <div class="card">
            <img src={resImg} alt="shriji_logo" ></img>
            <h2><b>{name}</b></h2> 
            <span> {avgRating}*</span> 
            <p>RS.{costForTwo/100} FOR TWO</p> 
        </div>
    );
}

export default RestaurantCard;

