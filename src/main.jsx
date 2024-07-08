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
import Blog from './Pages/Blog/Blog';
import ApartmentDetails from './Pages/Home/Apartments/ApartmentDetails';
import Dashboard from './Pages/layout/Dashboard';
import MemberProfile from './Dashboard/MemberDashboard/MemberProfile';
import Agreement from './Dashboard/MemberDashboard/Agreement';
import Payment from './Dashboard/MemberDashboard/Payment';
import Agreements from './Pages/Agreements/Agreements';
import MyApartment from './Pages/MyApartment/MyApartment';
import ManageItems from './Dashboard/AdminDashboard/ManageItems';
import AddItems from './Dashboard/AdminDashboard/AddItems';
import AllUsers from './Dashboard/AdminDashboard/AllUsers';
import AdminProfile from './Dashboard/AdminDashboard/AdminProfile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateApartment from './Dashboard/AdminDashboard/UpdateApartment';
import Announcement from './Dashboard/AdminDashboard/Announcement';
import WhyUs from './Pages/WhyUs/WhyUs';
import Success from './Dashboard/MemberDashboard/paymentRoute/Success';
import Failed from './Dashboard/MemberDashboard/paymentRoute/Failed';
import VideoCall from './Dashboard/AdminDashboard/VideoCall';








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
        path: '/agreement',
        element: <Agreements />

      },
      {
        path: '/myApartment',
        element: <MyApartment />
      },
      {
        path: '/apartmentDetails/:id',
        element: <PrivateRoute><ApartmentDetails /></PrivateRoute>,
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
      },
      {
        path : 'payment/success/:transId',
        element : <Success/>
      },
      {
        path : 'payment/failed/:transId',
        element : <Failed/>
      },
    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [



     
       // admin Dashboard 
      {
        path: 'adminProfile',
        element: <AdminProfile/>
      },
      {
        path: 'allUsers',
        element: <AllUsers /> 
      },
      {
        path: 'addItems',
        element: <AddItems /> 
      },
      {
        path: 'manageItems',
        element: <ManageItems />
      },
      {
        path: 'updateApartment/:id',
        element: <UpdateApartment />,
        loader : ({params}) => fetch(`https://apartment-booking-server.vercel.app/apartments/${params.id}`)
      },
      {
        path: 'announcement',
        element: <Announcement/>
      },
      {
        path: 'videoCall',
        element: <VideoCall/>
      },
     

      // user Dashboard 
      {
        path: 'memberProfile',
        element: <MemberProfile />
      },
      {
        path: 'agreement',
        element: <Agreement />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      
     
    ]
  }

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