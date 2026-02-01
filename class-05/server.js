const mongoose = require("mongoose")

const app  = require("./src/app.js")

function connectToDb(){
    mongoose.connect(`mongodb+srv://milan-00:musYBAKF2rNtGiCH@cluster0.jfxoyeq.mongodb.net/day-6`) // uri is needed of database 
    .then((data)=>{
        console.log("server connected with database successfully");
    })
    .catch(()=>{
        console.log("cannot connect server with database ")
    })
}

connectToDb()




app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})




// starting server
// connecting server to database ( mongoose is used)