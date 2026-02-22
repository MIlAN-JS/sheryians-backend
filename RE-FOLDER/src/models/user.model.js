const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
     userName : {
        type:String, 
        required : [true , "please provide username"], 
     }, 
     email : {
        type:String, 
        required : [true , "please provide email"], 
     }, 
     password : {
        type:String, 
        required : [true , "please provide email"], 
     }, 
     gender : {
        type : String

     },
     phoneNumber : {
        type : Number, 
        required  : [true , "please provide phoneNumber"]
     },
     uid : {
        type : Number, 
        required  : [true , "please provide gameUid"]
     }, 
     gameName: {
        type: String
     }, 
     imgLink : {
      type : String , 
      default : "https://ik.imagekit.io/nztqlr0yh/default-image.jpg?updatedAt=1771296156403"
     }
    
     
}, {timestamps : true})



const userModel = mongoose.model("user",userSchema)

module.exports = userModel