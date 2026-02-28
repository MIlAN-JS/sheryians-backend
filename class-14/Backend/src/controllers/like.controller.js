const likeModel = require("../models/like.model")
const postModel = require("../models/post.model")



const likePostController = async(req , res)=>{
    try {
        
        const {postId} = req.body
        const user = req.user.id

        // checking if post exists or not

        const post = await postModel.findById(postId)
        
        if(!post){
            return res.status(400).json({
                message : "post not found",
                success : false
            })
        }

        const likedPost = await likeModel.create({
            post : postId,
            user : user
        })

        res.status(201).json({
            message : "Post liked",
            success :  true
        })



    } catch (error) {

        throw error
        console.log("cannot like post", error)
        res.status(400).json({
            message : "cannot like post", 
            success : false
        })

        
    }
}


const unlikePostController = async(req , res)=>{
    try {

        const user = req.user.id
        const {postId} = req.body

        const isLiked = await likeModel.find({postId , user});
        if(!isLiked){
            return res.status(400).json({
                message : "post isnt liked",
                success : false

            })
        }

        // deleting the post

        const unlikePost = await likeModel.findOneAndDelete({post : postId , user})

        
        res.status(201).json({
            message : "Post unliked",
            success :  true
        })

        
        
    } catch (error) {
        throw error
        console.log("cannot unlike post", error)
        res.status(400).json({
            message : "cannot unlike post", 
            success : false
        })
        
    }
}


module.exports = {
    likePostController,
    unlikePostController
}