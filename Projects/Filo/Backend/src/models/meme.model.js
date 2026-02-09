const mongoose = require("mongoose")



const memeSchema = new mongoose.Schema({
    meme : String
})


const memeModel = mongoose.model("meme", memeSchema)

module.exports = memeModel