const express = require("express")
const app = express()
const noteModel = require("./models/notes.model")
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.post("/api/notes",async (req , res)=>{
    const {title , desc} = req.body

try {
    
     const noteData = await noteModel.create({
        title , desc
      })

       res.status(201).json({
        "message" : "success",
        noteData
       })
    
} catch (error) {
    console.log("cannot create note" , error)
    
}

     

      



})


app.get("/api/notes" , async(req , res)=>{
try {
         const notes = await  noteModel.find()

     res.status(200).json({
        message : "note found" , 
        notes
     })
    
} catch (error) {
    console.log("cannot fetch notes from database")
    
}
})











module.exports = app