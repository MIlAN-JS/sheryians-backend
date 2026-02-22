import React, { useState } from 'react'
import "../styles/login.scss"
import axios  from 'axios'
import useAuth from '../hooks/useAuth'
import {useNavigate} from "react-router"

const Login = () => {

    // two way binding
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    
    const {loading , user , handleLogin} = useAuth()

    const navigate = useNavigate()

    // handelling submit 

    const handleSubmit = async(e)=>{

        e.preventDefault()

         await handleLogin(email ,password)
         navigate('/')
        
        

    }
    
    console.log(user)


   
   

  return (


  loading? 

    <h1>Loading......</h1>:<div className='login-container'>
        <form onSubmit={(e)=>{
          handleSubmit(e)
        }} >


            <input
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            type="text" name="email" id="" placeholder='enter email' />
            <input
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            value={password}
            type="text" name="password" placeholder='enter password' id="" />
            <button type='submit'>Login</button>
            




        </form>
    </div>   
   


  )
}

export default Login