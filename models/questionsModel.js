const mongoose = require('mongoose')

const questionsSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    qustion: {
        type: String,
        required: true,
    } ,
    answer: {
        type: Array,
        required: true,
    },
})

const qustionsModel = mongoose.model('question', questionsSchema)

module.exports = qustionsModel