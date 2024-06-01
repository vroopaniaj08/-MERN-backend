const express = require('express');
const server = express();
const imageRouter = require('./route/image')
const cors =  require('cors')
server.use(cors('*'))
// server.use(express.urlencoded())
server.use('/image',imageRouter)

server.listen(6969,()=>{
    console.log("server is running on port 6969")
})