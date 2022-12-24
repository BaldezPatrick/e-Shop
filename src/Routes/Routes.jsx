import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import {
    About,
    Cart,
    Checkout,
    Error,
    Home,
    PrivateRoute,
    Products,
    SingleProduct,
} from "../Pages";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/products/:id",
        children: [
            {
                index: true,
                element: <SingleProduct />
            }
        ]
    },
    {
        path: "/checkout",
        element: <PrivateRoute><Checkout /></PrivateRoute>
    },
    {
        path: "*",
        element: <Error />
    }
])

export default routers;