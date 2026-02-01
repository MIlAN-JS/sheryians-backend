const express = require("express")
const cors = require("cors")
const app = express()
const noteModel = require("../models/note.module.js")

app.use(express.json())
app.use(cors())

app.post("/api/notes",async(req , res)=>{
    
    try {
        const {title , desc} = req.body
        const respnse = await noteModel.create({title , desc})
      
        res.status(201).json({
            "message" : "note created successfully",
            respnse
        })
        
    } catch (error) {
        console.log(error)
    }
})



app.get("/api/notes",async (req , res)=>{

    try {

        const response = await noteModel.find()

        res.status(200).json({
            message : "data found",
            response
        })
        
    } catch (error) {
        
        console.log(error)
    }




})



app.delete("/api/notes/:id",async(req , res)=>{

    try {
        const id  = req.params.id
        const response = await noteModel.findByIdAndDelete(id)
        res.status(200).json({
            "message" : "deleted success"
        })
        
    } catch (error) {
        console.log(error)

        
        
    }

})


app.patch("/api/notes/:id",async(req ,res)=>{

    try {

        const {desc} = req.body
        const id = req.params.id
        const response = await noteModel.findByIdAndUpdate(id , {
            desc
        })
        
    } catch (error) {
        
    }
    
})






module.exports = app