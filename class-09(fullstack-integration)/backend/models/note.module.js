const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title : String, 
    desc : String
})



const noteModel = mongoose.model("daY9note", noteSchema)

module.exports = noteModel