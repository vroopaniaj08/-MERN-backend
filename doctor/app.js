const express = require('express')
const server = express()
const userrouter = require('./route/userroutes')


server.use(express.json())
server.use('/user',userrouter)







server.listen(9696,()=>{
    console.log(
        "server is running on port 9696"
    )
})