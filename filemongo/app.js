const express = require('express')
const server = express()
const multer = require('multer')
const {MongoClient} = require('mongodb')

server.use(express.json())
server.use(express.urlencoded())

const getDb  =async()=>{
    const url  = 'mongodb://localhost:27017'
    const client = new MongoClient(url)
    const dbname  = 'demo'
    await client.connect()
    const db = client.db(dbname)
    return {db,client};
}

server.post('/saveImage',multer.single('image'),async(request,response)=>{
    
})

server.listen(7000,()=>{
    console.log("server in running on the port address 7000")
})