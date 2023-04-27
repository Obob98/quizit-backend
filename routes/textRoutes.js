const router = require('express').Router()

router.route('/message').post((req, res) => {
    const message = {id: Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 10000), userid: 1, body: req.body.message}

    res.json(message)
})

module.exports = router 