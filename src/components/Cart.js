import React from "react";
import { useContext, useState } from 'react';
import userContext from "../utils/UserContext"

function Cart(){

    const loggedInUser = useContext(userContext);
    const userName = loggedInUser.userName;


    return (
        <div>
            <h1> Please add items into the cart </h1>
            <h2> LoggedIn user is {userName}  </h2>

        </div>
    );
}

export default Cart;

