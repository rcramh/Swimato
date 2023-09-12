import React, {useState, useEffect , lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Login from "./src/components/Login";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import {Provider} from "react-redux";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//Lazy loading : On demand loading of the components
const About = lazy( () => import("./src/components/About.js") );
const Contact = lazy( () => import("./src/components/Contact.js") );
const Cart = lazy( () => import("./src/components/Cart.js") );


const AppLayout = () => {

    const [userName,setUserName] = useState("");

    //For Authentication
    useEffect(()=>{
    //Make an API call to send userName and password
        const data = {
        name : "Rahul Chaubey",
        };
        setUserName(data.name);
    },[]);

    return (
        <div>
            <Provider store = {appStore}>
                <UserContext.Provider value={{userName : "rc cr"}}>
                    <Header/ >
                    <Outlet />
                </UserContext.Provider >
            </Provider>
        </div>
    );
}

const router = createBrowserRouter(
    [
        {
            path : "/",
            element : <AppLayout />,
            children : 
            [
                {
                    path : "/",
                    element : <Home />,
                },
                {
                    path : "/about",
                    element : (<Suspense fallback={<h1>Loading...</h1>} > <About /> </Suspense>),
                },
                {
                    path : "/contact",
                    element : (<Suspense fallback={<h1>Loading...</h1>} > <Contact /></Suspense>),
                },
                {
                    path : "/cart",
                    element : (<Suspense fallback={<h1>Loading...</h1>} > <Cart /></Suspense>),
                },
                {
                    path : "/login",
                    element : <Login />,
                },
                {
                    path : "/restaurants/:resId",
                    element : <RestaurantMenu />,
                },

            ],
            errorElement: <Error />,
        },
    ]
);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));
