import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { loginUserService , getUserService } from "../services/auth.api"




const useAuth = ()=>{

    const {loading , setLoading , setUser , user} = useContext(AuthContext)



    const registerHandler = async({email , password , userName})=>{
        try {
            setLoading(true)
            const response = await registerUserService({email , password , userName})
            setUser(response.user)
            
        } catch (error) {

            console.log("cannot register user", error)
            
        }finally{
            setLoading(false)
        }
    }
   
    const loginHandler = async({email , password })=>{
        try {
            setLoading(true)
            const response = await loginUserService({email , password })
            console.log(response.user)
            setUser(response.user)
            
            
        } catch (error) {

            console.log("cannot login user", error)
            
        }finally{
            setLoading(false)
        }
    }

    //  const getUserHandler = async()=>{
    //     try {
    //         setLoading(true)
    //         const response = await getUserService()
            
    //         setUser(response.user)
            
    //     } catch (error) {

    //         console.log("cannot get user", error)
            
    //     }finally{
    //         setLoading(false)
    //     }
    // }
    const logoutHandler = async()=>{
        try {
            setLoading(true)
            const response = await logoutUserService()
            setUser(response.user)
            
        } catch (error) {

            console.log("cannot logout user", error)
            
        }finally{
            setLoading(false)
        }
    }

  


    return {loading , user , registerHandler , loginHandler  , logoutHandler}

     




}

export default useAuth;