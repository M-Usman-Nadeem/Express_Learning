const express = require('express')
const app = express()
const routes = require('./route')
const middleware = require('./middleware')
// app.use(middleware)//when we do this we are using that middleware on all routes mean globally 
//here we are applying a middleware to group of routes 
app.use(routes)
const router = require('./router')
app.use('/users', router)
const expressRouter = express.Router()
expressRouter.use(middleware)
expressRouter.get('/data', (req, res, next) => {
    res.end('you are loged in ')

})
expressRouter.get('/newData', (req, res, next) => {
    res.end('you are loged in on newData route')
})
app.use('', expressRouter)

app.all("*", (req, res, next) => {
    res.end('This Route is not available')
})
const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log('server running ' + port)
})