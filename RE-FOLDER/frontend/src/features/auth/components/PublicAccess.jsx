

import React from 'react'
import { Navigate } from 'react-router'

const PublicAccess = ({children}) => {

    if(user){
        <Navigate to='/home' />
    }
    
  return (
    <div>

    </div>
  )
}

export default PublicAccess