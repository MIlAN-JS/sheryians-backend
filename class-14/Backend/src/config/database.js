const mongoose = require("mongoose")



async function connectToDB(){

    try {

        const resp= mongoose.connect(process.env.MONGO_URI)

        console.log("connected to database !!");
        
    } catch (error) {
        console.log("cannot connect to database !!")
        
    }

}


module.exports = connectToDB