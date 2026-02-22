const express = require("express")
const postRouter = express.Router()

const {createPostController , getAllPostsController, getPersonalPost} = require("../controllers/post.controller")
const { checkToken } = require("../middlewares/authMiddlewares")




postRouter.post("/create",checkToken , createPostController )
postRouter.get("/all-post" ,checkToken , getAllPostsController )
postRouter.get("/personal-posts",checkToken , getPersonalPost)




module.exports = postRouter;