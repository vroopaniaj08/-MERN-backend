const express = require('express');
const server =  express();
server.set('view engine','ejs')

server.get('/',(request,response)=>{
    response.send("hello all from root directory")
})

server.get('/home',(request,response)=>{
    const name = "Apoorv jain"
    response.render('home',{stname:name})
})

server.get('/about',(request,response)=>{
    const all =  {name:"apoorvjain", age:80,gender:"male"}
    response.render('about',{data:all})
})

server.listen(6969,()=>{
    console.log("hello all")
})