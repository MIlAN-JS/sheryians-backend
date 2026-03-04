import {createBrowserRouter} from "react-router-dom"
import RegisterPage from "./Features/auth/pages/RegisterPage.jsx"
import LoginPage from "./Features/auth/pages/LoginPage.jsx"
import App from "./App.jsx"
import Protected from "./Features/auth/components/Protected.jsx"

const router = createBrowserRouter([
    {
        path : "/",
        element : <Protected><App/></Protected>
    },
    {
        path : "/login",
        element:<LoginPage/>
    },
    {
        path : "/register", 
        element : <RegisterPage/>
    }

])

export default router