import React, { useEffect } from 'react'
import {io} from "socket.io-client"

const App = () => {
let socket; 

  useEffect(()=>{
     socket = io("http://localhost:3000")

    socket.on("connect",()=>{
      console.log("socket connected with socket server")

      

    })
       socket.on("reply", (data)=>{
        console.log( "data is " , data)
      })
    
  },[])

 async function sendMsgToServer(){
    await socket.emit("hello", "Yo server wassup from react(client)")

   
  }



  return (
    <div>

   
    <button onClick={sendMsgToServer}>Send msg</button>
     </div>
  )
}

export default App