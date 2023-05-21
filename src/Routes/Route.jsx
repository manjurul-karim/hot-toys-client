import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Registration from "../components/Home/Registration/Registration";
import Login from "../components/Home/Login/Login";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllToys from "../components/Toys/AllToys/AllToys";
import MyToys from "../components/Toys/MyToys/MyToys";
import AddToys from "../components/Toys/AddToys/AddToys";
import LoaderSpinner from "../Loader/LoaderSpinner";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: 'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path: 'mytoys',
        element:<PrivetRoutes> <MyToys></MyToys></PrivetRoutes>
      },
      {
        path: 'addtoys',
        element: <AddToys></AddToys>
      },
      {
        path:'loader',
        element:<LoaderSpinner></LoaderSpinner>
      }
    ],
  },
]);

export default router;
