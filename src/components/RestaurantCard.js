import React from "react";

function RestaurantCard(props){

    console.log(props);
    console.log(props.res_data.data.name);
    console.log(props.res_data.data.cloudinaryImageId);

    const resName = props.res_data.data.name;
    const cid = props.res_data.data.cloudinaryImageId
    const resImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cid;
    
    return (
        <div class="card">
            <img src={resImg} alt="shriji_logo" ></img>
                <div>
                    <h2><b>{resName}</b></h2> 
                    <p>Veg Food</p> 
                </div>
        </div>
    );
}

export default RestaurantCard;

