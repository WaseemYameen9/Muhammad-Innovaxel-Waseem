const express = require("express")
const bodyParser = require("body-parser")
const urlRouter = require('./router/UrlRouter')

const app = express()

app.use(urlRouter)

app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000")
})