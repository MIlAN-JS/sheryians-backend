const express = require("express")
const app = express()
const noteModel = require("./models/notes.model")
const cors = require("cors")
const path = require("path");

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))


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
       console.log("data sent to database", title , desc)
    
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

// app.patch("/api/notes/:id" , async(req , res)=>{

//     const newUpdatingData = req.body
//     const id = req.params
    
//     try {

//         const response = await noteModel.findByIdAndUpdate(id , newUpdatingData);
//         res.status(200).json({
//             message : "Note updated succesfully " , 
//             response
//         })
        
        
//     } catch (error) {
//         res.send("cannot update data" , error)
        
//     }
// })


app.put("/api/notes/:id", async(req , res)=>{
try {
    const {title , desc } = req.body
    const {id} = req.params
    const response =await noteModel.replaceOne({_id : id} , {title , desc})

    res.status(200).json({
        message : "note update success",
        response
    })
} catch (error) {

    res.send("cannot update issue from db server", error);
    
}
})

app.delete("/api/notes/:id", async (req, res)=>{
    try {
        const {id} = req.params

        const response = await noteModel.findByIdAndDelete(id)

        res.status(200).json({
            message: "delete success"
        })

    } catch (error) {
        res.send(error)
        console.log(error , "cannot delete from db")
        
    }
})


app.use("*name",(req , res)=>{
    res.sendFile(path.join(__dirname , "..", "/public/index.html"))
})










module.exports = app