import React, { createContext, useContext, useState } from 'react'


  const AuthContext = createContext()
  
  

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(false)





  return (
    <AuthContext.Provider value={{user , setUser ,loading , setLoading}} >  
        {children}
    </AuthContext.Provider>
  )
}


 export function useAuthContext(){

    return useContext(AuthContext)

 }

export default AuthProvider



// create context --
// create provider and set value 
// create a hook to use authcontext