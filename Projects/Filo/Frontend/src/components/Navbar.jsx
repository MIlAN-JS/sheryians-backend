import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Navbar = () => {


  const {userData , isRegistered} = useContext(userContext)


  return (
    <nav className='p-2 flex items-center justify-between px-8 border-b-2 border-neutral '>

         <div className="logo ">
              <h1 className='font-ortho text-4xl text-whitey'>FILO</h1>
         </div>


      
          
        



      {
        isRegistered ? 
        
        
         <div className='nav-items flex items-center gap-3 '>

            {

              userData.map((user)=>{

                return 

                <div className='flex items-center gap-3'>

                  <small className='text-xl font-semibold text-neutral'>{user.name}</small>
            
            <div className="img bg-red-800 h-12 w-12 rounded-full overflow-hidden">

              <img src={`https://ui-avatars.com/api/?name=${user.name}`} alt="" className='w-full h-full object-contain ' />

              
            </div>
                </div>

              })



            }


         </div>
         
         : 
         <a href="login"  className='text-bg px-2 py-1 bg-neutral rounded-lg font-semibold'>
            SIGN UP 
          </a>
      }

     </nav>
  )
}

export default Navbar