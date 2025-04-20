const express = require('express')

const app = express()

app.get('/',()=>{
    return 'get request received'
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})