const express = require('express')
const server = express();

const router = require('./routes/employee_route')
const d_router = require('./routes/department_route')

server.use(express.json())
server.use('/employee',router)

server.use('/dept',d_router)

server.listen(6969,()=>{
    console.log("server is running on the 6969 port")
})