import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  const [notes , setNotes ] = useState([])

  async function fetchNotes(){

    try {

      const notes =await axios.get("http://localhost:3000/api/notes")
      
      setNotes(notes.data.notes)
      
    } catch (error) {
      console.log("cannot fetch notes from database " , error)
      
    }




  }

  // state changes = component reload or re-render = state changes = component reload or re-render ( it becomes an infinite loop so we call fetchNotes inside useEffect which only runs one time when component mounts)
  

useEffect(() => {
  
fetchNotes()
  
}, [])






  return (
    <div>

      {
        notes.map((note , index)=>(
          <div key={index}>
            <h1>{note.title}</h1>
            <p>{note.desc}</p>
          </div>
        ))
      }


    </div>
  )
}

export default App