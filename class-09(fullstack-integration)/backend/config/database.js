const mongoose = require("mongoose")


async function connectToDb(){

    try {

        const res = await mongoose.connect(process.env.MONGO_URI)

        console.log("successfully connected to database")
        
    } catch (error) {

        console.log("err while connecting to database" , error)

        
    }





}


module.exports = connectToDb