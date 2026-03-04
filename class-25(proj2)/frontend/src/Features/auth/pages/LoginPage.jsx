import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/loginPage.scss"
import useAuth from '../hook/useAuth'
import { useNavigate } from 'react-router'
const LoginPage = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const {loginHandler , loading } = useAuth()
  const navigate = useNavigate()

  const handleLoginSubmit = async(e)=>{
    e.preventDefault()
      await loginHandler({email , password})
      navigate("/")
  }


  return (
    loading ? <h1>Loading ....</h1> : <section className='login-page'>

      <form onSubmit={handleLoginSubmit} >

        <FormGroup value = {email}  onChange = {setEmail} label={"Enter Email"} placeholder={"Email"} />

        <FormGroup value = {password}  onChange = {setPassword} label={"Enter Password"} placeholder={"Password"} />

        <button type='submit'>
          Submit
        </button>


      </form>



    </section>
  )
}

export default LoginPage