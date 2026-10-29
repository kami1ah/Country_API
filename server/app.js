//importing express and cors and logger.js(a middleware)
const express = require('express')
const cors = require('cors')
const logger = require('./logger')

const countryRouter = require('./routers/countries')

const app = express()

app.use(cors())
app.use(logger)

app.use(express.json())
app.use('/countries', countryRouter)

//middleware that//

module.exports = app

// express.use(startingPath, middleware) -- so in this case app.use(cors()) = we are only passing the middleware cors//
// express.METHOD(exactPath, middleware) -- in this we are using a function(the method) //