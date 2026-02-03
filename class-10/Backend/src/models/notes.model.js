
const mongoose  = require("mongoose")



//note schema 

const noteSchema = new mongoose.Schema({
    title : String, 
    desc : String
})



const noteModel = mongoose.model("notE" , noteSchema)

module.exports = noteModel

