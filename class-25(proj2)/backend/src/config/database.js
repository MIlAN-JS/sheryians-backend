const mongoose = require("mongoose")


const connectToDB = async()=>{

    try {

        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connection success");
        
    } catch (error) {

        console.log("cannot connect to database")
        
    }
}

module.exports = connectToDB