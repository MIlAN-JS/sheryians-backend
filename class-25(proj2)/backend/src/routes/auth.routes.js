const express = require('express')
const { registerController, loginController, getUserController, logoutUserController } = require('../controllers/auth.controllers')
const { checkUser } = require('../middlewares/auth.middleware')


const authRouter = express.Router()


authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.post("/logout", logoutUserController)
authRouter.get("/get-user",checkUser, getUserController)


module.exports = authRouter
