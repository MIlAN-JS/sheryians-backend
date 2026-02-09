const express = require("express")

const authRouter = express.Router()
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")




authRouter.post("/register" , async(req , res)=>{

    try {

        const {name , email , password} = req.body

        const isUserPresent =await userModel.findOne({email})
        if(isUserPresent){
            return res.status(400).json({
                message : "user already exist with this email"
            })
        }

        // database store

        const hash = crypto.createHash("md5").update(password).digest("hex") // converting string data to hash data 
        const user = await  userModel.create({
            name : name,
            email : email , 
            password : hash
        })

        console.log(  " user created succesfuly ")

        // token create 

        const token = jwt.sign({
            id : user._id
        } ,process.env.JWT_SECRET_KEY )




        // store token in cookie storage in client side

        res.cookie("jwt_token" , token)


        // send response 

        res.status(201).json({
            message : "user created success",
            user,
            status: true
        })


        
    } catch (error) {
        console.log("cannot register  user" , error)
        res.status(400).json({
            message : "cannot create account",
            status : false
        })

        
    }
} )

authRouter.post("/createMeme",async (req , res)=>{

    try {

        const {meme} = req.body

        const resp = noteModel.create({})

        
    } catch (error) {
        console.log("cannot create Meme")
    }


})

authRouter.get("/",async(req , res)=>{

    try {

        const user = await userModel.find()


        if(user.length > 0 ) {
            res.status(200).json({
            message : "user found ",
            user,
            status : true

        })
         }
         else{
            res.status(400).json({
                message : "user not found",
                status : false
            })
         }

        
        
    } catch (error) {
        
        console.log("cannot get user")
    }

})



module.exports = authRouter