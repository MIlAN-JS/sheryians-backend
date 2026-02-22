const express = require("express")

const {loginController , registerController, getUserController} = require("../controllers/authentication.controller")
const { checkToken } = require("../middlewares/authMiddlewares")
const authRouter = express.Router()




// Registration route or api 

authRouter.post("/register" , registerController )
authRouter.post("/login",loginController)
authRouter.get("/get-me", checkToken , getUserController)


module.exports = authRouter