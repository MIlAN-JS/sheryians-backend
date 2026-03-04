import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import AuthProvider from './features/auth/context/AuthContext.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PrivateAccess from './features/auth/components/PrivateAccess.jsx'
import Loginpage from './features/auth/pages/Loginpage.jsx'

const router = createBrowserRouter([
   {
    path : '/login',
    element : <PrivateAccess><Loginpage/></PrivateAccess>
   },
   {
    path : '/home',
    element : <PrivateAccess><Homepage/></PrivateAccess>
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

<RouterProvider router={router}>
  <App />
</RouterProvider>
       

  </AuthProvider>
  
  </StrictMode>,
)
