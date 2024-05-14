const router = require('express').Router()
// const { where } = require('sequelize')
// const { response } = require('express')
// const { request } = require('express')
const {User} = require('../models/index')

router.get('/getdata',async(request,response)=>{
    try{
        let udata = await User.findAll()
        if(udata){
            response.json({status:true,data:udata,msg:"successful"})
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