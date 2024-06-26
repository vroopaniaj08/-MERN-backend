const router = require('express').Router()
const { Op } = require('sequelize')
// const { where } = require('sequelize')
// const { response } = require('express')
// const { request } = require('express')
const {User,Patient} = require('../models/index')

router.post('/save',async(request,response)=>{
    try{
        const {username,password,name,phone,dob,gender,city} = request.body

        const type = request.type
        if(type == 'reception'){

            let udata = await User.create({username, password, type:"patient"})
    
            if(udata){
                let ele = await Patient.create({name,phone,dob,gender,city,user_id:udata.id,reception_id:request.user_id})
                response.json({status:true,msg:"saved",data:ele})
            }
            else{
                response.json({status:false,msg:"not saved"})
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

router.get('/get_patient',async(request,response)=>{
    try{
        const type = request.type
        if(type == 'reception'){
            let udata = await Patient.findAll({
                where:{reception_id:request.user_id}
            })
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

router.put('/update/:id',async(request,response)=>{
    try{
        let uid = request.params.id
        console.log(uid)
        const type = request.type
        if(type == "reception"){
            let udata = await Patient.update(request.body,{
                where:{
                    [Op.and]:[{reception_id:request.user_id},{id:uid}]
                }
            })
            // console.log(1)
            console.log(udata)
            if(udata[0]>0){
                response.json({status:true,data:udata,msg:"successful"})
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

module.exports = router

// router.delete('/delete/:id',async(request,response)=>{
    //     try{
        //         let uid = request.params.id
        //         let udata = await User.destroy({
            //             where:{id:uid}
            //         })
            //         if(udata){
                //             let ele = await Patient.destroy({
                    //                 where:{user_id:uid}
                    //             })
//             response.json({status:true,data:ele,msg:"successful"})
//         }
//         else{
    //             response.json({status:false,msg:"unsuccessful"})
    //         }
    //     }
    //     catch(err){
        //         response.json({status:false,error:err.message})
        //     }
        // })



        // router.post('/signin',async(request,response)=>{
        //     try{
        //         // let {username,password}  = request.body
        //         // let udata = await User.findOne({username,password})
        //         let obj =  request.body
        //         let udata = await User.findOne({where:{username:obj.username,password:obj.password}})
        //         console.log(udata)
        //         if(udata){
        //             response.json({status:true,data:udata,msg:"signin successsful"})
        //         }
        //         else{
        //             response.json({status:false,msg:"signin unsuccesssful"})
        //         }
        //     }catch (err){
        //         response.json({status:false,error:err.message})
        //     }
        
        // })