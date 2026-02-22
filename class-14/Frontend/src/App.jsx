import React from 'react'
import AuthProvider from './Features/authentication/context/AuthContext'

const App = () => {
  return (
    <AuthProvider>

       <div>App</div>

    </AuthProvider>
   
  )
}

export default App