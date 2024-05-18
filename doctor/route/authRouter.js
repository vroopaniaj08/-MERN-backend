const router = require('express').Router()
// const { where } = require('sequelize')
// const { response } = require('express')
// const { request } = require('express')
const {User} = require('../models/index')
const doctorrouter = require('./userroutes')
const receptionrouter = require('./reception')
const adminrouter = require('./admin')
const patientrouter = require('./patient')

const jwtObj = require('../config/jwtManager')

router.post('/signin',async(request,response)=>{
    try{
        // let {username,password}  = request.body
        // let udata = await User.findOne({username,password})
        let obj =  request.body
        let udata = await User.findOne({where:{username:obj.username,password:obj.password}})
        console.log(udata)
        if(udata){
            const token = jwtObj.generateAccessToken(udata.id,udata.type)
            response.json({status:true,data:udata,msg:"signin successsful",token})
        }
        else{
            response.json({status:false,msg:"signin unsuccesssful"})
        }
    }catch (err){
        response.json({status:false,error:err.message})
    }

})

router.use((request,response,next)=>{
    jwtObj.authenticationToken(request,(result)=>{
        if(result.status){
            next()
        }
        else{
            response.json(result)
        }
    })
})

router.use('/doctor',doctorrouter)
router.use('/reception',receptionrouter)
router.use('/admin',adminrouter)
router.use('/patient',patientrouter)

module.exports = router