

// how to handle errors properly 
// express default error handellling sends the response in the format of html so we should modify it and send error in the form of json format with proper status code



const errorHandler = (err , req , res , next)=>{

        const response = {
            message : err.message
        }
        const statusCode = err.statusCode || 500

        res.status(statusCode).json({
            response
        })

        next()


}

module.exports = errorHandler 