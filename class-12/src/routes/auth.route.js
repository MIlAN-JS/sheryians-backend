const express = require("express")
const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
// if we create apis outside app.js then we need express.Router()


const authRouter = express.Router()


authRouter.post("/signup", async (req , res)=>{

    const {name , password ,  email } = req.body

    const isUserExist =await userModel.findOne({email})

    if(isUserExist){
    return res.status(400).json({
        message : "User with this email already exist so please use another email"
    })
}

   try {

        const userData = await userModel.create({
            name , password , email
        })

        // token creation ( userData + jwtsecretcode(stamp {signature}))

        const token = jwt.sign({
           id:  userData._id,
         email : userData.email
        }, process.env.JWT_SECRET )
        






        // store token to cookie storage in client side (browser)


        res.cookie("jwt_token" , token)

        




        res.status(201).json({
            message : "user created success",
            token
        })


    
   } catch (error) {

    res.status(400).json({
        message : "cannot create account "
    })
    
   }



})




module.exports = authRouter