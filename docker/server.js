import express from "express"



const app = express()

app.get("/", (req , res)=>{
    res.send("hello world")
})


app.get("/health", (req , res)=>{
    res.send("hello Health")
})

app.get("/milan", (req , res)=>{    
    res.send("hello milan")
})


app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})