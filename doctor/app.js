const express = require('express')
const server = express()
const doctorrouter = require('./route/userroutes')
const patientrouter = require('./route/patient')
const adminrouter = require('./route/admin')

server.use(express.json())

server.use('/user',doctorrouter)
server.use('/patient',patientrouter)
server.use('/admin',adminrouter)






server.listen(9696,()=>{
    console.log(
        "server is running on port 9696"
    )
})