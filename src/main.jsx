import { StrictMode } from 'react'
import './index.css'

import { router } from './Routes/routes';

import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
