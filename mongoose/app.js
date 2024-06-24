const express =  require('express')
const server =  express()
const mongoose = require ('mongoose')
const userRouter = require('./route/user_r')
const postRouter = require('./route/post_r')
server.use(express.json())
const url = 'mongodb+srv://apoorvjain7222:3Ui2wCJ7rbSCtCmA@clusterback.fgglfns.mongodb.net/?retryWrites=true&w=majority&appName=Clusterback'
mongoose.connect(url).then(()=>console.log("connected")).catch((err)=>console.log(err.message))

server.use('/user',userRouter)
server.use('/post',postRouter)

server.listen(7000,()=>{
    console.log("server 7000")
})