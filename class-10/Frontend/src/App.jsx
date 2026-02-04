import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import Card from './components/Card'
import Window from './components/window/Window'
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const App = () => {

  const [notes , setNotes ] = useState([])
  const [title , setTitle ] = useState("")
  const [desc , setDesc ] = useState("");

  const [buttonMode , setButtonMode] = useState("Create")
const [editable , setEditable] = useState(false)
const inputRef = useRef(null)
const [updateId , setUpdateId ] = useState(null)


 



  async function fetchNotes(){

    try {

      const notes =await axios.get("http://localhost:3000/api/notes")
      setNotes(notes.data.notes)
      
    } catch (error) {
      console.log("cannot fetch notes from database " , error)
      
    }


  }

  async function updateNote( e,  title , desc , id){
  
    // try {

    //   const response  =await axios.patch(`http://localhost:3000/api/notes/${id}`, {title : title  , desc : desc});
      
    //   console.log(response)

    //   fetchNotes()
      



      
    // } catch (error) {
      
    //   console.log("cannot update data")
    // }
    e.preventDefault()
  setTitle("")
  setDesc("")
  setButtonMode("Create")
    inputRef.current.blur()
     inputRef.current.style.border = "none"
  


     try {

      const response  = await axios.put(`http://localhost:3000/api/notes/${id}`,
       {
          title, desc
     })

     console.log(response)

     fetchNotes()
      
     } catch (error) {
      console.log("cannot update notes")
     }




 


  }

  async function createNote(e, title , desc){
  e.preventDefault()
    try {

      const response = await axios.post("http://localhost:3000/api/notes", {title , desc});
      console.log("response");

      fetchNotes()
    } catch (error) {
      
      console.log(error)
    }
  
    console.log(title , desc)
    setTitle('')
    setDesc("")
  }

  async function deleteNote(_id){
       try {
        const response = await axios.delete(`http://localhost:3000/api/notes/${_id}`)
        console.log(response)
        fetchNotes()
       } catch (error) {
        
        console.log("cannot delete ")
       }

      
      console.log("delete called")
  }

  

  // state changes = component reload or re-render = state changes = component reload or re-render ( it becomes an infinite loop so we call fetchNotes inside useEffect which only runs one time when component mounts)
  

useEffect(() => {
  
fetchNotes()
  
}, [])






  return (

    <main className='h-svh w-full bg-[#1E0C05] relative'>


     <div
     className='h-30 w-[80%] md:w-[60%] lg:w-[50%] bg-amber-100   absolute bottom-4 left-[50%] translate-x-[-50%] rounded-xl
     flex items-center p-1'
     >



   <form  
   onSubmit={(e)=>{
     if(buttonMode === "Create"){
        createNote(e , title , desc)
     }else  {
        updateNote(e, title , desc , updateId )
     }
   }}
   className='flex gap-3 w-full bg-black justify-between items-center h-full p-2 rounded-xl '>

    <div className='flex flex-col gap-3 min-w-[80%] '>
        <input
        ref={inputRef}
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        type="text" placeholder='Enter Hero Name 🦸🏻‍♂️' 
        className='p-2 text-xl rounded-lg outline-none focus:border-[#E8602E] bg-[#38160B] text-white ' 
    />
    
    <input
    value={desc}
     onChange={(e)=>{
          setDesc(e.target.value)
        }}
    type="text" placeholder='Enter Hero skill 🕸'
    className='p-2 text-xl rounded-lg outline-none focus:border-[#E8602E] bg-[#38160B] text-[#FFFFFF] ' 
    />
    </div>

    <button className='bg-[#B74A22] text-white border-solid border-2 border-gray-800  text-xl rounded-xl px-4 py-2'
    type='submit'
    >
        {buttonMode}
    </button>
    </form>








    </div>
     
     
     <Window height={70} width={230} x={550} y={70} >
          
          {
            
            notes.map((note , idx)=>(
                <div key={idx} className='h-full w-full bg-black text-white f flex items-center gap-4 justify-center overflow-scroll no-scrollbar p-3'>

                 

           <div className='flex flex-col items-center justify-center h-full'>
             <h1 className='text-2xl uppercase text-center'>{note.title}</h1>
            <p  className='text-lg capitalize text-center'> {note.desc}</p>
           </div>

           <div className="btn flex  gap-2 justify-center items-center cursor-pointer">
              <button
              onClick={()=>{
                deleteNote(note._id)
              }}
              className='text-xl'><FaRegTrashAlt /></button>
              <button

              onClick={()=>{
                  inputRef.current.focus()
          inputRef.current.style.border = "2px solid green"
          setButtonMode("Update")
            setTitle(note.title)
              setDesc(note.desc)
              setUpdateId(note._id)
              }}
              className='text-2xl'><CiEdit /></button>
           </div>


        </div>
            ))
          }


      </Window>




      


     


     




    </main>


  )
}

export default App