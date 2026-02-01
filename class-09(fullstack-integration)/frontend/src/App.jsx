import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {

   const [notes, setNotes] = useState([])

  useEffect(() => {

    const response = axios.get("http://localhost:3000/api/notes");
    response.then((data)=>{
       setNotes(data.data.response)
    })

      

   }, [])

   console.log(notes)
  


  return (
    <div>
{
  notes.map((note)=>{
    return <div>
      <h1>{note.title}</h1>
      <p>{note.desc}</p>
    </div>
  })
}

    </div>
  )
}

export default App