const express = require('express')
const router  = express.Router()
const {Employee} = require('../models/index')

router.post('/save',async(request,response)=>{
    try{
        let emp = await Employee.create(request.body)
        if(emp){
            response.json({status:true,msg:"records saved"})
        }
        else{
            response.json({status:false,msg:"records not saved"})
        }
    }
    catch(err){
        response.json({error:err.message,status:false})
    }
})

router.get('/getdata',async(request,response)=>{
    try{
        let emp = await Employee.findAll()
        if(emp){
            response.json({status:true,msg:emp})
        }
        else{
            response.json({status:false,msg:"unsuccess"})
        }
    }
    catch(err){
        response.json({status:false,msg:"error"})
    }
})

router.put('/update/:id',async(request,response)=>{
    try{
        let req = request.params.id;
        let emp = await Employee.update(request.body,{
            where : {id:req}
        })
        if(emp){
            response.json({status:true,msg:"data successful"})
        }
        else{
            response.json({status:false,msg:"unsuccessful"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

router.delete('/delete_person/:id',async(request,response)=>{
    try{
        let req = request.params.id
        let emp = await Employee.destroy({
            where:{id:req}
        })
        if(emp){
            response.json({status:true,msg:"deleted successful"})
        }
        else{
            response.json({status:false,msg:"unsuccessful"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})
module.exports = router