const router = require('express').Router()
const { getUser, getUsers, getTopics, createUser, getQuestions, addScore } = require ('../controllers/userRoutesController')

router.route('/getuser').post(getUser)

router.route('/createuser').post(createUser)

router.route('/getusers').get(getUsers)

router.route('/gettopics').get(getTopics)

router.route('/getquestions').post(getQuestions)

router.route('/addScore/:id').put(addScore)


module.exports = router