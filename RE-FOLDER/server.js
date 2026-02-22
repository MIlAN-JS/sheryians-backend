require("dotenv").config()  // load all the environment variables
const app = require("./src/app.js")
const connectToDB = require("./src/config/database.js")







connectToDB()

app.listen(3000 , ()=>{
    console.log("server is running at port 3000 lol !!")
})