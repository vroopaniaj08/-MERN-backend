const jwt = require('jsonwebtoken')

class JWT{
    generateAccessToken(userid,type){
        return jwt.sign({user_id:userid,user_type:type},process.env.TOKEN_SECRET,{expiresIn:'1d'})
    }

    authenticationToken(request,callback){
        const authHeader = request.headers['authorization']
        // console.log(authHeader)
        const token = authHeader && authHeader.split(' ')[1]
        // console.log(token)
        if(token == null){
            callback({status:false,msg:"token missing"})
        }
        else{
            jwt.verify(token,process.env.TOKEN_SECRET,(err,token_data)=>{
                if(err){
                    callback({status:false,msg:"invalid token",error:err.message})
                }
                else{
                    request.user_id = token_data.user_id
                    request.type = token_data.user_type 
                    // console.log(request.type)
                    callback({status:true})
                }
            })
        }
        // callback({status:true})
    }
}

module.exports = new JWT()