const express = require('express')
const server = express()
const router = require('./route/auth')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

server.use(express.json())


const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:"hello all to the code",
            version:'1.0.0',
            description:'hello all'
        },
        servers:[
            {
                url:'http://localhost:7000/',
            },
        ],
    },
    apis:['./route/*.js'],
}

const specs = swaggerJsdoc(options)
server.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs))

server.use('/auth',router)

server.listen(7000,()=>{
    console.log("server is running on 7000 port")
})