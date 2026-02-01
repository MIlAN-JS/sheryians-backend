// creating server 
//writing routes or getREquest routes
//running server
//deploying the server

const express = require("express");

const app = express() // server created

app.get("/", (req , res)=>{
    res.send("hello world i am in root ")
})

app.get ("/milan",(req , res )=>{   
    res.send("this is milan tutos")
})

app.listen(3000) // server started