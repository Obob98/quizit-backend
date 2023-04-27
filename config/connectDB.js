const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_CONN_STR)
    return mongoose.connection
}

module.exports = connectDB