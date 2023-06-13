import React from "react";
import { Link } from 'react-router-dom';
import App_logo from "../Assets/app_logo.png"


function Header(){
    return (
        <div class = "navbar">
            <img class = "logo" src={App_logo} alt="swimato_logo"></img>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
        </div>
        
    );
}

export default Header;