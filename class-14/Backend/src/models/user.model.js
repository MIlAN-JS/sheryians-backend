const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userName : {
        type : String, 
        required : [true , "this field is mandatory "], 
        unique : [true , "user with this username already exists!!"]
    }, 
    email: {

        type : String, 
        required : [true , "email is required"],
        unique : [true , "email must be unique"]



    },
    password : {
        type : String, 
        required : [true , "password required"],

    },
    imageLink : {
        type : String, 
        default : "https://ik.imagekit.io/xyldx26rd/profile%20picture.jpg"
    },
     
     bio : {
        type : String, 
        default : ""
     }
}, {timestamps:true})


const userModel = mongoose.model("users" , userSchema)



module.exports = userModel; 