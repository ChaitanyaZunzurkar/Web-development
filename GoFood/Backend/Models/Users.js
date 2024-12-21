const mongoose = require('mongoose')

const foodItemsInCart = new mongoose.Schema({
    img: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    OrderCount: {
        type:Number,
        required:true
    }
})

// const foodItemsBuyed = new mongoose.Schema({
//     buyed : {
//         type: String
//     }
// })

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    foodItemsInCart:[foodItemsInCart],
    // foodItemBuyed: [foodItemsBuyed]
})

module.exports = mongoose.model('users' , UserSchema);