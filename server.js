const express = require("express")
const bodyParser = require("body-parser")
const urlRouter = require('./router/UrlRouter')
const db = require('./services/db')

const app = express()
app.use(bodyParser)

//router
app.use(urlRouter)

app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000")
})