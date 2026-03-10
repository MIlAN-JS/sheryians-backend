
const registerController = (req , res, next)=>{

   try {

      throw new Error("cannot register user")
      
   } catch (error) {

      next(error)
      
   }

}

module.exports = registerController