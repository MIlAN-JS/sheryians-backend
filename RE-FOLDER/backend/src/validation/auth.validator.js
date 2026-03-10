const {body , validationResult} = require("express-validator")

const validate = (req , res ,next)=>{

    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next()
    }

    res.status(400).json({
        errors : errors.array()
    })


}



const registerValidation = [
    body("userName").isString().withMessage("userName should be string"), 
    validate
]



module.exports = registerValidation



