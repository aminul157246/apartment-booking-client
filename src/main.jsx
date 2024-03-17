import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()



import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Shared/AuthProvider';
import Main from './Pages/layout/Main';
import MyApartment from './Pages/MyApartment/MyApartment';
import WhyUs from './Pages/WhyUs/WhyUs';
import Blog from './Pages/Blog/Blog';
import ApartmentDetails from './Pages/Home/Apartments/ApartmentDetails';








const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/myApartment',
        element: <MyApartment />

      },
      {
        path: '/apartmentDetails/:id',
        element: <ApartmentDetails />,
      },
      {
        path: '/whyUs',
        element: <WhyUs />

      },
      {
        path: '/blog',
        element: <Blog />

      },
      {
        path: '/login',
        element: <Login></Login>

      },

      {
        path: '/registration',
        element: <Register />
      }
    ]
  },

]);






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>

)