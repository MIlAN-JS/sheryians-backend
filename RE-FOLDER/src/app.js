const express = require("express")
const app = express()
const noteModel = require("./models/notes.models.js")

app.use(express.json())

app.post("/notes" ,async  (req , res)=>{
        
        const {title , desc} = req.body

        const noteResponse = await noteModel.create({
            title , desc
        })// receiving acknowledgement

        res.status(201).json({
            message : "created succesful",
            noteResponse
        })
      

})

// get fetc


module.exports = app