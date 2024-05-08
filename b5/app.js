const express = require('express')
const server = express()
const routeStudent = require('./routers/students') 

server.use(express.json())
server.use('/student',routeStudent);


server.listen(6969,()=>{
    console.log("server is running on port 6969")
})