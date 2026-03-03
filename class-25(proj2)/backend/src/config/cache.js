// to use reddis we should download ioredis

const Redis = require("ioredis").default


// reddis connection is build
const redis =new Redis({
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    password : process.env.REDIS_PASSWORD
})


// if connects run 
redis.on("connect",()=>{
    console.log("reddis connected")

})


redis.on("error",(error)=>{
    console.log("cannot connect with redis ", error)
})

module.exports = redis