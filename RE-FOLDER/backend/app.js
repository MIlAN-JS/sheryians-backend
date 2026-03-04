const express = require("express")
const cors = require("cors")




const app = express()

app.use(cors({
    origin : "http://localhost:5174",
    credentials : true
}))


app.get("/api/get-user",(req , res)=>{
    res.json({
        user : "user1"
    })

})




app.listen(5000 , ()=>{
    console.log("server is running on port 3000")
})