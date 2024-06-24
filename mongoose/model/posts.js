const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    // content: Number ,
    // password: String,
    content: {
        type:String,
        required:true,
        // unique:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post