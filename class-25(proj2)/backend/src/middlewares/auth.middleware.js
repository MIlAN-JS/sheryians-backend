const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blackList.model");

const checkUser= async(req , res ,next)=>{


    try {
        
    const token = req.cookies.token



    // checking if token is blacklisted

    const isTokenBlacklisted = await blacklistModel.findOne({token})
    if(isTokenBlacklisted){
        return res.status(401).json({
            message : "unauthorized user"
        })
    }

    //verify token




    const decoded =  jwt.verify(token , process.env.JWT_SECRET);

    req.user = decoded

    next()

    
    } catch (error) {
        return res.status(400).json({
            message : "invalid token"
        })
    }

}


module.exports =  {
    checkUser
}