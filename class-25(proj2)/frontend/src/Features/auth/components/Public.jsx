import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Navigate} from "react-router"

const Public = ({children}) => {
    

    const {user , loading} = useContext(AuthContext)

    if(loading){
        return <h1>Loading...</h1>
    }


    if(user){
        return <Navigate to="/" />
    }
    



  return (
    <>
        {children}
    </>
  )
}

export default Public