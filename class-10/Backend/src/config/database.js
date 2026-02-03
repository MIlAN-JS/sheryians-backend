const mongoose = require("mongoose")



async function connectDb(){
    try {
        const connectionResponse = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected success !!")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports= connectDb;