const express = require('express')
const {createPostController , getMyAllPostsController} = require("../controllers/post.controllers")

const postRouter= express.Router()



postRouter.post("/create-post" , createPostController )

//  get post  
//  * get all  posts according to the owner  ( owner posts only )

postRouter.get("/myposts/", getMyAllPostsController)




// * get all posts 

module.exports = postRouter