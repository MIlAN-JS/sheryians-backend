// Rest Api rule 
// --> either http or https protocol is used 
// --> 

// get method  --> to get resource
// post method  --> to send resource and create a new resourde ---> creating account , creating post , creation something by user (new resource)
// put method --> to update the whole resource and create a new one
// patch mehtod --> to update just a part of resource
// delete method --> to delete a resource


// ############### Mini task ########################

// 1 creating notes in backend
// 2 seeing the notes 
// 3 updating the notes
// 4 deleting the notess

let counter = 0;
const express = require("express")

const app = express() // creating  a server

const notesContainer = []
app.use(express.json())

app.post("/notes",(req,res)=>{
   counter++
    notesContainer.push(req.body)
    res.send(`Notes uploaded :  ${counter}`) 


})

app.get("/notes",(req,res)=>{
    res.send(notesContainer)
})




app.listen(3000 ,()=>{
    console.log("server is running on: http://localhost:3000")
})

