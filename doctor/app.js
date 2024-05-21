const express = require('express')
const server = express()
const dotenv = require('dotenv')
const authRouter = require('./route/authRouter')

server.use(express.json())
dotenv.config()


server.use('/auth',authRouter)


server.listen(9696,()=>{
    console.log(
        "server is running on  9696"
    )
})