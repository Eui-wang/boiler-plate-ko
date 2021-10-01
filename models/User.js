const mongoose = require('mongoose')

const userChema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    emali:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
})
const User = mongoose.model('User', userChema)
module.exports = { User }