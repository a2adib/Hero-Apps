import { createBrowserRouter } from "react-router";

import Root from '../pages/Root/Root';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installed from "../pages/Installed/Installed";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "/Apps",
            Component: Apps
        },
        {
            path: "/Installed",
            Component: Installed
        },
    ]

  },
]);