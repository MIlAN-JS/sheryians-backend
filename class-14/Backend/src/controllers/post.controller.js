
const ImageKit = require("imagekit")
const postModel = require("../models/post.model")
const jwt = require("jsonwebtoken")


async function sendFileToImageKit(file){

    const imageKitInstance = new ImageKit({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
        urlEndpoint : process.env.IMAGEKIT_ENDPOINT
    })


    try {

      const response = await imageKitInstance.upload({
        file : file.buffer,
        fileName : file.originalname
        
      })
        
      return response
    } catch (error) {

        console.log("cannot send image to imagekit", error)
        return false; 
        
    }

    




}



const createPostController = async (req ,res)=>{

   try {
     
console.log(req.body)

    // extracting data 
    const { caption } = req.body
    console.log("caption", caption)
    const document = req.file


    // storing data in imgaekit 

   const fileResponse =await sendFileToImageKit(document) 

   console.log(fileResponse)

   if(!fileResponse) {
    return res.status(400).json({
        message : "cannot upload image in imagekit try again !!", 
        success : false
    })
   }

   // extract id from token 

  const user = req.user.id


    const post = await postModel.create({
        caption : caption, 
        imgLink : fileResponse.url, 
        userId : user
    })



     // sending response 
     res.status(201).json({
        message : "post created successfully ", 
        success : true 
     })

     



    
   } catch (error) {

    console.log("error in creating post",error)
    
   }




    
}


const getAllPostsController = async(req , res)=>{


    try {

        const posts = await postModel.find()

        res.status(200).json({
            message : "post found",
            posts : posts, 
            success : true
        })

        


        



        
        
    } catch (error) {

        console.log("cannot get posts " , error)
        
    }


}

const getPersonalPost = async(req , res)=>{
    try {

      
       
        const user = req.user.id
        
       
        const personalPosts = await postModel.find({userId : user})
console.log(personalPosts)

        res.status(200).json({
            success : true, 
            posts: personalPosts
        })
        
    } catch (error) {

        res.status(400).json({
            message : "sorry cannot send post", 
            success : false
        })
        
    }
}


module.exports = {
    createPostController, 
    getAllPostsController,
    getPersonalPost
}