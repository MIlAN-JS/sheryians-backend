
import { createContext, useEffect, useState } from "react";
import {  getUserApi } from "../services/auth.api";



export const AuthContext  = createContext()



const AuthProvider  = ({children})=>{

    const [user , setUser] = useState(null)
    const [loading , setLoading ] = useState(true)


    useEffect(()=>{
        
       const getUser =  async ()=>{
            const response = await getUserApi()
            setUser(response)
        }

        getUser()

        setLoading(false)

    },[])




    return(
        <AuthContext.Provider value = {{user , setUser , loading , setLoading}} >
            {children}
        </AuthContext.Provider>
    )

}


export default AuthProvider;