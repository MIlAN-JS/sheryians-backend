const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const registerController = async(req , res)=>{
    try {
console.log(req.body)
        const {email , userName , password} = req.body

        // checking if user exists

        const userExistence = await userModel.findOne({
            $or : [
                {email},
                {password}
            ]
        })

        if(userExistence){
            return res.status(400).json({
                message : "user with same email or password already exists "
            })
        }

        // hash password if user is new 

        const hashed = await bcrypt.hash(password , 10)



        // store user in db

        const user = await userModel.create({
            email , userName , password : hashed
        })

        
        // create token and store it in user cookie

        const token = jwt.sign({
            id : user._id, 
        }, process.env.JWT_SECRET , {
            expiresIn : "3d"
        })

        res.cookie("token" , token)


        // send response to frontend

        res.status(201).json({
            message : "user Created success", 
            user : {
               email : user.email, 
               userName : user.userName
            }

        })
        

    } catch (error) {

        console.log("cannot create user", error)

        res.status(400).json({
            message : "cannot create user",
        })
        
    }
}


const loginController = async(req , res)=>{
    try {
        console.log(req.body)

        const {userName , email , password} = req.body

        const user = await userModel.findOne({
            $or : [
                {email},
                {userName}
            ]
        })

       

        if(!user){

            return res.status(400).json({
                message : "Invalid credentials"
            })
        }

        console.log(user)

        const decoded = await bcrypt.compare(password , user.password)

        if(!decoded){
            
            return res.status(400).json({
                message : "Invalid credentials pass"
            })
        }

        
        // create token and store it in user cookie

        const token = jwt.sign({
            id : user._id, 
        }, process.env.JWT_SECRET , {
            expiresIn : "3d"
        })

        res.cookie("token" , token)


        
        res.status(201).json({
            message : "user login success", 
            user : {
               email : user.email, 
               userName : user.userName
            }

        })

        
        
    } catch (error) {
         console.log(error , "cannot login")
        return res.status(400).json({
            message : "cannot login user"
        })
       
        
    }
}


module.exports = {
    registerController , 
    loginController
}