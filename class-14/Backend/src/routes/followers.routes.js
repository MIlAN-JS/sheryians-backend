const express = require("express")
const { checkToken } = require("../middlewares/authMiddlewares")
const {followController, unfollowController} = require("../controllers/follow.controller")

const followerRouter = express.Router()


// /api/follow/
followerRouter.post("/follow/:followeeId", checkToken , followController )

followerRouter.delete("/unfollow/:followeeId", checkToken , unfollowController)



module.exports = followerRouter




