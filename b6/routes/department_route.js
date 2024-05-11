const express = require('express')
const router = express.Router()

const {Department} = require('../models/index')

router.post('/save',async(request,response)=>{
    try{
        let dept = await Department.create(request.body);
        if(dept){
            response.json({status:true,msg:"saved"})
        }
        else{
            response.json({status:false,msg:"not saved"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

router.get('/show_dept',async(request,response)=>{
    try{
        let dept = await Department.findAll();
        if(dept){
            response.json({status:true,data:dept})
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