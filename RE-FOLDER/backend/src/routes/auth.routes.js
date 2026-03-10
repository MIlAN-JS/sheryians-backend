const express = require("express");
const registerController = require("../controllers/auth.controllers");
const registerValidation = require("../validation/auth.validator")
const authRouter = express.Router()


authRouter.post("/register",registerValidation,  registerController);

module.exports = authRouter 

