const express = require("express")
const memeModel = require("../models/meme.model")

const memeRoute = express.Router()



memeRoute.post("/meme", async (req , res)=>{
    try {
        const {meme } = req.body
        const resMeme = await memeModel.create({meme : meme})

        res.status(201).json({
            message : "meme created success", 
            meme
        })
        
    } catch (error) {
        console.log("meme cannot be created backend", error)
        
    }
})

memeRoute.get("/meme", async (req , res)=>{
    try {

        const memes = await memeModel.find()

        res.status(200).json({
            message : "memes found",
            memes
        })
        
    } catch (error) {
        res.send("cannot get meme")
        
    }
})


module.exports = memeRoute

