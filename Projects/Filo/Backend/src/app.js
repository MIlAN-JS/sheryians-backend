const express = require("express")
const cors = require("cors")

const app = express()
const authRouter = require("./routes/authentication.route")
const memeRoute = require("./routes/meme.route")
app.use(cors())



app.use(express.json())


app.use("/api/auth" , authRouter);

app.use("/",authRouter);
app.use("/api" , memeRoute);









module.exports = app

