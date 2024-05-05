const express = require('express')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors());
let arr = [
    {"name":"apoorv jain","username":"apoorvjain7222@gmail.com","password":"123456"},
    {"name":"akshit jain","username":"a@gmail.com","password":"123456"},
    {"name":"seema jain","username":"aj@gmail.com","password":"123456"},
    {"name":"parag jain","username":"aj7222@gmail.com","password":"123456"}
]
server.post('/signup',(request,response)=>{
    let obj = request.body;
    console.log(obj);
    arr.push(obj);
    response.json({status:true,msg:"signup success"})
})

server.post('/',(request,response)=>{
    let data = request.body
    console.log(data)
    let result = arr.filter(ob=>ob.username == data.username && ob.password == data.password)
    if(result.length>=1){
        response.json({status:true,msg:"login successful",data:result})
    }
    else{
        response.json({status:false,msg:"login unsuccessful"})
    }
})

server.listen(6969,()=>{
    console.log("server is running on 6969")
})