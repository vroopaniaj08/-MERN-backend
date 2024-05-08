const { escape } = require('mysql2');
const dbcon = require('../dbcon')

class dbmodal{
    list(callback){
        const con = dbcon()
        con.query("select * from student",(err,records)=>{
            con.end();
            if(err){
                 callback({data:null,error:err.message})
            }
            else{
                callback({data:records})
            }
        })
    }
    specific_list(roll,callback){
        const con = dbcon()
        con.query(`select * from student where id=${roll}`,(err,records)=>{
            con.end();
            if(err){
                callback({data:null,error:err.message})
            }
            else{
                callback({data:records})
            }
        })
    }
    element_save(obj,callback){
        const con = dbcon()
        con.query(`insert into student values('${obj.name}',${obj.id},'${obj.username}','${obj.password}')`,(err)=>{
            con.end()
            if(err){
                callback({error:err.message,msg:"not saved"})
            }
            else{
                callback({msg:"saved"})
            }
        })
    }
    update_element(obj,callback){
        const con = dbcon()
        con.query(`update student set name = '${obj.name}', username = '${obj.username}', password = '${obj.password}'  where id = ${obj.id}`,(err)=>{
            con.end();
            if(err){
                callback({error:err.message,msg:"updation unsuccessful"})
            }
            else{
                callback({msg:"updation successful"})
            }
        })
    }
    delete_element(id,callback){
        const con = dbcon()
        con.query(`delete from student where id = ${id}`,(err)=>{
            con.end();
            if(err){
                callback({error:err.message,msg:"deletion unsuccessful"})
            }
            else{
                callback({msg:"deletion successful"})
            }
        })
    }
}

module.exports = new dbmodal()