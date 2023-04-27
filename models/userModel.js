const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'user name arleady in use']
    },
    password: {
        type: String,
        required: true
    },
    dp: {
        type: String,
    },
    score: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel