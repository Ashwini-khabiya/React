import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./src/component/Home";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";

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
