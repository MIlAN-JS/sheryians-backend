const postModel = require("../models/post.model.js");
const ImageKit = require("imagekit");
const jwt = require("jsonwebtoken");


// to create post 
const createPostController = async (req, res) => {
    console.log("it hit")
  try {
    // data extract
    const { caption } = req.body;
    const file = req.file;

    //storing files to imageKit ..

    /*
              install imagekit 
              get public and private keys and url endpoint
              
              * import imagekit 
              * Create imagekit instance 
              * taking req.file.buffer
              * call imagekit.upload()
              * get response 
              * store that response in db

          */

    //   creating instance
    const imagekit = new ImageKit({
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL,
    });

    if (!file) {
      return res.status(400).json({
        message: "file required",
        success: false,
      });
    }

    // upload to imagekit

    const response = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });

    // get user id from token

    //getting token
    const token = req.cookies.jwt_token;

    if(!token){
        return res.status(401).json({
            message : "token not provided", 
            success: false 
        })
    }
   
    let decodedToken = null ;

    try {
         // checking if token is valid or not and decoding it
          decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
    } catch (error) {

      return  res.status(401).json({
            message : "unauthorized access dumbass",
            success : false
        })
        
    }
   

    
    // console.log(decodedToken)

    // creating and storing post in db
    const post = await postModel.create({
      caption: caption,
      imgLink: response.url,
      userId: decodedToken.id,
    });

    res.status(201).json({
      message: "post successfully created",
      success: true,
      post,
    });
  } catch (error) {
    console.log("cannot create post ", error);
  }
};

// getting all (single user post) 

const getMyAllPostsController = async (req , res)=>{
    try {

        // check token 

         const token = req.cookies.jwt_token
         let decoded = null; 

         try {
            decoded = jwt.verify(token , process.env.JWT_SECRET)

         } catch (error) {

            return res.status(401).json({
                message : "Invalid Token ", 
                success : false

            })
            
         }

         const userId = decoded.id

         console.log(userId)

        // get data acc to user id

        const myAllPosts = await  postModel.find({userId})
        console.log(myAllPosts)


        // send response

        res.status(200).json({
            message : "posts found success", 
            myAllPosts
        })


       
        
    } catch (error) {
        console.log("eroor while getting myAllPosts ", error)

        res.status(400).json({
            message : "cannot get post (mypost)"
        })
        
    }
}



module.exports = {
  createPostController,
  getMyAllPostsController
};
