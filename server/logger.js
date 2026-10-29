//this a MIDDLEWARE, it is the code between the request and the response
/*
This logs to us the http methods we are using the endpoints of the URL that the requests are coming in. 
Useful for debugging but middleware is a piece of code that gets executed between server between the request and client sending request
*/

const logger = (req, res, next) => {
    console.log(req.method, req.originalUrl)
    next()
}

//this is exported to app.js
module.exports = logger