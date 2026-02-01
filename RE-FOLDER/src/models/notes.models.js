// 1. format  --> schema
// 2. collection -- models

const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    title : String,
    desc :String
})


const noteModel = mongoose.model("note" , noteSchema)


module.exports = noteModel;