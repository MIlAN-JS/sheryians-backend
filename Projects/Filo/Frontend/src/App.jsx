import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Link , NavLink, Outlet } from 'react-router'
import axios from "axios"
import Login from './components/Login'
import CreateMeme from './components/CreateMeme'
import userContext from './context/userContext'
const App = () => {


  
  const [formData , setIsFormData] = useState({})
  



  // const [userData , setUserData] = useState({})

  const {setUserData , userData , getUser,  isRegistered , getMeme} = useContext(userContext)

  console.log(userData)

  function setFormData(formData){
    if(formData){
        setIsFormData(formData)
    }
    
  }

 
 

  



  useEffect(()=>{
    getUser()
    getMeme()
    
    
  },[])

  console.log(userData)

  


  return (
    <main className='bg-bg h-svh min-h-fit w-full'>

{/* // navbar */}
     
     <Navbar/>


     <section>
      {
        isRegistered ?
        <CreateMeme/> : <Login/>
        
        
      }
     </section>

    


    </main>  
  )
}

export default App