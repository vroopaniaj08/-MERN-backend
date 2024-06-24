const express = require('express')
const router = express.Router()
const Post = require('../model/posts')

// function generatePassword() {
//     // Define the character sets
//     const digits = '0123456789';
//     let password = '';
  
//     // Generate 6 random digits
//     for (let i = 0; i < 6; i++) {
//       password += digits.charAt(Math.floor(Math.random() * digits.length));
//     }
  
//     return password.toString();
//   }

router.post('/save',async(request,response)=>{
    try{
        const {title,content,author_id} = request.body
        console.log(author_id)
        const post = new Post ({title,content,author:author_id})
        await post.save()
        response.status(200).json({msg:"record saved"})
    }
    catch(err){
        response.status(500).json({msg:"record not saved",error:err.message,status:false})
    }
})

router.get('/list',async(request,response)=>{
    try{
        const data = await Post.find();
        if(data){
            response.status(200).json({status:true,data,msg:"done successfully"})
        }
        else{
            response.status(404).json({status:false})
        }
    }
    catch(err){
        response.status(500).json({status:false,error:err})

    }
})

module.exports = router