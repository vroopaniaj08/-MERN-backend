const express =  require('express')
const server = express()
const routerStudent = require('./route/student_apis')



server.use(express.json())
server.use('/student',routerStudent)


server.listen(7000,()=>{
    // const resutl = getDb()
    // console.log(resutl)
    console.log("server is running the port on 7000")
})



// server.post('/save',async(req,res)=>{
//     const {db,client} = await getDb();
//     // console.log(db)
//     const ob = req.body
//     const data = await db.collection('student').insertOne(ob);
//     console.log(data)
//     res.json({status:true,msg:"saved"})
// })

// server.get('/list/:roll',async(req,res)=>{
//     const {db,client} = await getDb();
//     const roll = req.params.roll *1;
//     const data = await db.collection('student').find({rollno:roll}).toArray()

//     console.log(data)
//     // if(data)
// })