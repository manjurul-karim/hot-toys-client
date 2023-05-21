import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoaderSpinner from '../Loader/LoaderSpinner';

const PrivetRoutes = ({children}) => {
const {user ,loading} =useContext(authContext)

if(loading){
    return <LoaderSpinner></LoaderSpinner>
}

if(user?.email){
    return children
}
    return <Navigate to='login' replace></Navigate>
};

export default PrivetRoutes;