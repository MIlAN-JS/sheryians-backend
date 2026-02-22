const mongoose = require("mongoose")



const followSchema = new mongoose.Schema({
    follower : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "user", 
        required : [true , "must required follower"]
    } , 
    followe : {
        type:mongoose.Schema.Types.ObjectId, 
        ref : "user", 
        required : [true, 'must required followee']
    },
    status: {
        type :String,
        default : "pending", 
        enum : {
            values : ["pending", "accepted", "rejected"],
            message : "inavlid value"
        }

    }

}, {timestamps : true})

// making sure 2  users cannot follow each other more than once  and creating a comound index using 2 field follower and followe 

followSchema.index({follower : 1 , followe: 1} , {unique : true})


const followModel = mongoose.model("follow", followSchema)


module.exports = followModel

