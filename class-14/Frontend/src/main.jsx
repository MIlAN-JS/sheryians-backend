import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Login from './Features/authentication/pages/Login.jsx'
import Register from './Features/authentication/pages/Register.jsx'
import Layout from './Layout.jsx'
import AuthProvider from './Features/authentication/context/AuthContext.jsx'



const router = createBrowserRouter([
  {
      path : "/",
      element : <Layout/>,
      children : [

        {
          path : "",
          element : <App/>
        }, 
        {
          path: "/login",
          element : <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        }

      ]
},



])






createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <RouterProvider router={router} /> 
  </AuthProvider  >,
  
)
