const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : String,
    email: {
        type : String,
        unique : [true , "please enter another email address this email alreay has an account"]
    }, 
    password : String
})




const userModel = mongoose.model("UsEr" , userSchema);


module.exports = userModel;