const mysql =require('mysql2')

function getConnection(){
    const conn = mysql.createConnection({
        host:"localhost",
        port:3306,
        database:"demodb",
        user:"root",
        password:""
    })
    return conn;
}

module.exports = getConnection