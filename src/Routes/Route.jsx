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
import CarDetails from "../components/Home/Cars/CarDetails";
import UpdateMyToys from "../components/Toys/MyToys/UpdateMyToys";

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
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivetRoutes>
            <MyToys></MyToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "addtoys",
        element: (
          <PrivetRoutes>
            <AddToys></AddToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "loader",
        element: <LoaderSpinner></LoaderSpinner>,
      },
      {
        path: "cardetails/:id",
        element: (
          <PrivetRoutes>
            <CarDetails></CarDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cardetails/${params.id}`),
      },
      {
        path: "update/:id",
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({ params }) =>
          fetch(`https://a10-hot-toys-server-manjurul-karim.vercel.app/addedtoys/${params.id}`),
      },
    ],
  },
]);

export default router;
