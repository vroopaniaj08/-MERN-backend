const express = require('express')
const server = express()

server.get('/',(request,response)=>{
    response.send("Root directory")
})
server.get('/about',(request,response)=>{
    response.send("About directory")
})

server.listen(6969,()=>{
    console.log("server on 6969")
})