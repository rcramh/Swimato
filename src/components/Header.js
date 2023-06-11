import React from "react";
import { Link } from 'react-router-dom';


function Header(){
    return (
        <div class = "navbar">
            <img class = "logo" src="https://shorturl.at/wDHZ0" alt="swimato_logo"></img>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
            
            <h2>Login</h2>

        </div>
        
    );
}

export default Header;