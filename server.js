require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const cors = require('cors')

// APP INIT
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTES
app.use('/quizit/api/v1/users', require('./routes/userRoutes'))
// app.use('/quizit/api/v1/test', require('./routes/textRoutes'))

// ERROR HANDLER MIDDLEWARE
const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)

// SERVER INIT
const name = 'aubrey nyasulu'

connectDB().once('open', (err) => {
    if(err) throw new Error(err) 
    console.log(`Server INIT  a success`)
    app.listen(process.env.PORT, (error) => {
        if(error) throw new Error(error) 
        console.log(`App INIT a success, App is live on PORT ${process.env.PORT}`)
    })
})
