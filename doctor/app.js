const express = require('express')
const server = express()
const patientrouter = require('./route/patient')
const adminrouter = require('./route/admin')
const dotenv = require('dotenv')
const authRouter = require('./route/authRouter')



server.use(express.json())

server.use('/patient',patientrouter)
server.use('/admin',adminrouter)
server.use('/auth',authRouter)

dotenv.config()






server.listen(9696,()=>{
    console.log(
        "server is running on port 9696"
    )
})