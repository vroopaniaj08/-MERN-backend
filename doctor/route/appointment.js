const { response, request } = require('express')
const {PatientAppointment} = require('../models/index')
const router = require('express').Router()


router.post('/book_appointment',async(request,response)=>{
    try{
        let type = request.type
        console.log(type)
        console.log(request.body)
        if(type == 'doctor'){
            console.log(request.body)
            const {date,description,status} = request.body
            let udata = await PatientAppointment.create({date,description,status,doctor_id:request.user_id})
            console.log(udata)
            if(udata){
                response.status(201).json({status:true,msg:"successful",data:udata})
            }
            else{
                response.status(404).json({status:false,msg:"unsuccessfull"})
            }
        }
        else{
            response.json({status:false,msg:"unauthorized"})
        }
    }
    catch(err){
        response.status(500).json({status:false,msg:"error occurred",error:err.message})
    }
})



router.get('/get_appointment',async(request,response)=>{
    try{
        let type = request.type
        console.log(type);
        if(type == "doctor"){
            let udata = await PatientAppointment.findAll({
                where:{
                    doctor_id:request.user_id
                }
            })
            if(udata){
                response.json({status:true,data:udata,msg:"successful"})
            }
            else{
                response.json({status:false,msg:"unsuccessful"})
            }
        }
        else{
            response.json({status:false,msg:"authorized access"})
        }
    }
    catch(err){
        response.json({status:false,error:err.message})
    }
})

module.exports = router