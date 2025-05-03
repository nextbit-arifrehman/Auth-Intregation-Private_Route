import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Register from './Component/Register/Register.jsx';
import Login from './Component/Login/Login.jsx';
import AuthProvider from './Context/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvider>

   <RouterProvider router={router} />

  </AuthProvider>


  </StrictMode>,
)
