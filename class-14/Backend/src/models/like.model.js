// relational collection (edge colection)

const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "posts",
        required : [true , "please provide post id "]
    }, 
    user : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "users"
    }
},{timestamps:true})



likeSchema.index({post: 1  , user:1  }, {unique : true})


const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel






