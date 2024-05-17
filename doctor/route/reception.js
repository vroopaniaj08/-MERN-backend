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
                let ele = await Receptionlist.create({name,phone,city,user_id:udata.id})
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



module.exports = router