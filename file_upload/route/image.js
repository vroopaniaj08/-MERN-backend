const multer = require('multer')
const router = require('express').Router() 
const upload = multer({dest:'upload/'})
const fs = require('fs')
// const { response } = require('express')
const {imageUpload} = require('../models/index')


router.post('/upload',upload.single('image'),async(request,response)=>{
    try{
    const uploadImage = request.file;
    if(!uploadImage){
        response.status(400).json({status:false,msg:"file is not present"})
    }
    else{

        const data = fs.readFileSync(uploadImage.path)
        
        let udata = await imageUpload.create({
            name:request.body.name,
            image:data
        })
        if(udata){
            response.json({data:udata})
        }
        else{
            response.json({msg:"no image"})
        }
    }
}
    catch(err){
        response.json({msg:"error",error:err.message})
    }
})

router.get('/showImage/:name',async(req,res)=>{
    const udata = await imageUpload.findOne({
        where:{
            name:req.params.name
        }
    })
    try{
        if(udata){
            res.status(201).json({msg:"image",data:udata})
        }
        else{
            res.status(404).json({msg:"no image found"})
        }
    }
    catch(err){
        res.status(500).json({error:err.message,msg:"some error is there"})
    }
})

module.exports = router