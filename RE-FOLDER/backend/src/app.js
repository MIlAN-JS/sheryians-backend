const express = require("express")
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const errorHandler = require("./middleware/error.middleware")
const app = express()

app.use(express.json())

app.use("/auth", authRouter)


//error check 

app.use(errorHandler)

module.exports = app