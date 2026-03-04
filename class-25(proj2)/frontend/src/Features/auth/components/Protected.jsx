import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Navigate} from "react-router"

const Protected = ({children}) => {

    const{loading , user} = useContext(AuthContext)

    console.log( "useris ", user)

    


    if(loading){

        return <h1>Loading....</h1>

    }

    if( !user ){
        console.log("no user")
        return  <Navigate to = "/login"/>
    }

  return (
    <>
        {children}
    </>
  )
}

export default Protected