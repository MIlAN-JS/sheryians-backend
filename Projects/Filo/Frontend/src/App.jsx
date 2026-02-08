import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Link , NavLink, Outlet } from 'react-router'
const App = () => {


  const [isRegistered , setIsRegistered] = useState(true)
  const [formData , setIsFormData] = useState({})
  


  function setFormData(formData){
    if(formData){
        setIsFormData(formData)
    }
    
  }

  return (
    <main className='bg-bg h-svh min-h-fit w-full'>

{/* // navbar */}
     <nav className='p-2 flex items-center justify-between px-8 border-b-2 border-neutral '>

         <div className="logo ">
              <h1 className='font-ortho text-4xl text-whitey'>FILO</h1>
         </div>


      
          
        



      {
        isRegistered ?  
         <div className='nav-items flex items-center gap-3 '>

            <small className='text-xl font-semibold text-neutral'>USERNAME</small>
            <div className="img bg-red-800 h-12 w-12 rounded-full overflow-hidden">
              <img src="#" alt="" className='w-full h-full object-contain ' />
            </div>


         </div> : <Link to="login"  className='text-bg px-2 py-1 bg-neutral rounded-lg font-semibold'>
            SIGN UP 
          </Link>
      }

     </nav>


     <section>
      {
        isRegistered? <section className=' flex  flex-col items-center'>

          <div className="create-meme bg-neutral w-fit mx-20 rounded-lg mt-10">
            <form  className=' flex flex-col items-center p-3 gap-2'>
              <h1>Create memes</h1>

              <input type="text" placeholder='Type meme here' className='custom-input' />
              <button className='bg-bg  py-1 rounded-lg w-full text-neutral text-lg'>Create</button>
            </form>
          </div>
          <div className="memes w-full flex flex-col items-center gap-4 mt-5">

            
            <div className="meme-card bg-neutral w-[40%] h-fit p-2 overflow-hidden  rounded-lg  ">
                <p className='text-bg '> Why can't you trust an atom?
Because they make up literally everything.</p>
 <small className=' text-whitey flex justify-end'>- Mohit chaudary</small>
            </div>


          </div>

        </section> :
        
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
      }
     </section>

    


    </main>  
  )
}

export default App