const userModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// controller function  used to  register a user
const registerController = async (req, res) => {
  try {
    // extract data given from client side

    const { userName, email, password, gender, phoneNumber, uid, gameName } =
      req.body;

    // we have to check whether the user already exists with same uid , username , email

    const isUserExist = await userModel.findOne({
      $or: [{ userName }, { email }, { uid }],
    });

    if (isUserExist) {
      if (
        isUserExist.userName === userName &&
        isUserExist.email === email &&
        isUserExist.uid === uid
      ) {
        return res.status(400).json({
          message:
            "cannot create user with same data again please change data ",
        });
      }

      if (isUserExist.userName === userName) {
        return res.status(400).json({
          message:
            "Cannot create user because user already exists with same userName ... ",
        });
      } else if (isUserExist.email === email) {
        return res.status(400).json({
          message:
            "Cannot create user because user already exists with same email ... ",
        });
      } else if (isUserExist.uid === uid) {
        return res.status(400).json({
          message:
            "Cannot create user because user already exists with same uid ... ",
        });
      }
    }

    // we will hash the password using bcrypt

    const hashedPass = await bcrypt.hash(password, 10);

    //we will store the data in our database

    const user = await userModel.create({
      email: email,
      userName: userName,
      password: hashedPass,
      gender: gender,
      phoneNumber: phoneNumber,
      uid: uid,
      gameName: gameName,
    });

    // we will create one token using jwt(json web token)

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    // we will store this jwt token in our cookie storag e

    res.cookie("jwt_token", token);

    //we will send proper response to the client

    res.status(201).json({
      message: "user created successfully ",
      userData: {
        email: user.email,
        uid: user.uid,
        userName: user.userName,
        gender: user.$assertPopulatedgender,
        phoneNumber: user.phoneNumber,
        gameName: user.gameName,
      },
      status: true,
    });
  } catch (error) {
    console.log("cannot create user in registercontroller", error);
  }
};

  
//controller function used to login a user

const loginController = async(req , res)=>{


    const {uid , email , password} = req.body
    
    try {
        
    // check if user exists with uid or email 

    const isUserExist  =await userModel.findOne({
        $or : [
            {uid},
            {email}
        ]
    })


    if(!isUserExist) { 
        return res.status(400).json({
            message : "sorry user with this account doesnt exist ", 
            status : false
        })
    }



    // check if the given password is correct

    const isPassCorrect = await bcrypt.compare(password , isUserExist.password )

    if(!isPassCorrect){
        return res.status(400).json({
            message : "incorrect password ", 
            status : false
        })
    }


    // create a new token and store it in cookie

      const token = jwt.sign({
        id : isUserExist._id
      }, process.env.JWT_SECRET , {expiresIn : "1d"})

      res.cookie("jwt_token" , token)

    // send status.. 

    res.status(200).json({
        message : "login success", 
        status : true
    })
        
    } catch (error) {
        
    }







        



}




module.exports = {
  registerController,
  loginController
};
