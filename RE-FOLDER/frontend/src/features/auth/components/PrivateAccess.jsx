import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router'
const PrivateAccess = ({children}) => {

    const {user , loading } = useContext(AuthContext)

   
    if(loading){
        return <h1>Loading...</h1>

    }

    if(!user){
        return <Navigate  to = '/login' />
    }
    

    

  return (
    <div>
        {children}
    </div>
  )

}

export default PrivateAccess