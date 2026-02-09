import axios from 'axios'
import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

const CreateMeme = () => {
    const [meme , setMeme] = useState("")


   const {getMeme , memes , userData} = useContext(userContext)


   console.log(userData , "inside creatememe")
    const createMeme= async (e)=>{
        e.preventDefault()

        try {

            const response = await  axios.post("http://localhost:3000/api/meme" , { meme : meme})
            console.log(response) 
            setMeme("")
            getMeme()
            
        } catch (error) {
            console.log("cannot create meme from frontend", error)
        }

    }

    

  return (
    
         <section className=' flex  flex-col items-center'>

          <div className="create-meme bg-neutral w-fit mx-20 rounded-lg mt-10">
            <form
            onSubmit={(e)=>{
                createMeme(e)

            }}
            className=' flex flex-col items-center p-3 gap-2'>
              <h1>Create memes</h1>

              <input
              value={meme}
              onChange={(e)=>{
                setMeme(e.target.value)
              }}
              type="text" placeholder='Type meme here' className='custom-input' />
              <button type='submit' className='bg-bg  py-1 rounded-lg w-full text-neutral text-lg'>Create</button>
            </form>
          </div>


          <div className="memes w-full flex flex-col items-center gap-4 mt-5">

            
        {
            memes.map(({meme})=>(
                 <div className="meme-card bg-neutral w-[40%] h-fit p-2 overflow-hidden  rounded-lg  ">
                <p className='text-bg '>{meme} </p>
      <small className=' text-whitey flex justify-end'>-{userData[0].name} </small>
            </div>
            ))
        }


          </div>

        </section>
  )
}

export default CreateMeme