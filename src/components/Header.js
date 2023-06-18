import React, {useState} from "react";
import { Link } from 'react-router-dom';
import App_logo from "../Assets/app_logo.png"


function Header(){

    const [loginButton, setLoginButton] = useState("Login");

    function setStatus(){
        if(loginButton === "Login")
            setLoginButton("Logout");
        else
            setLoginButton("Login");

    }

    return (
        <div class = "navbar">
            <img class = "logo" src={App_logo} alt="swimato_logo"></img>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
            <button onClick={setStatus} >{loginButton}</button>
        </div>
        
    );
}

export default Header;