import cors from "cors"
import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
//middlewares
app.use(cors())

const httpServer = http.createServer(app) // our express server wrapped onto single variable

const io = new Server(httpServer  , {
    cors : {
        origin : "http://localhost:5173", 
        withCredentials : true
    }
})

io.on("connection", (socket)=>{

    // receive from frontend
    console.log("user", socket.id)

    //message received
    socket.on("hello" , (data)=>{
        console.log(data)
    } )

    //message sent 
    socket.emit("reply", "hello from server milan")

    

})

httpServer.listen(3000 ,()=>{
    console.log("server is running ")
})

