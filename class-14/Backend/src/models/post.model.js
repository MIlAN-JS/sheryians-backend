const mongoose = require("mongoose")




const postSchema = new mongoose.Schema({
    caption: {
        type: String, 
        required: [true , "caption  required"],
        default : ""

    }, 
    imgLink : {
        type:String, 
        required: [true , "img_link required"],
        default : ""
    },
    userId : {

        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
        
    }

})


const postModel = mongoose.model("post" , postSchema)

module.exports = postModel