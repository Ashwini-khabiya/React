import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./src/componrnt/Home";
import About from "./src/componrnt/About";
import Contact from "./src/componrnt/Contact";
import Error from "./src/componrnt/Error";

const AppConfig = createBrowserRouter([
  {
    path: '/',
    element : <Home/>,
    errorElement : <Error/>
  },{
    path: '/About',
    element:<About/>
  },{
    path: '/Contact',
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppConfig}/>);
