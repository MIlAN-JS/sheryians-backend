import React, { useState } from 'react'
import "../styles/login.scss"
import axios from "axios"
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router'
const Register = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate()


const {user, loading , handleRegister} = useAuth()

    // submithandler

    const submitHandler = async(e)=>{

        e.preventDefault()

        await handleRegister( email ,password ,username )
        navigate("/")

        
    }

console.log(user)



   





  return (
      loading ? 
      <h1>loading...</h1>
      :
      <div >
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} >

            <input type="text" 
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            value={email}
            name="email" placeholder='Enter email' />
            <input
              onChange={(e)=>{
                setUsername(e.target.value)
            }}
            value={username}
            type="text" name="userName" placeholder='Enter username' />

            <input
              onChange={(e)=>{
                setPassword(e.target.value)
            }}
            value={password}
            type="text" name="password" placeholder='password' />
            <button type='submit'>Register</button>



          </form>
      </div>
  )
}

export default Register