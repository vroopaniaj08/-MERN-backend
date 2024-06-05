const express = require('express');
const getDb = require('../Db');
const router = express.Router();
//1
router.get('/list',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find().toArray()
        if(data.length>0){
            response.status(200).json({msg:"data found",data:data})
        }
        else{
            response.status(404).json({msg:"data not found"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//2
router.post('/save',async(request,response)=>{
    const {db,client} = await getDb()
    try{
        const ob = request.body
        const data = await db.collection('student').insertOne(ob)
        // console.log(data)
        if(data.acknowledged){
            response.status(200).json({msg:"done"})
        }
        else{
            response.status(404).json({msg:"data is not inserted"});
        }
    }
    catch(err){
        response.status(500).json({error:err.message});
    }
    finally{
        client.close();
    }
})
//3
router.get('/list/:roll',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({rollno:request.params.roll*1}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//4
router.post('/saveall',async(request,response)=>{
    const {db,client} = await getDb()
    try{
        const ob = request.body
        const data = await db.collection('student').insertMany(ob);
        console.log(data)
        if(data.acknowledged){
            response.status(200).json({addItems:data.insertedCount,msg:"successful"})
        }
        else{
            response.status(404).json({msg:"unsuccessful"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//5
router.put('/update/:roll',async(request,response)=>{
    const {db,client} = await getDb()
    try{
        const roll = request.params.roll*1;
        const ob = request.body;
        const data = await db.collection('student').updateOne({rollno:roll},{$set:ob})
        console.log(data)
        if(data.acknowledged && data.modifiedCount){
            response.status(200).json({msg:"successful"})
        }
        else{
            response.status(404).json({msg:"unsuccessful"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//6
router.delete('/delete',async(request,response)=>{
    const {db,client} = await getDb()
    try{
        const ob = request.body;
        const data = await db.collection('student').deleteOne(ob);
        console.log(data)
        if(data.acknowledged && data.deletedCount){
            response.status(200).json({msg:"successful",deletedItems:data.deletedCount})
        }
        else{
            response.status(404).json({msg:"unsuccessful"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
})
//7
router.get('/Gage/:age',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({age:{$gt:request.params.age*1}}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//8
router.get('/Lage/:age',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({age:{$lt:request.params.age*1}}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//9
router.get('/Nage/:age',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({age:{$ne:request.params.age*1}}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//10
router.get('/listOr/:age/:mark',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({$or:[{age:{$gt:request.params.age*1}},{mark:{$gt:request.params.mark*1}}]}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
//11
router.get('/listAnd/:age/:mark',async(request,response)=>{
    const {db,client} = await getDb();
    try{
        const data = await db.collection('student').find({$and:[{age:{$gt:request.params.age*1}},{mark:{$gt:request.params.mark*1}}]}).toArray()
        if(data.length>0){
            response.status(200).json({data:data})
        }
        else{
            response.status(404).json({msg:"this roll no is not present"})
        }
    }
    catch(err){
        response.status(500).json({error:err.message})
    }
    finally{
        client.close();
    }
})
module.exports = router