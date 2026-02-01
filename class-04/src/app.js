// to create server 
// to config server

const express = require("express")

const app = express()



const infoHolder = []

app.use(express.json())


app.get("/posts",(req,res)=>{
    res.send("hello user !! welcome from milan");
})

app.post("/posts",(req, res)=>{

    infoHolder.push(req.body)
    console.log(infoHolder)
})




module.exports = app