
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const registerController = async (req , res)=>{

    console.log(req.body)
    try {

        /*

        1. user data extract
        2. check if user already exist with same email or username
        3. Hash password and store userData in database
        4. create token and send it to user in cookie storage
        5. send response


        */


        const {userName , email , password , bio ,  imageUrl , followers , following } = req.body

        console.log(req.body)
        //checking
        const isUserExist = await userModel.findOne({
            $or : [
                {email}, 
                {userName}
            ]
        })  // $or helps to reduce the db call for checking user already exists or not 


        

        if (isUserExist){


            return res.status(400).json({
                    status : false, 
                    message : "user already exist " + (isUserExist.email === email ? "account with this email already exist" : "user with this username already exist ")
             })
       
       


        
         }



        // hashing password and storing it in database

        const hashPass =await bcrypt.hash(password , 10)

       const user = await userModel.create({

            userName : userName,
            email : email ,
            password : hashPass,
            bio : bio , 
            followers : followers, 
            following : following , 
            imageUrl : imageUrl

        })


        // creating and sending token to client 


       const token =  jwt.sign({
            //user data
            //unique
           id : user._id

        } , process.env.JWT_SECRET, {expiresIn : "1d"})

        res.cookie( "jwt_token" , token)


        // sending response 

        res.status(201).json({
            status : true , 
            message  : " user created success", 
            userData : {
              email :   user.email, 
              bio : user.bio, 
              followers : user.followers, 
              following : user.following, 
              userName : user.userName, 
              imageUrl : user.imageUrl
                
            }
        })


        
    } catch (error) {


        // if(error.code === 11000){ 
            

        //     if(error.keyPattern.email){ 
        //         return  res.status(400).json({
        //             message : "user with same email already exist"
        //          })
            
        //     }

        //     if(error.keyPattern.userName){
        //      return   res.status(400).json({
        //             message : "user with same userName already exist"
        //         })
        //     }



        // }

        console.log("cannot register user ", error);
        res.status(400).json({
            status : false,
             error
        })
        
    }
    
}

const loginController = async (req , res)=>{

    console.log(req.body)

    const {userName  , password , email } = req.body

    try {

        // check whether user exists with same userName or email 
        const user =await userModel.findOne({
            $or : [
                {email }, 
                {userName}
            ]
        })
        console.log(user)

         if(!user){
            return res.status(400).json({
                message : "user not found",
                status : false
            })
         }

         // check whether the password is correct or not 

         
         const isPassCorrect =await bcrypt.compare(password , user.password)
            if(!isPassCorrect){
                return res.status(400).json({
                    message : "invalid password",
                    status : false
                })
            }
        // create a new token  and store it in client side cookie storage 

        const token = jwt.sign( {
            id : user._id
        }, process.env.JWT_SECRET, {expiresIn : "1d"})

        res.cookie("jwt_token" , token)


        // send a proper response

        res.status(200).json({
            message : "user found",
           userData : {
            name : user.userName, 
           followers :  user.followers, 
            followings : user.followings,
            email : user.email, 
            bio : user.bio 

           }
        })

    
        
    } catch (error) {

        console.log("cannot login ", error)
        res.status(400).json({
            message : " cannot login",
            error : error
        })

        
    }
}



const getUserController = async(req , res)=>{
    try {
        // getting userId from cookie 
        const userId = req.user.id
        const user = await userModel.findById(userId)
        
        res.status(200).json({
            message : "user found",
            userData : {
             userName : user.userName,
            email : user.email ,
            
            bio : user.bio , 
            imageUrl : user.imageUrl
            }
        })
        
        console.log(req.user.id)
    } catch (error) {
        console.log("cannot get user", error)
        res.status(400).json({
            message : "cannot get user"
        })
        
    }
}








module.exports = {
    loginController , 
    registerController,
    getUserController
}