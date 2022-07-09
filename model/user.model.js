const mongoose = require('mongoose')


const schemaUser =new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:true
    }
},{
    collection:"Practice24 User"
})

const User = mongoose.model('User',schemaUser)

module.exports = User