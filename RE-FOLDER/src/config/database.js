
const mongoose = require("mongoose");
const envData = require("../conf/conf")

const connectToDatabase = async()=>{
    try {

        const dbInfo = await mongoose.connect(envData.mongoUri)
        console.log("server is connected with cluster and cluster is connected with our cluster presented in seoul haha !!")
      
    } catch (error) {

        console.log(error)
        
    }
}


module.exports = connectToDatabase