const jwt = require("jsonwebtoken")

const checkToken = async(req , res , next)=>{
    const token = req.cookies.jwt_token
    try {

        let decoded = jwt.verify(token , process.env.JWT_SECRET)
        req.user = decoded

        next()
        
    } catch (error) {
        console.log("errror while checking token", error)
        return res.status(401).json({
            message : "invalid user", 
            success : false
        })
        
    }
}



module.exports = {
    checkToken
}