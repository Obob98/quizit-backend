const errorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) =>{
    let error = {...err}
    error.message = err.message

    if(err.name === 'CastError'){
        const message = 'resource not found'
        error = new errorResponse(message, 404)
    }
    if(err.code === 11000){
        const message = 'no duplicate username(s) or key(s) are allowed'
        error = new errorResponse(message, 401)
    }
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(era => era.message).join(',')
        error = new errorResponse(message, 401)
    }

    res.status(error.statusCode || 500).json(
        {error: error.message}
    )
}

module.exports = errorHandler