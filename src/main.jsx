import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Shared/AuthProvider';
import Main from './Pages/layout/Main';








const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path : '/',
        element : <Home></Home>,

      },
      
      
      {
        path : '/login',
        element : <Login></Login>

      },
      
      {
        path : '/registration',
        element : <Register/>
      }
    ]
  },
 
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>
  </div>
)