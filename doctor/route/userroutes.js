const router = require('express').Router()
const {User,Doctor} = require('../models/index')

router.post('/save',async(request,response)=>{
    try{
        const {username,password,type,name,phone,Specialization} = request.body
        let udata = await User.create({username, password, type})

        if(udata){
            let ele = await Doctor.create({name,phone,Specialization,user_id:udata.id})
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

module.exports = router