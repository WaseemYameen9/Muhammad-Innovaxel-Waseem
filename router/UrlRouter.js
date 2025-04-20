const UrlController = require('../controller/UrlController')
const express = require("express")
const router = express.Router()

router.post('/getShorterUrl',UrlController.CreateShorterUrl)


module.exports = router