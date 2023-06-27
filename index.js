import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Login from "./src/components/Login";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return (
        <div>
            <Header/ >
            <Outlet />
            
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
                    element : <About />,
                },
                {
                    path : "/contact",
                    element : <Contact />,
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
