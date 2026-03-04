const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blackList.model");
const redis = require("../config/cache")
const checkUser= async(req , res ,next)=>{

    try {
        
    const token = req.cookies.token


    // checking if token is blacklisted

    // const isTokenBlacklisted = await blacklistModel.findOne({token})
    const isTokenBlacklisted = await redis.get(token)

    const decoded = await jwt.verify(token , process.env.JWT_SECRET);
     
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