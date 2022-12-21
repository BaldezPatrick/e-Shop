import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../components/Checkout/checkout";
import Header from "../components/Header/header";
import Home from "../components/Home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: [<App/>]
    },
    {
        path: "/checkout",
        element: [<Header />, <Checkout />]
    }
])

export default router;