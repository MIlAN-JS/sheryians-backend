const mongoose = require("mongoose")






async function connectToDB(){

    try {

        const response =await mongoose.connect(process.env.MONGO_URI)
         console.log("Database connection success !!")
        
    } catch (error) {

        console.log("cannot connect to DB < database.js")
        
    }
}


module.exports = connectToDB