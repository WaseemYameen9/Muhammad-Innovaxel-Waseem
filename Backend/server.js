const express = require("express")
const bodyParser = require("body-parser")
const urlRouter = require('./router/UrlRouter')
const db = require('./services/db')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(
    cors({
      origin: function (origin, callback) {
        return callback(null, true);
      },
      optionsSuccessStatus: 200,
      credentials: false,
    })
  );

//router
app.use(urlRouter)

app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000")
})