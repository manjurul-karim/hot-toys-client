import React, { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderSpinner from "../Loader/LoaderSpinner";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;
