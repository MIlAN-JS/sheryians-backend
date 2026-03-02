const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    email :{
        type : String, 
        required : [true , "email required"]

    }, 
    userName :{
        type : String, 
        required : [true , "username required"]

    }, 
    password : {
        type: String , 
        required: [true , "password required"]
    }
},{timestamps : true})


const userModel = mongoose.model("user", userSchema);


module.exports = userModel