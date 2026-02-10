import React , { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const Body = ()=>{

    const appLayout = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={appLayout}/>
        </div>
    )
};

export default Body;