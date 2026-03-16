import express from "express"
import {createServer} from "http"
import { Server } from "socket.io";


const app = express()

const httpServer = createServer(app)
const io = new Server(httpServer)



// socket io 
// realtime connection build garx ( dui wa dui vanda badi lai eutai server ma real time  ma connect garxa)

// io --> server
// emit --> euta event fire garnu message sngai 
// on  --> event listener 
// socket --> 



export default io;