const mongoose = require("mongoose")


const connectToDB = async ()=>{
    try {

        const res = await mongoose.connect(process.env.MONGO_URI)

        console.log("connected to database !! yay")
        
    } catch (error) {

        console.log("cannot connect with database sorry", error)
        
    }
}



module.exports = connectToDB