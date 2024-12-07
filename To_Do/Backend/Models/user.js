const mongoose = require('mongoose')

const userTasks = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    tasks: [userTasks]
})

const User = mongoose.model('User' , UserSchema)
module.exports = User

