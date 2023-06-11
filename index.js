import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet, Route, Link} from "react-router-dom";


const router = createBrowserRouter(
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
    ]

);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));
