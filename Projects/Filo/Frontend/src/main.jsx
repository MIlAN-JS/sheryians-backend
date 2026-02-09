import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router"
import Login from "./components/Login.jsx"
import UserContextProvider from './context/UserContextProvider.jsx'



createRoot(document.getElementById('root')).render(

  <UserContextProvider >
        <App/>
  </UserContextProvider>

)
