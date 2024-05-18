// const { response } = require('express')

const express = require('express')
const router = express.Router()
// const patient = require('../models/patient');
// const receptionlist = require('../models/receptionlist');
const {User,Receptionlist} = require('../models/index');
// const router = require('./userroutes');

router.post('/save_reception',async(request,response)=>{
    try{
        let {username,password,name,phone,city} = request.body
        const type = request.type
        // console.log(type)
        if(type == "doctor"){
            let udata = await User.create({username,password,type:"reception"});
            if(udata){
                let ele = await Receptionlist.create({name,phone,city,user_id:udata.id,doctor_id:request.user_id})
                response.json({status:true,data:udata,msg:"succesful"})
            }
            else{
                response.json({status:false,msg:"unsuccessful"})
            }
        }
        else{
            response.json({status:false,msg:"unauthorized access"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

router.get('/get_reception',async(request,response)=>{
    try{
        const type = request.type
        if(type == 'doctor'){
            let udata = await Receptionlist.findAll({
                where:{doctor_id:request.user_id},
                include:{
                    model:User,
                    as:"user_info",
                    attributes:['username','password']
                },
                // include:{
                //     model:Doctor,
                //     as:"doctor_info",
                //     attributes:['name','phone','Specialization']
                // }
            })
            if(udata){
                response.json({status:true,data:udata})
            }
            else{
                response.json({status:false,msg:"unsuccessful"})
            }
        }
        else{
            response.json({status:false,msg:"unauthorized access"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

router.put('/update',async(request,response)=>{
    try{
        const type = request.type
        console.log(type)
        console.log(request.user_id)
        if(type == 'reception'){
            let udata = await Receptionlist.update(request.body,{
                where:{user_id:request.user_id}
            })
            console.log(udata)
            if(udata){
                response.json({status:true,data:udata})
            }
            else{
                response.json({status:false,msg:"data not found"})
            }
        }
        else{
            response.json({status:false,msg:"unauthorized access"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

module.exports = router