const router = require('express').Router()
const { where } = require('sequelize')
// const { where } = require('sequelize')
// const { response } = require('express')
// const { request } = require('express')
const { User, Doctor, Patient, Receptionlist } = require('../models/index')
const user = require('../models/user')

router.post('/save', async (request, response) => {
    try {
        const { username, password, name, phone, Specialization } = request.body

        const type = request.type
        // console.log(type)
        if (type == 'admin') {
            let udata = await User.create({ username, password, type: "doctor" })

            if (udata) {
                let ele = await Doctor.create({ name, phone, Specialization, user_id: udata.id })
                response.json({ status: true, msg: "saved", data: udata })
            }
            else {
                response.json({ status: false, msg: "not saved" })
            }
        }
        else{
            response.json({status:false,msg:"unauthorised access"})
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})


router.get('/getdata_doctor', async (request, response) => {
    try {
        let udata = await Doctor.findAll({
            include:{
                model:User,
                as:"user_info",
                attributes:['username','password']
            }
        })
        if (udata) {
            response.json({ status: true, data: udata, msg: "successful" })
        }
        else {
            response.json({ status: false, msg: "unsuccessful" })
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})

router.put('/update/:id', async (request, response) => {
    try {
        let uid = request.params.id
        // console.log(uid)
        let udata = await User.update(request.body, {
            where: { id: uid }
        })
        // console.log(1)
        // console.log(udata)
        if (udata[0] > 0) {
            let ele = await Doctor.update(request.body, {
                where: { user_id: uid }
            })
            response.json({ status: true, data: ele, msg: "successful" })
        }
        else {
            response.json({ status: false, msg: "unsuccessful" })
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        let uid = request.params.id
        let udata = await User.destroy({
            where: { id: uid }
        })
        if (udata) {
            let ele = await Doctor.destroy({
                where: { user_id: uid }
            })
            response.json({ status: true, data: ele, msg: "successful" })
        }
        else {
            response.json({ status: false, msg: "unsuccessful" })
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})

router.get('/getdata_patient', async (request, response) => {
    try {
        let udata = await Patient.findAll()
        if (udata) {
            response.json({ status: true, data: udata, msg: "successful" })
        }
        else {
            response.json({ status: false, msg: "unsuccessful" })
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})

router.get('/get_reception', async (request, response) => {
    try {
        let udata = await Receptionlist.findAll()
        if (udata) {
            response.json({ status: true, data: udata, msg: "successful" })
        }
        else {
            response.json({ status: true, msg: "unsuccessful" })
        }
    }
    catch (err) {
        response.json({ status: false, error: err.message })
    }
})

module.exports = router



// router.put('/update_reception/:id',async(request,response)=>{
    //     try{
        //         let uid = request.params.id
        //         let udata = await User.update(request.body,{
            //             where:{
                //                 id : uid
                //             }
                //         })
                //         console.log(udata)
                //         if(udata[0]>0){
//             let ele = await Receptionlist.update(request.body,{
    //                 where:{
        //                     user_id : uid
        //                 }
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
                // router.post('/signin', async (request, response) => {
                //     try {
                //         // let {username,password}  = request.body
                //         // let udata = await User.findOne({username,password})
                //         let obj = request.body
                //         let udata = await User.findOne({ where: { username: obj.username, password: obj.password } })
                //         console.log(udata)
                //         if (udata) {
                //             response.json({ status: true, data: udata, msg: "signin successsful" })
                //         }
                //         else {
                //             response.json({ status: false, msg: "signin unsuccesssful" })
                //         }
                //     } catch (err) {
                //         response.json({ status: false, error: err.message })
                //     }
                
                // })