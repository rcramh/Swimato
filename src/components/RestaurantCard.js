import React from "react";

function RestaurantCard(props){
    
    const {name, cloudinaryImageId, avgRating , costForTwo }= props?.res_data?.info;
    
    const resImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId;
    
    return (
        <div className="card">
            <img src={resImg} alt="shriji_logo" ></img>
            <h2><b>{name}</b></h2> 
            <span> {avgRating}★</span>
            <p>RS.{costForTwo} </p>
        </div>
    );
}

export default RestaurantCard;

