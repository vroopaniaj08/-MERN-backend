const express = require('express')
const router = express.Router()
const obj = require('../modal/student')
// let arr =  [
//     {name:"apoorv jain",roll:101,age:20},
//     {name:"akshit jain",roll:102,age:16},
//     {name:"seema jain",roll:103,age:45},
//     {name:"parag jain",roll:104,age:49},
// ]

router.get('/list',(request,response)=>{
    // response.json({data:arr})
    obj.list(result=>response.json(result))
})


router.get('/list/:roll',(request,response)=>{
    const data = request.params.roll
    // const result = arr.find(ob=>ob.roll == data);
    // response.json({data:result})
    obj.specific_list(data,result=>response.json(result))
})

router.post('/save',(request,response)=>{
    const data = request.body
    obj.element_save(data,result=>response.json(result))
})

router.put('/update',(request,response)=>{
    const data = request.body
    obj.update_element(data,result=>response.json(result))
})

router.delete('/delete',(request,response)=>{
    const data = request.query.id
    obj.delete_element(data,result=>response.json(result))
})

module.exports = router