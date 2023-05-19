import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../components/Home/Home/Home';
import Registration from '../components/Home/Registration/Registration';
import Login from '../components/Home/Login/Login';
import Blog from '../Blog/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element:<Registration></Registration>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
      ]
    },
  ]);



export default router;