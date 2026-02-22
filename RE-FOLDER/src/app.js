// create a server 
// config the server 
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
// take multer
const multer = require("multer")
// set storage  in upload
const upload = multer({storage : multer.memoryStorage()})
// use as a middleware


app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter )

app.use("/api/posts" ,upload.single("image") ,postRouter)




module.exports = app;