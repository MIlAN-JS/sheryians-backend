import { useEffect } from "react";
import { createContext, useState } from "react";
import useAuth from "../hook/useAuth";
import { getUserService } from "../services/auth.api";


export const AuthContext = createContext()



 const AuthProvider = ({children})=>{

  const [user, setUser] = useState(null)
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    async function getUser(){

        try {
        
            const response = await getUserService()
            setUser(response.user)
            setLoading(false)

            
        } catch (error) {

            console.log("cannot get user")
            
        }finally{
            setLoading(false)
        }


    }

    getUser()
  },[])
 

   
 



    return(
        <AuthContext.Provider value={{user , setUser , loading , setLoading}} >

            {children}
        </AuthContext.Provider>
    )
 }


 export default AuthProvider