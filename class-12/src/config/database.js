const mongoose = require("mongoose")



async function connectToDB(){

    try {

        const connectionResponse =  await mongoose.connect(process.env.MONGO_URI)

        console.log("server is connected with database");


        
    } catch (error) {

        console.log(error , "cannot connect with database")
        
    }

}



module.exports = connectToDB;