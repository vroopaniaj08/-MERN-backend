const {MongoClient} = require('mongodb')

const getDb  =async()=>{
    const url  = 'mongodb://localhost:27017'
    const client = new MongoClient(url)
    const dbname  = 'demo'
    await client.connect()
    const db = client.db(dbname)
    return {db,client};
}

module.exports = getDb;