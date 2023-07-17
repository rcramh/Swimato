import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
//import App from "./src/components/App";
import Header from "./src/components/Header";
//import Footer from "./src/components/Footer";
import Home from "./src/components/Home";
//import About from "./src/components/About";
//import Contact from "./src/components/Contact";
import Login from "./src/components/Login";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/utils/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const About = lazy( () => import("./src/components/About.js") );
const Contact = lazy( () => import("./src/components/Contact.js") );
//doubt it's working properly or not

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
                    element : (<Suspense fallback={<h1>Loading...</h1>} > <About /> </Suspense>),
                },
                {
                    path : "/contact",
                    element : (<Suspense fallback={<h1>Loading...</h1>} > <Contact /></Suspense>),
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
