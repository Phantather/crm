import React, {JSX, JSXElementConstructor} from 'react';
import { useRoutes } from "react-router-dom";
import  Layout  from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";


export default function RoutesA(): JSX.Element | null {
    const routes = useRoutes([
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                }
            ]
        }
    ]);

    return routes;
}
