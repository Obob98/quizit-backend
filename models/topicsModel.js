const mongoose = require('mongoose')

const topicsSchema = new mongoose.Schema({
    topics: {
        type: Array,
        required: true
    }
})

const topicsModel = mongoose.model('topic', topicsSchema)

module.exports = topicsModel