import {createBrowserRouter} from "react-router-dom"
import RegisterPage from "./Features/auth/pages/RegisterPage.jsx"
import LoginPage from "./Features/auth/pages/LoginPage.jsx"
import App from "./App.jsx"
import Protected from "./Features/auth/components/Protected.jsx"
import Public from "./Features/auth/components/Public.jsx"

const router = createBrowserRouter([
    {
        path : "/",
        element : <Protected><App/></Protected>
    },
    {
        path : "/login",
        element: <Public><LoginPage/></Public>
    },
    {
        path : "/register", 
        element :<Public><RegisterPage/></Public> 
    }

])

export default router