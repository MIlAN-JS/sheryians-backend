import React from 'react'

const Login = () => {
  return (
    <div className='w-fit mx-auto mt-20 bg-neutral p-4 rounded-lg'>

    <h1 className='text-2xl text-bg font-semibold text-center'>Sign Up</h1>
    <p className='text-lg text-bg text-center'>Let's Create and Share Fun </p>

        <form className='flex flex-col ' >

           <div className='flex flex-col gap-2 mt-3'>
             <input type="text" placeholder=' Name' className='custom-input' />
            <input type="text" placeholder=' Email' className='custom-input' />
            <input type="password" placeholder='Password' className='custom-input' />

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