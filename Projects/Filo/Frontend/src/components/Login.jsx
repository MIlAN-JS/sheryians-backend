import axios from 'axios'
import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

const Login = () => {

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    const {getUser} = useContext(userContext)
   
  async function registerUser(e){

  

      e.preventDefault()
  
      try {
  
        const response = await axios.post("http://localhost:3000/api/auth/register" , {name , email , password})
        getUser()
        setName("")
        setEmail("")
        setPassword("")
      
      
        
      } catch (error) {
        console.log("cannot register user app.jsx " , error)
        
      }
  
  
  
    }

  return (

      <div className='w-fit mx-auto mt-20 bg-neutral p-4 rounded-lg'>

    <h1 className='text-2xl text-bg font-semibold text-center'>Sign Up</h1>
    <p className='text-lg text-bg text-center'>Let's Create and Share Fun </p>

        <form className='flex flex-col ' onSubmit={(e)=>{
            registerUser(e)
        }} >

           <div className='flex flex-col gap-2 mt-3'>
             <input
             value={name}
             onChange={(e)=>{
            setName(e.target.value)
             }} 
             type="text" placeholder=' Name' className='custom-input' />
            <input
             value={email}
             onChange={(e)=>{
            setEmail(e.target.value)
             }}
            type="text" placeholder=' Email' className='custom-input' />
            <input
             value={password}
             onChange={(e)=>{
            setPassword(e.target.value)
             }}
            type="password" placeholder='Password' className='custom-input' />

           </div>
           <div className='flex flex-col gap-2 mt-4'>
             <button className='bg-bg w-full py-1 rounded-lg text-neutral text-lg '>Sign Up</button>
             <p className='text-sm'>Already have an account? <span className='text-bg'>Log in </span> </p>
           </div>


        </form>

    

    </div>

  )
}

export default Login