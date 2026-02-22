const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    caption : {
        type: String, 
        required: [true, "caption needed"], 
        default : "", 

    }, 
    imgLink : {

        type: String, 
        required: [true, "imglink required"], 
        default : "",

    }, 
    userId : {
        
        type : mongoose.Schema.Types.ObjectId, 
        ref : "user"

    }
    
}, {timestamps : true})







const postModel = mongoose.model("post" , postSchema)


module.exports = postModel