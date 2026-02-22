const express = require("express");
const cookieParser = require("cookie-parser")


const app = express();
const cors = require("cors")

const authRouter = require("./routes/authentication.routes")
const postRouter = require("./routes/post.routes")
const multer = require("multer");
const followerRouter = require("./routes/followers.routes");


const upload = multer({storage : multer.memoryStorage()})

// `install multer`
// require multer
// define which storage to use to store the file
// use upload as middle ware
// file  is received in the req.file







app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true, 
    origin : "http://localhost:5173"
}))
app.use("/api/authentication", authRouter)
app.use("/api/posts", upload.single("document") , postRouter)
app.use("/api/", followerRouter)















module.exports= app;