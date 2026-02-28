const express = require("express")
const { checkToken } = require("../middlewares/authMiddlewares")
const { likePostController, unlikePostController } = require("../controllers/like.controller")


const likeRouter = express.Router()




likeRouter.post("/like-post",checkToken , likePostController)
likeRouter.post("/unlike-post",checkToken, unlikePostController)


module.exports = likeRouter  