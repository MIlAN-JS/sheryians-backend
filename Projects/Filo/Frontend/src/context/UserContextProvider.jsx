import React, { useState } from 'react'
import userContext from './userContext'
import axios from 'axios';

const UserContextProvider = ({children}) => {
    const [userData , setUserData] = useState([])
    const [isRegistered , setIsRegistered] = useState(false)
     const [memes , setMemes] = useState([])


   
     async function getUser(){
    
        try {
          
          const user = await axios.get("http://localhost:3000");
          setUserData(user.data.user)
          
          setIsRegistered(user.data.status)
        } catch (error) {
          console.log("cannot get user" , error)
        }
      }

     const getMeme = async ()=>{
                try {
                    const resMeme = await axios.get("http://localhost:3000/api/meme")
                    setMemes(resMeme.data.memes)
                    console.log(resMeme.data.memes)
                } catch (error) {
                    
                    console.log(error , "cannot get memes")
                    
                }
        }


  return (
    <userContext.Provider value = {{
        userData ,  getUser , isRegistered , getMeme , memes
    }} >

        {children}


    </userContext.Provider>
  )
}

export default UserContextProvider;