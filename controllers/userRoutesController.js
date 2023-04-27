const { request } = require('express')
const asyncHandler = require('../middleware/asyncHandler')
const User = require('../models/userModel')
const Question = require('../models/questionsModel')

const createUser = asyncHandler( async (req, res) => {
    console.log('in create user ', req.body)
    const dp = req.body.username.split(' ').map(w => w[0]).join('').toUpperCase()

    const {username, password} = req.body
    
    let user = await User.create({username, password, dp, score: 0})
    
    res.json([user])
})

const getUser = asyncHandler( async (req, res) => {
    console.log('in get user', req.body)
    const user = await User.find().where({username: req.body.username, password: req.body.password})

    res.json(user)
})

const getUsers = asyncHandler( async (req, res) => {
    const user = await User.find()
        
    res.json(user)
})

const getTopics = asyncHandler( async (req, res) => {
    const topics = ["javascript", 'history', 'football']
    
    res.json(JSON.stringify(topics))
})

const getQuestions = asyncHandler(async (req, res, next) => {
    console.log('in get questions', req.body.value)
    const questions = await Question.find().where({topic: req.body.value})
        
    console.log(questions)
    res.json(questions)
})

const addScore = asyncHandler(async (req, res, next) => {
    console.log('in addScore', req.body)
    const user = await User.findById(req.params.id)

    const score = Number(user.score) + Number(req.body.score)
    user = await User.findByIdAndUpdate(req.params.id, {score}, {new: true})
        
    console.log(user)
    res.json(user)
})

module.exports = {
    getUser,
    getUsers,
    getTopics,
    createUser,
    getQuestions,
    addScore
}