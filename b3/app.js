const express = require('express')
const server =  express()

//path argument
server.get('/home/:id',(request,response)=>{
    const data = request.params.id;
    console.log(data);
    response.send("this is a home directory");
})

//query argument
server.get('/about',(request,response)=>{
    const data1 = request.query.value1*1;
    const data2 = request.query.value2*1;
    console.log(data1+data2);
    response.send("this is a about directory");
})

server.listen(6969,()=>{
    console.log("server is running on port 6969")
})