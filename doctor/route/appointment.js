const { response } = require('express')

const router = require('express').Router()

router.get('/get_appointment',async(request,response)=>{
    try{
        let type = request.type
        console.log(type);
        if(type == "docter"){
            let udata = await ReceptionList.findAll({
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
})